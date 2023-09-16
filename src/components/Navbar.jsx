import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import { CartIcon } from "./Icons";

export function NavbarShop() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (

        <Navbar className="verdi-gris">
            <NavbarBrand>
                <img src="/LOGO_PAGE.png" className="w-10" alt="" />
            </NavbarBrand>
            <NavbarContent justify="end">

                <NavbarItem>
                    <Button onPress={onOpen} isIconOnly color="primary" variant="bordered" aria-label="Like">
                        <CartIcon fill={'#4CB5AE'}></CartIcon>
                    </Button>

                    <Modal isOpen={isOpen}  onOpenChange={onOpenChange}>
                        <ModalContent>
                            {(onClose) => (
                                <>
                                    <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                                    <ModalBody>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Nullam pulvinar risus non risus hendrerit venenatis.
                                            Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Nullam pulvinar risus non risus hendrerit venenatis.
                                            Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                        </p>
                                        <p>
                                            Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                                            dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
                                            Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
                                            Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur
                                            proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                                        </p>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" variant="light" onPress={onClose}>
                                            Close
                                        </Button>
                                        <Button color="primary" onPress={onClose}>
                                            Action
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