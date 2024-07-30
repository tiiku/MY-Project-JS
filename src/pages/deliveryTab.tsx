import { Button, Flex } from "antd";
import { Content } from "antd/es/layout/layout";
import FirstOrderSlider from "../Components/FirstOrderSlider";
import TopBrandSlider from "../Components/TopBrandSlider";
import RestaurantsCards from "../Components/RestaurantsCards";

const DeliveryTab = () => {
  return (
    <>
      <Flex
        align="center"
        justify="flex-start"
        style={{
          padding: "16px 0px",
          position: "sticky",
          top: "0px",
          backgroundColor: "#FFFFFF",
          zIndex: "10",
        }}
      >
        <Button className="filterButton">filter</Button>
        <Button className="filterButton">Rating</Button>
        <Button className="filterButton">Pure Veg</Button>
        <Button className="filterButton">Cuisines</Button>
      </Flex>
      <Content
        style={{
          padding: "40px 0px",
          backgroundColor: "#F8F8F8",
        }}
      >
        <h1 style={{ marginBottom: "32px" }}>
          Inspiration for your first order
        </h1>
        <FirstOrderSlider />
      </Content>
      <Content
        style={{
          padding: "40px 0px",
        }}
      >
        <h1 style={{ marginBottom: "32px" }}>Top brands for you</h1>
        <TopBrandSlider />
      </Content>
      <Content
        style={{
          padding: "0px 0px 40px 0px",
        }}
      >
        <h1 style={{ marginBottom: "32px" }}>
          Food Delivery Restaurants in Vesu
        </h1>
        <RestaurantsCards />
      </Content>

      {/* <div style={{ padding: "8px 0px" }}>
      </div> */}
    </>
  );
};

export default DeliveryTab;
