import React, { useState } from "react";
import {
  ButtonAll,
  ButtonTransparentAll,
  FormContent,
  FormSite,
} from "./FormElements";
import CurrencyInput from "react-currency-input-field";
import gambarPemanis from "../../assets/img/banner.png";
import { FaAccusoft } from "react-icons/fa";
import { HeadingComponent } from "../atom";

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
        defaultValue={""}
      >
        <option value="" disabled>
          {item.placeholder}
        </option>
        <option value="10Bulan">10 Bulan (2.5% per Bulan)</option>
        <option value="20Bulan">20 Bulan (2.0% per Bulan)</option>
      </select>
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
        // defaultValue={item.value}
        value={item.value}
      >
        <option value="" disabled>
          {item.placeholder}
        </option>
        <option value="penyimpanan_dana">Penyimpanan Dana</option>
        <option value="penyaluran_dana">Penyaluran Dana</option>
      </select>
    </div>
  );
};

export const FormInput = (item) => {
  return (
    <div className="form_content_input">
      <label>{item.judul}</label>
      <input
        id={item.judul}
        className="form_input"
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

export const TextArea = (item) => {
  return (
    <div className="form_content_input">
      <label>Pesan</label>
      <textarea
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

export const Button = (item) => {
  return (
    <ButtonAll>
      <button
        style={item.style}
        onClick={item.onClick}
        id={item.id}
        to={item.to}
        className="button_my-course"
      >
        <item.icon />
        <a href={item.to}>{item.label}</a>
      </button>
    </ButtonAll>
  );
};

export const ButtonTransparent = (item) => {
  return (
    <ButtonTransparentAll>
      <button
        style={item.style}
        onClick={item.onClick}
        id={item.id}
        className={`button_my-course ${item.active}`}
      >
        <item.icon />
        {item.label}
      </button>
    </ButtonTransparentAll>
  );
};

const FormKpr = () => {
  const [select, setSelect] = useState("");
  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);
  const [totalAngsuranPerBulan, settotalAngsuranPerBulan] = useState("");
  const [bungaPerBulan, setbungaPerBulan] = useState("");
  const [angsuranPerBulan, setangsuranPerBulan] = useState("");

  const [show, setShow] = useState(false);

  const state = {
    button: 1,
  };

  const formReset = document.getElementById("form_table");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    if (state.button === 1) {
      setData(Object.fromEntries(data.entries()));
      hitungTabel(Object.fromEntries(data.entries()));
      setShow(true);
    }
    if (state.button === 2) {
      console.log("Button 2 clicked!");
      setShow(false);
      formReset.reset();
    }
  };

  const handleSelect = (e) => {
    setSelect(e.target.value);
  };

  const hitungTabel = (dataUang) => {
    var bunga;
    var arrayData;
    if (select === "10Bulan") {
      arrayData = 10;
      bunga = 0.025;
    } else if (select === "20Bulan") {
      arrayData = 20;
      bunga = 0.02;
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

    let items = [];

    let uangPokok = dataUang.jumlah;

    let uangSplice = uangPokok.replace("Rp ", "");
    let uangNo = uangSplice.replace(/[&\\#,+()$~%.'":*?<>{}]/g, "");
    let toNumber = parseFloat(uangNo);
    let angsuranPerBulan = toNumber / arrayData;
    let bungaPerBulan = toNumber * bunga;
    let totalPinjaman = angsuranPerBulan + bungaPerBulan;

    setangsuranPerBulan(formatRupiah(angsuranPerBulan, "Rp "));
    setbungaPerBulan(formatRupiah(bungaPerBulan, "Rp "));
    settotalAngsuranPerBulan(formatRupiah(totalPinjaman, "Rp "));

    let sisaPinjaman = toNumber, // 400.000
      n2 = angsuranPerBulan, // 40.000
      nextTerm; // 360.0000

    for (let i = 1; i <= arrayData; i++) {
      let uangPokok = dataUang.jumlah;

      let uangSplice = uangPokok.replace("Rp ", "");
      let uangNo = uangSplice.replace(/[&\\#,+()$~%.'":*?<>{}]/g, "");
      let toNumber = parseFloat(uangNo);
      let angsuranPerBulan = toNumber / arrayData;

      let bungaPerBulan = toNumber * bunga;

      let totalAngsuranPerBulan = angsuranPerBulan + bungaPerBulan;

      nextTerm = sisaPinjaman - n2;
      sisaPinjaman = nextTerm;

      let dataTabel = {
        pokok: formatRupiah(toNumber, "Rp "),
        angsuranpokok: formatRupiah(angsuranPerBulan, "Rp "),
        angsuranBungaPerBulan: formatRupiah(bungaPerBulan, "Rp "),
        totalAngsuranPerBulan: formatRupiah(totalAngsuranPerBulan, "Rp "),
        sisaPinjaman: formatRupiah(sisaPinjaman, "Rp "),
      };

      items.push(dataTabel);
    }
    setItems(items);
  };

  return (
    <FormSite>
      <div className="form_container">
        <HeadingComponent
          Heading="Simulasi Kredit Standar!"
          Text="Simulasi ini untuk memudahkan calon kreditur mengetahui besaran
            angsuran per-bulan yang harus dibayarkan dan besarannya sudah sesuai
            aturan bunga yang ditetapkan perusahaan per tanggal 01 Januari 2021."
        />
        <FormContent>
          <div className="card_form">
            <div className="content">
              <p>
                <b>Keteragan : </b>Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Illo laboriosam animi exercitationem.
              </p>
              <div className="content_form">
                <form
                  className="form_style"
                  onSubmit={handleSubmit}
                  id="form_table"
                >
                  <FormInputCurrency
                    nama="jumlah"
                    placeholder="Jumlah Pinjamanan"
                    // defaultValue={setForm}
                  />
                  <FormInputSelect
                    onChange={handleSelect}
                    placeholder="Lama Pinjamanan"
                  />
                  <div className="button_flex">
                    <Button
                      onClick={() => (state.button = 1)}
                      id="Hitung"
                      icon={FaAccusoft}
                      label="Hitung"
                    />
                    <Button
                      onClick={() => (state.button = 2)}
                      id="Ulangi"
                      icon={FaAccusoft}
                      label="Ulangi"
                    />
                  </div>
                </form>
                <div className="gambar_pemanis">
                  <img src={gambarPemanis} alt="gambar_pemanis" />
                </div>
              </div>
            </div>
          </div>

          {show ? (
            <div className="card_form">
              <div className="content">
                <p>
                  <b>Keteragan : </b>Simulasi Pinjaman Anda
                </p>
                <div className="text_keterangan">
                  <ul>
                    <li>
                      <div style={{ width: "250px" }}>
                        <b>Jumlah Pinjaman</b>
                      </div>
                      <span>: {data ? data.jumlah : ""}</span>
                    </li>
                    <li>
                      <div style={{ width: "250px" }}>
                        <b>Lama Pinjaman</b>
                      </div>
                      <span>
                        {select === ""
                          ? ":"
                          : select === "10Bulan"
                          ? ": 10 Bulan"
                          : ": 20 Bulan"}
                      </span>
                    </li>
                    <li>
                      <div style={{ width: "250px" }}>
                        <b>Bunga per Bulan</b>
                      </div>
                      <span>
                        {select === ""
                          ? ":"
                          : select === "10Bulan"
                          ? ": 2.5%"
                          : ": 2.0%"}
                      </span>
                    </li>
                    <li>
                      <div style={{ width: "250px" }}>
                        <b>Angsuran Pokok per Bulan</b>
                      </div>
                      <span>
                        {select === ""
                          ? ":"
                          : select === "10Bulan"
                          ? `: ${angsuranPerBulan}`
                          : `: ${angsuranPerBulan}`}
                      </span>
                    </li>
                    <li>
                      <div style={{ width: "250px" }}>
                        <b>Angsuran Bunga per Bulan</b>
                      </div>
                      <span>
                        {select === ""
                          ? ":"
                          : select === "10Bulan"
                          ? `: ${bungaPerBulan}`
                          : `: ${bungaPerBulan}`}
                      </span>
                    </li>
                    <li>
                      <div style={{ width: "250px" }}>
                        <b>Total Angsuran</b>
                      </div>
                      <span>
                        {select === ""
                          ? ":"
                          : select === "10Bulan"
                          ? `: ${totalAngsuranPerBulan}`
                          : `: ${totalAngsuranPerBulan}`}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="class_table">
                  <table>
                    <thead>
                      <tr style={{ background: "var(--colorMain)" }}>
                        <th>Bulan</th>
                        <th>Pokok</th>
                        <th>Bunga</th>
                        <th>Angsuran</th>
                        <th>Sisa Pinjaman</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item, i) => (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{item.angsuranpokok}</td>
                          <td>{item.angsuranBungaPerBulan}</td>
                          <td>{item.totalAngsuranPerBulan}</td>
                          <td>{item.sisaPinjaman}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : (
            <div className="card_form">
              <div className="content">
                <p style={{ borderBottom: "none" }}>
                  <b>Keteragan : </b>Lakukan Perihitungan Terlebih Dahulu.
                </p>
              </div>
            </div>
          )}
        </FormContent>
      </div>
    </FormSite>
  );
};

export default FormKpr;
