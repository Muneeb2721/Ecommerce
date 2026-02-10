import Button from "@/components/ui/button";
import HomeProductCard from "@/components/ui/HomeProductCard";
import StaticCard from "@/components/ui/StaticCard";

export default function Home() {
  return (
    <>
      <section className="static-card text-center mt-[56px]">
        <h2 className="text-32">Browse the Range</h2>
        <p className="text-20 pb-[62px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <StaticCard />
      </section>

      <section className="product-card mt-[56px]">
        <h2 className="text-32 pb-[32px] text-center">Our Products</h2>
        <HomeProductCard />
        <Button 
          text="Show more"
          border = "border-[2px]"
          borderColor = "border-primary"
          paddingX = "px-20"
          paddingY = "py-3"
          textSize = "text-16-bold"
          textColor = "text-primary"
          bgColor = "bg-white"
          hoverBgColor = "hover:bg-primary"
          hoverTextColor = "hover:text-white"
          alignment = "flex my-0 mx-auto"
        />
      </section>
    </>
  );
}