import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";

const FirstOrderSlider = () => {
  const data = [
    {
      productName: "Pizza",
      productImg:
        "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
    },
    {
      productName: "Biryani",
      productImg:
        "https://b.zmtcdn.com/data/o2_assets/37df381734b24f138af4a84fd7e4d4ec1716558578.jpeg",
    },
    {
      productName: "Pizza",
      productImg:
        "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
    },
    {
      productName: "Biryani",
      productImg:
        "https://b.zmtcdn.com/data/o2_assets/37df381734b24f138af4a84fd7e4d4ec1716558578.jpeg",
    },
    {
      productName: "Pizza",
      productImg:
        "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
    },
    {
      productName: "Biryani",
      productImg:
        "https://b.zmtcdn.com/data/o2_assets/37df381734b24f138af4a84fd7e4d4ec1716558578.jpeg",
    },
    {
      productName: "Pizza",
      productImg:
        "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
    },
    {
      productName: "Biryani",
      productImg:
        "https://b.zmtcdn.com/data/o2_assets/37df381734b24f138af4a84fd7e4d4ec1716558578.jpeg",
    },
  ];
  const [product, setProduct] = useState(data);
  console.log("setProduct", setProduct);
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={50}
      slidesPerView={6}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper: any) => console.log(swiper)}
    >
      {product &&
        product.map((products: any) => {
          return (
            <SwiperSlide>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <img
                  src={products.productImg}
                  alt={products.productName}
                  style={{
                    height: "150px",
                    width: "150px",
                    borderRadius: "50%",
                  }}
                ></img>
                <p> {products.productName}</p>
              </div>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default FirstOrderSlider;
