import logo from "./logo.svg";
import "./style/main.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  console.log(data?.education?.highSchool);
  return data ? (
    <div className="flex-row text-center  main">
      <div className="py-52">
        <h1 className="text-3xl font-semibold m-auto ">
          Hi my name is {data.name}
        </h1>
        <h3 className="font-semibold text-2xl">I'm {data.profession}</h3>
        <p>I'm {data.age}</p>
      </div>
    </div>
  ) : (
    <div>Loading</div>
  );
}

export default App;
