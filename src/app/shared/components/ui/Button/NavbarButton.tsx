import Link from "next/link";

interface SectionLinkProps {
  active?: boolean;
  href: string;
}

export const NavbarButton: FCC<SectionLinkProps> = ({
  children,
  active = false,
  href,
}) => {
  return (
    <Link
      href={href}
      className='group relative cursor-pointer select-none px-1 py-0.5'
    >
      <div className='relative'>
        <span
          className={`${
            active && "text-primary"
          } relative font-semibold text-primary transition-all duration-500 ease-out group-hover:text-primary`}
        >
          {children}
        </span>
        <span
          className={`absolute right-0 block h-[0.115rem] transition-all duration-500 ease-out group-hover:left-0 group-hover:w-full group-hover:bg-primary ${
            active ? "left-0 w-full bg-primary" : "w-0 bg-gray-500"
          }`}
        ></span>
      </div>
    </Link>
  );
};
