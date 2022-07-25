import React, { useEffect, useState } from "react";
import { FaAccusoft, FaPhone } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { ORGANISASI } from "../../config/data";
import { HeadingComponent, ReactHelmet } from "../atom";
import { Button, ButtonTransparent } from "../form";
import {
  ContentTabSite,
  ErrorSite,
  LayananSite,
  OrganisasiSite,
  Tabs,
  TentangKamiSite,
} from "./SectionElements";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const TentangKami = () => {
  return (
    <TentangKamiSite>
      <div className="tentang_container">
        <div className="tentang_content">
          <HeadingComponent
            Heading="Kontak Kami"
            Text="Jika Anda memiliki pertanyaan atau tidak dapat menemukan apa yang Anda cari, jangan ragu untuk menghubungi kami di:"
          />
        </div>
        <div className="tentang_maps">
          <div className="maps">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.8803638379372!2d111.09416161436485!3d-6.66174566697648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e772ad5771a3afb%3A0xe749d504c33e504!2sKoperasi%20Bank%20Perkreditan%20Rakyat!5e0!3m2!1sid!2sid!4v1641217024980!5m2!1sid!2sid"
              allowFullScreen
              loading="lazy"
              title="Map Bank"
            />
          </div>
          <div className="contact">
            <h1>Head Office</h1>
            <p>
              PT Bank Jago Tbk Menara BTPN Lt. 46 Jl. Dr. Ide Anak Agung Gde
              Agung Kav.5.5 – 5.6 Jakarta Selatan
            </p>
            <div className="no_telp">
              <p>
                <FaPhone /> (021) 50927460
              </p>
              <p>
                <FiMail /> kbpr.pati@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="tentang_cabang">
          <h1>Kantor Cabang</h1>
          <div className="cabang_bank">
            <div className="cabang_content">
              <h1>Jakarta</h1>
              <p>
                KC Mega Kuningan Menara BTPN Lt. GF Jl. Dr. Ide Anak Agung Gde
                Agung Kav. 5.5 - 5.6 Jakarta Selatan 12950
              </p>
              <div className="no_telp">
                <p>
                  <FaPhone /> (021) 50927460
                </p>
                <p>
                  <FiMail /> kbpr.pati@gmail.com
                </p>
              </div>
            </div>
            <div className="cabang_content">
              <h1>Jakarta</h1>
              <p>
                KC Mega Kuningan Menara BTPN Lt. GF Jl. Dr. Ide Anak Agung Gde
                Agung Kav. 5.5 - 5.6 Jakarta Selatan 12950
              </p>
              <div className="no_telp">
                <p>
                  <FaPhone /> (021) 50927460
                </p>
                <p>
                  <FiMail /> kbpr.pati@gmail.com
                </p>
              </div>
            </div>
            <div className="cabang_content">
              <h1>Jakarta</h1>
              <p>
                KC Mega Kuningan Menara BTPN Lt. GF Jl. Dr. Ide Anak Agung Gde
                Agung Kav. 5.5 - 5.6 Jakarta Selatan 12950
              </p>
              <div className="no_telp">
                <p>
                  <FaPhone /> (021) 50927460
                </p>
                <p>
                  <FiMail /> kbpr.pati@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TentangKamiSite>
  );
};

const ButtonFilter = ({ filter, button, active }) => {
  return (
    <>
      {button.map((buttonItem, i) => (
        <ButtonTransparent
          active={active === buttonItem ? "active" : ""}
          key={i}
          style={{ fontWeight: "400", border: "1px solid var(--colorMain)" }}
          icon={FaAccusoft}
          label={buttonItem}
          onClick={() => filter(buttonItem)}
        />
      ))}
    </>
  );
};

const Card = (item) => {
  return (
    <motion.div
      className="padding"
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ type: "easeInOut", duration: 0.8 }}
    >
      <div className="card_component">
        <div className="gambar_img">
          <img src={item.items.img} alt={item.items.label} />
        </div>
        <div className="text_nama">
          <span>{item.items.label}</span>
          <p>{item.items.jabatan}</p>
        </div>
      </div>
    </motion.div>
  );
};

