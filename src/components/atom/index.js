import React, { useEffect, useRef, useState } from "react";
import {
  ayosyariah,
  loading,
  logoWhite,
  lps_text,
  no_pic,
  ojk_text,
  wbsIcon,
} from "../../assets";
import SliderWrapper from "../carousel/_SlickSliderStyle";
import { FaAccusoft } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { Button } from "../../components";
import DOMPurify from "dompurify";
import Slider from "react-slick";
import {
  FocusComponentSiteContact,
  FocusComponentSite,
  CardItemComponents,
  DetailComponents,
  HeadingContent,
  CardComponents,
  OjkComponents,
  InformasiSite,
  SlideContent,
  WaItemSite,
  BeritaContent,
} from "./AtomElements";
import { DATAFETCH } from "../../config";
import { ButtonLink } from "../button";

const Informasi = ({ dataWording }) => {
  return (
    <InformasiSite>
      <div className="informasi_container">
        <div className="informasi">
          <div className="img">
            <img src={wbsIcon} alt="wbsIcon" />
          </div>
          <div className="text_content">
            <div className="content">
              <h1>{dataWording ? dataWording[4]?.text : ""}</h1>
              <p className="text_p">
                {dataWording ? dataWording[4]?.desc : ""}
              </p>
              <Button
                style={{ margin: "auto" }}
                icon={FaAccusoft}
                label="Form Pengaduan"
                to="./hubungi-kami"
              />
            </div>
          </div>
        </div>
      </div>
    </InformasiSite>
  );
};

const CardItem = ({ item }) => {
  return (
    <CardItemComponents>
      <a href={`./berita-kami/${item.slug}`} className="card_item">
        <div className="card_img">
          <img
            src={`https://admin.arthamasabadi.co.id/storage/images/blogs/${item.img}`}
            alt="blog_img"
          />
        </div>
        <div className="card_body">
          <h3>{item.judul}</h3>

          <div
            className="berita_text"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(item.kontenBerita),
            }}
          />
        </div>
        <div className="card_footer">{item.date}</div>
      </a>
    </CardItemComponents>
  );
};

const CardItemLoad = (item) => {
  return (
    <CardItemComponents>
      <div className="card_item">
        <div className="card_img">
          <img src={no_pic} alt="blog_img" />
        </div>
        <div className="card_body">
          <h3>{item.judul}</h3>

          <div
            className="berita_text"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                "Sepertinya belum ada berita terbaru nih.."
              ),
            }}
          />
        </div>
        <div className="card_footer">sabar yaa..</div>
      </div>
    </CardItemComponents>
  );
};

const Card = ({ text, dataWording }) => {
  const [start, setStart] = useState(6);
  const [isActive, setActive] = useState(false);
  const testRef = useRef();
  const cardRef = useRef();

  const dataBerita = DATAFETCH(
    "https://admin.arthamasabadi.co.id/api/v1/posts"
  )?.data;

  const posts = dataBerita;

  const LoadMore = () => {
    setStart((prevValue) => prevValue + 3);

    setActive(true);
    window.scrollTo({
      behavior: "smooth",
      top: cardRef.current.offsetTop,
    });
  };

  const ShowLess = () => {
    setStart(3);
    window.scrollTo({ behavior: "smooth", top: testRef.current.offsetTop });
  };

  return (
    <CardComponents>
      <div ref={testRef} className="card_container">
        <HeadingComponent
          Heading={dataWording ? dataWording[1]?.text : ""}
          Text={dataWording ? dataWording[1]?.desc : ""}
        />

        {posts?.length === 0 ? (
          <BeritaContent>
            <div className="card_content">
              <CardItemLoad judul="Berita tidak ditemukan.." />
            </div>
          </BeritaContent>
        ) : (
          <>
            {text === "Lihat Lebih" ? (
              <BeritaContent isActive={isActive}>
                <div className="card_content">
                  {posts ? (
                    <>
                      {posts?.slice(0, 6).map((item, i) => (
                        <CardItem key={i} item={item} />
                      ))}
                    </>
                  ) : (
                    <CardItemLoad judul="Loading..." />
                  )}
                </div>
                <Button
                  icon={FaAccusoft}
                  label={text}
                  style={{ margin: "auto", marginTop: "40px" }}
                  to="./berita-kami"
                />
              </BeritaContent>
            ) : (
              <BeritaContent>
                <div className="card_content">
                  {posts ? (
                    <>
                      {posts?.slice(0, start).map((item, i) => (
                        <CardItem key={i} item={item} />
                      ))}
                    </>
                  ) : (
                    <CardItemLoad judul="Loading..." />
                  )}
                </div>
                <div ref={cardRef} className="class_baru">
                  <Button
                    icon={FaAccusoft}
                    label={start >= posts?.length + 1 ? "Lihat Sedikit" : text}
                    style={{ margin: "auto", marginTop: "40px" }}
                    onClick={start >= posts?.length + 1 ? ShowLess : LoadMore}
                  />
                </div>
              </BeritaContent>
            )}
          </>
        )}
      </div>
    </CardComponents>
  );
};

