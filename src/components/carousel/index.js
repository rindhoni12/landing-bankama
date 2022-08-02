import React, { useEffect, useState } from "react";
import { CorouselSection, CorouselSectionFicture } from "./CarouselElements";
import imgTry from "../../assets/img/jago.jpeg";
import imgTry2 from "../../assets/img/jago-2.jpeg";
import imgTry3 from "../../assets/img/jago-3.jpg";
import imgTryMobile from "../../assets/img/jago-mobile.jpg";
import imgTry2Mobile from "../../assets/img/jago-2-mobile.jpg";
import imgTry3Mobile from "../../assets/img/jago-3-mobile.jpg";
import Slider from "react-slick";
import SliderWrapper from "./_SlickSliderStyle";
import { DetailLayanan, HeadingComponent } from "../atom";
import imgDetail from "../../assets/img/2.png";

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

  return (
    <CorouselSection>
      <SliderWrapper>
        {isMobile ? (
          <Slider {...settings}>
            <div className="class_img">
              <img src={imgTryMobile} alt="img_try" />
            </div>
            <div className="class_img">
              <img src={imgTry2Mobile} alt="img_try" />
            </div>
            <div className="class_img">
              <img src={imgTry3Mobile} alt="img_try" />
            </div>
            <div className="class_img">
              <img src={imgTryMobile} alt="img_try" />
            </div>
            <div className="class_img">
              <img src={imgTry3Mobile} alt="img_try" />
            </div>
          </Slider>
        ) : (
          <Slider {...settings}>
            <div className="class_img">
              <img src={imgTry} alt="img_try" />
            </div>
            <div className="class_img">
              <img src={imgTry2} alt="img_try" />
            </div>
            <div className="class_img">
              <img src={imgTry3} alt="img_try" />
            </div>
            <div className="class_img">
              <img src={imgTry2} alt="img_try" />
            </div>
            <div className="class_img">
              <img src={imgTry3} alt="img_try" />
            </div>
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
              <DetailLayanan item="Label 1" imgDetail={imgDetail} />
              <DetailLayanan item="Label 2" imgDetail={imgDetail} />
              <DetailLayanan item="Label 3" imgDetail={imgDetail} />
            </Slider>
          </SliderWrapper>
        </div>
      </div>
    </CorouselSectionFicture>
  );
};

export default SimpleSlider;
