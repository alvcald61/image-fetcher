import { LoaderFunctionArgs } from "react-router-dom";
import { Photos, ImageResponse } from "../types/ImageType";
export const getImagePerTags = async (
  args: LoaderFunctionArgs,
  page: number = 0,
  size: number = 10
): Promise<Photos> => {
  const response = await fetch(
    `${
      import.meta.env.VITE_FLICKR_BASE_URL
    }?method=flickr.photos.search&api_key=${
      import.meta.env.VITE_FLICKR_PASSWORD
    }&format=json&nojsoncallback=1&page=${page}&per_page=${size}
    &tags=${
      args.params.tagName
    }&extras=owner_name,date_taken,url_l,tags,url_c,url,url_z&sort=interestingness-desc&&safe_search=1
      `
  );
  const data = (await response.json()) as ImageResponse;
  return data.photos;
};
