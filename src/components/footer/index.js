import React from "react";
import { FooterSite, Media } from "./FooterElements";
import { MEDIA_SOSIAL } from "../../config/data";
import gambarOjk from "../../assets/img/ojk.png";
import gambarLps from "../../assets/img/lps.png";
import logoSite from "../../assets/img/logo_bawah.png";
import { WaItem } from "../atom";

const Footer = () => {
  return (
    <FooterSite>
      <div className="footer">
        <div className="footer_content">
          <div className="footer_header">
            <div className="footer_logo">
              <img src={logoSite} alt="logo_bawah" />
            </div>
            <div className="footer_header_content">
              <nav>
                <ul>
                  <li>
                    <div className="footer_item">
                      <div className="text_menu">HOME</div>
                    </div>
                  </li>
                  <li>
                    <div className="footer_item">
                      <div className="text_menu">PROFILE</div>
                    </div>
                  </li>
                  <li>
                    <div className="footer_item">
                      <div className="text_menu">E-BILLING KPR</div>
                    </div>
                  </li>
                  <li>
                    <div className="footer_item">
                      <div className="text_menu">PRODUK & LAYANAN</div>
                    </div>
                  </li>
                  <li>
                    <div className="footer_item">
                      <div className="text_menu">TENTANG KAMI</div>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="footer_media">
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
              <img className="img_class" src={gambarOjk} alt="gambarOjk" />
              <img className="img_class" src={gambarLps} alt="gambarLps" />
            </div>
            <div className="footer_desc_p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              unde molestiae eius blanditiis, nulla expedita consequatur est,
              maiores libero quas ipsa. Et error sed, nulla necessitatibus vel
              in similique corporis.
            </div>

            <div className="footer_desc_kebijakan">
              <a className="end" href="#22">
                Kebijakan Privasi
              </a>
              <a className="end" href="#22">
                Kebijakan Privasi
              </a>
              <a className="end" href="#22">
                Kebijakan Privasi
              </a>
            </div>
          </div>
        </div>
      </div>
      <WaItem />
    </FooterSite>
  );
};

export default Footer;
