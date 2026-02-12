import Link from "next/link";
import Image from "next/image";
import styles from "./banner.module.css";
import { bannerData, BannerKey } from "../../../Data/bannerData";

type BannerProps = {
  type: BannerKey;
};

const Banner = ({ type }: BannerProps) => {
  const data = bannerData[type];

  if (!data) return null;

  return (
    <div
      className={`${styles.banner} max-w-[1440px] min-h-[316px] flex items-center justify-center`}
    >
      <div className="flex flex-col items-center gap-2">

        {/* Optional Logo */}
        {data.showLogo && (
          <Image
            src="/logo/Logo.svg"
            alt="Logo"
            width={77}
            height={77}
            loading="lazy"
          />
        )}

        {/* Dynamic Title */}
        <h2 className="text-48">{data.title}</h2>

        {/* Breadcrumb */}
        <span className="flex items-center text-16 gap-2">
          <Link href="/" className="flex gap-2 font-bold">
            Home
          </Link>

          <Image
            src="/images/icons/forwardarrow.svg"
            alt="Right Chevron"
            width={12}
            height={12}
          />

          {/* Dynamic breadcrumb text */}
          <span>{data.breadcrumb}</span>
        </span>
      </div>
    </div>
  );
};

export default Banner;
