export interface ImageResponse {
  photos: Photos;
  extra: Extra;
  stat: string;
}

export interface Extra {
  explore_date: string;
  next_prelude_interval: string;
}

export interface Photos {
  page: number;
  pages: number;
  perpage: number;
  total: string;
  photo: Photo[];
}

export interface Photo {
  id: string;
  owner: string;
  secret: string;
  server: string;
  farm: number;
  title: string;
  ispublic: number;
  isfriend: number;
  isfamily: number;
  ownername: string;
  datetaken: string;
  url_o: string;
  tags: string;
  url_l: string | null;
  url_c: string;
  url_z: string;
}
