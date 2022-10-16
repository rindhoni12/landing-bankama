import React, { useEffect, useRef, useState } from "react";
import { FaAccusoft } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { HeadingComponent, Button } from "../../components";
import {
  FormInput,
  FormInputCurrency,
  FormInputDrop,
  FormInputSelectNewConfig,
} from "../../components/form";
import { PenyaluranSite } from "../../components/section/SectionElements";
import { FormContent } from "../../components/form/FormElements";
import axios from "axios";

const Form = ({ id }) => {
  const [berhasil, setBerhasil] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [local, setLocal] = useState([]);
  const inputRef = useRef(null);
  const [dataresponse, setDataResponse] = useState([]);
  const [values, setValues] = useState({
    nama: "",
    alamat: "",
    no_hp: "",
    nik: "",
    tempat: "",
    ttl: "",
    jangka_waktu_text: "",
  });

  const [selectNew, setSelectNew] = useState({
    pilihan_produk: "",
    agunan: "",
    jangka_waktu: "",
  });

  const handleSelectNew = (name) => {
    return ({ target: { value } }) => {
      setSelectNew((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  const handleUpload = (e) => {
    if (e.target.files.length !== 0) {
      setPreview({ image: URL.createObjectURL(e.target.files[0]) });
    }
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const HandleSubmit = (e) => {
    if (id === "tabungan") {
      e.preventDefault();
      const tabunganBodys = {
        nama: values?.nama,
        foto_ktp: selectedFile,
        nik: values?.nik,
        tgl_lahir: values?.ttl,
        alamat_domisili: values?.alamat,
        no_hp: values?.no_hp,
        jenis_produk: selectNew?.pilihan_produk,
        tempat_lahir: values?.tempat,
      };
      setValues({
        nama: "",
        nik: "",
        ttl: "",
        alamat: "",
        no_hp: "",
        tempat: "",
      });
      setSelectNew({
        pilihan_produk: "",
      });

      inputRef.current.value = null;
      const config = {
        headers: { "content-type": "multipart/form-data" },
      };

      axios
        .post(
          "https://admin.arthamasabadi.co.id/api/v1/tabungan",
          tabunganBodys,
          config
        )
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
      setTimeout(() => {
        setBerhasil(false);
      }, 5000);
      setLocal(tabunganBodys);
    } else if (id === "pembiayaan") {
      e.preventDefault();
      const dataNew = new FormData(e.target);
      const dataJumlah = Object.fromEntries(dataNew.entries());
      const pembiayaanBodys = {
        nama: values?.nama || "",
        foto_ktp: selectedFile || "",
        nik: values?.nik || "",
        tgl_lahir: values?.ttl || "",
        alamat_domisili: values?.alamat || "",
        no_hp: values?.no_hp || "",
        jenis_produk: selectNew?.pilihan_produk || "",
        tempat_lahir: values?.tempat || "",
        kebutuhan_dana: dataJumlah?.dana || "",
        agunan: selectNew?.agunan || "",
        jangka_waktu:
          selectNew?.pilihan_produk === "pembiayaan_ib_musyarakah" ||
          selectNew?.pilihan_produk === "ib_gadai_emas"
            ? selectNew?.jangka_waktu || ""
            : selectNew?.pilihan_produk === "pembiayaan_ib_multijasa" ||
              selectNew?.pilihan_produk === "pembiayaan_ib_murabahah"
            ? values?.jangka_waktu_text || ""
            : "",
      };

      inputRef.current.value = null;
      const configPembiayaan = {
        headers: { "content-type": "multipart/form-data" },
      };

      axios
        .post(
          "https://admin.arthamasabadi.co.id/api/v1/pembiayaan",
          pembiayaanBodys,
          configPembiayaan
        )
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

      setValues({
        nama: "",
        alamat: "",
        no_hp: "",
        nik: "",
        tempat: "",
        ttl: "",
        jangka_waktu_text: "",
      });
      setSelectNew({
        pilihan_produk: "",
        agunan: "",
        jangka_waktu: "",
      });

      setPreview(null);
      setBerhasil(true);
      setTimeout(() => {
        setBerhasil(false);
      }, 5000);
      setLocal(pembiayaanBodys);
    }
  };

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(local));
  }, [local]);

  const dataConfig = {
    tabungan: [
      {
        value: "tabungan_ib_wadiah",
        text: "Tabungan iB Wadiah",
      },
      {
        value: "tabungan_ib_haji",
        text: "Tabungan iB Haji",
      },
      {
        value: "tabungan_ib_pendidikan",
        text: "Tabungan iB Pendidikan",
      },
      {
        value: "tabungan_ib_qurban",
        text: "Tabungan iB Qurban",
      },
      {
        value: "tabungan_ib_si_muda",
        text: "Tabungan iB Si Muda",
      },
    ],
    pembiayaan: [
      {
        value: "pembiayaan_ib_murabahah",
        text: "Pembiayaan iB Murabahah",
      },
      {
        value: "pembiayaan_ib_musyarakah",
        text: "Pembiayaan iB Musyarakah",
      },
      {
        value: "pembiayaan_ib_multijasa",
        text: "Pembiayaan iB Multijasa",
      },
      {
        value: "ib_gadai_emas",
        text: "iB Gadai Emas",
      },
    ],
    agunan: [
      {
        value: "shm",
        text: "SHM",
      },
      {
        value: "spm",
        text: "SPM",
      },
    ],
    jangka_waktu: [
      {
        value: "4",
        text: "4 Bulan",
      },
      {
        value: "5",
        text: "5 Bulan",
      },
      {
        value: "6",
        text: "6 Bulan",
      },
      {
        value: "9",
        text: "9 Bulan",
      },
    ],
    jangka_waktu_gadai: [
      {
        value: "4",
        text: "4 Bulan",
      },
    ],
  };

  return (
    <PenyaluranSite>
      <div className="penyaluran_container">
        <div className="penyaluran_section">
          {id === "tabungan" || id === "pembiayaan" ? (
            <>
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
                            {id === "tabungan" ? (
                              <FormInputSelectNewConfig
                                onChange={handleSelectNew("pilihan_produk")}
                                placeholder="Pilihan Produk"
                                value={selectNew?.pilihan_produk || ""}
                                option={dataConfig?.tabungan}
                              />
                            ) : id === "pembiayaan" ? (
                              <FormInputSelectNewConfig
                                onChange={handleSelectNew("pilihan_produk")}
                                placeholder="Pilihan Produk"
                                value={selectNew?.pilihan_produk || ""}
                                option={dataConfig?.pembiayaan}
                              />
                            ) : null}
                            <FormInput
                              judul="Nama"
                              placeholder="Nama"
                              type="text"
                              value={values.nama || ""}
                              onChange={set("nama")}
                            />
                          </div>
                          <div className="inputan">
                            <FormInput
                              judul="Tempat Lahir"
                              placeholder="Tempat Lahir"
                              type="text"
                              value={values.tempat || ""}
                              onChange={set("tempat")}
                            />
                            <FormInput
                              judul="Tanggal Lahir"
                              placeholder="Tanggal Lahir"
                              type="date"
                              value={values.ttl || ""}
                              onChange={set("ttl")}
                            />
                            <FormInput
                              judul="Alamat"
                              placeholder="Alamat"
                              type="text"
                              value={values.alamat || ""}
                              onChange={set("alamat")}
                            />
                          </div>
                          {id === "pembiayaan" ? (
                            <div className="inputan">
                              <FormInputCurrency
                                nama="dana"
                                placeholder="Kebutuhan Dana"
                              />

                              {selectNew?.pilihan_produk &&
                              selectNew?.pilihan_produk ===
                                "pembiayaan_ib_musyarakah" ? (
                                <FormInputSelectNewConfig
                                  onChange={handleSelectNew("jangka_waktu")}
                                  placeholder="Jangka Waktu (Bulan)"
                                  value={selectNew?.jangka_waktu || ""}
                                  option={dataConfig?.jangka_waktu}
                                  text="Anda hanya dapat mengisi 4, 5, 6, atau 9 bulan"
                                />
                              ) : selectNew?.pilihan_produk ===
                                  "pembiayaan_ib_multijasa" ||
                                selectNew?.pilihan_produk ===
                                  "pembiayaan_ib_murabahah" ? (
                                <FormInputDrop
                                  text="Anda hanya dapat mengisi minimal 10 bulan dengan maksimal 60 bulan"
                                  judul="Jangka Waktu (Bulan)"
                                  placeholder="Jangka Waktu (Bulan)"
                                  type="text"
                                  value={values.jangka_waktu_text || ""}
                                  onChange={set("jangka_waktu_text")}
                                />
                              ) : selectNew?.pilihan_produk ===
                                "ib_gadai_emas" ? (
                                <FormInputSelectNewConfig
                                  onChange={handleSelectNew("jangka_waktu")}
                                  placeholder="Jangka Waktu (Bulan)"
                                  value={selectNew?.jangka_waktu || ""}
                                  option={dataConfig?.jangka_waktu_gadai}
                                  text="Anda hanya dapat mengisi jangka waktu 4 bulan"
                                />
                              ) : null}

                              <FormInputSelectNewConfig
                                onChange={handleSelectNew("agunan")}
                                placeholder="Agunan"
                                value={selectNew?.agunan || ""}
                                option={dataConfig?.agunan}
                              />
                            </div>
                          ) : null}
                          <div className="inputan">
                            <FormInput
                              judul="No. Hp"
                              placeholder="No. Hp"
                              type="number"
                              value={values.no_hp || ""}
                              onChange={set("no_hp")}
                            />
                            <FormInput
                              judul="No. Identitas (NIK)"
                              placeholder="No. Identitas (NIK)"
                              type="text"
                              value={values.nik || ""}
                              onChange={set("nik")}
                            />
                            <FormInput
                              judul="File Identitas (KTP)"
                              placeholder="File Identitas (KTP)"
                              type="file"
                              onChange={handleUpload}
                              innerRef={inputRef}
                              class="class_file"
                            />
                          </div>
                          <p style={{ fontSize: "12px", borderBottom: "none" }}>
                            <b>Catatan Lain : </b> Pastikan data yang anda
                            isikan sudah benar.
                          </p>

                          {dataresponse?.success && berhasil ? (
                            <p className="informasi">
                              <b>Informasi : </b>
                              {dataresponse?.message}, silahkan cek pesan
                              WhatsApp secara berkala.
                              <button onClick={() => setBerhasil(false)}>
                                <FiX />
                              </button>
                            </p>
                          ) : null}

                          <div
                            className="button_flex"
                            style={{
                              justifyContent: "space-between",
                              alignItem: "flex-start",
                            }}
                          >
                            <div
                              className="bungkus_image"
                              style={{ alignItems: "flex-start" }}
                            >
                              <div className="text">Preview KTP</div>
                              {preview === null ? null : (
                                <img
                                  style={{ height: "100%", width: "100%" }}
                                  src={preview.image}
                                  alt="seletedFile"
                                />
                              )}
                            </div>

                            {id === "tabungan" ? (
                              <Button
                                id="form_baru"
                                icon={FaAccusoft}
                                label="Kirim Permohonan Tabungan"
                                style={{ fontSize: "12px" }}
                              />
                            ) : id === "pembiayaan" ? (
                              <Button
                                id="form_baru"
                                icon={FaAccusoft}
                                label="Kirim Permohonan Pembiayaan"
                                style={{ fontSize: "12px" }}
                              />
                            ) : null}
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </FormContent>
            </>
          ) : null}
        </div>
      </div>
    </PenyaluranSite>
  );
};

export default Form;
