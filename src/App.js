import "./App.css";
import Home from "./component/Home";
import axios from "axios";
import react, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      url: "https://panorbit.in/api/users.json",
      method: "get",
    })
      .then((value) => {
        console.log(value.data.users);
        setData(value.data.users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Home state={data} />
    </div>
  );
}

export default App;
