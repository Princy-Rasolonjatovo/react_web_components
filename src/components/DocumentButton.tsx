import { useState } from "react";
import { pdfjs } from "react-pdf";
import styles from "./DocumentButton.scss?inline"; 
import Modal from "./Modal";
import Down from "../assets/down.svg";
import Eye from "../assets/eye.svg";

// Load worker
pdfjs.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

export interface IPdfCardProps {
  pdfurl: string;
}

export const DocumentButton = ({ pdfurl}:IPdfCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownload = () => {
    window.open(pdfurl, "_blank");
  };

  const handleViewPopup = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <>
    <style>{styles}</style>
    <div className="button-card">
        <div className="button-pdf-buttons">
          <div className="button-pdf-button" onClick={handleViewPopup}>
            <img src={Eye} className="button-pdf-image" alt="Eye" />
          </div>
          <div className="button-pdf-button" onClick={handleDownload}>
            <img src={Down} className="button-pdf-image" alt="Download" />
          </div>
        </div>
    </div>
    {isModalOpen && <Modal onClose={closeModal} pdfurl={pdfurl} />}
    </>
  );
};

export default DocumentButton;
