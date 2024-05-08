import { FC } from "react";
import styles from "./Modal.scss?inline";
import ViewerWrapper from './ViewerWrapper';

interface ModalProps {
  onClose: () => void;
  pdfurl: string;
}

const Modal: FC<ModalProps> = ({ onClose, pdfurl }) => {
  return (
    <>
      <style>{styles}</style>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal">
      <ViewerWrapper fileUrl={pdfurl} />
      </div>
    </>
  );
};

export default Modal;
