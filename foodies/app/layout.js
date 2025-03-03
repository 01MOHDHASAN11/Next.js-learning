import MainHeader from "@/components/main-header/main-header";
import "./globals.css";
import MealsLoadingPage from "./meals/loading-out";
import ManiHeader from "@/components/main-header/main-header";
import { Suspense } from "react";
export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader/>
        {children}
      </body>
    </html>
  );
}
