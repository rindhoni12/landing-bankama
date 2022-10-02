import React, { useEffect, useState } from "react";
import { CorouselSection, CorouselSectionFicture } from "./CarouselElements";
import { DetailLayanan, HeadingComponent } from "../atom";
import SliderWrapper from "./_SlickSliderStyle";
import { DATAFETCH, DATA_PENGAHRAGAAN } from "../../config";
import Slider from "react-slick";

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

  const DATABANNERSMOBILE = DATAFETCH(
    "https://admin.arthamasabadi.co.id/api/v1/mobile-banners"
  )?.data;

  console.log(DATABANNERSMOBILE);

  return (
    <CorouselSection>
      <SliderWrapper>
        {isMobile ? (
          <Slider {...settings}>
            {DATABANNERSMOBILE &&
              DATABANNERSMOBILE?.map((item, i) => (
                <div key={i} className="class_img">
                  <img
                    src={`https://admin.arthamasabadi.co.id/storage/images/banners-mobile/${item?.banner}`}
                    alt={item?.no_slide}
                  />
                </div>
              ))}
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
              {DATA_PENGAHRAGAAN
                ? DATA_PENGAHRAGAAN?.map((item, i) => (
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
