import logo from "./logo.svg";
import "./style/main.css";
import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  defaults
} from 'chart.js';
import {
  Chart
} from 'react-chartjs-2';
import Main from "./components/Main";
import Header from "./components/Header";
import Second from "./components/Second";
import Third from "./components/Third";
import Footer from "./components/Footer";
function App ()
{
    const [ data, setData ] = useState( [] );
    useEffect( () =>
    {
        fetch( "/api" )
            .then( ( res ) => res.json() )
            .then( ( res ) => setData( res ) );
    }, [] );

  return (
    < >
      <Header />


      <Main data={data}/>
      <Second data={data}/>
      <Third data={ data } />
      <Footer data={ data}/>
    </>
  );
}

export default App;
