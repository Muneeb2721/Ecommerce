import Button from "../ui/button";
import styles from "./hero.module.css";

const Hero = () => {
    return (
        <>
            <div 
            className={`${styles.image}
                max-w-[1440px] h-[1008px]
                flex 
                md:justify-end md:items-end 
                justify-center items-end
                
                
                `}>
                
                <div className="
                sm:w-[643px] min-h-[343px] 
                w-[443px] 
                bg-[#FFF3E3] rounded-[16px]
                relative sm:right-10 bottom-10
                py-10 space-y-8
                px-10 gap-8
                mx-10 sm:mx-0
                ">
                    <div className="">
                        <span className="
                        subtitle text-dark
                        sm:text-16
                        text-14 ">
                            New Arrival
                        </span>
                        <h1 className="text-primary
                        sm:text-52 
                        text-36 break-words">                        
                            Discover Our New Collection
                        </h1>
                        <span className="
                        lasttitle text-dark
                        sm:text-19
                        text-14 break-words">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                        </span>
                    </div>
                    <div className="btn">
                        <Button 
                        text="Buy Now"
                        textSize="text-16"
                        rounded="rounded-[12px]"
                        paddingX="sm:px-[72px] px-[52px]"
                        paddingY="sm:py-[25px] py-[20px]"
                        border="border"
                        pointer="cursor-pointer"
                        textColor="text-white"
                        bgColor="bg-primary shadow-hover"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;