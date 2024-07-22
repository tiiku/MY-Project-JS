import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { getProducts } from "../Request/products/products";
import SwiperSlider from "./SwiperSlider";

const FirstOrderSlider = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getProducts()
      .then((res) => {
        setProduct(res.products);
      })
      .catch((e) => {
        console.log("er", e);
      });
  }, []);
  const transform = product.map((item: any) => {
    return { image: item.product_image, name: item.product_name };
  });

  return <SwiperSlider item={transform} />;
};

export default FirstOrderSlider;
