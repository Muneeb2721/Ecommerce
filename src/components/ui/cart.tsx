'use client'    ;

import Image from "next/image";
import Button from "./button";
import { useState } from "react";

const ShoppingCart = () => {
    const [open, setOpen] = useState(true);
    if (!open) return null;

    return (
        <div id="cart" className="sm:max-w-[457px] min-h-[346px] bg-white shadow-lg py-7 mx-auto
            absolute top-0 right-0  
            max-w-[357px]">
            <div className="cart-head flex px-9 justify-between">
                <h3 className="text-24">Shopping Cart</h3>
                <Image  
                    src="images\icons\cart-lock.svg"
                    alt="Cart Lock Icon"
                    width="16"
                    height="19"
                    className="cursor-pointer"
                    onClick={()=> setOpen(false)}
                />
            </div>
            <hr className="w-[287px] ml-9 mt-6 h-0 border border-[#D9D9D9]" />

            {/* Products goes here */}
            <div className="max-h-[400px] overflow-auto">
                <div className="flex justify-between items-center px-9 mt-10">
                    <div className="flex items-center bg-primary rounded-[10px] w-[105px] h-[105px]">
                        <Image 
                            src="images\furnitureProducts\AsgaardSofa3.svg"
                            alt="Asgaard Sofa 3"
                            width="112"
                            height="90"
                            className=""
                        />
                    </div>
                    <div className="">
                        <h4 className="text-16">
                            Asgaard sofa 
                        </h4>
                        <p className="text-16">
                            1 {"  "} <span className="text-12-light">x</span> {"  "} <span className="text-primary text-12-bold">Rs. 250,000.00</span>
                        </p>
                    </div>
                    <div className="">
                        <Image 
                            src="images\icons\cancel.svg"
                            alt="Icon to delete Cart Item"
                            width="20"
                            height="20"
                            className="cursor-pointer"
                        />
                    </div>
                </div>

                <div className="flex justify-between items-center px-9 mt-10">
                    <div className="flex items-center bg-primary rounded-[10px] w-[105px] h-[105px]">
                        <Image 
                            src="images\furnitureProducts\AsgaardSofa3.svg"
                            alt="Asgaard Sofa 3"
                            width="112"
                            height="90"
                            className=""
                        />
                    </div>
                    <div className="">
                        <h4 className="text-16">
                            Asgaard sofa 
                        </h4>
                        <p className="text-16">
                            1 {"  "} <span className="text-12-light">x</span> {"  "} <span className="text-primary text-12-bold">Rs. 250,000.00</span>
                        </p>
                    </div>
                    <div className="">
                        <Image 
                            src="images\icons\cancel.svg"
                            alt="Icon to delete Cart Item"
                            width="20"
                            height="20"
                            className="cursor-pointer"
                        />
                    </div>
                </div>

                <div className="flex justify-between items-center px-9 mt-10">
                    <div className="flex items-center bg-primary rounded-[10px] w-[105px] h-[105px]">
                        <Image 
                            src="images\furnitureProducts\AsgaardSofa3.svg"
                            alt="Asgaard Sofa 3"
                            width="112"
                            height="90"
                            className=""
                        />
                    </div>
                    <div className="">
                        <h4 className="text-16">
                            Asgaard sofa 
                        </h4>
                        <p className="text-16">
                            1 {"  "} <span className="text-12-light">x</span> {"  "} <span className="text-primary text-12-bold">Rs. 250,000.00</span>
                        </p>
                    </div>
                    <div className="">
                        <Image 
                            src="images\icons\cancel.svg"
                            alt="Icon to delete Cart Item"
                            width="20"
                            height="20"
                            className="cursor-pointer"
                        />
                    </div>
                </div>

                <div className="flex justify-between items-center px-9 mt-10">
                    <div className="flex items-center bg-primary rounded-[10px] w-[105px] h-[105px]">
                        <Image 
                            src="images\furnitureProducts\AsgaardSofa3.svg"
                            alt="Asgaard Sofa 3"
                            width="112"
                            height="90"
                            className=""
                        />
                    </div>
                    <div className="">
                        <h4 className="text-16">
                            Asgaard sofa 
                        </h4>
                        <p className="text-16">
                            1 {"  "} <span className="text-12-light">x</span> {"  "} <span className="text-primary text-12-bold">Rs. 250,000.00</span>
                        </p>
                    </div>
                    <div className="">
                        <Image 
                            src="images\icons\cancel.svg"
                            alt="Icon to delete Cart Item"
                            width="20"
                            height="20"
                            className="cursor-pointer"
                        />
                    </div>
                </div>

                <div className="flex justify-between items-center px-9 mt-10">
                    <div className="flex items-center bg-primary rounded-[10px] w-[105px] h-[105px]">
                        <Image 
                            src="images\furnitureProducts\AsgaardSofa3.svg"
                            alt="Asgaard Sofa 3"
                            width="112"
                            height="90"
                            className=""
                        />
                    </div>
                    <div className="">
                        <h4 className="text-16">
                            Asgaard sofa 
                        </h4>
                        <p className="text-16">
                            1 {"  "} <span className="text-12-light">x</span> {"  "} <span className="text-primary text-12-bold">Rs. 250,000.00</span>
                        </p>
                    </div>
                    <div className="">
                        <Image 
                            src="images\icons\cancel.svg"
                            alt="Icon to delete Cart Item"
                            width="20"
                            height="20"
                            className="cursor-pointer"
                        />
                    </div>
                </div>
            </div>

            <div className="flex gap-28 px-9 mt-9">
                <h4 className="text-16">Subtotal</h4>
                <span className="text-primary text-16-bold ">Rs. 520,000.00</span>
            </div>
            
            <hr className="w-full h-0 border mt-7 border-[#D9D9D9]" />

            <div className="px-9">
                
                <div className="flex gap-[14px] pt-[26px]
                sm:flex-nowrap sm:justify-center 
                flex-wrap
                justify-start">
                    <Button 
                    text="Cart"
                    textColor="text-black"
                    paddingX="sm:px-[20px] px-[30px]"
                    paddingY="py-[6px]"
                    rounded="rounded-full"
                    border="border"
                    pointer="cursor-pointer"
                    hoverBgColor="bg-primary-hover"
                    hoverTextColor="text-white-hover"
                    />
                    <Button 
                    text="Checkout"
                    textColor="text-black"
                    paddingX="sm:px-[25px] px-[30px]"
                    paddingY="py-[6px]"
                    rounded="rounded-full"
                    border="border"
                    pointer="cursor-pointer"
                    hoverBgColor="bg-primary-hover"
                    hoverTextColor="text-white-hover"
                    />
                    <Button 
                    text="Comparison"
                    textColor="text-black"
                    paddingX="sm:px-[25px] px-[30px]"
                    paddingY="py-[6px]"
                    rounded="rounded-full"
                    border="border"
                    pointer="cursor-pointer"
                    hoverBgColor="bg-primary-hover"
                    hoverTextColor="text-white-hover"
                    />
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart;