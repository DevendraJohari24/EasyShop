import { Eye, Heart, ShoppingCart } from "lucide-react";

export default function ProductCard() {
  return (
    <div className="card w-full rounded-none relative group">
        <figure><img src="/public/t-shirt.jpg" alt="Shoes" className="group-hover:opacity-80" /></figure>
        <div className="card-body px-0 py-2 ">
            <h2 className="card-title font-normal text-base tracking-wider">
            White Tshirt
            </h2>
            <div className="card-actions justify-between items-baseline">
            <h2 className="font-semibold text-xl">$86 - $89</h2>
            <div className="flex gap-2">
                <div className="bg-accent w-4 h-4 rounded-full"></div>
                <div className="bg-accent w-4 h-4 rounded-full"></div>
                <div className="bg-accent w-4 h-4 rounded-full"></div>
            </div>
            </div>
        </div>
        <Heart className="absolute  right-3 top-3 text-base-100" />
        {/* Discount */}
        <div className="absolute top-3 bg-success text-xs tracking-widest px-2 py-[1px]">-10%</div>
        {/* quick view Product */}
        <div className="hidden group-hover:block group-hover:animate-fadeInRight absolute right-10 top-16 bg-neutral text-white rounded-full p-1">
            <Eye className="" />
        </div>
        {/* Add to Cart */}
        <div className="hidden group-hover:block group-hover:animate-fadeInRight absolute right-10 bottom-32 bg-accent text-white rounded-full p-1">
            <ShoppingCart className="" />
        </div>
    </div>
  )
}
