"use client";
import { SignIn, SignUp } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { dark } from "@clerk/themes";
export default function Page() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="min-h-screen flex justify-center items-center">
      <SignIn
        appearance={{
          theme: theme === "light" ? dark : undefined,
        }}
      />
    </div>
  );
}
