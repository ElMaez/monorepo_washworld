"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icon";
import type { IconNameType } from "./IconMap";

type MenuItem = {
  href: string;
  label: string;
  iconName: IconNameType;
};

const items: MenuItem[] = [
  { href: "/dashboard", label: "Hjem", iconName: "home" },
  { href: "/mycar", label: "Min Bil", iconName: "car" },
  { href: "/locationlist", label: "Bilvask", iconName: "location" },
  { href: "/profile", label: "Profil", iconName: "user" },
  { href: "/", label: "Info", iconName: "circleinfo" },
];

const Menu = () => {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main Menu"
      className="fullbleed bg-surface border-t border-grey-100"
    >
      <ul className="flex justify-around items-center py-12">
        {items.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex flex-col items-center gap-4 text-xs uppercase font-bold text-text"
                aria-current={isActive ? "page" : undefined}
              >
                <span
                  className={`flex items-center justify-center w-[44px] h-[44px] rounded-8 ${
                    isActive
                      ? "bg-primary-400 text-bg-dark"
                      : "bg-success-100 text-primary-800"
                  }`}
                >
                  <Icon iconName={item.iconName} />
                </span>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
