export const filterInfo=[
  {
    prop:'birth_year',
    type:'range',
  },
  {
    prop:'height',
    type:'range',
    unit:'cm'
  },
  {
    prop:'weight',
    type:'range',
    unit:'kg'
  },
  {
    prop:'BMI',
    type:'range'
  },
  {
    prop:'blood_type',
    type:'checkbox',
    options:[{
      label:'A-',
      value:'A-',
    },{
      label:'A+',
      value:'A+',
    },{
      label:'AB+',
      value:'AB+',
    },{
      label:'B-',
      value:'B-',
    },{
      label:'B+',
      value:'B+'
    },{
      label:'O-',
      value:'O-'
    },{
      label:'O+',
      value:'O+'
    },
    ]
  },
  {
    prop:'ethnicity',
    options: [{
      label: 'African American or African',
      value:'African American or African'
    },{
      label: 'Native American or Alaska Native',
      value:'Native American or Alaska Native'
    },{
      label: 'Asian',
      value:'Asian'
    },{
      label: 'Caucasian',
      value:'Caucasian'
    },{
      label: 'Native Hawaiian or Pacific Islander',
      value:'Native Hawaiian or Pacific Islander'
    },{
      label: 'Hispanic',
      value:'Hispanic'
    },{
      label: 'Middle Eastern/Arabic',
      value:'Middle Eastern/Arabic'
    },{
      label: 'Mixed Ancestry',
      value:'Mixed Ancestry'
    }]
  },
  {
    prop:'education',
    options: [{
      label: 'Received GED'
    },{
      label: 'Completed high school'
    },{
      label: 'Technical school degree'
    },{
      label: 'Currently enrolled in college'
    },{
      label: 'Some college'
    },{
      label: 'Completed college 2 year degree'
    },{
      label: 'Currently pursuing an advanced degree'
    },{
      label: 'Completed advanced degree'
    },{
      label: 'Mixed Ancestry'
    }]
  },
  {
    prop:'marriage_status',
    options: [{
      label: 'single'
    },{
      label: 'married'
    },{
      label: 'divorced'
    },{
      label: 'widowed'
    }]
  },
  {
    prop:'hair_color',
    options: [{
      label: 'Black'
    },{
      label: 'Blonde'
    },{
      label: 'Brown'
    },{
      label: 'Red'
    }]
  },
  {
    prop:'skin_color',
    options: [{
      label: 'Black'
    },{
      label: 'Brown'
    },{
      label: 'White'
    },{
      label: 'Yellow'
    }]
  },
  {
    prop:'eye_color',
    options: [{
      label: 'Blue'
    },{
      label: 'Brown'
    },{
      label: 'Black'
    },{
      label: 'Green'
    },{
      label: 'Hazel'
    }]
  },
]
