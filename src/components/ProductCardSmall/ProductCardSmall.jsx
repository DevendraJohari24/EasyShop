export default function ProductCardSmall() {
  return (
    <div className="h-32 flex gap-3">
        <div className=" h-32 w-32">
                <img src="/public/t-shirt.jpg" className="w-[100%] h-[100%] object-cover" />
        </div>
        <div>
            <h1 className=" text-lg tracking-wider">Elessi Knit Coats</h1>
            <h3 className=" text-xl font-semibold tracking-wider">$86-$89</h3>
        </div>
    </div>
  )
}
