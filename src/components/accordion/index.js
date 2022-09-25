import { HeadingComponent } from "../atom";
// import { img1, img2 } from "../../assets";
import React, { useState } from "react";
import {
  AccordionContainer,
  AccordionContent,
  AccordionSite,
  // AccordionImg,
} from "./AccordionElements";

const Accordion = ({ items, judul, desc }) => {
  return (
    <AccordionSite>
      <div className="accordion_container">
        <AccordionComponent items={items} judul={judul} desc={desc} />
      </div>
    </AccordionSite>
  );
};

const AccordionComponent = ({ items, judul, desc }) => {
  const [active, setActive] = useState();

  const handleClick = (item) => {
    setActive(item.name === active ? null : item.name);
  };

  // const gambarPertama = items[0].img;
  return (
    <AccordionContainer>
      <HeadingComponent Heading={judul} Text={desc} />
      <div className="accordion_bungkus">
        <div className="pembungkus">
          {items.map((item, i) => {
            let isActive = active === item.name;
            return (
              <AccordionContent
                itemUrl={item.url}
                key={i}
                onClick={() => handleClick(item)}
                itemName={item.name}
                itemContent={item.content}
                isActive={isActive}
              />
            );
          })}
        </div>
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
