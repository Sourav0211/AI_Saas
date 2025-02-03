import type { Metadata } from "next";
// import { ClerkProvider, SignedIn, SignedOut ,SignIn} from "@clerk/nextjs";
import { ClerkProvider } from "@clerk/nextjs";
import { IBM_Plex_Sans} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";


const IBMPlex = IBM_Plex_Sans({
  weight: ['400','500','600','700'],
  subsets: ["latin"],
  variable: '--fnt-ib-plex'
});



export const metadata: Metadata = {
  title: "ImgGin",
  description: "Ai powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={
        {
          variables:{ colorPrimary: '#624cf5'},
        layout: {
          logoImageUrl: "/assets/images/logo-text.svg", // Assuming this is correct
          logoLinkUrl: "/",
          logoPlacement: "inside",
        },
      }}
    >
      <html>
        <body className={cn(IBMPlex.variable, "font-IBMPlex antialiased")}>
          {children}
        </body>
      </html>
      
    </ClerkProvider>
  );
}
