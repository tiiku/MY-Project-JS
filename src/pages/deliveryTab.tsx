import { Button, Flex } from "antd";
import { Content } from "antd/es/layout/layout";
import FirstOrderSlider from "../Components/FirstOrderSlider";

const DeliveryTab = () => {
  return (
    <>
      <Flex align="center" justify="flex-start">
        <Button>filter</Button>
        <Button>Rating</Button>
        <Button>Pure Veg</Button>
        <Button>Cuisines</Button>
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
      {/* <div style={{ padding: "8px 0px" }}>
      </div> */}
    </>
  );
};

export default DeliveryTab;
