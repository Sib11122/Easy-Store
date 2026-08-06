import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";
import products from "../data/products";

export default function Home() {
  return (
    <div className="home-container">
      <PageHeading title="Explore Eazy stickers !">
        Discover our collection of high-quality, fun, and customizable
        stickers. Whether you're decorating your laptop, water bottle, or
        journal, we have the perfect design for you. Shop now and make your
        belongings truly your own!
      </PageHeading>
      <ProductListings products={products} />
    </div>
  );
}
