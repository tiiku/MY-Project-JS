import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const SwiperSlider = (data: any) => {
  const { item } = data;
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={50}
      slidesPerView={6}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper: any) => console.log(swiper)}
    >
      {item &&
        item.map((item: any, index: number) => {
          return (
            <SwiperSlide key={index}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    height: "140px",
                    width: "140px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                ></img>
                <h3 style={{ marginTop: "6px", textAlign: "center" }}>
                  {item.name}
                </h3>
              </div>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default SwiperSlider;
