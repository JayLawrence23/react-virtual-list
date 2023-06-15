import React from "react";
import { TypographyH4 } from "@/components/ui/Typography";
import navmenu from "@/data/navmenu";
import { NavbarButton } from "@/components/ui";

export const Header = () => {
  return (
    <header className='rounded-md bg-gray-50 p-4 text-white md:px-10'>
      <div className='flex items-center justify-center md:justify-between'>
        <div className='hidden items-center md:flex'>
          <TypographyH4>React Virtual List</TypographyH4>
        </div>

        <div className='flex items-center space-x-10 text-sm text-gray-600'>
          <>
            {navmenu.map((nav, i) => (
              <span key={i} className='block'>
                <NavbarButton href={nav.href}>{nav.name}</NavbarButton>
              </span>
            ))}
          </>
        </div>
      </div>
    </header>
  );
};
