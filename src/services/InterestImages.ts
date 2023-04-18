import { LoaderFunctionArgs } from "react-router-dom";
import { Photos, ImageResponse } from "../types/ImageType";

export const getInterestImages = async (
  args: LoaderFunctionArgs,
  page: number = 1,
  size: number = 10
): Promise<Photos> => {
  const response = await fetch(
    `${
      import.meta.env.VITE_FLICKR_BASE_URL
    }?method=flickr.interestingness.getList&api_key=${
      import.meta.env.VITE_FLICKR_PASSWORD
    }&format=json&nojsoncallback=1&page=${page}&per_page=${size}&extras=owner_name,date_taken,url_l,tags,url,url_z
    `
  );
  const data = (await response.json()) as ImageResponse;
  return data.photos;
};
