import { Header } from "antd/es/layout/layout";
import { Breadcrumb, Button, Divider, Select, Space } from "antd";
import MainContainer from "./Components/MainContainer";
import LocationIcon from "./Components/LocationIcon";
import SearchIcon from "./Components/SearchIcon";

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
              marginTop: 7,
              marginLeft: "25px",
              borderRadius: "8px",
              width: "704px",
              height: "52px",
              boxShadow: " 0 0 5px lightgray",
            }}
          >
            <LocationIcon style={{ marginLeft: "10px" }} />
            <Select
              style={{ width: 222, fontSize: "medium" }}
              variant={"borderless"}
              placeholder="vesu surat"
              filterOption={true}
              dropdownRender={() => (
                <>
                  <Divider style={{ margin: "8px 0" }} />
                  <Space style={{ padding: "0 8px 4px" }}>
                    <h3 style={{ fontWeight: -100 }}>Recent Locations</h3>
                  </Space>
                </>
              )}
            />
            <Divider
              type="vertical"
              style={{
                borderWidth: 2,
                borderColor: "#CFCFCF",
                height: 18,
                margin: 0,
              }}
            />
            <SearchIcon style={{ margin: "0px 15px" }} />
            <Select
              showSearch
              // value={value}
              variant={"borderless"}
              placeholder={"Search for restaurant, cuisine or a dish"}
              defaultActiveFirstOption={false}
              suffixIcon={null}
              filterOption={false}
              notFoundContent={null}
              // options={(data || []).map((d) => ({
              //   value: d.value,
              //   label: d.text,
              // }))}
            />
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
