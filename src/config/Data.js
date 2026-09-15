import { FiFacebook, FiPhone } from "react-icons/fi";
import { FaEllipsisV, FaFax, FaInstagram, FaWhatsapp } from "react-icons/fa";
import {
  blog,
  dep_ib_mu,
  pemb_ga_emas,
  pemb_ib_mul,
  pemb_ib_mura,
  pemb_ib_musy,
  laporan_tahunan,
  tab_ib_ha,
  tab_ib_ms,
  tab_ib_pen,
  tab_ib_qur,
  tab_ib_si,
  tab_ib_wad,
  tab_simpel,
  tab_simpel_ay,
} from "../assets";
import { useEffect, useState } from "react";
import axios from "axios";

export const DATAFETCH = (url) => {
  const [data, setData] = useState();
  const [isloading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await axios(url);
        setData(response.data.data);
      } catch {
        console.log("error");
      }
      setLoading(false);
    };
    getData();
  }, [url]);

  return { data, isloading };
};

export const DATAFETCHPUBLIKASI = (url) => {
  const [data, setData] = useState();
  const [isloading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await axios(url);
        setData(response.data);
      } catch {
        console.log("error");
      }
      setLoading(false);
    };
    getData();
  }, [url]);

  return { data, isloading };
};

export const DATAFETCHVIDEO = (url) => {
  const [data, setData] = useState();
  const [isloading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await axios(url);
        setData(response.data.video_url);
      } catch {
        console.log("error");
      }
      setLoading(false);
    };
    getData();
  }, [url]);

  return { data, isloading };
};

export const DATA_PUBLIKASI = [
  {
    id: 1,
    judul: "Laporan Triwulan",
    content: {
      fitur: [
        {
          judul: "Laporan Triwulan I 2022",
          tanggal: "2022",
          buttonDonwload: laporan_tahunan,
        },
        {
          judul: "Laporan Triwulan II 2022",
          tanggal: "2022",
          buttonDonwload: laporan_tahunan,
        },
        {
          judul: "Laporan Triwulan III 2022",
          tanggal: "2022",
          buttonDonwload: laporan_tahunan,
        },
        {
          judul: "Laporan Triwulan IV 2022",
          tanggal: "2022",
          buttonDonwload: laporan_tahunan,
        },
      ],
    },
  },
  {
    id: 2,
    judul: "Laporan GCG",
    content: {
      fitur: [
        {
          judul: "Laporan GCG Tahun 2019",
          tanggal: "2019",
          buttonDonwload: laporan_tahunan,
        },
        {
          judul: "Laporan GCG Tahun 2020",
          tanggal: "2020",
          buttonDonwload: laporan_tahunan,
        },
        {
          judul: "Laporan GCG Tahun 2021",
          tanggal: "2021",
          buttonDonwload: laporan_tahunan,
        },
        {
          judul: "Laporan GCG Tahun 2022",
          tanggal: "2022",
          buttonDonwload: laporan_tahunan,
        },
      ],
    },
  },
];

export const MEDIA_SOSIAL = [
  {
    to: "https://wa.me/6285225100893",
    label: "Whatsapp",
    icon: FaWhatsapp,
    title: "085225100893",
  },
  {
    to: "https://www.instagram.com/bprsarthamasabadi/",
    label: "Instagram",
    icon: FaInstagram,
    title: "Artha Mas Abadi",
  },
  {
    to: "https://www.facebook.com/share/Y2V1fyiL5u6sKCNi/?mibextid=qi2Omg",
    label: "Facebook",
    icon: FiFacebook,
    title: "Artha Mas Abadi",
  },
  {
    to: "tel:02954150477",
    label: "Telp.",
    icon: FiPhone,
    title: "(0295) 4150477",
  },
  {
    to: "",
    label: "Fax",
    icon: FaFax,
    title: "4150400",
  },
];

