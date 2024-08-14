"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
// export const metadata = {
//   title: "next",
//   description: "my prodject",
// };
const navlinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgotpassword", href: "/forgotpassword" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <>
      {children}
      {navlinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.name}
            className={isActive ? "text-yellow-700" : "text-blue-700"}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
}
