import React, { useEffect, useState } from "react";
import { CorouselSection, CorouselSectionFicture } from "./CarouselElements";
import imgTryMobile from "../../assets/img/jago-mobile.jpg";
import {
  // jago,
  // jago2,
  jago2Mobile,
  // jago3,
  jago3Mobile,
  two,
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

  console.log(DATABANNERS);

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
              DATABANNERS.map((item, i) => (
                <div className="class_img">
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

export const SimpleSliderFicture = (itemNew) => {
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
        <HeadingComponent Heading={itemNew.judul} Text={itemNew.deskripsi} />
        <div className="carousel_container_slide">
          <SliderWrapper>
            <Slider {...settings}>
              <DetailLayanan item="Label 1" imgDetail={two} />
              <DetailLayanan item="Label 2" imgDetail={two} />
              <DetailLayanan item="Label 3" imgDetail={two} />
            </Slider>
          </SliderWrapper>
        </div>
      </div>
    </CorouselSectionFicture>
  );
};

export default SimpleSlider;
