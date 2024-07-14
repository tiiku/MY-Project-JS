import { Header } from "antd/es/layout/layout";
import { Button } from "antd";
import MainContainer from "./Components/MainContainer";

function App() {
  return (
    <div className="App">
      <Header
        style={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          style={{ height: "27px" }}
          alt="Zomato"
        ></img>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <div>Search Bar</div>
          <Button>Log in</Button>
          <Button>Sign in</Button>
        </div>
      </Header>
      <MainContainer />
    </div>
  );
}

export default App;
