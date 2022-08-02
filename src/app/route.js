import React from "react";
import { Routes, Route } from "react-router-dom";
import { Footer, Header } from "../components";
import { Outlet } from "react-router-dom";
import {
  FormPenyaluran,
  PengajuanForm,
  DetailBerita,
  HubungiKami,
  LayananSatu,
  FormNasabah,
  TentangKami,
  Publikasi,
  NotFound,
  Simulasi,
  Layanan,
  Galery,
  Berita,
  Home,
} from "../pages";

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
        <Route exact path="/kontak-kami" element={<TentangKami />} />
        <Route exact path="/hubungi-kami" element={<HubungiKami />} />

        <Route exact path="/layanan-kami" element={<LayananSatu />} />
        <Route exact path="/layanan-kami/:id/:index" element={<Layanan />} />

        <Route exact path="/berita-kami" element={<Berita />} />
        <Route exact path="/berita-kami/:id" element={<DetailBerita />} />

        <Route exact path="/simulasi" element={<Simulasi />} />

        <Route exact path="/publikasi" element={<Publikasi />} />

        <Route exact path="/pengajuan-rekening" element={<PengajuanForm />} />
        <Route exact path="/form-nasabah" element={<FormNasabah />} />

        <Route exact path="/form-penyaluran" element={<FormPenyaluran />} />

        <Route exact path="/galeri-kami" element={<Galery />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
