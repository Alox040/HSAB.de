import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import HowItWorks from "./pages/HowItWorks";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "leistungen", Component: Services },
      { path: "so-funktionierts", Component: HowItWorks },
      { path: "ueber-uns", Component: AboutUs },
      { path: "kontakt", Component: Contact },
    ],
  },
]);
