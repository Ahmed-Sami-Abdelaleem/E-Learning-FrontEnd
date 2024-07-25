import Link from "next/link";
import React from "react";

function Card({ product }) {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", options);
  };

  return (
    <Link href={`/product-details/${product?.id}`}>
      <div className="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow hover:shadow-lg hover:border-2">
        <img
          src={product?.attributes?.banner?.data?.attributes?.url}
          className="aspect-video w-full object-cover"
          alt=""
        />
        <div className="p-4">
          <p className="mb-1 text-sm text-primary-500 text-blue-600">
            {product?.attributes?.name} •{" "}
            <time>{formatDate(product?.attributes?.createdAt)}</time>
          </p>
          <h3 className="text-xl font-medium text-gray-900 line-clamp-2">
            {product?.attributes?.title}
          </h3>
          <p className="mt-1 text-gray-500 line-clamp-4">
            {product?.attributes?.description}
          </p>
          <div className="mt-4 flex gap-2 justify-between">
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
              {" "}
              {product?.attributes?.category}{" "}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-primary px-2 py-1 text-xs font-semibold ">
              {" $ "}
              {product?.attributes?.price}{" "}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
