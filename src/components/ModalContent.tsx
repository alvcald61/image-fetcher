import React from "react";
import { Photo } from "../types/ImageType";
import ImageItem from "./ImageItem";
type Props = {
  image: Photo;
    setCloseAction: () => void;
};

const ModalContent = ({ image, setCloseAction }: Props) => {
  return (
    <>
    <div className="modal-close-button">
    <button onClick={setCloseAction} > X </button>
    </div>
      <ImageItem image={image} action={() => {}} showModal={null} />
      <div></div>
    </>
  );
};

export default ModalContent;
