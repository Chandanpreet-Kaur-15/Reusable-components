// import React from "react";
// import "./Main.css";
// import Sidebar from "../Sidebar/Sidebar";
// import RightdivItems from "../Rightdiv/RightdivItems";
// import Offer from "../Sidebar/Offer";
// import FAQ from "../FAQComponent/FAQ";
// import Review from "../Reviews/Reviews";
// import "@fontsource/montserrat";
// import "@fontsource/montserrat/400.css";
// import "@fontsource/montserrat/400-italic.css";
// import FAQ from "../FAQComponent/FAQ";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// function Main(){
//     return(
//         <>
//         <h1>Hello</h1>
//         <nav/>
        
//             <FAQ/>
            
//             <Review/>

//             <Sidebar/>
//             <RightdivItems/>
//             <Switch>
//                 <Route path="/" exact component={RightdivItems} />
//                 <Route path="/Offer" component={Offer} />
//             </Switch>
        
//         </>
//     )
// }
// export default Main;


import React from 'react'
import FAQ from '../FAQComponent/FAQ'
import Review from '../Reviews/Reviews'
import "@fontsource/montserrat"
import "@fontsource/montserrat/400.css"
import "@fontsource/montserrat/400-italic.css"
import CourseCard from '../CertificationCards/CertificationCards'
import Graph from '../ChartsandGraphs/Graphs/Graph'
import LineGraph from '../ChartsandGraphs/Graphs/LineGraph'
import PieChart from '../ChartsandGraphs/Graphs/Charts/PieChart'
import DynamicChart from '../ChartsandGraphs/DynamicGraphs/BarGraphWithfakeAPI'
// import BarChart from '../ChartsandGraphs/DynamicGraphs/BarGraph'

const Main = () => {
  return (
    <div>
      {/* <CourseCard/> */}
        {/* <FAQ/> */}
        {/* <Review/> */}
        {/* <Graph/>
        <LineGraph/>
        <PieChart/> */}
        {/* <DynamicChart/>nn */}
        {/* <BarGraphWithFakeAPI/> */}
        {/* <BarChart/>nmm */}

        
    </div>
  )
}

export default Main