export const DATA_BARU = {
  penyimpanan_dana: [
    {
      id: 1,
      judul: "Penyimpanan Dana",
      contentFull: [
        {
          id: 1,
          judul: "Tabungan iB Wadiah",
          content: {
            apa: "Apa yang Dimaksud dengan Tabungan Wadiah?",
            p: "Tabungan iB Wadiah merupakan tabungan yang dikelola dengan sistem titipan (wadiah)",
            fileImg: tab_ib_wad,
            fitur: [
              {
                judul: "Fitur & Biaya",
                text_a: "",
                text: [
                  "Dapat disetor setiap waktu.",
                  "Dapat di tarik setiap waktu.",
                  "Minimum setoran awal Rp. 25.000",
                  "Minimum setoran berikutnya Rp. 5.000",
                  "Saldo minimum Rp. 10.000",
                  "Biaya tutup rekening Rp. 5.000",
                ],
              },
              {
                judul: "Manfaat",
                text_a: "",
                text: [
                  "Aman dan sesuai syariah",
                  "Dijamin Lembaga Penjamin Simpanan (LPS)",
                  "Pelayanan jemput bola (antar jemput setoran penarikan khusus untuk nasabah pembiayaan)",
                ],
              },
              {
                judul: "Apa Saja Persyaratannya?",
                text_a: "",
                text: [
                  "Mengisi Form Pembukaan Rekening",
                  "Warga Negara Indonesia: FC KTP/SIM/Paspor, NPWP (opsional).",
                  "Warga Negara Asing: Paspor dan Kartu Izin Menetap Sementara (KIM/KITAS)",
                ],
              },
            ],
          },
        },
        {
          id: 2,
          judul: "Tabungan Simpel",
          content: {
            apa: "Apa yang Dimaksud dengan Tabungan iB Simpel ?",
            p: "",
            fileImg: tab_simpel,
            fitur: [
              {
                judul: "Tabungan Simpel",
                text_a:
                  "Tabungan perorangan untuk siswa Warga Negara Indonesia di peruntukan bagi siswa yang masih dibawah usia 17 tahun. Ketentuan :",
                text: [
                  "Mengisi Permohonan Pembukaan rekening.",
                  "FC Identitas : KTP Orang tua/wali, KK atau Akta Lahir.",
                  "FC Surat Pelajar atau Surat Keterangan sebagai siswa dari Sekolah.",
                ],
              },
            ],
          },
        },
        {
          id: 4,
          judul: "Tabungan Simpel Ayah",
          content: {
            apa: "Apa yang Dimaksud dengan Tabungan iB Mudharabah ?",
            p: "Tabungan iB Mudharabah merupakan tabungan yang dikelola dengan sistem bagi hasil.",
            fileImg: tab_simpel_ay,
            fitur: [
              {
                judul: "Tabungan Simpel Ayah",
                text_a:
                  "Tabungan perorangan untuk pelajar Warga Negara Indonesia khusus bagi yatim atau yatim piatu. Ketentuan :",
                text: [
                  "FC Akta Kelahiran.",
                  "FC Kartu Keluarga.",
                  "FC KTP Orang tua/ Wali.",
                  "FC Surat Kematian Ayah (bagi Yatim).",
                  "FC Surat Kematian ayah dan ibu (bagi yatim piatu).",
                ],
              },
            ],
          },
        },
      ],
    },
  ],
  penyaluran_dana: [
    {
      id: 2,
      judul: "Penyaluran Dana",
      contentFull: [
        {
          id: 1,
          judul: "Pembiayaan iB Murabahah",
          content: {
            apa: "Apa yang Dimaksud dengan Pembiayaan iB Murabahah?",
            p: "Pembiayaan iB Murabahah merupakan jenis pembiayaan yang menggunakan prinsip jual beli.",
            fileImg: pemb_ib_mura,
            fitur: [
              {
                judul: "Kegunaan",
                text_a: "",
                text: [
                  "Melayani kebutuhan kepemilikan barang yang dibutuhkan dengan prinsip jual beli",
                  "Fleksibel untuk memenuhi kebutuhan investasi maupun konsumtif",
                  "Pembayaran angsuran secara bulanan",
                  "Agunan dapat berupa tanah atau kendaran bermotor",
                  "Margin keuntungan kompetitif",
                  "Jangka waktu mulai 10 sampai dengan 60 bulan",
                ],
              },
              {
                judul: "Persyaratan",
                text_a: "",
                text: [
                  "Mengisi Form Permohonan Pembiayaan sesuai syarat dan ketentuan berlaku [E. Form Pembiayan]",
                  "Menyiapkan Berkas Foto KTP",
                ],
              },
              {
                judul:
                  "Bagi pengajuan pembiayaan dengan agunan kendaraan bermotor :",
                text_a: "",
                text: [
                  "Foto copy BPKB",
                  "Foto copy STNK dan pajak yang berlaku",
                  "Asli gesekan nomor rangka dan nomor mesin",
                  "Foto copy KTP berlaku suami istri dan kartu keluarga pemilik agunan jika agunan milik orang lain.",
                ],
              },
              {
                judul:
                  "Bagi pengajuan pembiayaan dengan agunan sertifikat tanah / tanah dan bangunan",
                text_a: "",
                text: [
                  "Foto copy Sertifikat",
                  "Foto copy KTP berlaku suami istri dan kartu keluarga pemilik Sertifikat jika agunan milik orang lain.",
                  "SPPT Asli",
                ],
              },
              {
                judul: "Biaya – Biaya",
                text_a: "",
                text: [
                  "Biaya administrasi",
                  "Biaya materai",
                  "Biaya asuransi jiwa",
                  "Biaya pengikatan notaris (untuk jenis pengikatan APHT/SKMHT dan Fiducia)",
                ],
              },
              {
                judul: "Keunggulan",
                text_a: "",
                text: [
                  "Proses cepat dan mudah",
                  "Dikelola dengan sistem syariah",
                  "Menjadi salah satu alternatif untuk membantu usaha lebih maju dan berkembang",
                  "Menjadi salah satu alternatif untuk mengatasi persoalan keuangan umat.",
                  "Pelayanan dan fasilitas yang nyaman",
                  "Menjadi mitra usaha yang ramah, amanah, dan barokah",
                ],
              },
            ],
          },
        },
        {
          id: 2,
          judul: "Pembiayaan iB Musyarakah",
          content: {
            apa: "Apa yang Dimaksud dengan Pembiayaan iB Musyarakah ?",
            p: "Pembiayaan iB Musyarakah merupakan jenis pembiayaan yang menggunakan prinsip bagi hasil.",
            fileImg: pemb_ib_musy,
            fitur: [
              {
                judul: "Kegunaan",
                text_a: "",
                text: [
                  "Melayani kebutuhan tambahan modal kerja bagi pelaku usaha musiman",
                  "Cocok untuk usaha pertanian, perkebunan, peternakan, perikanan maupun konstruksi",
                  "Pembayaran modal dan bagi hasil dilakukan pada saat jatuh tempo",
                  "Agunan dapat berupa tanah atau kendaran bermotor",
                  "Bagi Hasil kompetitif",
                  "Jangka waktu mulai 4, 5, 6 dan 9 bulan.",
                ],
              },
              {
                judul: "Persyaratan",
                text_a: "",
                text: [
                  "Mengisi Form Permohonan Pembiayaan sesuai syarat dan ketentuan berlaku [E. Form Pembiayan]",
                  "Menyiapkan Berkas Foto KTP",
                ],
              },
              {
                judul:
                  "Bagi pengajuan pembiayaan dengan agunan kendaraan bermotor :",
                text_a: "",
                text: [
                  "Foto copy BPKB",
                  "Foto copy STNK dan pajak yang berlaku",
                  "Asli gesekan nomor rangka dan nomor mesin",
                  "Foto copy KTP berlaku suami istri dan kartu keluarga pemilik agunan jika agunan milik orang lain.",
                ],
              },
              {
                judul:
                  "Bagi pengajuan pembiayaan dengan agunan Sertifikat tanah / tanah dan bangunan",
                text_a: "",
                text: [
                  "Foto copy Sertifikat",
                  "Foto copy KTP berlaku suami istri dan kartu keluarga pemilik Sertifikat jika agunan milik orang lain.",
                  "SPPT Asli",
                ],
              },
              {
                judul: "Biaya – Biaya",
                text_a: "",
                text: [
                  "Biaya administrasi",
                  "Biaya materai",
                  "Biaya asuransi jiwa",
                  "Biaya pengikatan notaris (untuk jenis pengikatan APHT/SKMHT dan Fiducia)",
                ],
              },
              {
                judul: "Keunggulan",
                text_a: "",
                text: [
                  "Proses cepat dan mudah",
                  "Dikelola dengan sistem syariah",
                  "Menjadi salah satu alternatif untuk membantu usaha lebih maju dan berkembang",
                  "Menjadi salah satu alternatif untuk mengatasi persoalan keuangan umat.",
                  "Pelayanan dan fasilitas yang nyaman",
                  "Menjadi mitra usaha yang ramah, amanah, dan barokah",
                ],
              },
            ],
          },
        },
        {
          id: 3,
          judul: "Pembiayaan iB Multijasa",
          content: {
            apa: "Apa itu Pembiayaan iB Multijasa ?",
            p: "Pembiayaan iB Multijasa merupakan jenis pembiayaan yang menggunakan akad ijarah.",
            fileImg: pemb_ib_mul,
            fitur: [
              {
                judul: "Kegunaan",
                text_a: "",
                text: [
                  "Menjadi solusi persoalan keuangan ummat dibidang ibadah Haji dan Umroh, Pendidikan, Kesehatan, Hajatan (Khitan dan Pernikahan)",
                  "Agunan dapat berupa tanah atau kendaran bermotor",
                  "Ujroh atau Fee Kompetitif",
                  "Jangka waktu mulai 10 sampai dengan 60 bulan",
                ],
              },
              {
                judul: "Persyaratan",
                text_a: "",
                text: [
                  "Mengisi Form Permohonan Pembiayaan sesuai syarat dan ketentuan berlaku [E. Form Pembiayan]",
                  "Menyiapkan Berkas Foto KTP",
                ],
              },
              {
                judul:
                  "Bagi pengajuan pembiayaan dengan agunan kendaraan bermotor :",
                text_a: "",
                text: [
                  "Foto copy BPKB",
                  "Foto copy STNK dan pajak yang berlaku",
                  "Asli gesekan nomor rangka dan nomor mesin",
                  "Foto copy KTP berlaku suami istri dan kartu keluarga pemilik agunan jika agunan milik orang lain.",
                ],
              },
              {
                judul:
                  "Bagi pengajuan pembiayaan dengan agunan Sertifikat tanah / tanah dan bangunan",
                text_a: "",
                text: [
                  "Foto copy Sertifikat",
                  "Foto copy KTP berlaku suami istri dan kartu keluarga pemilik Sertifikat jika agunan milik orang lain.",
                  "SPPT Asli",
                ],
              },
              {
                judul: "Biaya – Biaya",
                text_a: "",
                text: [
                  "Biaya administrasi",
                  "Biaya materai",
                  "Biaya asuransi jiwa",
                  "Biaya pengikatan notaris (untuk jenis pengikatan APHT/SKMHT dan Fiducia)",
                ],
              },
              {
                judul: "Keunggulan",
                text_a: "",
                text: [
                  "Proses cepat dan mudah",
                  "Dikelola dengan sistem syariah",
                  "Menjadi salah satu alternatif untuk membantu usaha lebih maju dan berkembang",
                  "Menjadi salah satu alternatif untuk mengatasi persoalan keuangan umat.",
                  "Pelayanan dan fasilitas yang nyaman",
                  "Menjadi mitra usaha yang ramah, amanah, dan barokah",
                ],
              },
            ],
          },
        },
        {
          id: 4,
          judul: "Pembiayaan iB Gadai Emas",
          content: {
            apa: "Apa itu Pembiayaan iB Multijasa ?",
            p: "Pembiayaan iB Gadai Emas merupakan jenis pembiayaan dengan menggunakan prisnsip Qardh, Ijarah dan Rahn.",
            fileImg: pemb_ga_emas,
            fitur: [
              {
                judul: "Kegunaan",
                text_a: "",
                text: [
                  "Merupakan solusi persoalan keuangan ummat tanpa harus kehilangan perhiasan",
                  "Biaya penyimpanan kompetitif",
                  "Jangka waktu 4 bulan",
                ],
              },
              {
                judul: "Persyaratan",
                text_a: "",
                text: [
                  "Mengisi Form Permohonan Pembiayaan sesuai syarat dan ketentuan berlaku [E. Form Pembiayan]",
                  "Menyiapkan Berkas Foto KTP",
                ],
              },
            ],
          },
        },
      ],
    },
  ],
  penyimpanan_dana_mudharabah: [
    {
      id: 1,
      judul: "Penyimpanan Dana",
      contentFull: [
        {
          id: 1,
          judul: "Tabungan iB Haji",
          content: {
            apa: "",
            p: "",
            fileImg: tab_ib_ha,
            fitur: [
              {
                judul: "1. Tabungan iB Haji",
                text_a:
                  "Membantu mewujudkan niat anda beribadah haji lebih mudah dan terencana. Ketentuan :",
                text: [
                  "Setoran awal minimal Rp. 100.000",
                  "Setoran selanjutnya minimal Rp. 100.000",
                  "Nisbah bagi hasil ditetapkan sesuai dengan akad perjanjian",
                  "Pengambilan tabungan hanya dapat dilakukan untuk pembayaran ongkos naik haji (ONH)",
                  "Dikelola dengan akad Mudharabah Mutlaqoh",
                ],
              },
            ],
          },
        },
        {
          id: 2,
          judul: "Tabungan iB Masa Depan",
          content: {
            apa: "Apa yang Dimaksud dengan Tabungan iB Masa Depan ?",
            p: "",
            fileImg: tab_ib_ms,
            fitur: [
              {
                judul: "1. Tabungan iB Masa Depan",
                text_a:
                  "Membantu anda dalam merencanakan masa depan (rencana pernikahan, persalinan, hari tua, dll). Ketentuan :",
                text: [
                  "Setoran awal minimal Rp. 100.000",
                  "Setoran selanjutnya minimal Rp. 100.000",
                  "Nisbah bagi hasil ditetapkan sesuai dengan akad perjanjian",
                  "Jangka waktu minimal 3 Tahun.",
                  "Dikelola dengan akad Mudharabah Mutlaqoh.",
                ],
              },
            ],
          },
        },
        {
          id: 4,
          judul: "Tabungan iB Pendidikan",
          content: {
            apa: "Apa yang Dimaksud dengan Tabungan iB Pendidikan ?",
            p: "",
            fileImg: tab_ib_pen,
            fitur: [
              {
                judul: "1. Tabungan iB Pendidikan",
                text_a:
                  "Membantu anda dalam merencanakan biaya pendidikan anak. Ketentuan :",
                text: [
                  "Setoran awal minimal Rp. 100.000",
                  "Setoran selanjutnya minimal Rp. 50.000",
                  "Nisbah bagi hasil ditetapkan sesuai dengan akad perjanjian",
                  "Jangka waktu menyesuaikan dengan jenjang pendidikan anak.",
                  "Dikelola dengan akad Mudharabah Mutlaqoh.",
                ],
              },
            ],
          },
        },
        {
          id: 3,
          judul: "Tabungan iB Qurban",
          content: {
            apa: "Apa itu Deposito iB Qurban ?",
            p: "",
            fileImg: tab_ib_qur,
            fitur: [
              {
                judul: "1. Tabungan iB Qurban",
                text_a:
                  "Membantu merencanakan dan mewujudkan niat anda untuk melaksanakan Ibadah Qurban. Ketentuan :",
                text: [
                  "Setoran awal minimal Rp. 50.000",
                  "Setoran selanjutnya minimal Rp. 50.000",
                  "Nisbah bagi hasil ditetapkan sesuai dengan akad perjanjian",
                  "Penarikan tabungan dapat dilakukan pada awal bulan Dzulhijjah atau jika pengendapan sudah sampai satu tahun",
                  "Dikelola dengan akad Mudharabah Mutlaqoh.",
                ],
              },
            ],
          },
        },
        {
          id: 3,
          judul: "Tabungan iB Si Muda",
          content: {
            apa: "Apa itu Deposito iB Si Muda ?",
            p: "",
            fileImg: tab_ib_si,
            fitur: [
              {
                judul: "1. Tabungan iB siMuda",
                text_a:
                  "Membantu Mahasiswa dan Pemuda dalama merencanakan masa depan. Ketentuan :",
                text: [
                  "Usia Nasabah 18 s/d 30 tahun.",
                  "Setoran pembukaan rekening Rp. 25.000.",
                  "Setoran berikutnya Rp. 25.000",
                  "Jangka waktu 1 tahun dapat di perpanjang.",
                  "Penarikan Tabungan pada akhir jangka waktu.",
                  "Tabungan dijamin oleh LPS.",
                  "Dikelola dengan akad Mudharabah Mutlaqoh.",
                ],
              },
            ],
          },
        },
      ],
    },
  ],
  deposito_dana_mudharabah: [
    {
      id: 1,
      judul: "Penyimpanan Dana",
      contentFull: [
        {
          id: 1,
          judul: "Deposito iB Mudharabah",
          content: {
            apa: "Apa itu Deposito iB Mudharabah ?",
            p: "",
            fileImg: dep_ib_mu,
            fitur: [
              {
                judul: "Deposito iB Mudharabah",
                text_a:
                  "Deposito iB Mudharabah merupakan layanan investasi berjangka yang dikelola dengan sistem bagi hasil (Mudharabah). ketentuan",
                text: [
                  "Setoran minimal Rp. 1.000.000.",
                  "Jangka waktu 3, 6 dan 12 bulan.",
                  "Nisbah bagi hasil ditetapkan sesuai dengan akad perjanjian.",
                  "Pencairan bisa dilakukan pada saat jatuh tempo.",
                ],
              },
              {
                judul: "Keunggulan produk Deposito iB Mudharabah",
                text_a: "",
                text: [
                  "Dikelola dengan sistem syariah.",
                  "Bagi hasil kompetitif.",
                  "Bebas biaya administrasi bulanan.",
                  "Dijamin oleh LPS (Lembaga Penjamin Simpanan sampai dengan 2 Milyar Rupiah).",
                  "Mendapatkan Souvenir menarik langsung pasa saat pembukaan rekening",
                  "Dapat dijadikan sebagai agunan pembiayaan",
                ],
              },
            ],
          },
        },
      ],
    },
  ],
};

