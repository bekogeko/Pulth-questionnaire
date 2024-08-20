import { cn } from "@/lib/utils";
import Link from "next/link";
import NavLinks from "./navLinks";

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
  // get the url of the current page
  // uses nextjs 14 hooks for RSC

  return (
    <div
      className={cn(
        "flex flex-col h-full bg-background p-4 shadow-md",
        className,
      )}
    >
      <NavLinks />
    </div>
  );
}
