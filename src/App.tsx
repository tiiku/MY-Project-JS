import { Header } from "antd/es/layout/layout";
import { Breadcrumb, Button, Dropdown, MenuProps, Space } from "antd";
import MainContainer from "./Components/MainContainer";
import LocationIcon from "./Components/LocationIcon";
import { CaretDownOutlined } from "@ant-design/icons";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: "4",
    danger: true,
    label: "a danger item",
  },
];
function App() {
  return (
    <div className="App">
      <Header
        style={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0px",
          margin: "0 400px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            style={{ height: "27px" }}
            alt="Zomato"
          ></img>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "15px",
              borderRadius: "8px",
              width: "640px",
              height: "48px",
              boxShadow: " 0 0 5px lightgray",
            }}
          >
            <LocationIcon />
            <Dropdown menu={{ items }}>
              <a href="/#" onClick={(e) => e.preventDefault()}>
                <Space>
                  Hover me
                  <CaretDownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Button>Log in</Button>
          <Button>Sign in</Button>
        </div>
      </Header>
      <Breadcrumb
        style={{
          margin: "10px 400px",
          // padding: "8px 0px",
          height: "auto",
          fontSize: "12px",
        }}
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
      <MainContainer />
    </div>
  );
}

export default App;