export const NAVLINKS = [
  {
    to: "/",
    icon: FaEllipsisV,
    name: "HOME",
    megamenu: false,
  },
  {
    to: "/layanan-kami",
    icon: FaEllipsisV,
    name: "PRODUK & LAYANAN",
    disabled: true,
    megamenu: true,
    megamenuItem: [
      {
        id: 1,
        to: "/penyimpanan-dana",
        name: "PENYIMPANAN DANA",
        sub: [
          {
            to: "./layanan-kami/penyimpanan-dana/0",
            judul: "Tabungan iB Wadiah",
          },
          {
            to: "./layanan-kami/penyimpanan-dana/1",
            judul: "Tabungan iB Mudharabah",
          },
          {
            to: "./layanan-kami/penyimpanan-dana/2",
            judul: "Deposito iB Mudharabah",
          },
        ],
      },
      {
        id: 2,
        to: "/penyaluran-dana",
        name: "PENYALURAN DANA",
        sub: [
          {
            to: "./layanan-kami/penyaluran-dana/0",
            judul: "Pembiayaan iB Murabahah",
          },
          {
            to: "./layanan-kami/penyaluran-dana/1",
            judul: "Pembiayaan iB Musyarakah",
          },
          {
            to: "./layanan-kami/penyaluran-dana/2",
            judul: "Pembiayaan iB Multijasa",
          },
          {
            to: "./layanan-kami/penyaluran-dana/3",
            judul: "iB Gadai Emas",
          },
        ],
      },
    ],
  },
  {
    to: "/simulasi-bank",
    icon: FaEllipsisV,
    name: "SIMULASI",
    megamenu: true,
    megamenuItem: [
      {
        id: 1,
        to: "/simulasi",
        name: "SIMULASI TABUNGAN",
        sub: [
          {
            to: "./simulasi-bank/simulasi",
            judul: "Simulasi Tabungan",
          },
        ],
      },
      {
        id: 2,
        to: "/simulasi-pembiayaan",
        name: "SIMULASI PEMBIAYAAN",
        sub: [
          {
            to: "./simulasi-bank/simulasi-pembiayaan",
            judul: "Simulasi Pembiayaan",
          },
        ],
      },
    ],
  },
  {
    to: "/berita-kami",
    icon: FaEllipsisV,
    name: "BERITA KAMI",
    megamenu: false,
  },
  /*
  {
    to: "/publikasi",
    icon: FaEllipsisV,
    name: "PUBLIKASI",
    megamenu: false,
  },
  */
  {
    to: "/publication",
    icon: FaEllipsisV,
    name: "PUBLIKASI",
    megamenu: false,
  },
  {
    to: "/galeri-kami",
    icon: FaEllipsisV,
    name: "GALERI",
    megamenu: false,
  },
  {
    to: "/kontak-kami",
    icon: FaEllipsisV,
    name: "TENTANG KAMI",
    megamenu: false,
  },
];

