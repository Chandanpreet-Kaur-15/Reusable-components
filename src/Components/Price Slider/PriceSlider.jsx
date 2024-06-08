import React from "react";
import "./PriceSlider.css";
import Slider from "@mui/material/Slider";


function PriceSlider(){
    const [range, setRange] = React.useState([5, 30]);
    function handleChanges(event, newValue) {
    setRange(newValue);
   }
    return(
    <>
    <div className="price-slider">
        <div style = {{ width: "15rem",  }}>
            <Slider value = {range} onChange = {handleChanges} valueLabelDisplay="auto"/>
            Min: <input placeholder={range[0]}/><br/><br/>
            Max: <input placeholder={range[1]}/><button>Go</button>
        </div>
    </div>
    </>
    )
}
export default PriceSlider;