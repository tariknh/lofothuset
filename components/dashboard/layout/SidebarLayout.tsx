import { ReactNode } from "react";
type PageProps = {
  children: ReactNode;
  className?: string;
};

function SidebarLayout({ children, className }: PageProps) {
  return (
    <main className={`flex w-full min-h-screen ${className}`}>{children}</main>
  );
}

export default SidebarLayout;
