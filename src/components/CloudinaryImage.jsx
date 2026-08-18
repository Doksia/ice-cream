import { AdvancedImage } from "@cloudinary/react";
import { scale } from "@cloudinary/url-gen/actions/resize";
import cld from "../cloudinary";

export default function CloudinaryImage({ publicId }) {
  const img = cld.image(publicId);

  img.resize(scale().width(400));

  return <AdvancedImage cldImg={img} />;
}
