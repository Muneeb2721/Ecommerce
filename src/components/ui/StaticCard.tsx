import Image from "next/image";
import {staticProducts} from "../../../Data/ProductCardData"

const StaticCard:React.FC = () => {
    return (
        <>
            <div className="flex gap-4 flex-wrap justify-center">
                
                {staticProducts.map((name, index) => (
                <div className="max-w-[321px] min-h-[400px]">
                    <Image key={index}
                        src={name.imgUrl}
                        alt={name.alt}
                        width={321}
                        height={400}
                        className="object-cover rounded-[6px]"
                    />

                    <div className="pt-4">
                        <h3 className="static-product-name text-gray1 text-20 text-center">
                            {name.name}
                        </h3>
                    </div>
                </div>
                ))}
                
            </div>
        </>
    );
}

export default StaticCard;