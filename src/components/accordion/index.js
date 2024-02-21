import { HeadingComponent } from "../atom";
import React, { useState } from "react";
import {
  AccordionContainer,
  AccordionContent,
  AccordionSite,
  // AccordionImg,
} from "./AccordionElements";
// import { img1, img2 } from "../../assets";

const Accordion = ({ items, judul, desc }) => {
  const dataDesc = `Berikut ini adalah Produk dan Layanan dari ${desc}.`;

  return (
    <AccordionSite>
      <div className="accordion_container">
        <AccordionComponent items={items} judul={judul} desc={dataDesc} />
      </div>
    </AccordionSite>
  );
};

const AccordionComponent = ({ items, judul, desc }) => {
  const [active, setActive] = useState();

  const handleClick = (item) => {
    setActive(item.judul === active ? null : item.judul);
  };

  return (
    <AccordionContainer>
      <HeadingComponent Heading={judul} Text={desc} />
      <div className="accordion_bungkus">
        <div className="pembungkus">
          {items?.map((item, i) => {
            let isActive = active === item?.judul;
            let url = `layanan-kami${item?.to}`;
            return (
              <AccordionContent
                itemUrl={url}
                key={i}
                onClick={() => handleClick(item)}
                itemName={item.judul}
                itemContent={item.deskripsi}
                isActive={isActive}
              />
            );
          })}
        </div>
        {/* Accordion for image */}
        {/* <div className="pembungkus_gambar">
          {active ? (
            items.map((item, i) => {
              let isActive = active === item.name;
              return (
                <div className="try" key={i}>
                  <AccordionImg isActive={isActive} itemImg={item.img} />
                </div>
              );
            })
          ) : (
            <img style={{ width: "300px" }} src={gambarPertama} alt="" />
          )}
        </div> */}
      </div>
    </AccordionContainer>
  );
};

export default Accordion;
