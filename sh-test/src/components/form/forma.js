"use client";
import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  CardContent, CardActions, Divider, Grid, TextField, Checkbox, Input,
  InputLabel, Select, MenuItem, ListItemText, OutlinedInput, Button, Radio, RadioGroup,
  FormControlLabel, FormControl, FormLabel, FormHelperText, Stack, Tooltip
} from '@mui/material';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import styles from './form.module.css'


const Forma = (props) => {
  const {infoObj,infoList,infoNum}=props.info
  const [initialValues, setInitialValues] = useState(infoList)
  const [info, setInfo] = useState(infoObj)
  const [num, setNum] = useState(infoNum)


  useEffect(() => {
    // 在这里执行调用后端函数查询接口内容

    // console.log(info);
  }, [info]);

  // const info = props.info.list
  const goClick = () => {
    props.goback(props.page)
  }
  return (<>
    <div className={styles.form}>
      <Formik
        initialValues={{
          ...initialValues
        }}
        validationSchema={Yup.object().shape(props.info.valid)}
        onSubmit={(values) => {
          console.log(values);
          props.click(props.page)
        }}>
        {(props) => (
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
              <CardContent>

              </CardContent>
              <Divider />
              <CardActions className="flexBetween">
                <Button
                style={{backgroundColor:'#2f988a',color:'#fff'}}
                  onClick={goClick}
                  type="button">
                  previous page
                </Button>
                <Button
                  style={{backgroundColor:'#41D2BF',color:'#fff'}}
                  // disabled={Boolean(!isValid)}
                  type="submit">
                  Next
                </Button>
              </CardActions>
            </form>
          )
        }
      </Formik>
    </div>

  </>

  );
};


export default Forma;
