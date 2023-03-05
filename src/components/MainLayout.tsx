// import NavBar from "./NavBar";


import { ReactNode } from "react";
import NavBar from "./NavBar";

export type MainLayoutType =  {
    children: ReactNode
}

export default function MainLayout({ children }: MainLayoutType) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
