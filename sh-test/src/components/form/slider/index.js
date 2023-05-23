import {useState} from "react";
import {Slider} from "@mui/material";

const RangeSlider = ({prop, name, min, max, step, initialValue, onChange}) => {
  // console.log(initialValue,'initialValue')
  const [values, setValues] = useState(initialValue);

  const handleChange = (event, value) => {
    setValues(value)
    onChange(value, event.target.name);
  }
  return (
    <div className="flexCenter">
      <span>{min}</span>
      <Slider min={min}
              max={max}
              step={step}
              valueLabelDisplay="auto"
              value={values} name={name}
              onChange={handleChange} style={{width: 180, margin: '5px 20px'}}/>
      <span>{max}</span>
    </div>
  );
};

export default RangeSlider;
