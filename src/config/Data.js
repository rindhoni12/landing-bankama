import { FiGithub, FiLinkedin, FiPhone, FiTwitter } from "react-icons/fi";
import { FaEllipsisV, FaInstagram } from "react-icons/fa";
import organisasiImg from "../assets/img/organisasi.png";
import blogImg from "../assets/img/blog.jpg";

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
    megamenu: true,
    megamenuItem: [
      {
        id: 1,
        to: "/penyimpanan-dana",
        name: "PENYIMPANAN DANA",
        sub: [
          {
            to: "/web-landing/layanan-kami/penyimpanan-dana/0",
            judul: "Tabungan iB Wadiah",
          },
          {
            to: "/web-landing/layanan-kami/penyimpanan-dana/1",
            judul: "Tabungan iB Mudharabah",
          },
          {
            to: "/web-landing/layanan-kami/penyimpanan-dana/2",
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
            to: "/web-landing/layanan-kami/penyaluran-dana/0",
            judul: "Pembiayaan iB Wadiah",
          },
          {
            to: "/web-landing/layanan-kami/penyaluran-dana/1",
            judul: "Pembiayaan iB Musyarakah",
          },
          {
            to: "/web-landing/layanan-kami/penyaluran-dana/2",
            judul: "Pembiayaan iB Multijasa",
          },
          {
            to: "/web-landing/layanan-kami/penyaluran-dana/3",
            judul: "iB Gadai Emas",
          },
        ],
      },
    ],
  },
  {
    to: "/simulasi-kpr",
    icon: FaEllipsisV,
    name: "SIMULASI KPR",
    megamenu: false,
  },
  {
    to: "/berita-kami",
    icon: FaEllipsisV,
    name: "BERITA KAMI",
    megamenu: false,
  },
  {
    to: "/publikasi",
    icon: FaEllipsisV,
    name: "PUBLIKASI",
    megamenu: false,
  },
  {
    to: "/we-contact-us",
    icon: FaEllipsisV,
    name: "TENTANG KAMI",
    megamenu: false,
  },
];

export const MEDIA_SOSIAL = [
  {
    to: "https://github.com/id-prawito",
    label: "Github",
    icon: FiGithub,
  },
  {
    to: "https://www.instagram.com/praw.ito/",
    label: "Instagram",
    icon: FaInstagram,
  },
  {
    to: "https://twitter.com/id_praw",
    label: "Twitter",
    icon: FiTwitter,
  },
  {
    to: "https://linkedin.com/in/prawito/",
    label: "Linkedin",
    icon: FiLinkedin,
  },
  {
    to: "tel:+6282137925172",
    label: "Phone",
    icon: FiPhone,
  },
];

export const ORGANISASI = [
  {
    id: 1,
    label: "Github",
    img: organisasiImg,
    jabatan: "Komisaris",
  },
  {
    id: 2,
    label: "Github",
    img: organisasiImg,
    jabatan: "Dewan Direksi",
  },
  {
    id: 7,
    label: "Github",
    img: organisasiImg,
    jabatan: "Dewan Direksi",
  },
  {
    id: 8,
    label: "Github",
    img: organisasiImg,
    jabatan: "Dewan Direksi",
  },
  {
    id: 3,
    label: "Github",
    img: organisasiImg,
    jabatan: "Dewan Direksi",
  },
  {
    id: 4,
    label: "Github",
    img: organisasiImg,
    jabatan: "Anggota",
  },
  {
    id: 8,
    label: "Github",
    img: organisasiImg,
    jabatan: "Anggota",
  },
  {
    id: 5,
    label: "Github",
    img: organisasiImg,
    jabatan: "Komisaris",
  },
  {
    id: 6,
    label: "Github",
    img: organisasiImg,
    jabatan: "Komisaris",
  },
];

