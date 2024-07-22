import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { getBrands } from "../Request/products/products";
import SwiperSlider from "./SwiperSlider";

const TopBrandSlider = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    getBrands()
      .then((res) => {
        setBrands(res.brand);
      })
      .catch((e) => {
        console.log("er", e);
      });
  }, []);
  const transform = brands.map((item: any) => {
    return { image: item.brand_logo, name: item.brand_name };
  });
  return <SwiperSlider item={transform} />;
};

export default TopBrandSlider;
