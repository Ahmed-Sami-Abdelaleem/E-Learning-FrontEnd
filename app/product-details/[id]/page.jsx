"use client";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import Card from "../../_component/Card";
import { CartContext } from "../../_context/CartContext";
import { addToCart, getCarts } from "../../_utils/cartEndPoint";
import productEndpoint from "../../_utils/productEndpoint";
import Breadcrumb from "../[id]/_component/Breadcrumb";
function page({ params }) {
  const path = usePathname();
  const { user } = useUser();
  const router = useRouter();
  const { cart, setCart } = useContext(CartContext);
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [similarProducts, setSimilarProducts] = useState([]);
  useEffect(() => {
    getProductById_();
  }, [params?.id]);
  const getProductById_ = () => {
    setLoading(true);
    productEndpoint.getProductById(params?.id).then((res) => {
      setProduct(res.data.data);
      getSimilarProducts_(res.data.data.attributes.category);
      setLoading(false);
    });
  };
  const getSimilarProducts_ = (category) => {
    productEndpoint.getProductListByCategory(category).then((res) => {
      setSimilarProducts(res.data.data);
      setLoading(false);
    });
  };
  const addToCart_ = (payload) => {
    // I wanna check if the cart already exist then I wanna update the cart
    addToCart(payload)
      .then((res) => {
        console.log(res.data.data, "data added to cart");
       
       
      })
      .catch((err) => {
        console.log(err);
      });
 
  };

  return (
    <section className="px-10 md:px-28 py-8">
      <Breadcrumb path={path} />
      {loading ? (
        <div>
          <div className="grid grid-cols-1 gap-5 my-6 md:grid-cols-2 md:my-12">
            {/* Image skeleton */}
            <div className="rounded-lg bg-gray-200 animate-pulse w-full h-[450px]"></div>

            <div>
              {/* Title skeleton */}
              <div className="h-9 bg-gray-200 rounded-md w-3/4 mb-4 animate-pulse"></div>

              {/* Category skeleton */}
              <div className="h-5 bg-gray-200 rounded-md w-1/2 mb-4 animate-pulse"></div>

              {/* Description skeleton */}
              <div className="space-y-2 mb-4">
                <div className="h-4 bg-gray-200 rounded-md w-full animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded-md w-full animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded-md w-3/4 animate-pulse"></div>
              </div>

              {/* Price skeleton */}
              <div className="h-8 bg-gray-200 rounded-md w-1/4 mb-4 animate-pulse"></div>

              {/* Button skeleton */}
              <div className="h-10 bg-gray-200 rounded-lg w-1/3 animate-pulse"></div>
            </div>
          </div>

          <div className="col-span-2">
            {/* Similar Products title skeleton */}
            <div className="h-8 bg-gray-200 rounded-md w-1/3 mb-4 animate-pulse"></div>

            {/* Similar Products grid skeleton */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-200 rounded-lg h-64 animate-pulse"
                ></div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 gap-5 my-6 md:grid-cols-2 md:my-12 ">
            <Image
              src={product?.attributes?.banner?.data?.attributes?.url}
              alt="product-details-banner"
              className="rounded-lg object-contain auto-width-height"
              width={400}
              height={450}
            />
            <div>
              <h3 className="text-3xl font-bold">
                {product?.attributes?.title}
              </h3>
              <p className="text-md font-medium text-gray-600">
                {" "}
                {product?.attributes?.category}
              </p>
              <p className="text-md font-medium line-clamp-3">
                {product?.attributes?.description}
              </p>

              <p className="text-[28px] text-primary">
                $ {product?.attributes?.price}
              </p>
              <button
                onClick={() => {
                  if (user) {
                    const payload = {
                      data: {
                        products: [product?.id],
                        email: user.primaryEmailAddress?.emailAddress,
                        userName: user.fullName,
                      },
                    };
                addToCart_(payload);
                
                  
                  } else {
                    router.push("/sign-in");
                  }
                  getCarts(user.primaryEmailAddress.emailAddress).then(res => {
                    res.data.data.forEach(cartItem => {
                      setCart(oldCart => {
                        // Check if the item already exists in the cart
                        const itemExists = oldCart.some(item => item.id === cartItem?.id);
                        // If the item does not exist, add it to the cart
                        if (!itemExists) {
                          return [
                            ...oldCart,
                            {
                              id: cartItem?.id,
                              product: cartItem?.attributes?.products?.data
                            }
                          ];
                        }
                        // If the item already exists, return the old cart unchanged
                        return oldCart;
                      });
                    });
                  });
                  
                }}
                className="bg-primary text-white rounded-lg py-2 px-4 hover:bg-teal-700"
              >
                Add To Cart
              </button>
            </div>
          </div>
          <div className="col-span-2">
            <h2 className="text-2xl font-semibold mb-4">Similar Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {similarProducts.map((product) => (
                <Card key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default page;
