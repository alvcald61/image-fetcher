import React, { useContext, useState, useRef, useEffect } from "react";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";
import Pagination from "./Pagination";
import { getInterestImages } from "../services/InterestImages";
import { getImagePerTags } from "../services/TagImages";
import { Photo } from "../types/ImageType";
type Props = {};

const Body = (props: Props) => {
  const navigate = useNavigate();
  const context = useContext(AppContext);
  const { tag, images, setImages, setPage, setImageOfModal } = context;

  const onSearch = (text: string) => {
    if (text.length === 0) {
      return;
    }
    navigate(`/tag/${text}`);
  };

  const onPageChange = async (page: number) => {
    if (page === 1) {
      return;
    }
    const fetcher =
      typeof tag === "undefined" ? getInterestImages : getImagePerTags;
    const data = await fetcher({ params: { tagName: tag } } as any, page);
    setImages(data);
  };

  const reset = () => {
    setPage(1);
  }

  const showModal = (image: Photo) => {
    setImageOfModal(image)
  }

  return (
    <div className="body">
      <div className="content">
        <SearchBar onSearch={onSearch} tag={tag} title="Search by tag" />
        <ImageList tag={tag} images={images.photo} reset={reset}  showModal={showModal} />
      </div>

      <Pagination onPageChange={onPageChange} maxPag={images.pages}/>
    </div>
  );
};

export default Body;
