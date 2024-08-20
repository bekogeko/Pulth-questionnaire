"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div>
      <h2 className="text-lg font-semibold tracking-tight mx-2">Discover</h2>
      <div className="space-y-2">
        <Link
          href={"/dashboard"}
          className={cn(
            "px-4 rounded py-2 gap-2 transition-all duration-200  flex w-full justify-start hover:bg-accent",
            { "bg-accent": pathname === "/dashboard" },
          )}
        >
          <span>🧐</span>
          <span className="text-sm font-medium">Quiz</span>
        </Link>
        <Link
          href={"/dashboard/topics"}
          className="px-4 rounded gap-2 py-2 transition-all duration-200  flex w-full justify-start hover:bg-accent"
        >
          <span>📚</span>
          <span className="text-sm font-medium"> Topics</span>
        </Link>
        <Link
          href={"/dashboard/leaderboard"}
          className="px-4 gap-2 rounded py-2 transition-all duration-200  flex w-full justify-start hover:bg-accent"
        >
          <span>🏆</span>
          <span className="text-sm font-medium">Leaderboard</span>
        </Link>
      </div>
    </div>
  );
}
