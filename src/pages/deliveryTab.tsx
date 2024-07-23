import { Button, Flex } from "antd";
import { Content } from "antd/es/layout/layout";
import FirstOrderSlider from "../Components/FirstOrderSlider";
import TopBrandSlider from "../Components/TopBrandSlider";

const DeliveryTab = () => {
  return (
    <>
      <Flex align="center" justify="flex-start" style={{ padding: "16px 0px" }}>
        <Button className="filterButton" >filter</Button>
        <Button className="filterButton">Rating</Button>
        <Button className="filterButton">Pure Veg</Button>
        <Button className="filterButton">Cuisines</Button>
      </Flex>
      <Content
        style={{
          padding: "40px 0px",
          backgroundColor: "#F8F8F8",
          width: "100%",
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
          width: "100%",
        }}
      >
        <h1 style={{ marginBottom: "32px" }}>Top brands for you</h1>
        <TopBrandSlider />
      </Content>
      {/* <div style={{ padding: "8px 0px" }}>
      </div> */}
    </>
  );
};

export default DeliveryTab;
