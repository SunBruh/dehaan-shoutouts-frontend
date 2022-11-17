import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getAllShoutouts } from "./services/shoutoutApiService";
import Shoutout from "./models/Shoutouts";

function App() {
  const [allShoutouts, setAllShoutouts] = useState<Shoutout[]>();

  useEffect(() => {
    getAllShoutouts().then((res) => setAllShoutouts(res));
  }, []);
  return (
    <div className="App">
      <ul>
        {allShoutouts?.map((item) => (
          <li key={item._id}>
            <p>To: {item.to}</p>
            <p>From: {item.from}</p>
            <p>"{item.text}"</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
