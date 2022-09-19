import { HeadingComponent } from "../atom";
import { img1, img2 } from "../../assets";
import React, { useState } from "react";
import {
  AccordionContainer,
  AccordionContent,
  AccordionSite,
  AccordionImg,
} from "./AccordionElements";

const Accordion = () => {
  let items = [
    {
      name: "Header 1",
      content: "Lorem Impsum dolar asmet",
      img: img1,
    },
    {
      name: "Header 2",
      content: "Lorem Impsum dolar asmet",
      img: img2,
    },
    {
      name: "Header 3",
      content: "Lorem Impsum dolar asmet",
      img: img1,
    },
  ];

  return (
    <AccordionSite>
      <div className="accordion_container">
        <AccordionComponent items={items} />
      </div>
    </AccordionSite>
  );
};

const AccordionComponent = ({ items }) => {
  const [active, setActive] = useState();

  const handleClick = (item) => {
    setActive(item.name === active ? null : item.name);
  };

  const gambarPertama = items[0].img;
  return (
    <AccordionContainer>
      <HeadingComponent
        Heading="Coba simulasi kredit sekarang!"
        Text="Untuk mengetahui berapa biaya yang harus digunakan untuk melakukan kredit Tabungan."
      />
      <div className="accordion_bungkus">
        <div className="pembungkus">
          {items.map((item, i) => {
            let isActive = active === item.name;
            return (
              <AccordionContent
                key={i}
                onClick={() => handleClick(item)}
                itemName={item.name}
                itemContent={item.content}
                isActive={isActive}
              />
            );
          })}
        </div>
        <div className="pembungkus_gambar">
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
        </div>
      </div>
    </AccordionContainer>
  );
};

export default Accordion;
