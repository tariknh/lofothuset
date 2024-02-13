import { ReactNode } from "react";
type PageProps = {
  children: ReactNode;
  className?: string;
  background?: string;
};

function SidebarLayout({
  children,
  className,
  background = "bg-[#F5F8FE]",
}: PageProps) {
  return (
    <main className={`flex w-full min-h-screen ${className} ${background}`}>
      {children}
    </main>
  );
}

export default SidebarLayout;
