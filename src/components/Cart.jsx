import { useCart } from "../hocks/useCart"
import { Button } from "@nextui-org/react";


export function Cart() {
    const { cart, resolveQuantityElement, updateQuantityElement, hasCart } = useCart()
    return (
        <div className="w-full flex flex-col gap-2">
            {
                hasCart ? cart?.map(product =>
                    <div key={product.id} className="p-5 flex flex-wrap place-content-between rounded-lg">
                        <div className="flex items-center gap-4 max-sm:place-content-between">
                            <div className="min-w-[40px]">
                                <img src={product.image} className="h-10" height={'12px'} alt="" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-semibold text-gray-900">{product.title}</span>
                                <span className="text-gray-500">${product.price}</span>
                            </div>
                        </div>

                        <div className="flex items-center max-sm:mt-2  gap-2">
                            <Button isIconOnly color={product.quantity == 1 ? "danger" : "primary"} onClick={() => {resolveQuantityElement(product, false)}} variant="ghost" aria-label="Take a photo">
                                <span className="font-bold">-</span>
                            </Button>
                            <input type="text" value={product.quantity} onChange={(event) => {updateQuantityElement(product, event.target.value)}} className="p-3 bg-gray-50 focus:ring-teal-500 rounded-lg w-14" />
                            <Button isIconOnly color="primary" onClick={() => {resolveQuantityElement(product)}} variant="solid" aria-label="Take a photo">
                                <span className="font-bold">+</span>
                            </Button>
                        </div>

                    </div>
                )
                : <NothingAtCart/>
            }
        </div>
    )
}

export function NothingAtCart()
{
    return (
        <div className="w-full h-96 grid place-content-center">
            <h1 className="text-xl font-bold">There is nothing in the cart <span className="text-[#4CB5AE]">:c</span></h1>
        </div>
    )
}