export const BERITA = [
  {
    id: 1,
    judul: "Membuat adonan kue 1",
    date: "17 Juli 2020",
    img: blogImg,
    kontenBerita:
      "Bikin anggaran, baik anggaran jangka pendek maupun jangka panjang, itu gampang-gampang susah. Gampang jika tahu apa yang mesti dilakukan, susah karena ada tantangan seperti konsistensi dan kedisiplinan. Kali ini, Jagomin mau bagikan 4 cara yang bisa diikuti supaya kamu jadi selangkah lebih jago membuat anggaran jangka panjang.",
  },
  {
    id: 2,
    judul: "Membuat adonan kue 2",
    date: "17 Juli 2020",
    img: blogImg,
    kontenBerita:
      "<div>Bikin anggaran, baik anggaran jangka pendek maupun jangka panjang, itu gampang-gampang susah. Gampang jika tahu apa yang mesti dilakukan, susah karena ada tantangan seperti konsistensi dan kedisiplinan. Kali ini, Jagomin mau bagikan 4 cara yang bisa diikuti supaya kamu jadi selangkah lebih jago membuat anggaran jangka panjang.<br><br>Bikin anggaran, baik anggaran jangka pendek <b>Bank Jago</b> maupun jangka panjang, itu gampang-gampang susah. Gampang jika tahu apa yang mesti dilakukan, susah karena ada tantangan seperti konsistensi dan kedisiplinan. Kali ini, Jagomin mau bagikan 4 cara yang bisa diikuti supaya kamu jadi selangkah lebih jago membuat anggaran jangka panjang. <br><br>Bikin anggaran, baik anggaran jangka pendek <b>Bank Jago</b> maupun jangka panjang, itu gampang-gampang susah. Gampang jika tahu apa yang mesti dilakukan, susah karena ada tantangan seperti konsistensi dan kedisiplinan. Kali ini, Jagomin mau bagikan 4 cara yang bisa diikuti supaya kamu jadi selangkah lebih jago membuat anggaran jangka panjang. <br><br>Bikin anggaran, baik anggaran jangka pendek <b>Bank Jago</b> maupun jangka panjang, itu gampang-gampang susah. Gampang jika tahu apa yang mesti dilakukan, susah karena ada tantangan seperti konsistensi dan kedisiplinan. Kali ini, Jagomin mau bagikan 4 cara yang bisa diikuti supaya kamu jadi selangkah lebih jago membuat anggaran jangka panjang.</div>",
  },
  {
    id: 3,
    judul: "Membuat adonan kue 3",
    date: "17 Juli 2020",
    img: blogImg,
    kontenBerita:
      "Bikin anggaran, baik anggaran jangka pendek maupun jangka panjang, itu gampang-gampang susah. Gampang jika tahu apa yang mesti dilakukan, susah karena ada tantangan seperti konsistensi dan kedisiplinan. Kali ini, Jagomin mau bagikan 4 cara yang bisa diikuti supaya kamu jadi selangkah lebih jago membuat anggaran jangka panjang.",
  },
  {
    id: 4,
    judul: "Membuat adonan kue 4",
    date: "17 Juli 2020",
    img: blogImg,
    kontenBerita:
      "Bikin anggaran, baik anggaran jangka pendek maupun jangka panjang, itu gampang-gampang susah. Gampang jika tahu apa yang mesti dilakukan, susah karena ada tantangan seperti konsistensi dan kedisiplinan. Kali ini, Jagomin mau bagikan 4 cara yang bisa diikuti supaya kamu jadi selangkah lebih jago membuat anggaran jangka panjang.",
  },
  {
    id: 5,
    judul: "Membuat adonan kue 5",
    date: "17 Juli 2020",
    img: blogImg,
    kontenBerita:
      "Bikin anggaran, baik anggaran jangka pendek maupun jangka panjang, itu gampang-gampang susah. Gampang jika tahu apa yang mesti dilakukan, susah karena ada tantangan seperti konsistensi dan kedisiplinan. Kali ini, Jagomin mau bagikan 4 cara yang bisa diikuti supaya kamu jadi selangkah lebih jago membuat anggaran jangka panjang.",
  },
  {
    id: 6,
    judul: "Membuat adonan kue 6",
    date: "17 Juli 2020",
    img: blogImg,
    kontenBerita:
      "Bikin anggaran, baik anggaran jangka pendek maupun jangka panjang, itu gampang-gampang susah. Gampang jika tahu apa yang mesti dilakukan, susah karena ada tantangan seperti konsistensi dan kedisiplinan. Kali ini, Jagomin mau bagikan 4 cara yang bisa diikuti supaya kamu jadi selangkah lebih jago membuat anggaran jangka panjang.",
  },
  {
    id: 7,
    judul: "Membuat adonan kue 7",
    date: "17 Juli 2020",
    img: blogImg,
    kontenBerita:
      "Bikin anggaran, baik anggaran jangka pendek maupun jangka panjang, itu gampang-gampang susah. Gampang jika tahu apa yang mesti dilakukan, susah karena ada tantangan seperti konsistensi dan kedisiplinan. Kali ini, Jagomin mau bagikan 4 cara yang bisa diikuti supaya kamu jadi selangkah lebih jago membuat anggaran jangka panjang.",
  },
];

