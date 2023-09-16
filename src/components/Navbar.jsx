import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import { CartIcon } from "./Icons";
import { Cart } from "./Cart";
import { useCart } from "../hocks/useCart";

export function NavbarShop() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const {cart, hasCart} = useCart()

    return (

        <Navbar className="verdi-gris">
            <NavbarBrand>
                <img src="/LOGO_PAGE.png" className="w-10" alt="" />
            </NavbarBrand>
            <NavbarContent justify="end">

                <NavbarItem>
                    <Button onPress={onOpen} color="primary" variant="bordered" aria-label="Like">
                        <div className="flex items-center">
                            <CartIcon fill={'#4CB5AE'}></CartIcon>
                            {hasCart && <span className="text-[#4CB5AE] font-semibold text-lg">({cart.length})</span>}
                        </div>
                    </Button>

                    <Modal isOpen={isOpen} size="4xl" className="verdi-gris"  onOpenChange={onOpenChange}>
                        <ModalContent>
                            {(onClose) => (
                                <>
                                    <ModalHeader className="flex flex-col gap-1"><span className="text-2xl flex items-center gap-2 font-bold">Cart <span className="text-[#4CB5AE]">({cart.length})</span></span></ModalHeader>
                                    <ModalBody>
                                        <Cart></Cart>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" variant="light" onPress={onClose}>
                                            Close
                                        </Button>
                                    </ModalFooter>
                                </>
                            )}
                        </ModalContent>
                    </Modal>


                </NavbarItem>
            </NavbarContent>
        </Navbar >


    )
}