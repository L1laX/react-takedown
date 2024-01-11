import "./App.css";
import Header from "./components/Header";
import Display from "./components/Display";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    const result = await axios.get(
      `http://localhost:4001/trips?keywords=${search}`,
    );
    setData(result.data.data);
  };
  useEffect(() => {
    getData();
  }, [search]);

  return (
    <div className="App">
      <Header search={search} setSearch={setSearch} />
      <Display sendData={data} setSearch={setSearch} search={search} />
    </div>
  );
}

export default App;
