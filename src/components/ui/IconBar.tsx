import Image from "next/image";

type IconItem = {
    src: string;
    alt: string;
    href?: string; // optional, if you want it clickable
};

type IconMenuProps = {
  items: IconItem[];
  className?: string;
  iconClassName?: string;
};

const IconMenu = ({ items, className = "", iconClassName = "" }: IconMenuProps) => {
  return (
    <ul className={`flex ${className}`}>
      {items.map((icon, index) => (
        <li key={index}>
          {icon.href ? (
            <a href={icon.href}>
              <Image
                src={icon.src}
                alt={icon.alt}
                width={28}
                height={28}
                className={iconClassName}
              />
            </a>
          ) : (
            <Image
              src={icon.src}
              alt={icon.alt}
              width={28}
              height={28}
              className={iconClassName}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default IconMenu;