const Detail = (item) => {
  return (
    <DetailComponents>
      <div className="detail_container">
        <div className="detail_content">
          {item?.isloading ? (
            <div className="detail_img">
              <div className="detail_img_loading">
                <img src={loading} alt="loading_img" />
              </div>
            </div>
          ) : (
            <div className="detail_img">
              <img
                src={`https://admin.arthamasabadi.co.id/storage/images/ilustrasis/${item?.img}`}
                alt="two"
              />
            </div>
          )}
          <div className="detail_text">
            <div className="visi_misi">
              <div className="detail_text_heading">{item.judul}</div>
              <div
                className="detail_text_p"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(item.deskripsi),
                }}
              />
            </div>
            <div className="visi_misi">
              <div className="detail_text_heading">{item.judulMisi}</div>
              <div className="detail_text_p">
                <div className="value_all">
                  <div dangerouslySetInnerHTML={{ __html: item.misi }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DetailComponents>
  );
};

const DetailLayanan = ({ item, imgDetail, deskripsi }) => {
  const deskripsiValue = deskripsi ? deskripsi : "";
  return (
    <DetailComponents>
      <div className="detail_content">
        <div className="detail_img">
          <img
            src={`https://admin.arthamasabadi.co.id/storage/images/awards/${imgDetail}`}
            alt="imgDetail"
          />
        </div>
        <div className="detail_text">
          <div className="visi_misi">
            <div className="detail_text_heading">{item ? item : ""}</div>
            <div className="detail_text_p">
              <div dangerouslySetInnerHTML={{ __html: deskripsiValue }} />
            </div>
          </div>
        </div>
      </div>
    </DetailComponents>
  );
};

const NewSlide = ({ data }) => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 480px)").matches
  );
  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.matchMedia("(max-width: 480px)").matches);
    });
  }, []);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    fade: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const settingsMobile = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: false,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    ),
  };

  return (
    <SlideContent>
      {isMobile ? (
        <SliderWrapper>
          <Slider {...settingsMobile}>
            {data
              ? data?.map((dataMitra, key) => (
                  <div key={key} className="slide_content">
                    <div className="ojk_img">
                      <img
                        src={`https://admin.arthamasabadi.co.id/storage/images/mitras/${dataMitra?.photo}`}
                        alt="mitra"
                      />
                    </div>
                  </div>
                ))
              : ""}
          </Slider>
        </SliderWrapper>
      ) : (
        <SliderWrapper>
          <Slider {...settings}>
            {data
              ? data?.map((dataMitra, key) => (
                  <div key={key} className="slide_content">
                    <div className="ojk_img">
                      <img
                        src={`https://admin.arthamasabadi.co.id/storage/images/mitras/${dataMitra?.photo}`}
                        alt="mitra"
                      />
                    </div>
                  </div>
                ))
              : ""}
          </Slider>
        </SliderWrapper>
      )}
    </SlideContent>
  );
};

const OjkInformasi = ({ dataWording }) => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 480px)").matches
  );
  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.matchMedia("(max-width: 480px)").matches);
    });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: false,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    ),
  };

  const MITRA = DATAFETCH(
    "https://admin.arthamasabadi.co.id/api/v1/mitra"
  )?.data;

  return (
    <OjkComponents>
      <div className="ojk_container">
        <HeadingComponent
          Heading={dataWording ? dataWording[0]?.text : ""}
          Text={dataWording ? dataWording[0]?.desc : ""}
        />

        {isMobile ? (
          <SliderWrapper>
            <Slider {...settings}>
              <div className="ojk_img">
                <img src={ojk_text} alt="ojk" />
              </div>
              <div className="ojk_img">
                <img src={lps_text} alt="lps1" />
              </div>
              <div className="ojk_img">
                <img src={ayosyariah} alt="ayosyariah" />
              </div>
            </Slider>
          </SliderWrapper>
        ) : (
          <div className="ojk_content">
            <div className="ojk_img">
              <img style={{ width: "250px" }} src={ojk_text} alt="ojk" />
            </div>
            <div className="ojk_img">
              <img style={{ width: "250px" }} src={lps_text} alt="lps1" />
            </div>
            <div className="ojk_img">
              <img src={ayosyariah} alt="ayosyariah" />
            </div>
          </div>
        )}

        <div className="ojk_content_slide">
          <div className="mitra">Mitra Kami</div>
          <NewSlide data={MITRA} />
        </div>
      </div>
    </OjkComponents>
  );
};

