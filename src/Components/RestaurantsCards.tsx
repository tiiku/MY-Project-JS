import { Card, Tag } from "antd";
import StarIcon from "./StarIcon";
const RestaurantsCards = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignItems: "baseline",
          alignContent: "stretch",
        }}
      >
        <Card
          style={{
            width: "350px",
            height: "350px",
            borderRadius: "1.3rem",
            padding: "10px",
          }}
          bodyStyle={{ padding: "0" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              style={{
                width: "328px",
                height: "248px",
                borderRadius: "1.3rem",
              }}
              src="https://b.zmtcdn.com/data/pictures/chains/5/18575885/54b6de34323395a3b10897e48bd2a6e5_o2_featured_v2.jpg"
              alt="pizza"
            ></img>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <h3 style={{ margin: "8px 0px" }}>La Pino'z Pizza</h3>
              <Tag
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "43px",
                  borderRadius: "0.4rem",
                }}
                color="#267E3E"
              >
                <b>4.5</b>
                <StarIcon />
              </Tag>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <p style={{ color: "gray" }}>Pizza, Italian, Pasta, Fast Food</p>
              <p style={{ color: "gray" }}>₹150 for one</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                width: "100%",
              }}
            >
              21 min
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default RestaurantsCards;
