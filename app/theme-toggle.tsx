"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="cursor-pointer rounded-lg border border-zinc-300 px-3 py-2 transition-all hover:scale-110 hover:shadow-md dark:border-zinc-700"
    >
      {theme === "dark" ? (
        <Sun size={20} className="transition-transform hover:rotate-180" />
      ) : (
        <Moon size={20} className="transition-transform hover:rotate-12" />
      )}
    </button>
  );
}