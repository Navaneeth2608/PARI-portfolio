import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { ThemeProvider } from "./providers";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Paribalan K | Electronics & Communication Engineer",
  description: "Professional portfolio of Paribalan K, an Electronics and Communication Engineering student specializing in VLSI, Embedded Systems, IoT, and Data Science. Explore projects, internships, and certifications.",
  keywords: [
    "Paribalan K",
    "Electronics and Communication Engineering",
    "VLSI Design",
    "Embedded Systems",
    "IoT",
    "Data Science",
    "Verilog HDL",
    "Xilinx Vivado",
    "Portfolio"
  ],
  authors: [{ name: "Paribalan K" }],
  openGraph: {
    title: "Paribalan K | Electronics & Communication Engineer Portfolio",
    description: "Professional portfolio of Paribalan K showcasing expertise in VLSI, Embedded Systems, IoT, and Data Science.",
    url: "https://paribalan.vercel.app",
    siteName: "Paribalan K Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paribalan K | Electronics & Communication Engineer Portfolio",
    description: "Professional portfolio of Paribalan K showcasing expertise in VLSI, Embedded Systems, IoT, and Data Science.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-[#f8f9fa] text-[#1a1a1a] dark:bg-[#0d0d0f] dark:text-[#f3f4f6] font-sans antialiased transition-colors duration-300">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Paribalan K",
              "jobTitle": "Electronics and Communication Engineer",
              "url": "https://paribalan.vercel.app",
              "email": "pari707queen@gmail.com",
              "telephone": "+919080382211",
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "University College of Engineering Trichy"
              },
              "sameAs": [
                "https://github.com/pari707",
                "https://linkedin.com/in/paribalan-k"
              ]
            })
          }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
