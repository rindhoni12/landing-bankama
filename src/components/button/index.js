import React from "react";
import { ButtonContent, ButtonTransparentContent } from "./ButtonElements";
import FileSaver from "file-saver";

const Button = (item) => {
  return (
    <ButtonContent>
      <button
        style={item.style}
        onClick={item.onClick}
        id={item.id}
        to={item.to}
        className="button_my-course"
      >
        {/* <item.icon /> */}
        <a href={item.to}>{item.label}</a>
      </button>
    </ButtonContent>
  );
};

const ButtonTransparent = (item) => {
  return (
    <ButtonTransparentContent>
      <button
        style={item.style}
        onClick={item.onClick}
        id={item.id}
        className={`button_my-course ${item.active}`}
      >
        {/* <item.icon /> */}
        {item.label}
      </button>
    </ButtonTransparentContent>
  );
};

const ButtonDownload = (item) => {
  const downloadFile = (file, textFile) => {
    FileSaver.saveAs(file, textFile);
  };
  return (
    <ButtonContent>
      <button
        style={item.style}
        onClick={() => downloadFile(item.file, item.judul)}
        id={item.id}
        className="button_my-course"
      >
        <item.icon />
        {item.label}
      </button>
    </ButtonContent>
  );
};

const ButtonDownloadOrganisasi = (item) => {
  const downloadFile = (file, textFile) => {
    FileSaver.saveAs(file, textFile);
  };
  return (
    <ButtonContent>
      <button
        style={item.style}
        onClick={() => downloadFile(item.file, item.judul)}
        id={item.id}
        className="button_organisasi"
      >
        <item.icon />
        {item.label}
      </button>
    </ButtonContent>
  );
};

export { ButtonTransparent, Button, ButtonDownload, ButtonDownloadOrganisasi };
