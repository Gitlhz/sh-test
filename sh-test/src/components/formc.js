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

import { display } from '@mui/system';

import styles from './form.module.css'


const Forma = (props) => {
  const [initialValues, setInitialValues] = useState(props.info.obj)
  const [info, setInfo] = useState(props.info.list)
  const [num, setNum] = useState(props.info.num)
  const addBox = () => {
    let addNum = num + 1
    let addArray = [{
      label: { en: "关系", zh: "关系" },
      prop: `relationshiped${addNum}`,
      type: "input",
      width: 6
    }, {
      label: { en: "年龄", zh: "年龄" },
      prop: `aged${addNum}`,
      type: "input",
      width: 6
    }, {
      label: { en: "身高", zh: "身高" },
      prop: `heighted${addNum}`,
      type: "input",
      width: 6
    }, {
      label: { en: "体重", zh: "体重" },
      prop: `weighted${addNum}`,
      type: "input",
      width: 6
    }, {
      label: { en: "学历", zh: "学历" },
      prop: `schooled${addNum}`,
      type: "input",
      width: 6
    }, {
      label: { en: "健康", zh: "健康" },
      prop: `healthyed${addNum}`,
      type: "input",
      width: 6
    }, {
      label: { en: "手术史", zh: "手术史" },
      prop: `surgicaled${addNum}`,
      type: "input",
      width: 6
    }]
    setNum(num + 1)
    let addList = JSON.parse(JSON.stringify(info))

    info.forEach((item, index) => {
      if (item.type == 'about') {
        addList[1].fam.push(addArray)
      }
    })
    setInfo(addList);
  }

  useEffect(() => {
    // console.log(info, initialValues);
  }, [info, initialValues]);

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
            values }) => (
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
              <CardContent>
                <Grid container spacing={1}>
                  {info.map((val, index) => {
                    return (
                      <Grid key={index} item md={12} xs={12}>
                        {
                          val.type == "input" ?
                            <> <TextField
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
                            </> :
                            val.type == "about" ?
                              <div className={styles.fam}>

                                <div style={{ display: val.show ? 'block' : 'none' }} className={styles.grid}>
                                  {(val.fam).map((item, index) => {

                                    return <div key={index} className={styles.formBox}>
                                      {item.map((item2, index2) => {
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
                                              </> : item2.type == "add" ?
                                                <>
                                                  <Button variant="outlined"
                                                    onClick={addBox}>{item2.label.en}</Button>
                                                </> : <></>}
                                        </div>
                                      })}
                                    </div>
                                  })}
                                </div>
                              </div> :
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
                                    onChange={(event) => {
                                      values[val.prop] = event.target.value;
                                      if (event.target.value == 'no') {
                                        info[1].show = true
                                      } else if (event.target.value == 'yes') {
                                        info[1].show = false
                                      }
                                      setInitialValues(values)
                                      setInfo([...info])
                                    }}
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
                                        value={values[val.prop] || ''}
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
              <CardActions className={makeStyles.actions}>

                <Button
                  style={{ backgroundColor: '#41D2BF', color: '#fff' }}
                  // disabled={Boolean(!isValid)}
                  type="submit">
                  Save
                </Button>

                <Button
                  style={{ backgroundColor: '#41D2BF', color: '#fff' }}
                  onClick={goClick}
                  type="button">
                  previous pages
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
