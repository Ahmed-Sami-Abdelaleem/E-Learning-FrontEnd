import Link from "next/link";
import HearoSection from "./_component/HearoSection";
import ProductList from "./_component/ProductList";
export default function Home() {
  return (
    <>
      <HearoSection />
      <div className="flex flex-row justify-between items-center px-16 bg-white">
        <div className="text-black">Brand New</div>
        <Link href={"/explore"}>
          <div className="text-primary hover:text-gray-600">
            View All Collection{" "}
          </div>
        </Link>
      </div>
      <ProductList />
    </>
  );
}
