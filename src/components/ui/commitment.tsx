import Image from "next/image"

const Commitment = () => {
    return (
        <div className="
            max-w-[1440px] min-h-[270px] bg-[#FAF3EA]
        ">
            <div className="
                container py-[100px] px-[53px] max-w-[1340px] min-h-[70px]
                flex justify-between flex-wrap gap-10
            ">
                <div className="flex gap-4">
                    <Image 
                        src="images/icons/trophy.svg"
                        alt="High Quality"
                        width={52}
                        height={60}
                    />
                    <div className="flex flex-col justify-around">
                        <h3 className="text-gray6 text-20-bold">High Quality</h3>
                        <p className="text-16 text-gray3 ">crafted from top materials</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <Image 
                        src="images/icons/warranty.svg"
                        alt="High Quality"
                        width={52}
                        height={60}
                    />
                    <div className="flex flex-col justify-around">
                        <h3 className="text-gray6 text-20-bold">Warranty Protection</h3>
                        <p className="text-16 text-gray3 ">Over 2 years</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <Image 
                        src="images/icons/shipping.svg"
                        alt="High Quality"
                        width={52}
                        height={60}
                    />
                    <div className="flex flex-col justify-around">
                        <h3 className="text-gray6 text-20-bold">Free Shipping</h3>
                        <p className="text-16 text-gray3 ">Order over 150 $</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <Image 
                        src="images/icons/support.svg"
                        alt="High Quality"
                        width={52}
                        height={60}
                    />
                    <div className="flex flex-col justify-around">
                        <h3 className="text-gray6 text-20-bold">24 / 7 Support</h3>
                        <p className="text-16 text-gray3 ">Dedicated support</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Commitment