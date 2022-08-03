import { FiFacebook, FiMail, FiPhone, FiTwitter } from "react-icons/fi";
import { FaEllipsisV, FaInstagram, FaPhone } from "react-icons/fa";
import { blog, organisasi } from "../assets";

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

export const MEDIA_SOSIAL = [
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
    to: "https://twitter.com/id_praw",
    label: "Facebook",
    icon: FiFacebook,
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
    img: organisasi,
    jabatan: "Komisaris",
  },
  {
    id: 2,
    label: "Github",
    img: organisasi,
    jabatan: "Dewan Direksi",
  },
  {
    id: 7,
    label: "Github",
    img: organisasi,
    jabatan: "Dewan Direksi",
  },
  {
    id: 8,
    label: "Github",
    img: organisasi,
    jabatan: "Dewan Direksi",
  },
  {
    id: 3,
    label: "Github",
    img: organisasi,
    jabatan: "Dewan Direksi",
  },
  {
    id: 4,
    label: "Github",
    img: organisasi,
    jabatan: "Anggota",
  },
  {
    id: 8,
    label: "Github",
    img: organisasi,
    jabatan: "Anggota",
  },
  {
    id: 5,
    label: "Github",
    img: organisasi,
    jabatan: "Komisaris",
  },
  {
    id: 6,
    label: "Github",
    img: organisasi,
    jabatan: "Komisaris",
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
    to: "/simulasi",
    icon: FaEllipsisV,
    name: "SIMULASI",
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

export const KONTAK_KAMI = {
  kantor_pusat: [
    {
      id: 1,
      judul: "Head Office",
      alamat:
        "Jl. Raya Pati – Tayu Km. 19. Kampunganyar, Waturoyo, Kec. Margoyoso, Kabupaten Pati, Jawa Tengah 59154",
      no: [
        {
          id: 1,
          icon: FaPhone,
          value: "(0295) 4150477",
        },
        {
          id: 2,
          icon: FiMail,
          value: "085225100893",
        },
      ],
    },
  ],
  kantor_cabang: [
    {
      id: 1,
      judul: "Kantor Cabang",
      alamat: "",
      cabang: [
        {
          id: 1,
          judul: "Kantor Kas Winong",
          alamat: "Jl. Raya Winong – Pucakwangi Km. 01 Pekalongan Winong Pati",
          no: [
            {
              id: 1,
              icon: FaPhone,
              value: "(0295) 4101241",
            },
            {
              id: 2,
              icon: FiMail,
              value: "085326670851",
            },
          ],
        },
        {
          id: 2,
          judul: "Kantor Kas Cluwak",
          alamat: "Jl. Raya Tayu – Jepara Km. 07 Ngablak Cluwak Pati",
          no: [
            {
              id: 1,
              icon: FaPhone,
              value: "(0295) 4545037",
            },
            {
              id: 2,
              icon: FiMail,
              value: "082314006059",
            },
          ],
        },
        {
          id: 2,
          judul: "Kantor Kas Pati",
          alamat: "Jl. Mr. Iskandar No. 1 C Kalianyar Pati",
          no: [
            {
              id: 1,
              icon: FaPhone,
              value: "(0295) 4102834",
            },
            {
              id: 2,
              icon: FiMail,
              value: "082328262770",
            },
          ],
        },
      ],
    },
  ],
};

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
