import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CAT Trucks | Built to Move the Earth",
  description: "An editorial showcase of Caterpillar construction, off-highway and mining haul trucks.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
