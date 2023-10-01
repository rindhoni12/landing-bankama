import React, { useState } from "react";
import { FormContent, FormSite } from "./FormElements";
import CurrencyInput from "react-currency-input-field";
import { FaAccusoft } from "react-icons/fa";
import { HeadingComponent } from "../atom";
import { Button, ButtonTransparent } from "../button";
import { DATAFETCH } from "../../config";

export const FormInputCurrency = (item) => {
  return (
    <div className="form_content">
      <label>{item.placeholder}</label>
      <CurrencyInput
        id={item.nama}
        name={item.nama}
        placeholder={item.placeholder}
        decimalsLimit={2}
        prefix="Rp "
        decimalSeparator=","
        groupSeparator="."
        className="form_currency"
        required
      />
    </div>
  );
};

export const FormInputSelect = (item) => {
  return (
    <div className="form_content">
      <label>{item.placeholder}</label>
      <select
        className="style_select"
        onChange={item.onChange}
        required
        value={item.value}
      >
        <option value="" disabled>
          {item.placeholder}
        </option>
        {item?.data &&
          item.data?.map((item, i) => (
            <option key={i} value={item.value}>
              {item.name}
            </option>
          ))}
      </select>
    </div>
  );
};

export const FormInputSelectDrop = (item) => {
  return (
    <div className="form_content">
      <label>{item.placeholder}</label>
      <select
        className="style_select"
        onChange={item.onChange}
        required
        value={item.value}
      >
        <option value="" disabled>
          {item.placeholder}
        </option>
        {item?.option &&
          item?.option.map((item, i) => (
            <option key={i} value={item.value}>
              {item.name}
            </option>
          ))}
      </select>
    </div>
  );
};

export const FormInputDrop = (item) => {
  return (
    <div className="form_content_input">
      <label>{item.judul}</label>
      <input
        min={10}
        max={60}
        name={item.name}
        id={item.judul}
        className="form_input"
        type="number"
        placeholder={item.placeholder}
        required
        onChange={item.onChange}
        value={item.value}
        ref={item.innerRef}
      />
      {item?.text ? <div className="text_keterangan">{item?.text}</div> : null}
    </div>
  );
};

export const FormInputSelectNew = (item) => {
  return (
    <div className="form_content_input">
      <label>{item.placeholder}</label>
      <select
        className="style_selectNew"
        onChange={item.onChange}
        required
        value={item.value}
      >
        <option value="" disabled>
          {item.placeholder}
        </option>
        {item?.option &&
          item?.option.map((item, i) => (
            <option key={i} value={item.value}>
              {item.name}
            </option>
          ))}
      </select>
    </div>
  );
};

export const FormInputSelectNewConfig = (item) => {
  return (
    <div className="form_content_input">
      <label>{item.placeholder}</label>
      <select
        className="style_selectNew"
        onChange={item.onChange}
        required
        value={item.value}
      >
        <option value="" disabled>
          {item.placeholder}
        </option>
        {item?.option &&
          item?.option.map((item, i) => (
            <option key={i} value={item.value}>
              {item.text}
            </option>
          ))}
      </select>
      <div className="text_keterangan">{item.text}</div>
    </div>
  );
};

