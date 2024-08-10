import { Card, Tag } from "antd";
import StarIcon from "./StarIcon";

const dummyMap = [
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
];
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
          gap: "25px",
        }}
      >
        {dummyMap.map(() => (
          <>
            <Card
              hoverable
              style={{
                width: "350px",
                height: "350px",
                border: "0px solid",
                borderRadius: "1.2rem",
                padding: "10px",
                // margin: "0px 25px 35px 0px",
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
                    borderRadius: "1rem",
                    objectFit: "cover",
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
                  <h4 style={{ margin: "8px 0px" }}>
                    <b>La Pino'z Pizza</b>
                  </h4>
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
                  <p style={{ color: "gray" }}>
                    Pizza, Italian, Pasta, Fast Food
                  </p>
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
                  <p
                    style={{
                      padding: "2px 5px 3px 5px",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                  >
                    21 min
                  </p>
                </div>
              </div>
            </Card>
          </>
        ))}
      </div>
    </>
  );
};

export default RestaurantsCards;
