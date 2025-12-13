"use client";

import { useEffect, useState } from "react";

import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

function ModeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(()=> {
        const root = document.documentElement;
       
        if (isDark) root.classList.add("dark")
        else root.classList.remove("dark")
    }, [isDark]);

    return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setIsDark(!isDark)}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </Button>
  );
}
export default ModeToggle;