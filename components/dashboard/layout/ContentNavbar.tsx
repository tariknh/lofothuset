interface props {
  navItems?: any;
  activeItem: any;
  setActiveItem: any;
  path?: any;
  primaryColor?: string;
  paddingTop?: number;
  activeNavbarClassname?: string;
  nonActiveNavbarClassname?: string;
}

function ContentNavbar({
  navItems,
  activeItem,
  setActiveItem,
  path,
  primaryColor,
  paddingTop,
  activeNavbarClassname,
  nonActiveNavbarClassname,
}: props) {
  return (
    <div
      className={`flex justify-start w-full items-center mb-10 
    `}
    >
      <h2 className="text-3xl font-medium mr-8">{path}</h2>
      <div className="flex gap-8">
        {!(navItems[0] === "none") &&
          navItems.map((navItem: any) => {
            return (
              <div
                onClick={() => setActiveItem(navItem)}
                key={navItem}
                className={`font-medium text-lg cursor-pointer ${
                  activeItem === navItem
                    ? `${activeNavbarClassname} !font-bold`
                    : `${nonActiveNavbarClassname}`
                }`}
              >
                {navItem.charAt(0).toUpperCase() + navItem.slice(1)}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ContentNavbar;
