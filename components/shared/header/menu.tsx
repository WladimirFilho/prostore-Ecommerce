import { Button } from "@/components/ui/button";
import ModeToggle from "./mode_toggle";
import Link from "next/link";
import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Menu = () => {
  return (
    <div className="flex justify-end gap3">
      <nav className="hidden md:flex max-w-xs gap-1">
        <ModeToggle />
        <Button
          asChild
          variant="ghost"
          className=" hover:bg-black hover:text-white"
        >
          <Link href="/cart" className="">
            <ShoppingCart /> Cart
          </Link>
        </Button>

        <Button
          asChild
          variant="ghost"
          className=" hover:bg-black hover:text-white"
        >
          <Link href="/sign-in" className="">
            <UserIcon /> Sign In
          </Link>
        </Button>
      </nav>

      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start">
            <SheetTitle>Menu</SheetTitle>
            <ModeToggle />
            <Button asChild variant="ghost">
              <Link href="/cart">
                Cart <ShoppingCart />
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className=" hover:bg-black hover:text-white"
            >
              <Link href="/sign-in" className="">
                <UserIcon /> Sign In
              </Link>
            </Button>
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
