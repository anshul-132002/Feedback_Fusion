
import Link from "next/link";
import { Button } from "./ui/button";
import { Map, MessageSquare, Shield, Sparkle } from "lucide-react";
import ThemeToggle from "./theme-thoggle";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export function Header() {
  
  return (
    <header className="sticky top-0 z-50  backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Sparkle className="h-6 w-6 text-transparent bg-clip-text bg-gradient-to-bl from-blue-500 via-purple-500 to-pink-500" />
            <span className="text-xl font-bold ">Feedback Fusion</span>
          </Link>

          {/* Navigation */}
          <SignedIn>
            <div className="flex items-center gap-4">
              <Button variant="ghost" asChild>
                <Link href="/roadmap" className="flex items-center gap-2">
                  <Map className="h-4 w-4" />
                  <span>Roadmap</span>
                </Link>
              </Button>

              <Button variant="ghost" asChild>
                <Link href="/feedback" className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>Feedback</span>
                </Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/admin" className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  <span>Admin</span>
                </Link>
              </Button>
            </div>
          </SignedIn>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <SignedOut>
              <SignInButton>
                <Button>Sign In</Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
}
