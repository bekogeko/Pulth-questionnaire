import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
  NavigationMenuIndicator,
} from "../components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/dist/client/link";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center gap-4 shadow  px-4 py-2">
        {/* Company Name */}
        <h1 className="text-xl font-bold text-indigo-500">Pulth</h1>
        <NavigationMenu className="mx-auto gap-2">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid max-w-md w-screen grid-cols-2 gap-2 p-2">
                  <NavigationMenuLink
                    href="/getting-started/solving-questions"
                    className="col-span-1 row-span-2 p-2 bg-accent pt-24 shadow-sm shadow-accent rounded-lg border-accent border"
                  >
                    <p className="text-xl">Solving Questions</p>
                    <p>Solve questions and practice for your coding skills.</p>
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    href="/getting-started/create-questions"
                    className="p-2 rounded-lg shadow-sm shadow-accent border-accent border"
                  >
                    <p>Create Questions</p>
                    <p>Create questions and share them!</p>
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    href="/getting-started/reporting"
                    className="p-2 rounded-lg shadow-sm shadow-accent border-accent border"
                  >
                    <p>Reporting</p>
                    <p>Learn the process behind reporting.</p>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>How does it work?</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="max-w-md w-screen p-2">
                  <NavigationMenuLink href="/about">
                    Questions & Recommendation
                  </NavigationMenuLink>
                  <NavigationMenuLink href="/about">
                    Answer discovery
                  </NavigationMenuLink>
                  <NavigationMenuLink href="/about">
                    Score Matching
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuIndicator />
          </NavigationMenuList>
          <Link href="/auth" legacyBehavior passHref>
            <NavigationMenuLink>
              <Button className="h-full w-full">Login</Button>
            </NavigationMenuLink>
          </Link>
        </NavigationMenu>
      </div>
      <main className=""></main>
    </>
  );
}
