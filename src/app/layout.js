import "./globals.css";
import CustomCursor from "../components/CustomCursor";
import SmoothScroll from "../components/SmoothScroll";

export const metadata = {
  title: "Manumay Raj Mishra | Full Stack Developer Portfolio",
  description:
    "Full Stack Developer with hands-on experience building production-grade web applications using React, Node.js, Express, and MongoDB. Delivered scalable dashboards, real-time chat systems, and e-commerce platforms.",
  keywords: ["full stack developer", "portfolio", "react", "node.js", "MERN", "web developer", "Manumay Raj Mishra"],
  authors: [{ name: "Manumay Raj Mishra" }],
  openGraph: {
    title: "Manumay Raj Mishra | Full Stack Developer Portfolio",
    description:
      "Full Stack Developer specializing in building production-grade web applications with modern technologies.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
