import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import "./globals.css";

export const metadata = {
  title: "My Portfolio",
  description: "A showcase of my work",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <Container>{children}</Container>
        <Footer />
      </body>
    </html>
  );
}
