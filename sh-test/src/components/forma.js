"use client";
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/material/styles';

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
  const [initialValues, setInitialValues] = useState(props.info.obj)
  const [info, setInfo] = useState(props.info.list)
  const [num, setNum] = useState(props.info.num)
  const addBox = () => {
    let addNum = num + 1
    let aa = {
      label: { en: "教育经历(可仅填写最高经历)", zh: "教育经历(可仅填写最高经历)" },
      prop: `edc${addNum}`,
      type: "box",
      con: [
        {
          label: { en: "学历", zh: "学历" },
          prop: `education${addNum}`,
          type: "autocomplete",
          option: [
            { title: '1The Godfather', year: `1932${addNum}` },
          ],
          width: 3
        }, {
          label: { en: "学校", zh: "学校" },
          prop: `school${addNum}`,
          type: "input",
          width: 3
        }, {
          label: { en: "专业", zh: "专业" },
          prop: `major${addNum}`,
          type: "input",
          width: 3
        }, {
          label: { en: "状态", zh: "状态" },
          prop: `state${addNum}`,
          type: "autocomplete",
          option: [
            { title: '毕业', year: 1 },
            { title: '肆业', year: 2 },
            { title: '正在转学', year: 3 }
          ],
          width: 3
        }, {
          label: { en: "入学时间", zh: "入学时间" },
          prop: `time${addNum}`,
          type: "dateselect",
          width: 6
        }, {
          label: { en: "结课时间", zh: "结课时间" },
          prop: `timeout${addNum}`,
          type: "dateselect",
          width: 6
        }, {
          label: { en: "备注", zh: "备注" },
          prop: `remarks${addNum}`,
          type: "input",
          width: 6
        }],
      width: 6
    }
    let newObj = {}
    newObj[`education${addNum}`] = ''
    newObj[`school${addNum}`] = '';
    newObj[`major${addNum}`] = '';
    newObj[`state${addNum}`] = '';
    newObj[`time${addNum}`] = '';
    newObj[`timeout${addNum}`] = '';
    newObj[`remarks${addNum}`] = '';
    setNum(num + 1)
    let addList = JSON.parse(JSON.stringify(info))

    info.forEach((item, index) => {
      if (item.prop == `edc${num}`) {
        addList.splice(index + 1, 0, aa)
      }
    })
    setInfo(addList);
  }


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
        {
          ({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isValid,
            touched,
            values,
            setFieldValue
          }) => (
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
              <CardContent>
                <Grid container spacing={1}>
                  {info.map((val, index) => {
                    return (
                      <Grid key={index} item md={12} xs={12}>
                        {
                          val.type == "input" ?
                            <>
                              {val.prop == "bmi" && values.weight != '' && values.height != '' ?
                                <TextField
                                  error={Boolean(touched[val.prop] && errors[val.prop])}
                                  fullWidth
                                  required
                                  helperText={touched[val.prop] && errors[val.prop]}
                                  label={val.label.en}
                                  name={val.prop}
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  value={values.bmi = (Number(values.weight) / ((Number(values.height) / 100) ** 2)).toFixed(2) || ''}
                                  variant="outlined"
                                  size="small"
                                /> : <TextField
                                  error={Boolean(touched[val.prop] && errors[val.prop])}
                                  fullWidth
                                  required
                                  helperText={touched[val.prop] && errors[val.prop]}
                                  label={val.label.en}
                                  name={val.prop}
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  value={values[val.prop] || ''}
                                  variant="outlined"
                                  size="small"
                                />
                              }
                            </> :
                            val.type == "box" ? <div className={styles.grid}>
                              {(val.con).map((item2, index2) => {
                                return <div key={item2.prop} className={styles.box}>
                                  {item2.type == "autocomplete" ? <>
                                    <FormControl fullWidth>
                                      <InputLabel id="demo-simple-select-label">{item2.label.en}</InputLabel>
                                      <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={values[item2.prop] || ''}
                                        label={item2.label.en}
                                        onChange={(event) => {
                                          initialValues[item2.prop] = event.target.value
                                          setInitialValues({ ...initialValues })
                                          values[item2.prop] = event.target.value
                                        }}
                                      >
                                        <MenuItem value="">
                                          <em>None</em>
                                        </MenuItem>
                                        {item2.option.map((items) => {
                                          return <MenuItem key={items.title} value={items.year}>{items.title}</MenuItem>
                                        })}
                                      </Select>
                                    </FormControl>
                                  </> :
                                    item2.type == "input" ?
                                      <>
                                        <TextField
                                          error={Boolean(touched[item2.prop] && errors[item2.prop])}
                                          fullWidth
                                          required
                                          helperText={touched[item2.prop] && errors[item2.prop]}
                                          label={item2.label.en}
                                          name={item2.prop}
                                          onBlur={handleBlur}
                                          onChange={handleChange}
                                          value={values[item2.prop] || ''}
                                          variant="outlined"
                                          size="small"
                                        />
                                      </> :
                                      item2.type == "dateselect" ?
                                        <>
                                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker
                                              value={values[item2.prop] || null}
                                              onChange={(newValue) => {
                                                let allDataDate = JSON.parse(JSON.stringify(values))
                                                allDataDate[item2.prop] = newValue;
                                                setInitialValues({ ...allDataDate });
                                                values[item2.prop] = newValue
                                              }}
                                              label={item2.label.en + '*'} />
                                          </LocalizationProvider>
                                        </> : <></>}
                                </div>
                              })}
                            </div> :
                              val.type == "add" ?
                                <>
                                  <Button variant="outlined"
                                    onClick={addBox}>{val.label.en}</Button>
                                </> :
                                val.type == "radio" ? <>
                                  <FormControl children={touched[val.prop] && errors[val.prop]}
                                    error={Boolean(touched[val.prop] && errors[val.prop])}
                                    required>
                                    <FormLabel
                                      children={touched[val.prop] && errors[val.prop]}
                                      id="demo-radio-buttons-group-label">{val.label.en}</FormLabel>
                                    <RadioGroup
                                      aria-labelledby="demo-radio-buttons-group-label"
                                      name={val.prop}
                                      onChange={handleChange}
                                    >
                                      {(val.option).map((item, index) => {
                                        return (
                                          <div key={index}>
                                            < FormControlLabel value={item} control={<Radio />} label={item} />
                                          </div>
                                        );
                                      })}
                                    </RadioGroup>
                                    <FormHelperText>{errors[val.prop]}</FormHelperText>
                                  </FormControl>
                                </>
                                  : val.type == "date" ?
                                    <>
                                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                          value={values[val.prop] || null}
                                          onChange={(newValue) => {
                                            let allDataDate = JSON.parse(JSON.stringify(values))
                                            allDataDate[val.prop] = newValue;
                                            setInitialValues({ ...allDataDate });
                                            values.birth = newValue
                                          }}
                                          label={val.label.en + '*'} views={['year']} />
                                        {errors.birth && <FormHelperText>{errors.birth}</FormHelperText>}
                                      </LocalizationProvider>
                                    </>
                                    : val.type == "select" ? <>
                                      {Object.keys(initialValues.input).map((item, index) => (
                                        <FormControl style={{ width: '500px' }} key={index}>
                                          <InputLabel id="demo-multiple-name-label">{item}</InputLabel>
                                          <Select
                                            labelId="demo-multiple-checkbox-label"
                                            id="demo-multiple-checkbox"
                                            multiple
                                            value={initialValues.input[item] || ''}
                                            onChange={(event) => {
                                              const {
                                                target: { value },
                                              } = event;
                                              initialValues.input[item] = typeof value === 'string' ? value.split(',') : value
                                              setInitialValues({ ...initialValues });
                                              values.input = initialValues.input
                                            }}
                                            input={<OutlinedInput label="Tag" />}
                                            renderValue={(selected) => selected.join(', ')}
                                          >
                                            {initialValues.names.map((name) => (
                                              <MenuItem key={name} value={name}>
                                                <Checkbox checked={initialValues.input[item].indexOf(name) > -1} />
                                                <ListItemText primary={name} />
                                              </MenuItem>
                                            ))}
                                          </Select>

                                        </FormControl>
                                      ))}
                                    </>
                                      : <></>
                        }
                      </Grid>
                    );
                  })}
                </Grid>
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

Forma.propTypes = {
  className: PropTypes.string
};

export default Forma;
