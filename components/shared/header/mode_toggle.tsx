"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";

import { SunIcon, MoonIcon, SunMoon } from "lucide-react";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const ModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          {theme === "system" ? (
            <SunMoon />
          ) : theme === "dark" ? (
            <MoonIcon />
          ) : theme === "light" ? (
            <SunIcon />
          ) : null}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col">
        {/* <DropdownMenuSeparator /> */}
        {/* <DropdownMenuCheckboxItem
          checked={theme === "system"}
          onClick={() => {
            setTheme("system");
          }}
        >
          <SunMoon size={16} />
        </DropdownMenuCheckboxItem> */}
        <DropdownMenuCheckboxItem
          checked={theme === "dark"}
          onClick={() => {
            setTheme("dark");
          }}
        >
          <MoonIcon size={16} />
          <div className="ml-2">Dark</div>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={theme === "light"}
          onClick={() => {
            setTheme("light");
          }}
        >
          <SunIcon size={16} />
          <div className="ml-2">Light</div>
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ModeToggle;
