import MainCarousel from "../../components/MainCarousel/MainCarousel";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import VerticalProductGrid from "../../components/VerticalProductGrid/VerticalProductGrid";


const Home = () => {
    return (
        <>
        <main className="space-y-8 pb-10">
            <section id="carousel">
                    <MainCarousel />
            </section>
            <section id="women">
                <div className="flex w-full max-h-[830px]">
                    <div className="grid w-5/12 flex-grow card bg-base-300 rounded-box place-items-center">
                        <img src="/public/carousel-1.jpg" alt="" className="w-[100%] h-[100%] object-cover" />
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="w-6/12 grid flex-grow card rounded-box">
                        <ProductGrid title="For Her" />
                        <div className="divider">Shop Now</div>
                    </div>
                    <div className="w-1/12"></div>
                </div>
            </section>
            <section id="banner">
            <div className="grid grid-cols-12 gap-5">
                <div className="flex flex-row col-span-5 items-center  justify-between col-start-2 card bg-secondary rounded-none p-6 ">
                    <div>
                        <h1 className="text-3xl font-bold tracking-wide">Mini Backpack</h1>
                        <h3 className="text-md font-semibold tracking-wide">Bags & Accessories</h3>
                    </div>
                    <div className=" w-36 h-32 hover:scale-110 hover:translate-x-5 duration-300 transition-all">
                        {/* Image */}
                        <img src="/public/bag.png" alt="" className="w-[100%] h-[100%] object-cover" />
                    </div>
                </div>
                <div className="flex flex-row col-span-5 items-center  justify-between card bg-accent rounded-none p-6">
                <div>
                        <h1 className="text-2xl font-semibold tracking-wide">Big Sale</h1>
                        <h3 className="text-5xl font-bold tracking-wide">50% OFF</h3>
                    </div>
                    <div className=" w-36 h-32 hover:scale-110 hover:translate-x-5 duration-300 transition-all">
                        {/* Image */}
                        <img src="/public/bag.png" alt="" className="w-[100%] h-[100%] object-cover" />
                    </div>
                </div>
            </div>
            </section>
            <section id="men">
                <div className="flex  w-full max-h-[830px]">
                    <div className="w-1/12"></div>
                    <div className="w-6/12 grid flex-grow card rounded-box">
                        <ProductGrid title="For Him" />
                        <div className="divider">Shop Now</div>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="grid w-5/12 flex-grow card bg-base-300 rounded-box place-items-center">
                        <img src="/public/carousel-1.jpg" alt="" className="w-[100%] h-[100%] object-cover" />
                    </div>
                </div>
            </section>
            {/* Banner */}
            <section id="banner">
                <div className="flex items-center text-center justify-center bg-secondary text-primaryText p-2">
                    <p className=" tracking-wider uppercase font-semibold">Up to 70% off the entire store! Made with Love by @devendra</p>
                </div>
            </section>
            {/* Top Rated */}
            <section id="top-rated">
                <div className="grid grid-cols-12 gap-6">
                    {/* Top Rated */}
                    <div className=" col-start-2 col-span-3">
                        <VerticalProductGrid title="Top Rated" />
                    </div>
                    {/* Best Selling */}
                    <div className="col-span-3">
                        <VerticalProductGrid title="Best Selling" />
                    </div>
                    {/* On Sale */}
                    <div className="col-span-3">
                            <VerticalProductGrid title="On Sale" />

                    </div>
                </div>
            </section>
            {/* Banner */}
            <section id="brands">

            </section>
        </main>
        </>
    );
}

export default Home;