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
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
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
                    className="col-span-1 row-span-2 p-2 bg-gradient-to-t from-slate-200 to-accent pt-28 rounded-lg"
                  >
                    <p className="text-lg">Solving Questions</p>
                    <p className="text-black/70">
                      Solve questions and practice for your coding skills.
                    </p>
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    href="/getting-started/create-questions"
                    className="p-2 rounded-lg shadow-sm hover:bg-accent border  transition-colors"
                  >
                    <p className="text-lg">Create Questions</p>
                    <p className="text-black/70">
                      Create questions and share them!
                    </p>
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    href="/getting-started/reporting"
                    className="p-2 rounded-lg shadow-sm hover:bg-accent border transition-colors"
                  >
                    <p className="text-lg">Reporting</p>
                    <p className="text-black/70">
                      Learn the process behind reporting.
                    </p>
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
          <NavigationMenuLink className="flex flex-col justify-center">
            <SignedOut>
              <SignInButton />
              {/*<Button className="h-full w-full">Login</Button>*/}
            </SignedOut>
          </NavigationMenuLink>
        </NavigationMenu>
        <SignedIn>
          <Link href="/dashboard">
            <Button>Dashboard</Button>
          </Link>
          <UserButton />
        </SignedIn>
      </div>
      <main className=""></main>
    </>
  );
}
