import React, { useEffect, useState } from "react";
import { FaAccusoft, FaPhone } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { ORGANISASI } from "../../config/data";
import { HeadingComponent, ReactHelmet } from "../atom";
import { Button, ButtonTransparent, FormInput, TextArea } from "../form";
import {
  CardInformasiSite,
  ContentTabSite,
  ErrorSite,
  HubungiSite,
  LayananSite,
  OrganisasiSite,
  Tabs,
  TentangKamiSite,
} from "./SectionElements";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import ModalItem from "../modal";
import { FormContent } from "../form/FormElements";

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
            <Button
              icon={FaAccusoft}
              label="Form Pengaduan"
              to="./hubungi-kami"
            />
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
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

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
          <button onClick={openModal} id={item.id}>
            <img src={item.items.img} alt={item.items.label} />
          </button>
        </div>
        <div className="text_nama">
          <span>{item.items.label}</span>
          <p>{item.items.jabatan}</p>
        </div>
      </div>
      <ModalItem
        item={item.items}
        showModal={showModal}
        setShowModal={setShowModal}
      />
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

const HubungiSection = () => {
  return (
    <HubungiSite>
      <div className="hubungi_container">
        <div className="hubungi_content">
          <HeadingComponent
            Heading="Form Pengaduan"
            Text="Jika Anda memiliki pertanyaan atau tidak dapat menemukan apa yang Anda cari, jangan ragu untuk menghubungi kami di:"
          />
          <FormContent>
            <div className="content_form_pengaduan">
              <div className="card_form" style={{ width: "70%" }}>
                <div className="content">
                  <p>
                    <b>Keteragan : </b>Kirimkan pesan atau pengaduan kepada
                    kami, senang melayani anda sebagai nasabah kami,
                    Terimakasih.
                  </p>
                  <div className="content_form">
                    <form
                      className="form_style"
                      // onSubmit={handleSubmit}
                      id="form_table"
                    >
                      <div className="inputan">
                        <FormInput
                          judul="Nama"
                          placeholder="Jumlah Pinjamanan"
                          type="text"
                          // defaultValue={setForm}
                        />
                        <FormInput
                          judul="No. Hp"
                          placeholder="Jumlah Pinjamanan"
                          type="number"
                          // defaultValue={setForm}
                        />
                      </div>
                      <TextArea />
                      <p style={{ fontSize: "12px", borderBottom: "none" }}>
                        <b>Catatan Lain : </b> Pesan balasan daripada form
                        pengaduan akan dikirimkan melalui No. Hp yang di
                        masukan.
                      </p>
                      <div className="button_flex">
                        <Button
                          // onClick={() => (state.button = 1)}
                          id="Hitung"
                          icon={FaAccusoft}
                          label="Kirim Pesan Pengaduan"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="card_form" style={{ width: "30%" }}>
                <div className="content">
                  <p>
                    <b>Keteragan : </b>Kontak Umum yang dapat dihubungi.
                  </p>
                  <div className="content_form">
                    <div className="contact_item">
                      <div className="item_contact">
                        <div className="icon_text">
                          <FaAccusoft />
                          WhatsApps
                        </div>
                        <div className="label">082137926172</div>
                      </div>
                      <div className="item_contact">
                        <div className="icon_text">
                          <FaAccusoft />
                          Email
                        </div>
                        <div className="label">082137926172</div>
                      </div>
                      <div className="item_contact">
                        <div className="icon_text">
                          <FaAccusoft />
                          Twitter
                        </div>
                        <div className="label">082137926172</div>
                      </div>
                      <div className="item_contact">
                        <div className="icon_text">
                          <FaAccusoft />
                          Instagram
                        </div>
                        <div className="label">
                          082137926172 sdfsdfsdfsddfsdfsdfsdf
                        </div>
                      </div>
                      <div className="item_contact">
                        <div className="icon_text">
                          <FaAccusoft />
                          Facebook
                        </div>
                        <div className="label">082137926172 sdfsdfsdf</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FormContent>
        </div>
      </div>
    </HubungiSite>
  );
};

const CardInformasi = () => {
  return (
    <CardInformasiSite>
      <div className="informasi_container">
        <div className="informasi_content">
          <HeadingComponent
            Heading="Form Pengaduan"
            Text="Jika Anda memiliki pertanyaan atau tidak dapat menemukan apa yang Anda cari, jangan ragu untuk menghubungi kami di:"
          />
          <div className="informasi_card_content">
            <div className="card_content">
              <div className="heading">Tabungan</div>
              <div className="body">
                <div className="class_table">
                  <table>
                    <thead>
                      <tr style={{ background: "var(--colorMain)" }}>
                        <th rowSpan="2">Jenis Investasi</th>
                        <th rowSpan="2">Nisbah</th>
                        <th colSpan="3">Tingkat Imbalan/Tahun (%)</th>
                      </tr>
                      <tr style={{ background: "var(--colorMain)" }}>
                        <th>April 2022</th>
                        <th>Mei 2022</th>
                        <th>Juni 2022</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Tabungan Wadiah</td>
                        <td>-</td>
                        <td>1.5%</td>
                        <td>1.5%</td>
                        <td>1.5%</td>
                      </tr>
                      <tr>
                        <td style={{ width: "35%" }}>
                          Tabungan Mudhrabah (iB Haji dan Masa Depan)
                        </td>
                        <td>11%</td>
                        <td>1.5%</td>
                        <td>1.5%</td>
                        <td>1.5%</td>
                      </tr>
                      <tr>
                        <td style={{ width: "35%" }}>
                          Tabungan Mudhrabah (iB Haji dan Masa Depan)
                        </td>
                        <td>11%</td>
                        <td>1.5%</td>
                        <td>1.5%</td>
                        <td>1.5%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="footer">
                Keterangan: Simpanan sampai dengan 2 Milyar Rupiah dijamin oleh
                LPS.
              </div>
            </div>
            <div className="card_content">
              <div className="heading">Deposito</div>
              <div className="body">
                <div className="class_table">
                  <table>
                    <thead>
                      <tr style={{ background: "var(--colorMain)" }}>
                        <th rowSpan="2">Jenis Investasi</th>
                        <th rowSpan="2">Nisbah</th>
                        <th colSpan="3">Tingkat Imbalan/Tahun (%)</th>
                      </tr>
                      <tr style={{ background: "var(--colorMain)" }}>
                        <th>April 2022</th>
                        <th>Mei 2022</th>
                        <th>Juni 2022</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Deposito 3 Bulan</td>
                        <td>-</td>
                        <td>1.5%</td>
                        <td>1.5%</td>
                        <td>1.5%</td>
                      </tr>
                      <tr>
                        <td>Deposito 6 Bulan</td>
                        <td>-</td>
                        <td>1.5%</td>
                        <td>1.5%</td>
                        <td>1.5%</td>
                      </tr>
                      <tr>
                        <td>Deposito 12 Bulan</td>
                        <td>-</td>
                        <td>1.5%</td>
                        <td>1.5%</td>
                        <td>1.5%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="footer">
                Keterangan: Simpanan sampai dengan 2 Milyar Rupiah dijamin oleh
                LPS.
              </div>
            </div>
          </div>
        </div>
      </div>
    </CardInformasiSite>
  );
};

export {
  TentangKami,
  OrganisasiSection,
  LayananSection,
  PublikasiSection,
  ErrorSection,
  HubungiSection,
  CardInformasi,
};
