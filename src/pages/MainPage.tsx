import React, { useContext, useEffect } from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import "../App.css";
import {
  useLoaderData,
  useLocation,
  useRouteLoaderData,
} from "react-router-dom";
import { Photos } from "../types/ImageType";
import AppContext from "../context/AppContext";
import ImageModal from "../components/Modal";

type Props = {};

const MainPage = (props: Props) => {
  const data = useLoaderData() as Photos;
  const appContext = useContext(AppContext);
  const { setImages, setTag, showModal } = appContext;
  const location = useLocation();

  useEffect(() => {
    setImages(data);
    setTag(location.pathname.split("/")[2]);
  }, [data]);

  return (
    <>
    {showModal && <ImageModal>
      {<img src = {showModal}/>}
      </ImageModal>}
      <div className="App">
        <Header />
        <Body />
      </div>
    </>
  );
};

export default MainPage;
