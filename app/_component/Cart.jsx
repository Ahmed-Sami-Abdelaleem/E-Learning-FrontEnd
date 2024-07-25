"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../_context/CartContext";
function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const getTotalAmount = () => {
    let total = 0;
    cart?.forEach((item) => {
      total += item?.product[0]?.attributes?.price;
    });
    return total;
  }
  return (
    <div className="h-[400px] w-[300px] bg-gray-100 z-10 rounded-md border shadow-sm absolute mx-10 right-10 top-12 p-5 overflow-auto">
      <div className="mt-4 space-y-6">
         
          <ul className="space-y-4">
            {cart?.map((item) => (
              <li key={item?.id} className="flex items-center gap-4">
                <Image
                  src={
                    item?.product[0]?.attributes?.banner?.data?.attributes?.url
                  }
                  alt="product-image"
                  className="rounded object-cover"
                  width={50}
                  height={50}
                  layout="responsive"
                />

                <div>
                  <h3 className="text-sm text-gray-900 line-clamp-1">
                    {item?.product[0]?.attributes?.title}
                  </h3>

                  <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                    <div>
                      <dt className="inline">Category:</dt>
                      <dd className="inline">
                        {item?.product[0].attributes.category}
                      </dd>
                    </div>

                    <div>
                      <dt className="inline">Price:</dt>
                      <dd className="inline">
                        {item?.product[0].attributes.price}
                      </dd>
                    </div>
                  </dl>
                </div>
              </li>
            ))}
          </ul>
        

        <div className="space-y-4 text-center">
          <Link
            href="/cart"
            className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
          >
            View my cart ({cart?.length})
          </Link>

          <Link
            href={"/checkout?amount="+getTotalAmount().toString()}
            className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
          >
            Checkout
          </Link>

          <a
            href="#"
            className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
          >
            Continue shopping
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cart;
