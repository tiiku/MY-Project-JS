import { Breadcrumb, Layout, Tabs, Typography } from "antd";
import DeliveryTab from "../pages/deliveryTab";
const { Content } = Layout;
const { Title } = Typography;
const onChange = (key: any) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "5px 8px",
          margin: "3px 10px",
        }}
      >
        <div
          style={{
            height: "60px",
            width: "60px",
            backgroundColor: "#E5F3F3",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "8px",
          }}
        >
          <img
            src="https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png"
            alt="dining out"
            style={{ height: "30px", width: "30px" }}
          />
        </div>

        <Title level={4} style={{ margin: 0 }}>
          Dining Out
        </Title>
      </div>
    ),
    children: "Content of Tab Pane 1",
  },
  {
    key: "2",
    label: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "5px 8px",
          margin: "3px 10px",
        }}
      >
        <div
          style={{
            height: "60px",
            width: "60px",
            backgroundColor: "#FCEEC0",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "8px",
          }}
        >
          <img
            src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png"
            alt="delivery"
            style={{ height: "30px", width: "30px" }}
          />
        </div>

        <Title level={4} style={{ margin: 0 }}>
          Delivery
        </Title>
      </div>
    ),
    children: <DeliveryTab />,
  },
];
const MainContainer = () => {
  return (
    <>
      <Content
        style={{
          margin: "0 400px",
          padding: "8px 0px",
          height: "auto",
        }}
      >
        <Breadcrumb
          style={{ fontSize: "12px" }}
          items={[
            {
              title: <a href="/#">Home</a>,
            },
            {
              title: <a href="/#">India</a>,
            },
            {
              title: <a href="/#">Surat</a>,
            },
            {
              title: <a href="/#">Vesu Restaurants</a>,
            },
          ]}
        />
        <Tabs
          defaultActiveKey="2"
          items={items}
          onChange={onChange}
          // titleFontSize={"20px"}
          size={"small"}
        />
      </Content>
    </>
  );
};

export default MainContainer;