const ReactHelmet = (item) => {
  return (
    <Helmet prioritizeSeoTags>
      <title>{item.title}</title>
      <meta
        name="description"
        content="Ini adalah halaman Baru Here you can find all the basic elements that should never report any issue, in every page of the website."
      />
      <link rel="canonical" href={item.url} />
      <meta property="og:type" content="Text" />
      <meta property="og:title" content="Bank Artha Mas Abadi | Home" />
      <meta
        property="og:image"
        content="https://id-prawito.github.io/web-landing/static/media/jago-3.6318b27de2998085a42f.jpg"
      />
      <meta
        property="og:description"
        content="hIni adalah halaman Baru Here you can find all the basic elements that should never report any issue, in every page of the website."
      />
      <meta property="og:url" content={item.url} />
    </Helmet>
  );
};

const HeadingComponent = (item) => {
  return (
    <HeadingContent>
      <div className="heading" style={item.Style}>
        <h2>{item.Heading}</h2>
        <p>{item.Text}</p>
      </div>
    </HeadingContent>
  );
};

const FocusComponentWithLogo = ({ backgroundColor, dataWording }) => {
  return (
    <FocusComponentSite>
      <div className="focus_container">
        <div
          className="gambar_bg_new"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "40px",
            backgroundColor: backgroundColor,
          }}
        >
          <div className="class_tambahan">
            <img src={logoWhite} className="new" alt="logoWhite" />
            <img src={logoWhite} className="new" alt="logoWhite" />
          </div>
          <HeadingComponent
            Style={{
              textAlign: "center",
              width: "100%",
              color: "#fff",
              padding: "0px 20px",
              zIndex: "2",
            }}
            Heading={dataWording ? dataWording[0]?.text : ""}
            Text={dataWording ? dataWording[0]?.desc : ""}
          />
          <ButtonLink
            style={{ zIndex: "2" }}
            icon={FaAccusoft}
            label="Simulasi Tabungan"
            to="./simulasi-bank/simulasi"
          />
        </div>
      </div>
    </FocusComponentSite>
  );
};

const FocusComponentColor = ({ img, backgroundColor, dataWording }) => {
  return (
    <FocusComponentSiteContact>
      <div className="focus_container">
        <div
          className="gambar_bg_tentang"
          style={{ backgroundColor: backgroundColor }}
        >
          <HeadingComponent
            Style={{
              textAlign: "start",
              width: "100%",
              color: "#fff",
            }}
            Heading={dataWording ? dataWording[0]?.text : ""}
            Text={dataWording ? dataWording[0]?.desc : ""}
          />
          <div className="gambar_img">
            <img src={img} alt="imgContact" />
          </div>
        </div>
      </div>
    </FocusComponentSiteContact>
  );
};

const FocusComponentBackground = ({ image }) => {
  return (
    <FocusComponentSiteContact>
      <div className="focus_container">
        <div className="backgroud_class">
          <img src={image} alt="tentang_kami" />
        </div>
      </div>
    </FocusComponentSiteContact>
  );
};

const WaItemContent = () => {
  const waRef = useRef(null);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop >= 300 ||
        document.documentElement.scrollTop >= 300
      ) {
        waRef.current.classList.add("active");
      } else {
        waRef.current.classList.remove("active");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <WaItemSite>
      <div ref={waRef} className="wa_content">
        <a
          href="https://wa.me/6285225100893"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="wa_text">Hubungi Kami via Whatsapp</div>
          <div className="wa_icon"></div>
        </a>
      </div>
    </WaItemSite>
  );
};

export {
  FocusComponentBackground,
  FocusComponentWithLogo,
  FocusComponentColor,
  HeadingComponent,
  DetailLayanan,
  WaItemContent,
  CardItemLoad,
  OjkInformasi,
  ReactHelmet,
  Informasi,
  Detail,
  Card,
};
