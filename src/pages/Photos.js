import React, { useContext } from "react";
import { Context } from "../Context";
import Image from "../components/Image";
import { getClass } from "../utils/index";

const Photos = () => {
  const { allPhotos } = useContext(Context);
  const photos = allPhotos.map((img, i) => (
    <Image key={img.id} className={getClass(i)} img={img} i={i} />
  ));
  return <main className="photos">{photos}</main>;
};

export default Photos;
