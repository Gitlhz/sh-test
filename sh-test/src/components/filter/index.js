"use client";
import {useEffect, useState} from 'react';
import '@/i18n/config'

import {
  AccordionDetails, Accordion, AccordionSummary,Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import styles from './filter.module.css'
import {filterInfo} from "@/data/donor/filter-info";
import CheckboxGroup from "@/components/form/checkboxGroup/index"
import RangeSlider from "@/components/form/slider";

// console.log(filterInfo)
function Filter({onChange}) {
  const filterFormInit = {
    birth_year: [1970, 2000],
    height: [150, 200],
    weight: [40, 200],
    blood_type: ['A-'],
    ethnicity: []
  }
  const [filterForm, setFilterForm] = useState(filterFormInit);
  const [radio, setRadio] = useState({
    'All Donors': '',
    'Fresh Donors': '',
    'Donors with Frozen Eggs': ''
  });
  const [expanded, setExpanded] = useState(false);

  const handleChange1 = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  useEffect(() => {
    onChange(filterForm);
  }, [filterForm]);

  const handleSliderChange = (e, prop) => {
    console.log(prop, e)
    setFilterForm({...filterForm, [prop]: e})
  }
  const handleCheckBoxChange = (e, prop) => {
    console.log(prop, e)
    // setFilterForm(prevState => ({
    //   filterForm: {
    //     ...prevState.filterForm,
    //     [prop]: e
    //   }
    // }))
    setFilterForm({...filterForm, [prop]: e})
  }
  return (
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange1('panel1')}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon/>}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography sx={{width: '33%', flexShrink: 0, fontSize: '22px'}}>
          Select Filter Criteria
        </Typography>
        {/*<Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>*/}
      </AccordionSummary>
      <AccordionDetails>
        <div className={styles.filter}>
          {/*<div className={styles.title}>*/}
          {/*  Select Filter Criteria*/}
          {/*</div>*/}
          <div className={styles.section1} style={{display: 'flex'}}>
            <div className={styles.itemGroup}>
              <div className={styles.item}>
                <h4 className={styles.subtitle}>Year of Birth</h4>
                <RangeSlider min={1970}
                             max={2000}
                             step={0.5} name={'birth_year'}
                             onChange={handleSliderChange}
                             initialValue={filterForm.birth_year}></RangeSlider>
              </div>
              <div className={styles.item}>
                <h4 className={styles.subtitle}>Height</h4>
                <RangeSlider min={150}
                             max={200}
                             step={0.5} name={'height'}
                             onChange={handleSliderChange}
                             initialValue={filterForm.height}></RangeSlider>

              </div>
              <div className={styles.item}>
                <h4 className={styles.subtitle}>Weight</h4>
                <RangeSlider min={40}
                             max={200}
                             step={0.5} name={'weight'}
                             onChange={handleSliderChange}
                             initialValue={filterForm.weight}></RangeSlider>
              </div>
            </div>
            <div className={styles.item}>
              <h4 className={styles.subtitle}>Blood Type</h4>
              <div>
                <CheckboxGroup prop={filterInfo[4].prop} options={filterInfo[4].options}
                               onChange={handleCheckBoxChange}></CheckboxGroup>
              </div>
            </div>
            <div className={styles.item}>
              <h4 className={styles.subtitle}>Ethnicity</h4>
              <div>
                <CheckboxGroup prop={filterInfo[5].prop} options={filterInfo[5].options}
                               onChange={handleCheckBoxChange}></CheckboxGroup>
              </div>
            </div>
            <div className={styles.item}>
              <h4 className={styles.subtitle}>Education</h4>
              <div>
                <CheckboxGroup prop={filterInfo[6].prop} options={filterInfo[6].options}
                               onChange={handleCheckBoxChange}></CheckboxGroup>
              </div>
            </div>
            <div className={styles.item}>
              <h4 className={styles.subtitle}>Marriage status</h4>
              <div>
                <CheckboxGroup prop={filterInfo[7].prop} options={filterInfo[7].options}
                               onChange={handleCheckBoxChange}></CheckboxGroup>
              </div>
            </div>
            <div className={styles.item}>
              <h4 className={styles.subtitle}>Hair Color</h4>
              <div>
                <CheckboxGroup prop={filterInfo[8].prop} options={filterInfo[8].options}
                               onChange={handleCheckBoxChange}></CheckboxGroup>

              </div>
            </div>
            <div className={styles.item}>
              <h4 className={styles.subtitle}>Skin Color</h4>
              <div>
                <CheckboxGroup prop={filterInfo[9].prop} options={filterInfo[9].options}
                               onChange={handleCheckBoxChange}></CheckboxGroup>
              </div>
            </div>
            <div className={styles.item}>
              <h4 className={styles.subtitle}>Eye Color</h4>
              <div>
                <CheckboxGroup prop={filterInfo[10].prop} options={filterInfo[10].options}
                               onChange={handleCheckBoxChange}></CheckboxGroup>
              </div>
            </div>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  )
}

export default Filter;
