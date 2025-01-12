import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: any }) => {
  const productSlug = `/product/${product.slug}`;
  return (
    <Card className="w-full max-w-sm flex flex-col items-center">
      <CardHeader className="p-0 items-center">
        <Link href={productSlug}>
          <Image
            src={product.images[0]}
            alt={product.name}
            height={300}
            width={300}
            priority
          ></Image>
        </Link>
      </CardHeader>
      <CardContent className="p-4 grid gap-4 place-items-center">
        <div className="text-sm">{product.brand}</div>
        <Link href={productSlug}>
          <h2 className="text-md font-bold text-center">{product.name}</h2>
        </Link>

        <div className="flex-between gap-6">
          <p> {product.rating} Stars</p>

          {product.stock > 0 ? (
            <p className="font-bold">AU$ {product.price}</p>
          ) : (
            <p className="text-destructive">Out of stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
