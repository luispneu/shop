import { Header } from "./Componentes/Header";
import {Footer} from "./Componentes/Footer"
export const metadata = {
  title: "Meu Shop.com",
  description: "E-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><Header/>{children} <Footer/></body>
    </html>
  );
}
