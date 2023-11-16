import { Routes, Route } from "react-router-dom";
import MyHeader from "./components/MyHeader";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Players from "./pages/Players";
import Teams from "./pages/Teams";
import logo from "./images/logo.png";

function App() {
  return (
    <div>
      <MyHeader title={logo} alt={"logo"} />
      <main style={styles.main}>
        <MyNav nav1={"Players"} nav2={"Teams"} />
        <section>
          <Routes>
            <Route path="/" element={<Players />} />
            <Route path="players" element={<Players />} />
            <Route path="teams" element={<Teams />} />
          </Routes>
        </section>
      </main>
      <MyFooter logo={logo} alt={"Oddinary logo"} />
    </div>
  );
}
export default App;

const styles = {
  main: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: 'start'
  },
};
