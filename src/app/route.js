import React from "react";
import Home from "../pages/Home";
import { Routes, Route } from "react-router-dom";
import NotFound from "../pages/404";
import Berita from "../pages/Berita";
import DetailBerita from "../pages/DetailBerita";
import ContactUs from "../pages/ContactUs";
import { Layanan, LayananSatu } from "../pages/Layanan";
import Simulasi from "../pages/Simulasi";
import Publikasi from "../pages/Publikasi";

import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

const PageLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

export const RouteSite = () => {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route exact path="/we-contact-us" element={<ContactUs />} />

        <Route exact path="/layanan-kami" element={<LayananSatu />} />
        <Route exact path="/layanan-kami/:id/:index" element={<Layanan />} />

        <Route exact path="/berita-kami" element={<Berita />} />
        <Route exact path="/berita-kami/:id" element={<DetailBerita />} />

        <Route exact path="/simulasi-kpr" element={<Simulasi />} />

        <Route exact path="/publikasi" element={<Publikasi />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