export const FormInputSelectProduct = (item) => {
  return (
    <div className="form_content_input">
      <label>{item.placeholder}</label>
      <select
        className="style_selectNew"
        onChange={item.onChange}
        required
        value={item.value}
      >
        <option value="" disabled>
          {item.placeholder}
        </option>
        {item.option?.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export const FormInput = (item) => {
  return (
    <div className="form_content_input">
      <label>{item.judul}</label>
      <input
        name={item.name}
        id={item.judul}
        className={`form_input ${item.class}`}
        type={item.type}
        placeholder={item.placeholder}
        required
        onChange={item.onChange}
        value={item.value}
        ref={item.innerRef}
      />
    </div>
  );
};

export const FormTextArea = (item) => {
  return (
    <div className="form_content_input">
      <label>Pesan</label>
      <textarea
        placeholder={item.placeholder}
        required
        value={item.value}
        onChange={item.onChange}
        name="pesan"
        id="pesan"
        cols="30"
        rows="10"
      ></textarea>
    </div>
  );
};

export const FormKpr = ({ img, isloading }) => {
  const [select, setSelect] = useState("");
  const [selectNew, setSelectNew] = useState("");
  const [dropdown, setDropdown] = useState("");
  const [show, setShow] = useState(false);
  const [hasil, setHasil] = useState(0);
  const [values, setValues] = useState({
    jangkawaktu: "",
    jangkawaktu2: "",
  });

  console.log(show);

  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  const state = {
    button: 1,
  };

  const formReset = document.getElementById("form_table");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    if (state.button === 1) {
      hitungNilai(Object.fromEntries(data.entries()));
      setShow(true);
    }
    if (state.button === 2) {
      setShow(false);
      formReset.reset();
      setSelect("");
      setSelectNew("");
      setHasil("");
      setValues({
        jangkawaktu: "",
        jangkawaktu2: "",
      });
    }
  };

  const handleSelect = (e) => {
    setSelect(e.target.value);
    setDropdown(e.target.value);
  };

  const handleSelectJangka = (e) => {
    setSelectNew(e.target.value);
  };

  const dataPembiayaan = DATAFETCH(
    "https://admin.arthamasabadi.co.id/api/v1/bunga-pembiayaan"
  )?.data;

  const hitungNilai = (dataUang) => {
    const jangkawaktu = values.jangkawaktu;
    const jangkawaktu2 = values.jangkawaktu2;
    const data = {
      ...dataUang,
      selectNew,
      dropdown,
      jangkawaktu,
      jangkawaktu2,
    };
    var persentase;
    let presentase_bunga;
    const dropdownToNamaPembiayaan = {
      Murabahah: "iB Murabahah",
      Musyarakah: "iB Multijasa",
      Multijasa: "iB Musyarakah",
    };
    const selectedNamaPembiayaan = dropdownToNamaPembiayaan[data.dropdown];
    const filteredData = (dataPembiayaan || []).filter(
      (item) => item.nama_pembiayaan === selectedNamaPembiayaan
    );
    presentase_bunga =
      filteredData.length > 0 ? Number(filteredData[0].presentase_bunga) : 0;
    if (data.dropdown === "Murabahah") {
      persentase = presentase_bunga / 100;
    } else if (data.dropdown === "Musyarakah") {
      persentase = presentase_bunga / 100;
    } else if (data.dropdown === "Multijasa") {
      persentase = presentase_bunga / 100;
    }

    const formatRupiah = (angka, prefix) => {
      let number_string = angka.toString(),
        split = number_string.split(","),
        sisa = split[0].length % 3,
        rupiah = split[0].substr(0, sisa),
        ribuan = split[0].substr(sisa).match(/\d{3}/gi);

      // tambahkan titik jika yang di input sudah menjadi angka ribuan
      if (ribuan) {
        let separator = sisa ? "." : "";
        rupiah += separator + ribuan.join(".");
      }

      rupiah = split[1] !== undefined ? rupiah + "," + split[1] : rupiah;
      return prefix === undefined ? rupiah : rupiah ? "Rp " + rupiah : "";
    };

    let uangPokok = data.jumlah;
    let uangSplice = uangPokok.replace("Rp ", "");
    let uangNo = uangSplice.replace(/[&\\#,+()$~%.'":*?<>{}]/g, "");
    let toNumber = parseFloat(uangNo);

    if (data.dropdown === "Multijasa") {
      const perhitunganKredit =
        toNumber / parseFloat(data.jangkawaktu2) + toNumber * persentase;
      const perubahan = formatRupiah(parseInt(perhitunganKredit), "Rp ");
      setHasil(perubahan);
    } else if (data.dropdown === "Musyarakah") {
      const perhitunganKredit =
        toNumber + toNumber * parseFloat(data.selectNew) * persentase;
      const perubahan = formatRupiah(parseInt(perhitunganKredit), "Rp ");
      setHasil(perubahan);
    } else if (data.dropdown === "Murabahah") {
      const perhitunganKredit =
        toNumber / parseFloat(data.jangkawaktu) + toNumber * persentase;
      const perubahan = formatRupiah(parseInt(perhitunganKredit), "Rp ");
      setHasil(perubahan);
    }
  };

  const valueInput = [
    {
      name: "4 Bulan",
      value: "4",
    },
    {
      name: "5 Bulan",
      value: "5",
    },
    {
      name: "6 Bulan",
      value: "6",
    },
    {
      name: "9 Bulan",
      value: "9",
    },
  ];

  const valueDrop = [
    {
      name: "iB Murabahah",
      value: "Murabahah",
    },
    {
      name: "iB Musyarakah",
      value: "Musyarakah",
    },
    {
      name: "iB Multijasa",
      value: "Multijasa",
    },
  ];

  return (
    <FormSite>
      <div className="form_container">
        <HeadingComponent Heading="Simulasi Pembiayaan" Text="" />
        <div className="text_keterangan">
          <b>Keterangan : </b>Klik button Hitung untuk memulai perhitungan.
          Setelah itu akan muncul field untuk input Pilihan Pembiayaan, Jumlah
          Pinjaman, dan Jangka Waktu.
        </div>
        <FormContent>
          <div className="card_form">
            <div className="content">
              <div className="content_form">
                {isloading ? (
                  <div className="gambar_pemanis">loading...</div>
                ) : (
                  <div className="gambar_pemanis">
                    <img
                      src={`https://admin.arthamasabadi.co.id/storage/images/ilustrasis/${img.banner}`}
                      alt="banner"
                    />
                  </div>
                )}
                <form
                  className="form_style"
                  onSubmit={handleSubmit}
                  id="form_table"
                >
                  <FormInputSelectDrop
                    option={valueDrop}
                    onChange={handleSelect}
                    placeholder="Pilihan Pembiayaan"
                    value={select}
                  />
                  <FormInputCurrency
                    nama="jumlah"
                    placeholder="Jumlah Pinjamanan"
                  />
                  {dropdown && dropdown === "Murabahah" ? (
                    <FormInputDrop
                      judul="Jangka Waktu"
                      placeholder="Jangka Waktu"
                      type="text"
                      value={values.jangkawaktu}
                      onChange={set("jangkawaktu")}
                    />
                  ) : dropdown === "Musyarakah" ? (
                    <FormInputSelect
                      data={valueInput}
                      onChange={handleSelectJangka}
                      placeholder="Jangka Waktu"
                      value={selectNew}
                    />
                  ) : dropdown === "Multijasa" ? (
                    <FormInputDrop
                      judul="Jangka Waktu"
                      placeholder="Jangka Waktu"
                      type="text"
                      value={values.jangkawaktu2}
                      onChange={set("jangkawaktu2")}
                    />
                  ) : null}

                  <div
                    className="button_flex"
                    style={{ justifyContent: "flex-end" }}
                  >
                    <ButtonTransparent
                      onClick={() => (state.button = 2)}
                      id="Ulangi"
                      icon={FaAccusoft}
                      label="Ulangi"
                    />
                    <Button
                      onClick={() => (state.button = 1)}
                      id="Hitung"
                      icon={FaAccusoft}
                      label="Hitung"
                    />
                  </div>
                </form>
              </div>
              <div className="content_hasil">
                {dropdown === "Musyarakah" ? (
                  <div className="text">Bayar pas Jatuh Tempo :</div>
                ) : (
                  <div className="text">Angsuran per Bulan anda adalah :</div>
                )}
                <div className="hasil">{hasil ? hasil : 0}</div>
              </div>
            </div>
          </div>
        </FormContent>
      </div>
    </FormSite>
  );
};

export const FormSimulasi = ({ dataWording, img, isloading }) => {
  const [dataBungaItems, setDataBunga] = useState([]);
  const [show, setShow] = useState(false);
  const [dataJumlah, setDataJumlah] = useState("");
  const [showSimu, setShowSimu] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const state = {
    button: 1,
  };

  const handelButton = () => {
    setShowSimu(true);
    setShowButton(true);
  };

  const handleButtonNon = () => {
    setShowSimu(false);
    setShowButton(false);
  };

  const formReset = document.getElementById("form_table");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    if (state.button === 1) {
      hitungTabel(Object.fromEntries(data.entries()));
      setShow(true);
    }
    if (state.button === 2) {
      setShow(false);
      formReset.reset();
    }
  };

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

  const hitungTabel = (dataUang) => {
    const formatRupiah = (angka, prefix) => {
      let number_string = angka.toString(),
        split = number_string.split(","),
        sisa = split[0].length % 3,
        rupiah = split[0].substr(0, sisa),
        ribuan = split[0].substr(sisa).match(/\d{3}/gi);

      // tambahkan titik jika yang di input sudah menjadi angka ribuan
      if (ribuan) {
        let separator = sisa ? "." : "";
        rupiah += separator + ribuan.join(".");
      }

      rupiah = split[1] !== undefined ? rupiah + "," + split[1] : rupiah;
      return prefix === undefined ? rupiah : rupiah ? "Rp " + rupiah : "";
    };

    setDataJumlah(dataUang?.jumlah);

    let itemsBunga = [];

    for (let i = 0; i < dataBunga.length; i++) {
      let toNumber = parseFloat(
        dataUang?.jumlah
          .replace("Rp ", "")
          .replace(/[&\\#,+()$~%.'":*?<>{}]/g, "")
      );

      let dataBulan1 = (dataBunga[i].bunga_bulan1 * toNumber) / 100;
      let dataBulan2 = (dataBunga[i].bunga_bulan2 * toNumber) / 100;
      let dataBulan3 = (dataBunga[i].bunga_bulan3 * toNumber) / 100;

      let dataTabel = {
        jenis_investasi: dataBunga[i].jenis_investasi,
        bungaBulan1: formatRupiah((dataBulan1 / 12).toFixed(2), "Rp "),
        bungaBulan2: formatRupiah((dataBulan2 / 12).toFixed(2), "Rp "),
        bungaBulan3: formatRupiah((dataBulan3 / 12).toFixed(2), "Rp "),
      };
      itemsBunga.push(dataTabel);
    }
    setDataBunga(itemsBunga);
  };
  return (
    <FormSite>
      <div className="form_container">
        <HeadingComponent
          Heading={dataWording ? dataWording[1]?.text : ""}
          Text={dataWording ? dataWording[1]?.desc : ""}
        />
        <div className="text_keterangan">
          <b>Keterangan : </b>Klik button Simulasi untuk memulai perhitungan.
          Setelah itu akan muncul field untuk input Jumlah Pinjaman.
        </div>
        <FormContent>
          <div className="card_form">
            <div className="card_content_flex">
              <div className="content">
                <div className="heading">Tabungan</div>
                <div className="body">
                  <div className="class_table">
                    <table>
                      <thead>
                        <tr style={{ background: "#079607" }}>
                          <th rowSpan="2">Jenis Investasi</th>
                          <th rowSpan="2">Nisbah</th>
                          <th colSpan="3">Tingkat Imbalan/Tahun (%)</th>
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
                            <td style={{ textAlign: "left" }}>
                              {item.jenis_investasi}
                            </td>
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
                    </table>
                  </div>
                </div>
              </div>
              <div className="content">
                <div className="heading">Deposito</div>
                <div className="body">
                  <div className="class_table">
                    <table>
                      <thead>
                        <tr style={{ background: "#079607" }}>
                          <th rowSpan="2">Jenis Investasi</th>
                          <th rowSpan="2">Nisbah</th>
                          <th colSpan="3">Tingkat Imbalan/Tahun (%)</th>
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
                            <td style={{ textAlign: "left" }}>
                              {item.jenis_investasi}
                            </td>
                            <td>{item.nisbah}%</td>
                            <td>{item.bunga_bulan1}%</td>
                            <td>{item.bunga_bulan2}%</td>
                            <td>{item.bunga_bulan3}%</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                {showButton ? (
                  <Button
                    onClick={handleButtonNon}
                    id="Batal Simulasi"
                    icon={FaAccusoft}
                    label="Batal Simulasi"
                  />
                ) : (
                  <Button
                    onClick={handelButton}
                    id="Simulasi"
                    icon={FaAccusoft}
                    label="Simulasi"
                  />
                )}
              </div>
            </div>
            {showSimu ? (
              <div className="content">
                <div className="content_form">
                  {isloading ? (
                    <div className="gambar_pemanis">loading...</div>
                  ) : (
                    <div className="gambar_pemanis">
                      <img
                        src={`https://admin.arthamasabadi.co.id/storage/images/ilustrasis/${img?.banner}`}
                        alt="banner"
                      />
                    </div>
                  )}
                  <form
                    className="form_style"
                    onSubmit={handleSubmit}
                    id="form_table"
                  >
                    <FormInputCurrency
                      nama="jumlah"
                      placeholder="Jumlah Tabungan"
                    />
                    <div
                      className="button_flex"
                      style={{ justifyContent: "flex-end" }}
                    >
                      <ButtonTransparent
                        onClick={() => (state.button = 2)}
                        id="Ulangi"
                        icon={FaAccusoft}
                        label="Ulangi"
                      />
                      <Button
                        onClick={() => (state.button = 1)}
                        id="Hitung"
                        icon={FaAccusoft}
                        label="Hitung"
                      />
                    </div>
                  </form>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          {show && showSimu ? (
            <div className="card_form">
              <div className="content">
                <p>
                  <b>Hasil Perhitungan Simulasi Tabungan</b>
                </p>
              </div>
              <div className="content" style={{ marginTop: "-40px" }}>
                <div className="body">
                  <div className="class_table">
                    <table>
                      <thead>
                        <tr style={{ background: "#079607" }}>
                          <th rowSpan="2">Jenis Investasi</th>
                          <th colSpan="3">Simulasi Saldo ({dataJumlah})</th>
                        </tr>
                        <tr style={{ background: "#007c00" }}>
                          <th className="text">{dataBaru[0]?.nama_bulan1}</th>
                          <th className="text">{dataBaru[0]?.nama_bulan2}</th>
                          <th className="text">{dataBaru[0]?.nama_bulan3}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dataBungaItems?.map((item, i) => (
                          <tr key={i}>
                            <td style={{ textAlign: "left" }}>
                              {item.jenis_investasi}
                            </td>
                            <td style={{ textAlign: "left" }}>
                              {item.bungaBulan1}
                            </td>
                            <td style={{ textAlign: "left" }}>
                              {item.bungaBulan2}
                            </td>
                            <td style={{ textAlign: "left" }}>
                              {item.bungaBulan3}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="footer">
                  Keterangan: Hasil simulasi diatas belum termasuk pajak.
                </div>
              </div>
            </div>
          ) : (
            <div className="card_form">
              <div className="content">
                <p style={{ borderBottom: "none", paddingBottom: "0px" }}>
                  <b>Keterangan : </b>Lakukan perhitungan atau Simulasi terlebih
                  dahulu untuk melihat Hasil Perhitungan Simulasi Tabungan.
                </p>
              </div>
            </div>
          )}
        </FormContent>
      </div>
    </FormSite>
  );
};
