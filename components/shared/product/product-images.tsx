"use client";
import { use, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ProductImage = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="spacy-y-4">
      <Image
        src={images[current]}
        alt="Product image"
        width={1000}
        height={1000}
        className="min-h-[300px] object-cover object-center"
      />
      <div className="flex">
        {images.map((image, index) => (
          <div
            key={image}
            onClick={() => setCurrent(index)}
            className={cn(
              "border mr-2 cursor-pointer hover:border-yellow-400",
              current === index && "border-yellow-400"
            )}
          >
            <Image src={image} alt="Product Image" width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
