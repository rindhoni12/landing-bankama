import React, { useEffect, useState } from "react";
import { CorouselSection, CorouselSectionFicture } from "./CarouselElements";
import imgTryMobile from "../../assets/img/jago-mobile.jpg";
import {
  // jago,
  // jago2,
  jago2Mobile,
  // jago3,
  jago3Mobile,
  peng1,
  peng2,
  peng3,
  peng4,
  peng5,
} from "../../assets";
import Slider from "react-slick";
import SliderWrapper from "./_SlickSliderStyle";
import { DetailLayanan, HeadingComponent } from "../atom";
import { DATAFETCH } from "../../config";

const SimpleSlider = () => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 600px)").matches
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
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

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.matchMedia("(max-width: 600px)").matches);
    });
  }, []);

  const DATABANNERS = DATAFETCH(
    "https://admin.arthamasabadi.co.id/api/v1/banners"
  )?.data;

  return (
    <CorouselSection>
      <SliderWrapper>
        {isMobile ? (
          <Slider {...settings}>
            <div className="class_img">
              <img src={imgTryMobile} alt="img_try" />
            </div>
            <div className="class_img">
              <img src={jago2Mobile} alt="jago2Mobile" />
            </div>
            <div className="class_img">
              <img src={jago2Mobile} alt="jago2Mobile" />
            </div>
            <div className="class_img">
              <img src={imgTryMobile} alt="img_try" />
            </div>
            <div className="class_img">
              <img src={jago3Mobile} alt="jago3Mobile" />
            </div>
          </Slider>
        ) : (
          <Slider {...settings}>
            {DATABANNERS &&
              DATABANNERS?.map((item, i) => (
                <div key={i} className="class_img">
                  <img
                    src={`https://admin.arthamasabadi.co.id/storage/images/banners/${item.banner}`}
                    alt="jago"
                  />
                </div>
              ))}
          </Slider>
        )}
      </SliderWrapper>
    </CorouselSection>
  );
};

export const SimpleSliderFicture = ({ dataWording }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: true,
    // appendDots: (dots) => <ul>{dots}</ul>,
    // customPaging: (i) => (
    //   <div className="ft-slick__dots--custom">
    //     <div className="loading" />
    //   </div>
    // ),
  };

  const dataPenghargaan = [
    {
      key: "penghargaan 1",
      label: "Penghargaan 1",
      img: peng1,
      desc: "BPRS Predikat “ SANGAT BAGUS”  Sharia Finance Awards 2013 versi Majalah Infobank.",
    },
    {
      key: "penghargaan 2",
      label: "Penghargaan 2",
      img: peng2,
      desc: "BPRS Predikat “ SANGAT BAGUS”  Sharia Finance Awards 2014 versi Majalah Infobank.",
    },
    {
      key: "penghargaan 3",
      label: "Penghargaan 3",
      img: peng3,
      desc: "BPRS Predikat “ SANGAT BAGUS”  Sharia Finance Awards 2016 versi Majalah Infobank.",
    },
    {
      key: "penghargaan 4",
      label: "Penghargaan 4",
      img: peng4,
      desc: "BPRS Predikat “ EXCELLENT”  Sharia Finance Awards 2018 versi Majalah Infobank.",
    },
    {
      key: "penghargaan 5",
      label: "Penghargaan 5",
      img: peng5,
      desc: "BPRS Predikat “ EXCELLENT” Financial Performance 2020 versi MES Sharia Institution ",
    },
  ];

  return (
    <CorouselSectionFicture>
      <div className="carousel_container">
        <HeadingComponent
          Heading={dataWording ? dataWording[1]?.text : ""}
          Text={dataWording ? dataWording[1]?.desc : ""}
        />
        <div className="carousel_container_slide">
          <SliderWrapper>
            <Slider {...settings}>
              {dataPenghargaan
                ? dataPenghargaan.map((item, i) => (
                    <DetailLayanan
                      deskripsi={item.desc}
                      key={i}
                      item={item.label}
                      imgDetail={item.img}
                    />
                  ))
                : ""}
            </Slider>
          </SliderWrapper>
        </div>
      </div>
    </CorouselSectionFicture>
  );
};

export default SimpleSlider;
