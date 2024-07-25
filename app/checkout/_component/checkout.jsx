"use client";
import { useUser } from "@clerk/nextjs";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useContext, useState } from "react";
import { CartContext } from "../../_context/CartContext";
import { deleteCart } from "../../_utils/cartEndPoint";
import { createOrder } from "../../_utils/orderEndPoint";
const CheckoutForm = ({amount}) => {
  const { cart, setCart } = useContext(CartContext);
  const {user}= useUser();
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);

  const handleError = (error) => {
    setLoading(false);
    setErrorMessage(error.message);
  }
  
  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();
    
    if (!stripe) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
   
    setLoading(true);
    createOrder_();
    sendEmail();
    // Trigger form validation and wallet collection
    const {error: submitError} = await elements.submit();
    if (submitError) {
      handleError(submitError);
      return;
    }

    // Create the PaymentIntent and obtain clientSecret
    const res = await fetch("/api/create-intent", {
      method: "POST",
      body: JSON.stringify({amount: amount}),
    });

    const {client_secret: clientSecret} = await res.json();

    // Confirm the PaymentIntent using the details collected by the Payment Element
    const {error} = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: "http://localhost:3000/payment-confirm?amount=" + amount.amount ,
      },
    });

    if (error) {
      // This point is only reached if there's an immediate error when
      // confirming the payment. Show the error to your customer (for example, payment details incomplete)
      handleError(error);
    } else {
      // Your customer is redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer is redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };
  const createOrder_= ()=>{
    let productIds = [];
    cart?.forEach((item)=>{
      productIds.push(item?.product[0]?.id);
    });
    const data_ = {
      data:{
        email:user.primaryEmailAddress.emailAddress,
        userName:user.fullName,
        amount,
        products:productIds
      }
    }
    console.log(data_);
  createOrder(data_).then((res)=>{
   if(res) {
    cart?.forEach((item)=>{
      deleteCart(item?.id).then((res)=>{
        console.log(res);
      }).catch(error=>alert("something went wrong in deleting cart"))
    })
    setCart([]);
    
   }
    }).catch(err=>alert(`something went wrong in creating order${err}`))
  }
  const sendEmail=async()=>{
   const res = await fetch("/api/send-email", {
    method: "POST",
    body: JSON.stringify({
      amount: amount,
      email: user.primaryEmailAddress.emailAddress,
      fullName: user.fullName,
     
    })
   })
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="mx-20 md:mx-[320px] mt-12">
        <PaymentElement />
        <button
          className="w-full p-2 mt-4 text-white rounded-md bg-primary"
          disabled={!stripe}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
