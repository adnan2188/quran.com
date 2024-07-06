import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import SurahData from "./Components/SurahData";
import SurahCards from "./Components/SurahCards";
import JuzData from "./Components/JuzData";
import JuzCards from "./Components/JuzCards";
import Juz_tsranslation from './Components/Juz_translation.jsx'
import Layout from "./Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "SurahData/:id",
        element: <SurahData />,
      },
      {
        path: "SurahCards",
        element: <SurahCards />,
      },
      {
        path: "JuzData/:id",
        element: <JuzData />,
      },
      {
        path: "JuzCards",
        element: <JuzCards />,
      },
      {
        path: "juztranslation/:id",
        element: <Juz_tsranslation />,
      }
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
