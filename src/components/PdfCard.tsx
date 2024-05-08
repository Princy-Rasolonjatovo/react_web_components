import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import styles from "./PdfCard.scss?inline"; 
import Modal from "./Modal";
import Down from "../assets/down.svg";
import Eye from "../assets/eye.svg";
import Lottie from "lottie-react";
import PdfAnimation from "../assets/loading.json";

// Load worker
pdfjs.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

export interface IPdfCardProps {
  pdfurl: string;
  name: string;
  id: string;
  address: string;
}

export const PdfCard = ({ pdfurl, name, id, address }:IPdfCardProps) => {
  const [pageNumber] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onDocumentLoadSuccess = () => {
    console.log("Document loaded successfully")
  };

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
    <div className="pdf-card">
      <div className="pdf-preview">
        <Document
          file={pdfurl}
          onLoadSuccess={onDocumentLoadSuccess}
          externalLinkTarget="_blank"
          loading={(<><Lottie animationData={PdfAnimation} /></>)}
          error={(<> <div className="error-pdf"><svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 0C17.92 0 0 17.92 0 40C0 62.08 17.92 80 40 80C62.08 80 80 62.08 80 40C80 17.92 62.08 0 40 0ZM44 60H36V52H44V60ZM44 44H36V20H44V44Z" fill="#230635"/>
          </svg>
          </div></>)} 
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
      <div className="pdf-info">
        <div className="document-infos">
          <div className="doc-id">{id}</div>
          <div className="doc-name"><p>{name}</p></div>
          <p>{address}</p>
        </div>
        <div className="pdf-buttons">
          <div className="pdf-button" onClick={handleViewPopup}>
            <img src={Eye} className="pdf-image" alt="Eye" />
          </div>
          <div className="pdf-button" onClick={handleDownload}>
            <img src={Down} className="pdf-image" alt="Download" />
          </div>
        </div>
      </div>
    </div>
    {isModalOpen && <Modal onClose={closeModal} pdfurl={pdfurl} />}
    </>
  );
};

export default PdfCard;
