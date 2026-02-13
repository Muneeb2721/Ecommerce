import Link from "next/link";

type MenuItem = {
  name: string;
  href: string;
};

type MenuProps = {
  items: MenuItem[];
  className?: string;
  itemClassName?: string;
  onItemClick?: () => void;
};

const Menu = ({
  items,
  className = "",
  itemClassName = "",
  onItemClick,
}: MenuProps) => {
  return (
    <ul className={className}>
      {items.map((item,index) => (
        <li key={index}>
          <Link
            href={item.href}
            onClick={onItemClick}
            className={itemClassName}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;