import {useEffect, useState} from "react";
import {Formik, Form, Field} from "formik";
import {Checkbox, FormControlLabel, Button, FormGroup} from "@mui/material";

const CheckboxGroup = ({prop,options, onChange}) => {
  const initialValues = {};
  options.forEach((option) => (initialValues[option.value||option.label] = false));
  const [values, setValues] = useState(initialValues);
  // useEffect(() => {
  //   console.log( values);
  // }, [values]);
  const handleChange = (event, checked) => {
    console.log(event.target.name, checked)
    let val = {...values, [event.target.name]: checked}
    setValues(val)
    onChange(Object.keys(val).filter(key => val[key]),prop);
  }
  return (<FormGroup>
      {
        options.map((option) => (
          <FormControlLabel
            key={option.value||option.label}
            control={
              <Checkbox
                checked={values[option.value]}
                size="small" sx={{padding: '2px'}}
              />
            }
            onChange={handleChange}
            name={option.value||option.label}
            color="primary"
            label={option.label}
            sx={{'& .MuiTypography-root': {fontSize: '14px', fontWeight: 300}}}
          />
        ))
      }
    </FormGroup>
    // <Button type="submit" variant="contained" color="primary">
    //   clear
    // </Button>
  );
};

export default CheckboxGroup;
