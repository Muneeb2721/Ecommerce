import Image from "next/image";
import {shopPageProductData, currency} from "../../../Data/ProductCardData"

const ShopProductCard = () => {
    return (
        <>
            <div className="flex gap-5 justify-center flex-wrap">
                
                {shopPageProductData.map((name, index)=>(
                    <div className="">
                    <div className="product-image max-h-[301px] max-w-[285px]">
                        <Image key={index}
                            src={name.imageUrl}
                            alt="Product Image"
                            width={285}
                            height={301}
                            className="object-cover"
                        />
                    </div>

                    <div className="product-info max-h-[145px] max-w-[285px] bg-[#F4F5F7]
                        pl-4 pt-4 pr-5 pb-[30px] space-y-2">
                        <h2 className="product-name text-gray1 text-24">{name.name}</h2>
                        <p className="product-description body-2 text-gray3 text-16">{name.description}</p>
                        <h3 className="product-price text-gray1 text-20">Rs {name.price}<span className="pl-4 text-gray4 text-16 line-through">{name.oldPrice? `${currency} ${name.oldPrice}`: ""}</span></h3>
                    </div>

                    {(name.article || name.discountOffer) && (
                        <div className="bg-primary text-16-bold py-[12px] px-[5px] rounded-full text-white w-fit
                            relative bottom-105 -right-55">
                            <span>{name.article || name.discountOffer}</span>
                        </div>
                    )}                                    

                    {/* <div className="relative bottom-111.5 h-[446px] max-w-[285px] border bg-black opacity-50 text-white
                                mx-auto flex flex-col items-center justify-center space-y-6">

                        <div className="add-to-cart">
                            <button className="w-[202px] h-[48px] bg-white text-primary text-16-bold rounded-[8px] cursor-pointer">
                                Add To Cart
                            </button>
                        </div>
                        <ul className="flex gap-4 justify-center">
                            <li className="flex gap-1 items-center">
                                <Image
                                    src="/images/icons/heart-white.svg"
                                    alt="Like"
                                    width={12}
                                    height={13}
                                    className=""
                                />
                                <a href="">Like</a>
                            </li>
                            <li className="flex gap-1 items-center">
                                <Image
                                    src="/images/icons/compare.svg"
                                    alt="Compare"
                                    width={12}
                                    height={13}
                                    className=""
                                />
                                <a href="">Compare</a>
                            </li>
                            <li className="flex gap-1 items-center">
                                <Image
                                    src="/images/icons/share.svg"
                                    alt="Share"
                                    width={12}
                                    height={13}
                                    className=""
                                />
                                <a href="">Share</a>
                            </li>
                        </ul>
                    </div> */}

                </div>
                ))}
                
            </div>
        </>
    );
}

export default ShopProductCard;