import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/products.actions";

const HomePage = async () => {
  const latestProducts = await getLatestProducts();
  return (
    <>
      <ProductList data={latestProducts} title="Newest Arrivals" />
    </>
  );
};

export default HomePage;
