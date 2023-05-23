"use client";
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/material/styles';

import { Formik, getIn } from 'formik';
import * as Yup from 'yup';
import {
  Card, CardHeader, CardContent, CardActions, Divider, Grid, TextField, Checkbox, Input,
  InputLabel, Select, MenuItem, ListItemText, OutlinedInput,
  Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, FormHelperText
} from '@mui/material/core';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { withStyles } from '@mui/material/core/styles';

import getdata from "../about/result/getdatas"

const Form = (props) => {
  console.log(props.click);
  // 基础信息一
  const [initialValues, setInitialValues] = useState(getdata.info1.obj)
  const info1 = getdata.info1.list
  // 基础信息二
  const [initialValued, setInitialValued] = useState(getdata.info2.obj)
  const info2 = getdata.info2.list
  // 健康及生殖历史
  const [initialValue, setInitialValue] = useState(getdata.info3.obj)
  const info3 = getdata.info3.list
  return (<>
    <div style={{ display: (props.page == 1) ? 'block' : 'none' }}>

      <Formik
        initialValues={{
          ...initialValues
        }}
        validationSchema={Yup.object().shape({

          height: Yup.string().required('height is required'),
        })}
        onSubmit={(values) => {
          props.click(2)
        }}>
        {
          ({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isValid,
            touched,
            values
          }) => (
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
              <CardContent>
                <Grid container spacing={2}>
                  {info1.map((val, index) => {
                    return (
                      <div key={index}>
                        {
                          val.type == "input" ?
                            <>
                              <TextField
                                error={Boolean(touched[val.prop] && errors[val.prop])}
                                fullWidth
                                required
                                helperText={touched[val.prop] && errors[val.prop]}
                                label={val.label.en}
                                name={val.prop}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values[val.prop]}
                                variant="outlined"
                                size="small"
                              />
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
                                    <DemoContainer components={['DatePicker']}>
                                      <DatePicker
                                        value={values[val.prop]}
                                        onChange={(newValue) => {
                                          let allDataDate = JSON.parse(JSON.stringify(values))
                                          allDataDate[val.prop] = newValue;
                                          setInitialValues({ ...allDataDate });
                                          values.birth = newValue
                                        }}
                                        label={val.label.en + '*'} views={['year']} />
                                    </DemoContainer>
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
                                        value={initialValues.input[item]}
                                        onChange={(event) => {
                                          const {
                                            target: { value },
                                          } = event;
                                          initialValues.input[item] = typeof value === 'string' ? value.split(',') : value
                                          setInitialValues({ ...initialValues });
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
                      </div>
                    );
                  })}
                </Grid>
              </CardContent>
              <Divider />
              <CardActions className={makeStyles.actions}>

                <Button
                  color="primary"
                  disabled={Boolean(!isValid)}
                  type="submit"
                  variant="contained">
                  Save
                </Button>
              </CardActions>
            </form>
          )
        }
      </Formik>
    </div>
    <div style={{ display: (props.page == 2) ? 'block' : 'none' }}>
      <Formik
        initialValues={{
          ...initialValued
        }}
        validationSchema={Yup.object().shape({
          motion: Yup.string().required('motion is required'),
        })}
        onSubmit={(values) => {
          props.click(3)
        }}>
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isValid,
          touched,
          values
        }) => (
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <CardContent>
              <Grid container spacing={2}>
                {info2.map((val, index) => {
                  return (
                    <Grid key={index} item md={val.width} xs={12}>
                      {
                        val.type == "input" ?
                          <>
                            <TextField
                              error={Boolean(touched[val.prop] && errors[val.prop])}
                              fullWidth
                              required
                              helperText={touched[val.prop] && errors[val.prop]}
                              label={val.label.en}
                              name={val.prop}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values[val.prop]}
                              variant="outlined"
                              size="small"
                            />
                          </> : <></>
                      }
                    </Grid>
                  );
                })}
              </Grid>
            </CardContent>
            <Divider />
            <CardActions className={makeStyles.actions}>

              <Button
                color="primary"
                disabled={Boolean(!isValid)}
                type="submit"
                variant="contained">
                Save
              </Button>
            </CardActions>
          </form>
        )}
      </Formik>
    </div>
    <div style={{ display: (props.page == 3) ? 'block' : 'none' }}>
      <Formik
        initialValues={{
          ...initialValue
        }}
        validationSchema={Yup.object().shape({
          pregnancy: Yup.string().required('height is required'),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}>
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isValid,
          touched,
          values
        }) => (
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <CardContent>
              <Grid container spacing={2}>
                {info3.map((val, index) => {
                  return (
                    <Grid key={index} item md={val.width} xs={12}>
                      {
                        val.type == "input" ?
                          <>
                            <TextField
                              error={Boolean(touched[val.prop] && errors[val.prop])}
                              fullWidth
                              required
                              helperText={touched[val.prop] && errors[val.prop]}
                              label={val.label.en}
                              name={val.prop}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values[val.prop]}
                              variant="outlined"
                              size="small"
                            />
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
                color="primary"
                disabled={Boolean(!isValid)}
                type="submit"
                variant="contained">
                Save
              </Button>
            </CardActions>
          </form>
        )}
      </Formik>
    </div>


  </>

  );
};

Form.propTypes = {
  className: PropTypes.string
};

export default Form;
