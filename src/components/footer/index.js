import React from "react";
import { FooterSite, Media } from "./FooterElements";
import { WaItemContent } from "../atom";
import { logoAma, lps_text, ojk_text } from "../../assets";
import { MEDIA_SOSIAL } from "../../config";

const Footer = () => {
  return (
    <FooterSite>
      <div className="footer">
        <div className="footer_content">
          <div className="footer_header">
            <div className="footer_logo">
              <img src={logoAma} alt="logo_bawah" />
            </div>
            <div className="footer_header_content">
              <nav>
                <ul>
                  <li>
                    <div className="footer_item">
                      <div className="text_menu">
                        <a href="./kontak-kami">TENTANG KAMI</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="footer_item">
                      <div className="text_menu">
                        <a href="./berita-kami">BERITA</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="footer_item">
                      <div className="text_menu">
                        <a href="./hubungi-kami">FORM PENGADUAN</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="footer_item">
                      <div className="text_menu">
                        <a href="./layanan-kami">PRODUK & LAYANAN</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="footer_item">
                      <div className="text_menu">
                        <a href="./simulasi-bank">SIMULASI</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="footer_media">
            <div className="footer_desc_p">
              <b>Kantor Pusat :</b> Jl. Raya Pati – Tayu Km. 19. Waturoyo, Kec.
              Margoyoso, Kabupaten Pati, Jawa Tengah 59154.
            </div>
            <Media>
              {MEDIA_SOSIAL.map((item, i) => (
                <li key={i} className="item_li">
                  <a
                    href={item.to}
                    aria-label={item.label}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <item.icon />
                  </a>
                </li>
              ))}
            </Media>
          </div>
          <div className="footer_desc">
            <div className="footer_desc_img">
              <img className="img_class" src={ojk_text} alt="gambarOjk" />
              <img className="img_class" src={lps_text} alt="lps" />
            </div>
            <div className="footer_desc_kebijakan">
              {/* <a className="end" href="/web-landing/support/kebijakan-privasi">
                Kebijakan Privasi
              </a>
              <a className="end" href="/web-landing/support/syarat-ketentuan">
                Syarat dan Ketentuan
              </a>
              <a className="end" href="/web-landing/support/prosedur-pengaduan">
                Prosedur Pengajuan Nasabah
              </a> */}
              <a className="end" href="/#" style={{ pointerEvents: "none" }}>
                Kebijakan Privasi
              </a>
              <a className="end" href="/#" style={{ pointerEvents: "none" }}>
                Syarat dan Ketentuan
              </a>
              <a className="end" href="/#" style={{ pointerEvents: "none" }}>
                Prosedur Pengajuan Nasabah
              </a>
            </div>
          </div>
        </div>
      </div>
      <WaItemContent />
    </FooterSite>
  );
};

export default Footer;
