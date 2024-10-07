import ProductImage from "@/assets/product-image.png"
import PyramidImage from "@/assets/pyramid.png"
import TubeImage from "@/assets/tube.png"

import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
              Boost your producvitiy
            </div>
          </div>
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">
            A more effective way to track your progress
          </h2>

          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
            Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
          </p>
        </div>
        <div className="relative">
          <Image src={ ProductImage } alt="Product Image" className="mt-10" />

          <Image src={ PyramidImage } alt="Pyramid Image" width={262} height={262} className="hidden md:block absolute -right-36 -top-32"/>
          <Image src={ TubeImage } alt="Tube image" height={248} className="hidden md:block absolute bottom-24 -left-36"/>
        </div>
      </div>
    </section>
  );
};
