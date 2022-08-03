import React from "react";
import { DetailBeritaSite, DetailSupportSite } from "./BeritaElements";
import DOMPurify from "dompurify";
import { useLocation } from "react-router-dom";
import { ReactHelmet } from "../atom";

const DetailBeritaComponents = ({ newItem }) => {
  // console.log(newItem);
  const location = useLocation();
  return (
    <>
      <ReactHelmet
        title={`${newItem[0].judul} | Bank Artha Mas Abadi`}
        url={location.pathname}
      />
      <DetailBeritaSite>
        {newItem ? (
          <>
            {newItem.map((itemBerita, i) => (
              <div className="berita_container" key={i}>
                <div className="berita_content">
                  <nav className="berita_breadcrum">
                    <ol className="breadcrum">
                      <li className="breadcrum_item">
                        <a href="/">Home</a>
                      </li>
                      <li className="breadcrum_item">
                        <a href="/berita-kami">Berita</a>
                      </li>
                      <li className="breadcrum_item">
                        <p>{itemBerita.judul}</p>
                      </li>
                    </ol>
                  </nav>
                  <div className="berita_judul">
                    <div className="judul">{itemBerita.judul}</div>
                    <p>18 Juli 2020</p>
                  </div>
                  <div className="berita_full">
                    <div className="berita_gambar">
                      <img src={itemBerita.img} alt="" />
                    </div>
                    <div
                      className="berita_text"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(itemBerita.kontenBerita),
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          "Tidak ada data"
        )}
      </DetailBeritaSite>
    </>
  );
};

export const DetailSupportComponents = (item) => {
  const location = useLocation();
  console.log(item.itemNew);
  return (
    <>
      <ReactHelmet
        title={`${item.itemNew.judul} | Bank Artha Mas Abadi`}
        url={location.pathname}
      />
      {item && (
        <DetailSupportSite>
          <div className="support_container">
            <div className="support_content">
              <nav className="support_breadcrum">
                <ol className="breadcrum">
                  <li className="breadcrum_item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrum_item">
                    <a href="/">Support</a>
                  </li>
                  <li className="breadcrum_item">
                    <p>{item.itemNew.judul}</p>
                  </li>
                </ol>
              </nav>
              <div className="support_judul">
                <div className="judul">{item.itemNew.judul}</div>
                <p>18 Juli 2020</p>
              </div>
              {item.itemNew.contentFull &&
                item.itemNew.contentFull.map((item, i) => (
                  <div key={i} className="value_b">
                    <div key={i} className="value_all">
                      <h1>{item.judul}</h1>
                      <ol>
                        {item.text.map((item, i) => (
                          <div key={i}>
                            <li>{item}</li>
                          </div>
                        ))}
                      </ol>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </DetailSupportSite>
      )}
    </>
  );
};

export default DetailBeritaComponents;
