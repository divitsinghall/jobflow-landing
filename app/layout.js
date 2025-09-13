import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { APP_NAME, TAGLINE } from "@/lib/constants";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: APP_NAME,
  description: TAGLINE,
  metadataBase: new URL("https://jobflow.example.com"),
  openGraph: {
    title: APP_NAME,
    description: TAGLINE,
    url: "https://jobflow.example.com",
    siteName: APP_NAME,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: APP_NAME,
    description: TAGLINE,
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh`}
      >
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
