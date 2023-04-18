import React from "react";
import ImageItem from "./ImageItem";
import { Photo } from "../types/ImageType";

type Props = {
  images: Photo[];
  tag?: string;
  reset: () => void;
};

const ImageList = ({ images, tag, reset }: Props) => {
  return (
    <section className="image-list">
      <h2 className="section-title">
        {typeof tag === "undefined" || tag.length === 0
          ? "Trending Photos Right Now"
          : `${tag} photos`}
      </h2>
      <div className="image-grid">
        {images &&
          images.map((image) => {
            return <ImageItem image={image} key={image.id} action={reset} />;
          })}
      </div>
    </section>
  );
};

export default ImageList;
