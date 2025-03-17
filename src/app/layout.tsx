import { spaceGrotesk, workSans, firaCode } from "@/styles/fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import "@/styles/globals.css";

export const metadata = {
  title: "Chris Klemz | Portfolio",
  description: "Full-Stack Developer | AI & Cloud Enthusiast",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${workSans.variable} ${firaCode.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Navbar />
        <Container>{children}</Container>
        <Footer />
      </body>
    </html>
  );
}
