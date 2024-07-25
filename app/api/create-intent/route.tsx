import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECERT_KEY!, {
  typescript: true,
  apiVersion: "2023-08-16",
});

export async function POST(request: any) {
  const data: any = await request.json();
  const amount = data.amount;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    });
    return NextResponse.json({ client_secret: paymentIntent.client_secret });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 400 });
  }
}