const OrganisasiSection = () => {
  const allOrganisasi = [
    "All",
    ...new Set(ORGANISASI.map((item) => item.jabatan)),
  ];

  const [organisasi, setOrganisasi] = useState(ORGANISASI);

  const buttons = allOrganisasi;

  const [active, setActive] = useState("All");

  const filter = (button) => {
    if (button === "All") {
      setOrganisasi(ORGANISASI);
      setActive(button);
      return;
    }
    const filteredData = ORGANISASI.filter((item) => item.jabatan === button);
    setOrganisasi(filteredData);
    setActive(button);
  };

  return (
    <OrganisasiSite>
      <div className="organisasi_container">
        <div className="organisasi_content">
          <HeadingComponent
            Heading="Pimpinan Kamis"
            Text="Jika Anda memiliki pertanyaan atau tidak dapat menemukan apa yang Anda cari, jangan ragu untuk menghubungi kami di:"
          />
        </div>
        <div className="organisasi_page">
          <div className="button_organisasi">
            <ButtonFilter filter={filter} button={buttons} active={active} />
          </div>
          <motion.div layout className="card_organisasi">
            <AnimatePresence>
              {organisasi.map((item, i) => (
                <Card judul="Bisa 1" items={item} key={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
        <div className="organisasi_download">
          <a href="#try">Download Struktur Organisasi</a>
        </div>
      </div>
    </OrganisasiSite>
  );
};

const Tab = ({ children, active }) => {
  const [activeTab, setActiveTab] = useState(active);
  const [tabsData, setTabsData] = useState([]);

  useEffect(() => {
    let data = [];

    React.Children.forEach(children, (element) => {
      if (!React.isValidElement(element)) return;

      const {
        props: { tab, children },
      } = element;
      data.push({ tab, children });
    });

    setTabsData(data);
  }, [children]);

  return (
    <Tabs>
      <ul className="tabs_button">
        {tabsData.map((tabs, idx) => (
          <li
            className={`tabs_nav ${idx === activeTab ? "active" : ""}`}
            key={idx}
          >
            <button className="button" onClick={() => setActiveTab(idx)}>
              {tabs.tab}
            </button>
          </li>
        ))}
      </ul>

      <div className="tabs_content">
        <div className="tabs_content_text">
          <ContentTab
            item={tabsData[activeTab] && tabsData[activeTab].children}
            judul={tabsData[activeTab] && tabsData[activeTab].tab}
          />
        </div>
      </div>
    </Tabs>
  );
};

const ContentTab = (item) => {
  return (
    <ContentTabSite>
      <div className="tab_content">
        <div className="judul">{item.judul}</div>
        <div className="value">
          <h1>Apa yang Dimaksud dengan {item.judul} ?</h1>
          <p>{item.p}</p>
          <div className="value_b">
            {item.item &&
              item.item.fitur.map((item, i) => (
                <div key={i} className="value_all">
                  <h1>{item.judul}</h1>
                  <p>{item.text_a}</p>
                  <ol>
                    {item.text.map((item, i) => (
                      <div key={i}>
                        <li>{item}</li>
                      </div>
                    ))}
                  </ol>
                </div>
              ))}
          </div>
        </div>
      </div>
    </ContentTabSite>
  );
};

const TabPanel = ({ children }) => {
  return { children };
};

Tab.TabPanel = TabPanel;

const LayananSection = ({ judul, id, DATA_TABS, link }) => {
  const TABS = DATA_TABS.contentFull;
  const number = parseInt(id);
  const location = useLocation();
  return (
    <>
      <ReactHelmet
        title={`${judul} - Layanan & Produk | Bank Artha Mas Abadi`}
        url={location.pathname}
      />
      <LayananSite>
        <div className="layanan_container">
          <div className="layanan_content">
            <HeadingComponent
              Heading={judul}
              Text="Jika Anda memiliki pertanyaan atau tidak dapat menemukan apa yang Anda cari, jangan ragu untuk menghubungi kami di:"
            />

            {link === "penyimpanan-dana" ? (
              <>
                {number === 0 || number === 1 || number === 2 ? (
                  <div className="layanan_tabs">
                    <div className="content">
                      {number ? (
                        <Tab active={number}>
                          {TABS.map((tab, idx) => (
                            <Tab.TabPanel key={`Tab-${idx}`} tab={tab.judul}>
                              {tab.content}
                            </Tab.TabPanel>
                          ))}
                        </Tab>
                      ) : (
                        <Tab active={0}>
                          {TABS.map((tab, idx) => (
                            <Tab.TabPanel key={`Tab-${idx}`} tab={tab.judul}>
                              {tab.content}
                            </Tab.TabPanel>
                          ))}
                        </Tab>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="layanan_tabs">
                    <div className="content">Data Tidak Ditemukan</div>
                  </div>
                )}
              </>
            ) : link === "penyaluran-dana" ? (
              <>
                {number === 0 ||
                number === 1 ||
                number === 2 ||
                number === 2 ||
                number === 3 ? (
                  <div className="layanan_tabs">
                    <div className="content">
                      {number ? (
                        <Tab active={number}>
                          {TABS.map((tab, idx) => (
                            <Tab.TabPanel key={`Tab-${idx}`} tab={tab.judul}>
                              {tab.content}
                            </Tab.TabPanel>
                          ))}
                        </Tab>
                      ) : (
                        <Tab active={0}>
                          {TABS.map((tab, idx) => (
                            <Tab.TabPanel key={`Tab-${idx}`} tab={tab.judul}>
                              {tab.content}
                            </Tab.TabPanel>
                          ))}
                        </Tab>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="layanan_tabs">
                    <div className="content">Data Tidak Ditemukan</div>
                  </div>
                )}
              </>
            ) : (
              "Data Tidak Ada Juga"
            )}
          </div>
        </div>
      </LayananSite>
    </>
  );
};

const TabPublikasi = ({ children, active }) => {
  const [activeTab, setActiveTab] = useState(active);
  const [tabsData, setTabsData] = useState([]);

  useEffect(() => {
    let data = [];

    React.Children.forEach(children, (element) => {
      if (!React.isValidElement(element)) return;

      const {
        props: { tab, children },
      } = element;
      data.push({ tab, children });
    });

    setTabsData(data);
  }, [children]);

  return (
    <Tabs>
      <ul className="tabs_button">
        {tabsData.map((tabs, idx) => (
          <li
            className={`tabs_nav ${idx === activeTab ? "active" : ""}`}
            key={idx}
          >
            <button className="button" onClick={() => setActiveTab(idx)}>
              {tabs.tab}
            </button>
          </li>
        ))}
      </ul>

      <div className="tabs_content">
        <div className="tabs_content_text">
          <ContentTabPublikasi
            item={tabsData[activeTab] && tabsData[activeTab].children}
            judul={tabsData[activeTab] && tabsData[activeTab].tab}
          />
        </div>
      </div>
    </Tabs>
  );
};

const ContentTabPublikasi = (item) => {
  return (
    <ContentTabSite>
      <div className="tab_content">
        <div className="judul">{item.judul}</div>
        <div className="value">
          <h1>Apa yang Dimaksud dengan {item.judul} ?</h1>
          <p>{item.item && item.item.p}</p>
          <div className="button_download">
            {item.item &&
              item.item.fitur.map((item, i) => (
                <div key={i} className="card_download">
                  <div className="text_download">
                    <h1>{item.judul}</h1>
                    <p>{item.tanggal}</p>
                  </div>
                  <Button
                    icon={FaAccusoft}
                    label="Hitung KPR"
                    to="./berita-kami"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </ContentTabSite>
  );
};

const TabPanelPublikasi = ({ children }) => {
  return { children };
};

TabPublikasi.TabPanelPublikasi = TabPanelPublikasi;

const PublikasiSection = ({ judul, DATA_TABS }) => {
  const TABS = DATA_TABS;

  return (
    <LayananSite>
      <div className="layanan_container">
        <div className="layanan_content">
          <HeadingComponent
            Heading={judul}
            Text="Jika Anda memiliki pertanyaan atau tidak dapat menemukan apa yang Anda cari, jangan ragu untuk menghubungi kami di:"
          />
          <div className="layanan_tabs">
            <div className="content">
              <TabPublikasi active={0}>
                {TABS.map((tab, idx) => (
                  <TabPublikasi.TabPanelPublikasi
                    key={`Tab-${idx}`}
                    tab={tab.judul}
                  >
                    {tab.content}
                  </TabPublikasi.TabPanelPublikasi>
                ))}
              </TabPublikasi>
            </div>
          </div>
        </div>
      </div>
    </LayananSite>
  );
};

const ErrorSection = () => {
  return (
    <ErrorSite>
      <div className="error_container">
        <div className="error_content">
          <div className="angka">
            4<b>0</b>4
          </div>
          <div className="text">Maaf, Halaman Tidak Ditemukan !</div>
          <Button icon={FaAccusoft} label="Kembali ke Beranda" to="./" />
        </div>
      </div>
    </ErrorSite>
  );
};

export {
  TentangKami,
  OrganisasiSection,
  LayananSection,
  PublikasiSection,
  ErrorSection,
};