export const TABS = [
  {
    id: 1,
    judul: "Tabungan iB Wadiyah",
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

export const DATA_BARU = {
  penyimpanan_dana: [
    {
      id: 1,
      judul: "Penyimpanan Dana",
      contentFull: [
        {
          id: 1,
          judul: "Tabungan iB Wadiyah",
          content: {
            apa: "Apa yang Dimaksud dengan Tabungan Wadiah?",
            p: "Tabungan iB Wadiah merupakan tabungan yang dikelola dengan sistem titipan (wadiah)",
            fitur: [
              {
                judul: "Fitur & Biaya",
                text_a: "",
                text: [
                  "Berdasarkan prinsip syariah dengan akad wadiah",
                  "Bonus tabungan kompetitif",
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
                  "Warga Negara Indonesia: KTP/SIM/Paspor, NPWP",
                  "Warga Negara Asing: Paspor dan Kartu Izin Menetap Sementara (KIM/KITAS)",
                ],
              },
            ],
          },
        },
        {
          id: 2,
          judul: "Tabungan iB Mudharabah",
          content: {
            apa: "Apa yang Dimaksud dengan Tabungan iB Mudharabah ?",
            p: "Tabungan iB Mudharabah merupakan tabungan yang dikelola dengan sistem bagi hasil.",
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
                ],
              },
              {
                judul: "2. Tabungan iB Qurban",
                text_a:
                  "Membantu merencanakan dan mewujudkan niat anda untuk melaksanakan Ibadah Qurban. Ketentuan :",
                text: [
                  "Setoran awal minimal Rp. 50.000",
                  "Setoran selanjutnya minimal Rp. 50.000",
                  "Nisbah bagi hasil ditetapkan sesuai dengan akad perjanjian",
                  "Penarikan tabungan dapat dilakukan pada awal bulan Dzulhijjah atau jika pengendapan sudah sampai satu tahun",
                ],
              },
              {
                judul: "3. Tabungan iB Masa Depan",
                text_a:
                  "Membantu anda dalam merencanakan masa depan (rencana pernikahan, persalinan, hari tua, dll). Ketentuan :",
                text: [
                  "Setoran awal minimal Rp. 100.000",
                  "Setoran selanjutnya minimal Rp. 100.000",
                  "Nisbah bagi hasil ditetapkan sesuai dengan akad perjanjian",
                  "Jangka waktu minimal 3 Tahun.",
                ],
              },
              {
                judul: "4. Tabungan iB Pendidikan",
                text_a:
                  "Membantu anda dalam merencanakan biaya pendidikan anak. Ketentuan :",
                text: [
                  "Setoran awal minimal Rp. 100.000",
                  "Setoran selanjutnya minimal Rp. 50.000",
                  "Nisbah bagi hasil ditetapkan sesuai dengan akad perjanjian",
                  "Jangka waktu menyesuaikan dengan jenjang pendidikan anak.",
                ],
              },
              {
                judul: "Keunggulan produk tabungan iB Mudharabah",
                text_a: "",
                text: [
                  "Dikelola dengan sistem syariah",
                  "Bagi hasil kompetitif",
                  "Bebas biaya administrasi bulanan",
                  "Dijamin oleh LPS (Lembaga Penjamin Simpanan sampai dengan 2 Milyar Rupiah)",
                  "Mendapatkan Souvenir menarik langsung pasa saat pembukaan rekening",
                  "Dapat dijadikan sebagai agunan pembiayaan",
                ],
              },
            ],
          },
        },
        {
          id: 3,
          judul: "Deposito iB Mudharabah",
          content: {
            apa: "Apa itu Deposito iB Mudharabah ?",
            p: "Deposito iB Mudharabah merupakan layanan investasi berjangka yang dikelola dengan sistem bagi hasil (Mudharabah).",
            fitur: [
              {
                judul: "1. Deposito iB Mudharabah",
                text_a:
                  "Deposito iB Mudharabah merupakan layanan investasi berjangka yang dikelola dengan sistem bagi hasil (Mudharabah). Ketentuan :",
                text: [
                  "Setoran minimal Rp. 1.000.000",
                  "Jangka waktu 3, 6 dan 12 bulan",
                  "Nisbah bagi hasil ditetapkan sesuai dengan akad perjanjian",
                  "Pencairan bisa dilakukan pada saat jatuh tempo.",
                ],
              },
              {
                judul: "Keunggulan produk Deposito iB Mudharabah",
                text_a: "",
                text: [
                  "Dikelola dengan sistem syariah",
                  "Bagi hasil kompetitif",
                  "Bebas biaya administrasi bulanan",
                  "Dijamin oleh LPS (Lembaga Penjamin Simpanan sampai dengan 2 Milyar Rupiah)",
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
                  "Mengisi formulir pendaftaran",
                  "Foto copy e-KTP berlaku pemohon (suami istri) rangkap lima",
                  "Foto copy e-KTP berlaku salah satu orang tua (bila pemohon masih lajang)",
                  "Foto copy Kartu Keluarga pemohon",
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
                judul: "Persyaratan :",
                text_a: "",
                text: [
                  "Mengisi formulir pendaftaran",
                  "Foto copy e-KTP berlaku pemohon (suami istri) rangkap lima",
                  "Foto copy e-KTP berlaku salah satu orang tua (bila pemohon masih lajang)",
                  "Foto copy Kartu Keluarga pemohon",
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
                judul: "Persyaratan :",
                text_a: "",
                text: [
                  "Mengisi formulir pendaftaran",
                  "Foto copy e-KTP berlaku pemohon (suami istri) rangkap lima",
                  "Foto copy e-KTP berlaku salah satu orang tua (bila pemohon masih lajang)",
                  "Foto copy Kartu Keluarga pemohon",
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
                judul: "Persyaratan :",
                text_a: "",
                text: [
                  "Mengisi formulir pendaftaran",
                  "Foto copy e-KTP berlaku pemohon (suami istri) rangkap lima",
                ],
              },
            ],
          },
        },
      ],
    },
  ],
};

export const DATA_PUBLIKASI = [
  {
    id: 1,
    judul: "Laporan Triwulan",
    content: {
      apa: "Seleksi Pemasok dan Perlindungan Hak Kreditur",
      p: "Jika Anda memiliki pertanyaan atau tidak dapat menemukan apa yang Anda cari, jangan ragu untuk menghubungi kami di:",
      fitur: [
        {
          judul: "Seleksi Pemasok dan Perlindungan Hak Kreditur",
          tanggal: "2021 | April",
          buttonDonwload: "link",
        },
        {
          judul: "Seleksi Pemasok dan Perlindungan Hak Kreditur",
          tanggal: "2022 | April",
          buttonDonwload: "link",
        },
      ],
    },
  },
  {
    id: 2,
    judul: "Laporan CGC",
    content: {
      apa: "Apa yang Dimaksud dengan Tabungan iB Mudharabah ?",
      p: "Jika Anda memiliki pertanyaan atau tidak dapat menemukan apa yang Anda cari, jangan ragu untuk menghubungi kami di:",
      fitur: [
        {
          judul: "Seleksi Pemasok dan Perlindungan Hak Kreditur CDC",
          tanggal: "2021 | April",
          buttonDonwload: "link",
        },
        {
          judul: "Seleksi Pemasok dan Perlindungan Hak Kreditur CDC",
          tanggal: "2022 | April",
          buttonDonwload: "link",
        },
      ],
    },
  },
];