export const PHOTOS = [
  {
    src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    width: 4,
    height: 3,
  },
  {
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    width: 1,
    height: 1,
  },
  {
    src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    width: 3,
    height: 4,
  },
  {
    src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    width: 3,
    height: 4,
  },
  {
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    width: 3,
    height: 4,
  },
  {
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    width: 4,
    height: 3,
  },
  {
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    width: 3,
    height: 4,
  },
  {
    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    width: 4,
    height: 3,
  },
  {
    src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
    width: 4,
    height: 3,
  },
];

export const BERITA = [
  {
    id: 1,
    judul: "Membuat adonan kue 1",
    date: "17 Juli 2020",
    img: blog,
    kontenBerita:
      "Bikin anggaran, baik anggaran jangka pendek maupun jangka panjang, itu gampang-gampang susah. Gampang jika tahu apa yang mesti dilakukan, susah karena ada tantangan seperti konsistensi dan kedisiplinan. Kali ini, Jagomin mau bagikan 4 cara yang bisa diikuti supaya kamu jadi selangkah lebih jago membuat anggaran jangka panjang.",
  },
  {
    id: 2,
    judul: "Membuat adonan kue 2",
    date: "17 Juli 2020",
    img: blog,
    kontenBerita:
      "<div>Bikin anggaran, baik anggaran jangka pendek maupun jangka panjang, itu gampang-gampang susah. Gampang jika tahu apa yang mesti dilakukan, susah karena ada tantangan seperti konsistensi dan kedisiplinan. Kali ini, Jagomin mau bagikan 4 cara yang bisa diikuti supaya kamu jadi selangkah lebih jago membuat anggaran jangka panjang.<br><br>Bikin anggaran, baik anggaran jangka pendek <b>Bank Jago</b> maupun jangka panjang, itu gampang-gampang susah. Gampang jika tahu apa yang mesti dilakukan, susah karena ada tantangan seperti konsistensi dan kedisiplinan. Kali ini, Jagomin mau bagikan 4 cara yang bisa diikuti supaya kamu jadi selangkah lebih jago membuat anggaran jangka panjang. <br><br>Bikin anggaran, baik anggaran jangka pendek <b>Bank Jago</b> maupun jangka panjang, itu gampang-gampang susah. Gampang jika tahu apa yang mesti dilakukan, susah karena ada tantangan seperti konsistensi dan kedisiplinan. Kali ini, Jagomin mau bagikan 4 cara yang bisa diikuti supaya kamu jadi selangkah lebih jago membuat anggaran jangka panjang. <br><br>Bikin anggaran, baik anggaran jangka pendek <b>Bank Jago</b> maupun jangka panjang, itu gampang-gampang susah. Gampang jika tahu apa yang mesti dilakukan, susah karena ada tantangan seperti konsistensi dan kedisiplinan. Kali ini, Jagomin mau bagikan 4 cara yang bisa diikuti supaya kamu jadi selangkah lebih jago membuat anggaran jangka panjang.</div>",
  },
  {
    id: 3,
    judul: "Membuat adonan kue 3",
    date: "17 Juli 2020",
    img: blog,
    kontenBerita:
      "Bikin anggaran, baik anggaran jangka pendek maupun jangka panjang, itu gampang-gampang susah. Gampang jika tahu apa yang mesti dilakukan, susah karena ada tantangan seperti konsistensi dan kedisiplinan. Kali ini, Jagomin mau bagikan 4 cara yang bisa diikuti supaya kamu jadi selangkah lebih jago membuat anggaran jangka panjang.",
  },
  {
    id: 4,
    judul: "Membuat adonan kue 4",
    date: "17 Juli 2020",
    img: blog,
    kontenBerita:
      "Bikin anggaran, baik anggaran jangka pendek maupun jangka panjang, itu gampang-gampang susah. Gampang jika tahu apa yang mesti dilakukan, susah karena ada tantangan seperti konsistensi dan kedisiplinan. Kali ini, Jagomin mau bagikan 4 cara yang bisa diikuti supaya kamu jadi selangkah lebih jago membuat anggaran jangka panjang.",
  },
  {
    id: 5,
    judul: "Membuat adonan kue 5",
    date: "17 Juli 2020",
    img: blog,
    kontenBerita:
      "Bikin anggaran, baik anggaran jangka pendek maupun jangka panjang, itu gampang-gampang susah. Gampang jika tahu apa yang mesti dilakukan, susah karena ada tantangan seperti konsistensi dan kedisiplinan. Kali ini, Jagomin mau bagikan 4 cara yang bisa diikuti supaya kamu jadi selangkah lebih jago membuat anggaran jangka panjang.",
  },
  {
    id: 6,
    judul: "Membuat adonan kue 6",
    date: "17 Juli 2020",
    img: blog,
    kontenBerita:
      "Bikin anggaran, baik anggaran jangka pendek maupun jangka panjang, itu gampang-gampang susah. Gampang jika tahu apa yang mesti dilakukan, susah karena ada tantangan seperti konsistensi dan kedisiplinan. Kali ini, Jagomin mau bagikan 4 cara yang bisa diikuti supaya kamu jadi selangkah lebih jago membuat anggaran jangka panjang.",
  },
  {
    id: 7,
    judul: "Membuat adonan kue 7",
    date: "17 Juli 2020",
    img: blog,
    kontenBerita:
      "Bikin anggaran, baik anggaran jangka pendek maupun jangka panjang, itu gampang-gampang susah. Gampang jika tahu apa yang mesti dilakukan, susah karena ada tantangan seperti konsistensi dan kedisiplinan. Kali ini, Jagomin mau bagikan 4 cara yang bisa diikuti supaya kamu jadi selangkah lebih jago membuat anggaran jangka panjang.",
  },
];

