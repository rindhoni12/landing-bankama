import React, { useEffect, useRef, useState } from "react";
import { FaAccusoft, FaDownload, FaPhone } from "react-icons/fa";
import {
  FormInputSelectProduct,
  FormInputSelectNew,
  FormTextArea,
  FormInput,
} from "../form";
import {
  CardInformasiSite,
  SimulasiBankSite,
  FormNasabahSite,
  ContentTabSite,
  PenyaluranSite,
  OrganisasiSite,
  KontakKamiSite,
  PengajuanSite,
  HubungiSite,
  LayananSite,
  ErrorSite,
  Tabs,
} from "./SectionElements";
import {
  ButtonTransparent,
  HeadingComponent,
  ReactHelmet,
  Button,
} from "../../components";
import { pro_not, simu_pembiayaan, simu_tabungan } from "../../assets";
import { DATAFETCH, MEDIA_SOSIAL } from "../../config";
import {
  ButtonDownloadOrganisasi,
  ButtonDownloadPublikasi,
  ButtonLink,
} from "../button";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FormContent } from "../form/FormElements";
import { FiMail, FiX } from "react-icons/fi";
import ModalItem from "../modal";
import axios from "axios";
import DOMPurify from "dompurify";

const KontakKamiSection = ({ dataWording }) => {
  const ALAMAT = DATAFETCH(
    "https://admin.arthamasabadi.co.id/api/v1/alamat"
  )?.data;

  const getDataPusat = ALAMAT?.filter(
    (item) => item.nama_cabang === "Kantor Pusat"
  );
  // Convert the filtered object to an array
  const dataPusat = getDataPusat?.length > 0 ? getDataPusat[0] : [];
  // Create the desired format
  const transformedDataPusat = {
    id: dataPusat.id,
    nama_cabang: dataPusat.nama_cabang,
    alamat: dataPusat.alamat,
    no: [
      {
        id: 1,
        icon: FaPhone, // Replace with the actual icon component
        value: dataPusat.no_telp,
      },
      {
        id: 2,
        icon: FiMail, // Replace with the actual icon component
        value: dataPusat.no_hp,
      },
    ],
  };

  const getDataCabang = ALAMAT?.filter(
    (item) => item.nama_cabang !== "Kantor Pusat"
  );

  // Use the map function to transform the data into the desired format
  const formattedDataCabang = getDataCabang?.map((item) => ({
    id: item.id,
    nama_cabang: item.nama_cabang,
    alamat: item.alamat,
    no: [
      {
        id: 1,
        icon: FaPhone, // Replace with the actual icon component
        value: item.no_telp,
      },
      {
        id: 2,
        icon: FiMail, // Replace with the actual icon component
        value: item.no_hp,
      },
    ],
  }));

  return (
    <KontakKamiSite>
      <div className="tentang_container">
        <div className="tentang_content">
          <HeadingComponent
            Heading={dataWording ? dataWording[3]?.text : ""}
            Text={dataWording ? dataWording[3]?.desc : ""}
          />
        </div>
        <div className="tentang_maps">
          <div className="maps">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3963.3733661918586!2d111.0526794!3d-6.6004364!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e712af47708bd77%3A0xc3d92b5cf51f5b87!2sPT.%20BPR%20Syari&#39;ah%20Artha%20Mas%20Abadi!5e0!3m2!1sid!2sid!4v1664027823534!5m2!1sid!2sid"
              allowFullScreen
              loading="lazy"
              title="Map Bank"
            />
          </div>

          {transformedDataPusat && (
            <div className="contact">
              <h1>{transformedDataPusat.nama_cabang}</h1>
              <p>{transformedDataPusat.alamat}</p>
              <div className="no_telp">
                {transformedDataPusat.no &&
                  transformedDataPusat.no.map((item, i) => (
                    <p key={i}>
                      <item.icon /> {item.value}
                    </p>
                  ))}
              </div>
              <Button
                icon={FaAccusoft}
                label="Form Pengaduan"
                to="./hubungi-kami"
              />
            </div>
          )}
        </div>
        {formattedDataCabang && (
          <div className="tentang_cabang">
            <h1>Kantor Cabang</h1>
            <div className="cabang_bank">
              {formattedDataCabang &&
                formattedDataCabang?.map((item, i) => (
                  <div key={i} className="cabang_content">
                    <h1>{item.nama_cabang}</h1>
                    <p>{item.alamat}</p>
                    <div className="no_telp">
                      {item.no &&
                        item.no.map((no_telp, i) => (
                          <p key={i}>
                            <no_telp.icon /> {no_telp.value}
                          </p>
                        ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </KontakKamiSite>
  );
};

const OrganisasiSection = ({ dataWording }) => {
  const { data: dataOrganisasi, isloading } = DATAFETCH(
    "https://admin.arthamasabadi.co.id/api/v1/direksi"
  );
  const allOrganisasi = [
    "All",
    ...new Set(dataOrganisasi?.map((item) => item.jabatan) || []),
  ];
  const [organisasi, setOrganisasi] = useState(dataOrganisasi || []);
  const buttons = allOrganisasi;
  const [active, setActive] = useState("All");
  const filter = (button) => {
    if (button === "All") {
      setOrganisasi(dataOrganisasi || []);
      setActive(button);
      return;
    }
    const filteredData = (dataOrganisasi || []).filter(
      (item) => item.jabatan === button
    );
    setOrganisasi(filteredData);
    setActive(button);
  };
  useEffect(() => {
    setOrganisasi(dataOrganisasi || []);
  }, [dataOrganisasi]);

  const STRUKTUR = DATAFETCH(
    "https://admin.arthamasabadi.co.id/api/v1/struktur"
  )?.data;

  return (
    <OrganisasiSite>
      <div className="organisasi_container">
        <div className="organisasi_content">
          <HeadingComponent
            Heading={dataWording ? dataWording[2]?.text : ""}
            Text={dataWording ? dataWording[2]?.desc : ""}
          />
        </div>

        {!isloading ? (
          <div className="organisasi_page">
            <div className="button_organisasi">
              <ButtonFilterComponent
                filter={filter}
                button={buttons}
                active={active}
              />
            </div>
            <motion.div layout className="card_organisasi">
              <AnimatePresence>
                {organisasi?.map((item, i) => (
                  <Card judul="Bisa 1" items={item} key={i} />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        ) : (
          "loading...."
        )}

        <ButtonDownloadOrganisasi
          icon={FaDownload}
          label={STRUKTUR?.judul}
          file={`https://admin.arthamasabadi.co.id/storage/files/strukturs/${STRUKTUR?.pdfpath}`}
        />
      </div>
    </OrganisasiSite>
  );
};

const ButtonFilterComponent = ({ filter, button, active }) => {
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
        <div className="circle">
          <div className="gambar_img">
            <button onClick={openModal} id={item.items.id}>
              <img
                src={
                  `https://admin.arthamasabadi.co.id/storage/images/direksis/${item?.items?.photo}`
                    ? `https://admin.arthamasabadi.co.id/storage/images/direksis/${item?.items?.photo}`
                    : pro_not
                }
                alt={item.items.nama}
              />
            </button>
          </div>
        </div>

        <div className="text_nama" style={{ marginTop: "20px" }}>
          <span>{item?.items?.nama}</span>
          <p>{item?.items?.jabatan}</p>
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

const Tab = ({ children, active, judul }) => {
  const [activeTab, setActiveTab] = useState(active);
  const [tabsData, setTabsData] = useState([]);

  useEffect(() => {
    let data = [];

    React.Children.forEach(children, (element) => {
      if (!React.isValidElement(element)) return;

      const {
        props: { tab, children, images },
      } = element;
      data.push({ tab, children, images });
    });

    setTabsData(data);
  }, [children]);

  return (
    <Tabs>
      <ul className={`tabs_button ${tabsData.length > 6 ? "many_tabs" : ""}`}>
        {tabsData?.map((tabs, idx) => (
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
            judulParent={judul}
            item={tabsData[activeTab] && tabsData[activeTab].children}
            judul={tabsData[activeTab] && tabsData[activeTab].tab}
            images={tabsData[activeTab] && tabsData[activeTab].images}
          />
        </div>
      </div>
    </Tabs>
  );
};

const ContentTab = (item) => {
  const [data, setData] = useState([]);

  const handleButton = () => {
    setData(item.judulParent);
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);
  return (
    <ContentTabSite>
      <div className="tab_content">
        <div className="gambar_banner">
          <img
            src={`https://admin.arthamasabadi.co.id/storage/images/produklayanans/${item?.images}`}
            alt="blog"
          />
        </div>
        <div className="value">
          <div className="value_b">
            <div
              className="value_all"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(item?.item),
              }}
            ></div>
          </div>
        </div>
        <div className="button_form">
          <div className="button_form_text">
            Apa anda tertarik dengan produk layanan ini?**
            <p className="text_baru">**Syarat dan ketentuan berlaku</p>
          </div>
          <div className="button_form_pembiayaan">
            <Button
              icon={FaAccusoft}
              label="Daftar Disini"
              style={{ margin: "auto" }}
              onClick={handleButton}
              to="/form-pengajuan"
            />
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

const LayananSection = ({ judul, id, index, DATA_TABS, link }) => {
  const TABS = DATA_TABS;
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
              Text={`Berikut ini adalah Layanan ${
                link === "penyimpanan-dana" ? "Penyimpanan" : "Penyaluran"
              } daripada BPR Syariah Artha Mas Abadi:`}
            />
            {TABS ? (
              <div className="layanan_tabs">
                <div className="content">
                  <Tab judul={judul} active={Number(index)}>
                    {TABS?.map((tab, idx) => (
                      <Tab.TabPanel
                        key={`Tab-${idx}`}
                        tab={tab?.nama_produklayanan}
                        images={tab?.foto_thumbnail}
                      >
                        {tab?.deskripsi}
                      </Tab.TabPanel>
                    ))}
                  </Tab>
                </div>
              </div>
            ) : (
              <div className="layanan_tabs">
                <div className="content">Data Tidak Ditemukan</div>
              </div>
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
        {tabsData?.map((tabs, idx) => (
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
  let pathSection;
  if (item.judul === "Laporan GCG") {
    pathSection = "gcgs";
  } else {
    pathSection = "triwulans";
  }
  return (
    <ContentTabSite>
      <div className="tab_content">
        <div className="value">
          <div className="button_download">
            {item?.item?.fitur?.length !== 0 ? (
              <>
                {item?.item &&
                  item?.item.fitur?.map((item, i) => (
                    <div key={i} className="card_download">
                      <div className="text_download">
                        <h1>{item.judul}</h1>
                        <p>{item.tanggal}</p>
                      </div>
                      <ButtonDownloadPublikasi
                        icon={FaDownload}
                        label={item.judul}
                        file={`https://admin.arthamasabadi.co.id/storage/files/${pathSection}/${item?.pdfpath}`}
                        judul={item.judul}
                      />
                    </div>
                  ))}
              </>
            ) : (
              <div
                style={{ textAlign: "left", fontSize: "14px" }}
                className="none"
              >
                Keterangan : Sedang tidak ada data file yang tersedia.
              </div>
            )}
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

const PublikasiSection = ({ DATA_TABS, dataWording }) => {
  const TABS = DATA_TABS;

  return (
    <LayananSite>
      <div className="layanan_container">
        <div className="layanan_content">
          <HeadingComponent
            Heading={dataWording ? dataWording[1]?.text : ""}
            Text={dataWording ? dataWording[1]?.desc : ""}
          />
          <div className="layanan_tabs">
            <div className="content">
              <TabPublikasi active={0}>
                {TABS?.map((tab, idx) => (
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
  const [values, setValues] = useState({
    nama: "",
    number: "",
    textArea: "",
  });

  const [berhasil, setBerhasil] = useState(false);
  const [dataresponse, setDataResponse] = useState([]);

  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      nama: values.nama,
      no_hp: values.number,
      pesan: values.textArea,
    };
    setValues({ nama: "", number: "", textArea: "" });
    axios
      .post("https://admin.arthamasabadi.co.id/api/v1/pengaduan", data)
      .then((response) => {
        setDataResponse(response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log("data tidak berhasil disimpan");
        } else if (error.request) {
          console.log("jaringan error");
        } else {
          console.log(error);
        }
      });
    setBerhasil(true);
  };
  return (
    <HubungiSite>
      <div className="hubungi_container">
        <div className="hubungi_content">
          <HeadingComponent
            Heading="Form Pengaduan"
            Text="Jika Anda memiliki pertanyaan atau tidak dapat menemukan apa yang Anda cari, jangan ragu untuk menghubungi kami."
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
                      onSubmit={handleSubmit}
                      id="form_baru"
                    >
                      <div className="inputan">
                        <FormInput
                          judul="Nama"
                          placeholder="Nama"
                          type="text"
                          value={values.nama}
                          onChange={set("nama")}
                        />
                        <FormInput
                          judul="No. Handphone"
                          placeholder="No. Handphone"
                          type="number"
                          value={values.number}
                          onChange={set("number")}
                        />
                      </div>
                      <FormTextArea
                        value={values.textArea}
                        onChange={set("textArea")}
                        placeholder="Pesan Anda"
                      />
                      <p style={{ fontSize: "12px", borderBottom: "none" }}>
                        <b>Catatan Lain : </b> Pesan balasan daripada form
                        pengaduan akan dikirimkan melalui No. Hp yang di
                        masukan, jadi pastikan No. Hp anda aktif dan benar.
                      </p>
                      {dataresponse?.success && berhasil ? (
                        <p className="informasi">
                          <b>Informasi : </b>
                          {dataresponse?.message}, silahkan cek pesan WhatsApp
                          secara berkala.
                          <button onClick={() => setBerhasil(false)}>
                            <FiX />
                          </button>
                        </p>
                      ) : (
                        ""
                      )}

                      <div className="button_flex">
                        <Button
                          id="form_baru"
                          icon={FaAccusoft}
                          label="Kirim Pesan Pengaduan"
                          style={{ fontSize: "12px" }}
                        >
                          Hitung
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="card_form" style={{ width: "30%" }}>
                <div className="content">
                  <p>
                    <b>Keteragan : </b>Kontak umum yang dapat dihubungi.
                  </p>
                  <div className="content_form">
                    <div className="contact_item">
                      {MEDIA_SOSIAL?.map((item, i) => (
                        <div key={i} className="item_contactNew">
                          <div className="icon_text">
                            <item.icon />
                            {item?.label}
                          </div>
                          <div
                            className="label"
                            style={{ textDecoration: "underline" }}
                          >
                            {item?.to ? (
                              <a href={item?.to}>{item?.title}</a>
                            ) : (
                              item?.title
                            )}
                          </div>
                        </div>
                      ))}
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

const CardInformasiSection = ({ dataWording }) => {
  const dataBunga = DATAFETCH(
    "https://admin.arthamasabadi.co.id/api/v1/bunga"
  )?.data;

  const withoutDeposito = dataBunga?.filter(
    (item) => !item.jenis_investasi.includes("Deposito")
  );

  const withDeposito = dataBunga?.filter((item) =>
    item.jenis_investasi.includes("Deposito")
  );

  let dataBaru = [];

  for (let i = 0; i < withDeposito?.length; i++) {
    dataBaru.push(withDeposito[0]);
  }

  return (
    <CardInformasiSite>
      <div className="informasi_container">
        <div className="informasi_content">
          <HeadingComponent
            Heading={dataWording ? dataWording[2]?.text : ""}
            Text={dataWording ? dataWording[2]?.desc : ""}
          />
          <div className="informasi_card_content">
            <div className="card_content">
              <div className="heading">Tabungan</div>
              <div className="body">
                <div className="class_table">
                  {withoutDeposito ? (
                    <table>
                      <>
                        <thead>
                          <tr style={{ background: "#079607" }}>
                            <th rowSpan="2">Jenis Investasi</th>
                            <th rowSpan="2">Nisbah</th>
                            <th colSpan="3">Equivalen Rate(%)</th>
                          </tr>
                          <tr style={{ background: "#007c00" }}>
                            <th className="text">{dataBaru[0]?.nama_bulan1}</th>
                            <th className="text">{dataBaru[0]?.nama_bulan2}</th>
                            <th className="text">{dataBaru[0]?.nama_bulan3}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {withoutDeposito?.map((item, i) => (
                            <tr key={i}>
                              <td>{item.jenis_investasi}</td>
                              {item.nisbah === "-" ? (
                                <td>{item.nisbah}</td>
                              ) : (
                                <td>{item.nisbah}%</td>
                              )}
                              <td>{item.bunga_bulan1}%</td>
                              <td>{item.bunga_bulan2}%</td>
                              <td>{item.bunga_bulan3}%</td>
                            </tr>
                          ))}
                        </tbody>
                      </>
                    </table>
                  ) : (
                    <div className="footer">
                      <b>Keterangan:</b> Maaf, data Tabungan saat ini sedang
                      tidak tersedia!
                    </div>
                  )}
                </div>
              </div>
              {withoutDeposito ? (
                <div className="footer">
                  Keterangan: Simpanan sampai dengan 2 Milyar Rupiah dijamin
                  oleh LPS.
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="card_content">
              <div className="heading">Deposito</div>
              <div className="body">
                <div className="class_table">
                  {withDeposito ? (
                    <table>
                      <>
                        <thead>
                          <tr style={{ background: "#079607" }}>
                            <th rowSpan="2">Jenis Investasi</th>
                            <th rowSpan="2">Nisbah</th>
                            <th colSpan="3">Equivalen Rate(%)</th>
                          </tr>
                          <tr style={{ background: "#007c00" }}>
                            <th className="text">{dataBaru[0]?.nama_bulan1}</th>
                            <th className="text">{dataBaru[0]?.nama_bulan2}</th>
                            <th className="text">{dataBaru[0]?.nama_bulan3}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {withDeposito?.map((item, i) => (
                            <tr key={i}>
                              <td>{item.jenis_investasi}</td>
                              <td>{item.nisbah}%</td>
                              <td>{item.bunga_bulan1}%</td>
                              <td>{item.bunga_bulan2}%</td>
                              <td>{item.bunga_bulan3}%</td>
                            </tr>
                          ))}
                        </tbody>
                      </>
                    </table>
                  ) : (
                    <div className="footer">
                      <b>Keterangan:</b> Maaf, data Deposito saat ini sedang
                      tidak tersedia!
                    </div>
                  )}
                </div>
              </div>
              {!withDeposito ? (
                <div className="footer">
                  Keterangan: Simpanan sampai dengan 2 Milyar Rupiah dijamin
                  oleh LPS.
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </CardInformasiSite>
  );
};

const PengajuanSection = () => {
  const [checked, setChecked] = React.useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("data"));
    if (items) {
      setData(items);
    }
  }, []);

  console.log(data);
  return (
    <PengajuanSite>
      <div className="pengajuan_container">
        <div className="pengajuan_content">
          <HeadingComponent
            Heading="Pengajuan Tabungan atau Pembiayaan"
            Text="Jika Anda memiliki pertanyaan atau tidak dapat menemukan apa yang Anda cari, jangan ragu untuk menghubungi kami."
          />

          <div className="pengajuan_card">
            <div className="card_form">
              <div className="pengajuan_body">
                <div className="heading">
                  Syarat dan Ketentuan Pengajuan Tabungan dan Pembiayan
                </div>
                <p>
                  Sehubungan dengan pembukaan rekening oleh PT. BPR Syariah
                  Artha Mas Abadi. (Selanjutnya disebut Bank Syariah) atas
                  permintaan pemohon (selanjutnya disebut Nasabah), dengan ini
                  Nasabah menyatakan setuju bahwa rekening tersebut tunduk dan
                  akan ditatakerjakan sesuai dengan syarat dan ketentuan dibawah
                  ini :
                </p>
                <div className="value_pengajuan">
                  <div className="value_keterangan">
                    <h1>Rekening</h1>
                    <p></p>
                    <ol>
                      <div>
                        <li>
                          Yang dimaksud rekening dalam ketentuan ini adalah
                          pembukuan Bank atas produk-produk simpanan Bank
                          Syariah, yang dibuka baik secara langsung maupun
                          secara tidak langsung atas permintaan Nasabah, baik
                          yang telah ada maupun yang akan ada dikemudian hari.
                        </li>
                        <li>
                          Rekening tertentu dapat dibuka dalam mata uang rupiah.
                        </li>
                        <li>
                          Pembukaan rekening wajib didasarkan atas permohonan
                          secara tertulis oleh Nasabah dengan memenuhi segala
                          persyaratan yang ditentukan oleh Bank Syariah.
                        </li>
                        <li>
                          Bank Syariah melarang segala bentuk penyalahgunaan
                          rekening, termasuk sebagai sarana tindakan berindikasi
                          pidana. Dalam hal terdapat indikasi penyalahgunaan
                          rekening oleh nasabah, maka Bank Syariah berhak untuk
                          melakukan pemblokiran rekening, mendebet kembali dana
                          untuk diselesaikan sesuai dengan ketentuan yang
                          berlaku dan atau sesuai kebijakan Bank Syariah,
                          dan/atau penutupan rekening.
                        </li>
                      </div>
                    </ol>
                  </div>
                </div>
                <div className="pengajuan_footer">
                  <label>
                    <input
                      type="checkbox"
                      name="checkbox"
                      defaultChecked={checked}
                      onChange={() => setChecked(!checked)}
                    />
                    <p>
                      Saya setuju dengan syarat dan ketentuan tersebut di atas
                    </p>
                  </label>

                  {data === "Penyimpanan Dana" ? (
                    <Link
                      className={`pengajuan_button ${
                        !checked ? "pengajuan_disable_button" : ""
                      }`}
                      to={"/form/tabungan"}
                      state={{ state: checked }}
                    >
                      Buka Tabungan
                    </Link>
                  ) : data === "Penyaluran Dana" ? (
                    <Link
                      className={`pengajuan_button ${
                        !checked ? "pengajuan_disable_button" : ""
                      }`}
                      to={"/form/pembiayaan"}
                      state={{ state: checked }}
                    >
                      Buka Pembiayaan
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PengajuanSite>
  );
};

const FormNasabahSection = () => {
  const [values, setValues] = useState({
    nama: "",
    alamat: "",
    jenis_produk: "",
    nik: "",
    no_hp: "",
    tgl_lahir: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [berhasil, setBerhasil] = useState(false);
  const [dataresponse, setDataResponse] = useState([]);

  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  const inputRef = useRef(null);

  const handleUpload = (e) => {
    if (e.target.files.length !== 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = () => {
        setPreview({
          // image: URL.createObjectURL(file),
          userImage: reader.result,
        });
      };
      setSelectedFile(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...values,
      foto_ktp: selectedFile,
      // fileNew: preview.userImage,
    };
    setValues({
      nama: "",
      alamat: "",
      jenis_produk: "",
      nik: "",
      no_hp: "",
      tgl_lahir: "",
    });
    inputRef.current.value = null;

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    axios
      .post("https://admin.arthamasabadi.co.id/api/v1/nasabah", data, config)
      .then((response) => {
        setDataResponse(response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log("data tidak berhasil disimpan");
        } else if (error.request) {
          console.log("jaringan error");
        } else {
          console.log(error);
        }
      });

    setPreview(null);
    setBerhasil(true);
  };

  const dataDrop = [
    "Tabungan iB Wadiah",
    "Tabungan iB Multijasa",
    "Tabungan iB Mudharabah",
    "Pembiayaan iB Wadiah",
    "Pembiayaan iB Musyarakah",
    "Pembiayaan iB Multijasa",
    "Pembiayaan iB Gadai Emas",
  ];

  return (
    <FormNasabahSite>
      <div className="nasabah_container">
        <div className="nasabah_content">
          <HeadingComponent
            Heading="Pengajuan Buka Rekening"
            Text="Jika Anda memiliki pertanyaan atau tidak dapat menemukan apa yang Anda cari, jangan ragu untuk menghubungi kami."
          />
          <FormContent>
            <div className="content_form_buka">
              <div className="card_form">
                <div className="content">
                  <p>
                    <b>Keteragan : </b>Kirimkan pesan atau pengaduan kepada
                    kami, senang melayani anda sebagai nasabah kami,
                    Terimakasih.
                  </p>
                  <div className="content_form">
                    <form
                      className="form_style"
                      onSubmit={handleSubmit}
                      id="form_baru"
                    >
                      <div className="inputan">
                        <FormInput
                          judul="Nama"
                          placeholder="Jumlah Pinjamanan"
                          type="text"
                          value={values.nama}
                          onChange={set("nama")}
                        />
                        <FormInput
                          judul="Alamat"
                          placeholder="Alamat"
                          type="text"
                          value={values.alamat}
                          onChange={set("alamat")}
                        />
                      </div>
                      <div className="inputan">
                        <FormInput
                          judul="No HP"
                          placeholder="No HP"
                          type="number"
                          value={values.no_hp}
                          onChange={set("no_hp")}
                        />
                        <FormInput
                          judul="Tanggal Lahir"
                          placeholder="Tanggal Lahir"
                          type="date"
                          value={values.tgl_lahir}
                          onChange={set("tgl_lahir")}
                        />
                      </div>
                      <div className="inputan">
                        <FormInputSelectProduct
                          option={dataDrop}
                          placeholder="Jenis Layanan"
                          value={values.jenis_produk}
                          onChange={set("jenis_produk")}
                        />
                        <FormInput
                          judul="No. Identitas"
                          placeholder="No. Identitas"
                          type="text"
                          value={values.nik}
                          onChange={set("nik")}
                        />
                        <FormInput
                          judul="File Identitas"
                          placeholder="File Identitas"
                          type="file"
                          name="ktp"
                          onChange={handleUpload}
                          innerRef={inputRef}
                        />
                      </div>
                      <p style={{ fontSize: "12px", borderBottom: "none" }}>
                        <b>Catatan Lain : </b> Pesan balasan daripada form
                        pengaduan akan dikirimkan melalui No. Hp yang di
                        masukan.
                      </p>
                      {dataresponse?.success && berhasil ? (
                        <p className="informasi">
                          <b>Informasi : </b>
                          {dataresponse?.message}, silahkan cek pesan WhatsApp
                          secara berkala.
                          <button onClick={() => setBerhasil(false)}>
                            <FiX />
                          </button>
                        </p>
                      ) : (
                        ""
                      )}
                      <div className="bungkus_image">
                        {preview === null ? (
                          ""
                        ) : (
                          <>
                            <div className="text">Preview Gambar</div>
                            <img
                              style={{ height: "100%", width: "100%" }}
                              src={preview.userImage}
                              alt="seletedFile"
                            />
                          </>
                        )}
                      </div>
                      <div className="button_flex">
                        <Button
                          id="form_baru"
                          icon={FaAccusoft}
                          label="Kirim Pesan Pengaduan"
                          style={{ fontSize: "12px" }}
                        >
                          Hitung
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </FormContent>
        </div>
      </div>
    </FormNasabahSite>
  );
};

const PenyaluranSection = ({ id }) => {
  const [values, setValues] = useState({
    nama: "",
    alamat: "",
    jenis_produk: "",
    nik: "",
    namaIbu: "",
  });

  const [select, setSelect] = useState("");
  const [berhasil, setBerhasil] = useState(false);

  const handleSelect = (e) => {
    setSelect(e.target.value);
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  const inputRef = useRef(null);

  const handleUpload = (e) => {
    if (e.target.files.length !== 0) {
      setPreview({ image: URL.createObjectURL(e.target.files[0]) });
    }
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const [local, setLocal] = useState([]);

  const HandleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...values,
      select: select,
      file: selectedFile,
    };
    console.log(data);
    setValues({
      nama: "",
      alamat: "",
      jenis_produk: "",
      nik: "",
      namaIbu: "",
    });
    setSelect("");
    inputRef.current.value = null;
    setBerhasil(true);
    setLocal(data);
  };

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(local));
  }, [local]);

  const valueSelect = [
    {
      name: "Penyimpanan Dana",
      value: "penyimpanan_dana",
    },
    {
      name: "Penyaluran Dana",
      value: "penyaluran_dana",
    },
  ];

  return (
    <PenyaluranSite>
      <div className="penyaluran_container">
        <div className="penyaluran_section">
          {id === "tabungan" ? (
            <HeadingComponent
              Heading={
                id === "tabungan"
                  ? "Form Permohonan Tabungan"
                  : id === "pembiayaan"
                  ? "Form Pengajuan Pembiayaan"
                  : null
              }
              Text="Jika Anda memiliki pertanyaan atau tidak dapat menemukan apa yang Anda cari, jangan ragu untuk menghubungi kami."
            />
          ) : id === "pembiayaan" ? (
            <HeadingComponent
              Heading={
                id === "tabungan"
                  ? "Form Permohonan Tabungan"
                  : id === "pembiayaan"
                  ? "Form Pengajuan Pembiayaan"
                  : null
              }
              Text="Jika Anda memiliki pertanyaan atau tidak dapat menemukan apa yang Anda cari, jangan ragu untuk menghubungi kami."
            />
          ) : null}
          {id === "tabungan" ? (
            <FormContent>
              <div className="content_form_buka">
                <div className="card_form">
                  <div className="content">
                    <p>
                      <b>Keteragan : </b>Kirimkan pesan atau pengaduan kepada
                      kami, senang melayani anda sebagai nasabah kami,
                      Terimakasih.
                    </p>
                    <div className="content_form">
                      <form
                        className="form_style"
                        onSubmit={HandleSubmit}
                        id="form_baru"
                      >
                        <div className="inputan">
                          <FormInputSelectNew
                            option={valueSelect}
                            onChange={handleSelect}
                            placeholder="Jenis Layanan"
                            value={select}
                          />
                          <FormInput
                            judul="Nama"
                            placeholder="Nama"
                            type="text"
                            value={values.nama}
                            onChange={set("nama")}
                          />
                        </div>
                        <div className="inputan">
                          <FormInput
                            judul="Nama Ibu Kandung"
                            placeholder="Nama Ibu Kandung"
                            type="text"
                            value={values.namaIbu}
                            onChange={set("namaIbu")}
                          />
                          <FormInput
                            judul="Alamat"
                            placeholder="Alamat"
                            type="text"
                            value={values.alamat}
                            onChange={set("alamat")}
                          />
                        </div>
                        <div className="inputan">
                          <FormInput
                            judul="Jenis Identitas"
                            placeholder="Jenis Identitas"
                            type="text"
                            value={values.jenis_produk}
                            onChange={set("jenis_produk")}
                          />
                          <FormInput
                            judul="No. Identitas"
                            placeholder="No. Identitas"
                            type="text"
                            value={values.nik}
                            onChange={set("nik")}
                          />
                          <FormInput
                            judul="File Identitas"
                            placeholder="File Identitas"
                            type="file"
                            onChange={handleUpload}
                            innerRef={inputRef}
                          />
                        </div>
                        <p style={{ fontSize: "12px", borderBottom: "none" }}>
                          <b>Catatan Lain : </b> Pesan balasan daripada form
                          pengaduan akan dikirimkan melalui No. Hp yang di
                          masukan.
                        </p>
                        {berhasil ? (
                          <p className="informasi">
                            <b>Informasi : </b>
                            Data Berhasil Dikirim, silahkan cek pesan WhatsApp
                            secara berkala.
                            <button onClick={() => setBerhasil(false)}>
                              <FiX />
                            </button>
                          </p>
                        ) : (
                          ""
                        )}
                        <div className="button_flex">
                          <Button
                            id="form_baru"
                            icon={FaAccusoft}
                            label="Kirim Pesan Pengaduan"
                            style={{ fontSize: "12px" }}
                          >
                            Hitung
                          </Button>
                        </div>
                        <div className="bungkus_image">
                          <div className="text">Test Gambar</div>

                          {preview === null ? (
                            ""
                          ) : (
                            <img
                              style={{ height: "100%", width: "100%" }}
                              src={preview.image}
                              alt="seletedFile"
                            />
                          )}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </FormContent>
          ) : id === "pembiayaan" ? (
            <FormContent>
              <div className="content_form_buka">
                <div className="card_form">
                  <div className="content">
                    <p>
                      <b>Keteragan : </b>Kirimkan pesan atau pengaduan kepada
                      kami, senang melayani anda sebagai nasabah kami,
                      Terimakasih.
                    </p>
                    <div className="content_form">
                      <form
                        className="form_style"
                        onSubmit={HandleSubmit}
                        id="form_baru"
                      >
                        <div className="inputan">
                          <FormInputSelectNew
                            option={valueSelect}
                            onChange={handleSelect}
                            placeholder="Jenis Layanan"
                            value={select}
                          />
                          <FormInput
                            judul="Nama"
                            placeholder="Nama"
                            type="text"
                            value={values.nama}
                            onChange={set("nama")}
                          />
                        </div>
                        <div className="inputan">
                          <FormInput
                            judul="Nama Ibu Kandung"
                            placeholder="Nama Ibu Kandung"
                            type="text"
                            value={values.namaIbu}
                            onChange={set("namaIbu")}
                          />
                          <FormInput
                            judul="Alamat"
                            placeholder="Alamat"
                            type="text"
                            value={values.alamat}
                            onChange={set("alamat")}
                          />
                        </div>
                        <div className="inputan">
                          <FormInput
                            judul="Jenis Identitas"
                            placeholder="Jenis Identitas"
                            type="text"
                            value={values.jenis_produk}
                            onChange={set("jenis_produk")}
                          />
                          <FormInput
                            judul="No. Identitas"
                            placeholder="No. Identitas"
                            type="text"
                            value={values.nik}
                            onChange={set("nik")}
                          />
                          <FormInput
                            judul="File Identitas"
                            placeholder="File Identitas"
                            type="file"
                            onChange={handleUpload}
                            innerRef={inputRef}
                          />
                        </div>
                        <p style={{ fontSize: "12px", borderBottom: "none" }}>
                          <b>Catatan Lain : </b> Pesan balasan daripada form
                          pengaduan akan dikirimkan melalui No. Hp yang di
                          masukan.
                        </p>
                        {berhasil ? (
                          <p className="informasi">
                            <b>Informasi : </b>
                            Data Berhasil Dikirim, silahkan cek pesan WhatsApp
                            secara berkala.
                            <button onClick={() => setBerhasil(false)}>
                              <FiX />
                            </button>
                          </p>
                        ) : (
                          ""
                        )}
                        <div className="button_flex">
                          <Button
                            id="form_baru"
                            icon={FaAccusoft}
                            label="Kirim Pesan Pengaduan"
                            style={{ fontSize: "12px" }}
                          >
                            Hitung
                          </Button>
                        </div>
                        <div className="bungkus_image">
                          <div className="text">Test Gambar</div>

                          {preview === null ? (
                            ""
                          ) : (
                            <img
                              style={{ height: "100%", width: "100%" }}
                              src={preview.image}
                              alt="seletedFile"
                            />
                          )}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </FormContent>
          ) : null}
        </div>
      </div>
    </PenyaluranSite>
  );
};

const SimulasiBankSection = () => {
  return (
    <SimulasiBankSite>
      <div className="simulasi_container">
        <div className="simulasi_content">
          <div className="simulasi_judul">
            <div className="heading">
              Ayo, coba untuk SIMULASI TABUNGAN atau SIMULASI PEMBIAYAAN anda!!
            </div>
            <div className="desc">
              Rencanakan dan susun masa depan bersama dengan keluarga & teman.
            </div>
          </div>
          <div className="simulasi_body">
            <div className="card_content">
              <div className="img_card">
                <img src={simu_tabungan} alt="simu_tabungan" />
              </div>
              <div className="text_card">
                <p>Coba untuk simulasi tabungan anda di Bank Artha Mas Abadi</p>
                <ButtonLink
                  icon={FaAccusoft}
                  label="Simulasi Tabungan"
                  style={{ fontSize: "14px" }}
                  to="simulasi-bank/simulasi"
                />
              </div>
            </div>
            <div className="card_content">
              <div className="img_card">
                <img src={simu_pembiayaan} alt="simu_pembiayaan" />
              </div>
              <div className="text_card">
                <p>Ayo Simulasi Pembiayaan anda di Bank Artha Mas Abadi</p>
                <ButtonLink
                  icon={FaAccusoft}
                  label="Simulasi Pembiayaan"
                  style={{ fontSize: "14px" }}
                  to="simulasi-bank/simulasi-pembiayaan"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SimulasiBankSite>
  );
};

export {
  KontakKamiSection,
  OrganisasiSection,
  LayananSection,
  PublikasiSection,
  ErrorSection,
  HubungiSection,
  CardInformasiSection,
  PengajuanSection,
  FormNasabahSection,
  PenyaluranSection,
  SimulasiBankSection,
};
