import React from "react";
import { Link } from "react-router-dom";
import { Photo } from "../types/ImageType";
import placeholder from "../assets/placeholder-image.png";
type Props = {
  image: Photo;
  action?: () => void;
  showModal: (url: string) => void;
};

const ImageItem = ({ image, action, showModal }: Props) => {



  return (
    <div className="image-item" onClick={()=>showModal(image.url_l || image.url_c || image.url_z || placeholder)}>
      <img
        src={image.url_l || image.url_c || image.url_z || placeholder}
        alt="image"
        className="image"
        loading="lazy"
      />
      <div className="image-footer">
        <div className="left-info">
          <p>
            by <strong>{image.ownername}</strong>
          </p>
          <p>
            Taken <span>{image.datetaken}</span>
          </p>
        </div>
        <div className="tags">
          {image.tags.length > 0
            ? image.tags
                .split(" ")
                .slice(0, 3)
                .map((tag) => (
                  <Link
                    to={`/tag/${tag}`}
                    onClick={action}
                    className="tag"
                    key={tag}
                  >
                    {tag}
                  </Link>
                ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default ImageItem;