export const TABS = [
  {
    id: 1,
    judul: "Tabungan iB Wadiah",
    content:
      "1 Bikin anggaran, baik anggaran jangka pendek maupun jangka panjang, itu gampang-gampang susah. Gampang jika tahu apa yang mesti dilakukan, susah karena ada tantangan seperti konsistensi dan kedisiplinan. Kali ini, Jagomin mau bagikan 4 cara yang bisa diikuti supaya kamu jadi selangkah lebih jago membuat anggaran jangka panjang.",
  },
  {
    id: 2,
    judul: "Tabungan iB Mudharabah",
    content:
      "2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
  },
  {
    id: 3,
    judul: "Deposito iB Mudharabah",
    content:
      "3 page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now",
  },
];

export const DATA_FOOTER = {
  syarat_ketentuan: [
    {
      id: 1,
      judul: "Syarat dan Ketentuan",
      url: "syarat-ketentuan",
      contentFull: [
        {
          judul: "Istilah",
          text: [
            "Website www.bri.co.id adalah saluran distribusi BRI untuk memberikan informasi-informasi terkait produk serta perusahaan melalui jaringan internet dengan menggunakan perangkat lunak browser pada komputer  maupun ponsel. Tidak termasuk dengan situs microsite yang terdapat dalam www.bri.co.id.",
          ],
        },
        {
          judul: "Ketentuan Penggunaan",
          text: [
            "Pengguna dapat menggunakan layanan website www.bri.co.id untuk mendapatkan informasi. Situs utama www.bri.co.id tidak terdapat transaksi finansial perbankan. Seluruh konten dalam website memiliki hak cipta dan dalam berada ketentuan BRI.",
            "Setiap pertukaran data informasi telah disetujui dari Pengguna yang tersimpan pada pusat data BRI merupakan data yang benar yang diterima sebagai bukti dari Pengguna kepada BRI untuk melaksanakan pertukaran data informasi yang dimaksud.",
            "BRI berhak menghentikan layanan www.bri.co.id untuk sementara waktu maupun untuk jangka waktu tertentu yang ditentukan oleh BRI untuk keperluan pembaharuan, pemeliharaan atau untuk tujuan lain dengan alasan apapun yang dianggap baik oleh BRI, dan untuk itu BRI tidak berkewajiban mempertanggungjawabkannya kepada siapapun.",
          ],
        },
        {
          judul: "Force Majeure",
          text: [
            "Pengguna akan membebaskan BRI dari segala tuntutan apapun, dalam hal BRI tidak dapat melaksanakan perintah dari Pengguna baik sebagian maupun seluruhnya karena kejadian-kejadian atau sebab-sebab di luar kekuasaan atau kemampuan BRI termasuk namun tidak terbatas pada segala gangguan virus komputer atau sistem Trojan Horses atau komponen membahayakan yang dapat menggangu layanan www.bri.co.id, web browser atau komputer sistem BRI, Pengguna, atau Internet Service Provider, karena bencana alam, perang, huru-hara, keadaan peralatan, sistem atau transmisi yang tidak berfungsi, gangguan listrik, gangguan telekomunikasi, kebijakan pemerintah, serta kejadian-kejadian atau sebab-sebab lain di luar kekuasaan atau kemampuan BRI.",
          ],
        },
        {
          judul: "Lain-Lain",
          text: [
            "Pengguna dapat menghubungi Call BRI atas setiap permasalahan yang berkaitan dengan akses layanan www.bri.co.id",
            "BRI dapat mengubah syarat dan ketentuan ini setiap saat dengan pemberitahuan terlebih dahulu kepada Pengguna dalam bentuk tertulis dilayar www.bri.co.id atau berupa email ataupun melalui sarana lainnya.",
            "Pengguna tunduk pada ketentuan-ketentuan dan peraturan-peraturan yang berlaku pada BRI termasuk setiap perubahan yang akan diberitahukan terlebih dahulu oleh BRI dalam bentuk dan sarana apapun.",
          ],
        },
      ],
    },
  ],
  kebijakan_privasi: [
    {
      id: 1,
      judul: "Kebijakan Privasi",
      url: "kebijakan-privasi",
      contentFull: [
        {
          judul: "Kebijakan Privasi",
          text: [
            "Bank Jago sepenuhnya memahami bahwa melindungi privasi Anda, informasi pribadi Anda serta transparan dengan apa yang kami lakukan dengan data Anda merupakan salah satu bagian untuk membangun kepercayaan Anda dengan Kami.",
          ],
        },
        {
          judul: "Pengumpulan dan Penggunaan Informasi",
          text: [
            "Bank Jago adalah pemilik tunggal dari semua informasi yang terkumpul dari website dan aplikasi yang dimiliki oleh Bank Jago.",
            "Kami tidak akan menjual, berbagi ataupun menyewakan informasi pribadi Anda kepada orang/ pihak lain untuk tujuan yang tidak dinyatakan di dalam syarat dan kondisi yang telah disepakati pada saat menjalin hubungan dengan Anda, dan perubahannya dari waktu ke waktu sesuai pemberitahuan kepada Anda.",
          ],
        },
        {
          judul: "Keamanan",
          text: [
            "Bank Jago akan senantiasa berupaya untuk menjaga keamanan informasi pribadi Anda dan melindunginya terhadap manipulasi, pemalsuan, akses dan pengungkapan yang tidak bertanggung jawab.",
          ],
        },
        {
          judul: "Perubahan Pernyataan",
          text: [
            "Bank Jago berhak untuk sewaktu-waktu mengubah pernyataan pada website ini. Kami menganjurkan Anda untuk sekali-sekali membaca lagi pernyataan privasi dan mempelajari sejumlah pernyataan privasi yang baru atau perubahan kebijakan Bank Jago.",
          ],
        },
      ],
    },
  ],
  prosedur_pengaduan: [
    {
      id: 1,
      judul: "Prosedur Pengaduan Nasabah",
      url: "prosedur-pengaduan",
      contentFull: [
        {
          judul: "Prosedur Pelayanan dan Penyelesaian Pengaduan Nasabah",
          text: [
            "Mengacu pada peraturan dan ketentuan perundang-undangan yang berlaku serta sesuai dengan aspirasi PT Bank Jago Tbk (“Bank”) yaitu “Meningkatkan kesempatan tumbuh berjuta insan melalui solusi finansial digital”, penyediaan layanan yang prima dan solusi finansial kepada seluruh nasabah selaku mitra pilihan utama adalah prioritas kami. Sehubungan dengan hal tersebut, berikut kami informasikan Prosedur Pelayanan dan Penyelesaian Pengaduan Nasabah PT Bank Jago Tbk:",
          ],
        },
        {
          judul: "Prosedur Penyampaian Pengaduan kepada Bank : Secara lisan:",
          text: [
            "Nasabah dapat mendatangi kantor cabang Bank terdekat dan menyampaikan pengaduan melalui Customer Service/Relationship Manager; atau",
            "Nasabah dapat menghubungi Contact Center Tanya Jago di nomor 1500 746 atau 021 30000746. Layanan Contact Center kami melayani Anda 24 jam sehari dan 7 hari dalam seminggu.",
          ],
        },
        {
          judul: "Prosedur Penyampaian Pengaduan kepada Bank : Secara Tulisan:",
          text: [
            "Nasabah dapat mengirimkan email untuk menyampaikan pengaduan ke alamat email Tanya Jago di tanya@jago.com; ",
            "Nasabah dapat menyampaikan pengaduan melalui website Bank Jago (https://jago.com); ",
            "Nasabah dapat menyampaikan pengaduan melalui surat ke alamat berikut:",
          ],
        },
        {
          judul: "Kontak Lain",
          text: [
            "Bank Jago berhak untuk sewaktu-waktu mengubah pernyataan pada website ini. Kami menganjurkan Anda untuk sekali-sekali membaca lagi pernyataan privasi dan mempelajari sejumlah pernyataan privasi yang baru atau perubahan kebijakan Bank Jago.",
          ],
        },
      ],
    },
  ],
};

