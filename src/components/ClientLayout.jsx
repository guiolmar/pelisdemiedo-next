"use client"; // Indica que es un componente del cliente

import { useState, useEffect } from "react";
import Link from "next/link"; // Cambiamos a next/link
import { Skull, Menu, Search, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { ThemeProvider, useTheme } from "next-themes";
import { useRouter } from 'next/navigation';

export default function ClientLayout({ children }) {
  const [scrollY, setScrollY] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.add('dark');
    }
  }, []);
  

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ThemeProvider forcedTheme="dark" attribute="class" enableSystem={false}>
      <div className="flex min-h-screen w-full flex-col">
        <header
          className={`sticky top-0 flex h-16 items-center gap-4 border-b bg-black border-black px-4 md:px-6 transition-shadow dark:bg-black ${
            scrollY > 0 ? "shadow-md" : ""
          } ${isSidebarOpen ? "" : "z-50"}`}
        >
          <div className="w-full max-w-screen-lg mx-auto flex items-center gap-4">
            <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
              <Link href="/" className="flex items-center gap-2 text-lg font-semibold md:text-base">
                <Skull className="h-6 w-6" />
                <span>PelisDeMiedo.com</span>
              </Link>
              <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                Películas
              </Link>
              <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                Series
              </Link>
            </nav>
            {/* <Sheet onOpenChange={setIsSidebarOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                  <Menu className="h-5 w-5 text-white" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-black text-white">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
                    <Skull className="h-6 w-6 text-white" />
                    <span>PelisDeMiedo.com</span>
                  </Link>
                  <Link href="#" className="hover:text-red-500">Películas</Link>
                  <Link href="#" className="hover:text-red-500">Series</Link>
                </nav>
              </SheetContent>

            </Sheet> */}
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold md:text-base">
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Skull className="h-5 w-5 text-white" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
            </Link>

            <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
              <form onSubmit={handleSearchSubmit} className="ml-auto flex-1 sm:flex-initial">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Buscar película, serie..."
                    className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] text-white text-base"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8 bg-[#0A0A0A]">
          <div className="w-full max-w-screen-lg mx-auto">{children}</div>
        </main>
        <footer className="w-full border-t bg-white p-4 dark:bg-black">
          <div className="w-full max-w-screen-lg mx-auto text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} PelisDeMiedo.com.
            </p>
            <p className="text-xs text-muted-foreground">
              Creado con mucho ❤️ por <a target="_blank" href="https://www.linkedin.com/in/guillermoolcina/">@guiolmar</a>
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              {/* Icono de github y que diga "Github" con el enlace al repo (https://bhha0khdarsj44ad.public.blob.vercel-storage.com/github-NM0LpuHCKfRpzLHvv0wlYBpJIiUoGB.png) y repo: https://github.com/guiolmar/pelisdemiedo-next */}
              <a target="_blank" href="https://github.com/guiolmar/pelisdemiedo-next">
                <img src="https://bhha0khdarsj44ad.public.blob.vercel-storage.com/github-NM0LpuHCKfRpzLHvv0wlYBpJIiUoGB.png" alt="Github" className="w-4 h-4 inline-block" />
                <span className="ml-1
              ">Github</span>
              </a>
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
