import { Button } from "@nextui-org/react";
import { CartIcon } from "./Icons";


// eslint-disable-next-line react/prop-types
export function Products({ children, products }) {
    return (
        <section className="w-full p-5 md:max-w-[1200px] flex flex-col gap-10">
            <header className="flex place-content-between flex-wrap">
                <h1 className="text-left max-sm:text-4xl text-5xl font-black text-[#4CB5AE]">Products</h1>
                <div className="max-sm:mt-5">
                    {children}
                </div>
            </header>
            <div className="products__container gap-5">
                {/*eslint-disable-next-line react/prop-types*/}
                {products?.map(product =>
                    <div key={product.id} className="flex flex-col place-content-between p-5 rounded-xl gap-3 shadow-md transition hover:scale-[1.05] bg-white ">
                        <div className="w-full h-40 flex justify-center">
                            <img src={product.image} alt="" className="h-full object-contain" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="font-semibold text-gray-900">{product.title}</span>
                            <span className="text-gray-500">${product.price}</span>
                        </div>

                        <div className="flex flex-col gap-2">
                            <Button className="w-full" color={"primary"} radius="sm" startContent={<CartIcon fill={"#fff"} />}>Add to cart</Button>
                            <Button className="w-full" color={"primary"} variant="bordered" radius="sm" >View more</Button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}