export const WORDING = {
  home: [
    {
      id: 1,
      text: "Terdaftar dan Diawasi oleh",
      desc: "Kami percaya bahwa pengalaman transaksi perbankan yang berfokus pada kehidupan Anda akan memungkinkan Anda untuk terus bertumbuh.",
    },
    {
      id: 2,
      text: "Produk dan Layanan Kami",
      desc: "Kami percaya bahwa pengalaman transaksi perbankan yang berfokus pada kehidupan Anda akan memungkinkan Anda untuk terus bertumbuh.",
    },
    {
      id: 3,
      text: "Equivalen Rate per Tahun",
      desc: "",
    },
    {
      id: 4,
      text: "Coba simulasi kredit sekarang!",
      desc: "Untuk mengetahui bagi hasil simpanan setiap bulan.",
    },
    {
      id: 5,
      text: "Assalamualaikum Sahabat Syariah,",
      desc: "Dalam rangka menjaga kepercayaan nasabah/konsumen, perlindungan terhadap kepentingan konsumen senantiasa menjadi prioritas kami. PT. BPR Syariah Artha Mas Abadi mengedepankan kualitas layanan dalam rangka memberikan solusi bagi konsumen diantaranya melalui layanan pengaduan konsumen.",
    },
  ],
  produk_layanan: [
    {
      id: 1,
      text: "Produk dan Layanan Kami",
      desc: "-",
    },
  ],
  simulasi_kredit: [
    {
      id: 1,
      text: "Coba simulasi tabungan sekarang!",
      desc: "Untuk mengetahui bagi hasil simpanan setiap bulan.",
    },
    {
      id: 2,
      text: "Simulasi Tabungan!",
      desc: "Realisasi Bagi Hasil Bpr Syariah Artha Mas Abadi Tahun 2022",
    },
  ],
  simulasi_tabungan: [
    {
      id: 3,
      text: "Coba simulasi pembiayaan sekarang!",
      desc: "Untuk mengetahui bagi hasil simpanan setiap bulan.",
    },
    {
      id: 4,
      text: "Simulasi Pembiayaan!",
      desc: "Realisasi Bagi Hasil Bpr Syariah Artha Mas Abadi Tahun 2022",
    },
  ],
  berita_kami: [
    {
      id: 1,
      text: "Pusat Media",
      desc: "Temukan cerita dan berita terbaru mengenai BPR Syariah Artha Mas Abadi di sini.",
    },
    {
      id: 2,
      text: "Berita Kami",
      desc: "Berikut beberapa berita informasi dari pada BPR Syariah Artha Mas Abadi.",
    },
  ],
  publikasi: [
    {
      id: 1,
      text: "Publikasi",
      desc: "Informasi seputar dokumen publikasi daripada BPR Syariah Artha Mas Abadi.",
    },
    {
      id: 2,
      text: "Publikasi",
      desc: "Informasi seputar dokumen publikasi daripada BPR Syariah Artha Mas Abadi.",
    },
  ],
  galeri: [
    {
      id: 1,
      text: "Galeri",
      desc: "Memandang pekerjaan dan keuangan dari perspektif kehidupan.",
    },
    {
      id: 2,
      text: "Video",
      desc: "Beradaptasi terhadap perubahan serta mengambil keputusan dengan cepat.",
    },
    {
      id: 3,
      text: "Foto",
      desc: "Beradaptasi terhadap perubahan serta mengambil keputusan dengan cepat.",
    },
  ],
  tentang_kami: [
    {
      id: 1,
      text: "Tentang Kami",
      desc: "Semangat mengembangkan diri dan meningkatkan pertumbuhan nasabah yang dicapai melalui proses pengenalan diri dan peningkatan keahlian.",
    },
    {
      id: 2,
      text: "Foto dan Informasi Penghargaan",
      desc: "Berikut ini adalah beberapa penghargaan yang diterima oleh Bank Artha Mas Abadi.",
    },
    {
      id: 3,
      text: "Pimpinan Kami",
      desc: "Kami percaya bahwa pengalaman transaksi perbankan yang berfokus pada kehidupan Anda akan memungkinkan Anda untuk terus bertumbuh.",
    },
    {
      id: 4,
      text: "Kontak Kami",
      desc: "Jika Anda memiliki pertanyaan atau tidak dapat menemukan apa yang Anda cari, jangan ragu untuk menghubungi kami.",
    },
  ],
};
