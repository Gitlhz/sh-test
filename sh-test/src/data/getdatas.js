
import * as Yup from 'yup';
let getdata = {
  info1: {
    list: [
      {
        label: { en: "birth", zh: "birth" },
        prop: "birth",
        type: "date",
        width: 6
      }, {
        label: { en: "height", zh: "height" },
        prop: "height",
        type: "input",
        width: 6
      }, {
        label: { en: "weight", zh: "weight" },
        prop: "weight",
        type: "input",
        width: 6
      }, {
        label: { en: "bmi", zh: "bmi" },
        prop: "bmi",
        type: "input",
        width: 6
      }, {
        label: { en: "blood", zh: "blood" },
        prop: "blood",
        type: "input",
        width: 6
      }, {
        label: { en: "race", zh: "race" },
        prop: "race",
        type: "select",
        width: 6
      }, {
        label: { en: "教育经历(可仅填写最高经历)", zh: "教育经历(可仅填写最高经历)" },
        prop: "edc0",
        type: "box",
        con: [
          {
            label: { en: "学历", zh: "学历" },
            prop: "education",
            type: "autocomplete",
            option: [
              { title: '1The Godfather', year: 1972 },
              { title: '2The Godfather: Part II', year: 1974 },
              { title: '3The Dark Knight', year: 2008 },
              { title: '412 Angry Men', year: 1957 },
              { title: '5The Kid', year: 1921 },
              { title: '7Snatch', year: 2000 },
              { title: '83 Idiots', year: 2009 },
              { title: '9Monty Python and the Holy Grail', year: 1975 },
            ],
            width: 3
          }, {
            label: { en: "学校", zh: "学校" },
            prop: "school",
            type: "input",
            width: 3
          }, {
            label: { en: "专业", zh: "专业" },
            prop: "major",
            type: "input",
            width: 3
          }, {
            label: { en: "状态", zh: "状态" },
            prop: "state",
            type: "autocomplete",
            option: [
              { title: '毕业', year: 1 },
              { title: '肆业', year: 2 },
              { title: '正在转学', year: 3 }
            ],
            width: 3
          }, {
            label: { en: "入学时间", zh: "入学时间" },
            prop: "time",
            type: "dateselect",
            width: 6
          }, {
            label: { en: "结课时间", zh: "结课时间" },
            prop: "timeout",
            type: "dateselect",
            width: 6
          }, {
            label: { en: "备注", zh: "备注" },
            prop: "remarks",
            type: "input",
            width: 6
          }],
        width: 6
      }, {
        label: { en: "新增", zh: "新增" },
        prop: "add",
        type: "add",
        width: 6
      }, {
        label: { en: "record", zh: "record" },
        prop: "record",
        type: "radio",
        option: ['yes', 'no'],
        width: 6
      }, {
        label: { en: "anonymous", zh: "anonymous" },
        prop: "anonymous",
        type: "radio",
        option: ['yes', 'no'],
        width: 6
      }, {
        label: { en: "marry", zh: "marry" },
        prop: "marry",
        type: "radio",
        option: ['yes', 'no'],
        width: 6
      }, {
        label: { en: "gen", zh: "gen" },
        prop: "gen",
        type: "radio",
        option: ['yes', 'no'],
        width: 6
      }
    ],
    obj: {
      birth: null,    // 出生年
      height: '',   // 身高
      weight: '',   // 体重
      bmi: '',    // BMI
      blood: '',    // 血型
      race: '',   // 种族
      record: '',    // 捐献记录
      anonymous: '',   // 匿名
      marry: '',   // 婚姻
      gen: '',   // 基因筛查
      //学历
      // 学校
      // 专业
      // 状态
      // 时间段
      // 备注
      education: '',
      school: '',
      major: '',
      state: '',
      time: '',
      timeout: '',
      remarks: '',
      // race: {
      //   "Black": false,
      //   "Blonde": false,
      //   "Brown": false,
      //   "Red": false,
      // },
      getaa: ['yes', 'no'],
      Black: [],
      input: {
        Black: []
      },
      names: [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder',
      ]
    },
    valid: {
      height: Yup.string().required('height is required'),
      weight: Yup.string().required('weight is required'),
    },
    num: 0
  },
  info2: {
    list: [{
      label: { en: "hair", zh: "hair" },
      prop: "hair",
      type: "input",
      width: 6
    }, {
      label: { en: "skin", zh: "skin" },
      prop: "skin",
      type: "input",
      width: 6
    }, {
      label: { en: "syes", zh: "syes" },
      prop: "syes",
      type: "input",
      width: 6
    }, {
      label: { en: "freckles", zh: "freckles" },
      prop: "freckles",
      type: "radio",
      option: ['yes', 'no'],
      width: 6
    }, {
      label: { en: "shape", zh: "shape" },
      prop: "shape",
      type: "radio",
      option: ['slim', 'normal', 'fat'],
      width: 6
    }, {
      label: { en: "quality(thickness,Soft and hard,Straight bend)", zh: "quality" },
      prop: "hair-quality",
      type: "input",
      width: 6
    }, {
      label: { en: "tooth", zh: "tooth" },
      prop: "tooth",
      type: "input",
      width: 6
    }, {
      label: { en: "vision", zh: "vision" },
      prop: "vision",
      type: "input",
      width: 6
    }, {
      label: { en: "hearing", zh: "hearing" },
      prop: "hearing",
      type: "input",
      width: 6
    }, {
      label: { en: "double", zh: "double" },
      prop: "double",
      type: "radio",
      option: ['yes', 'no'],
      width: 6
    }, {
      label: { en: "motion", zh: "motion" },
      prop: "motion",
      type: "input",
      width: 6
    }],
    obj: {
      hair: '',    // 发色
      skin: '',   // 肤色
      syes: '',   // 眼睛颜色
      freckles: '',    // 雀斑
      shape: '',    // 体型
      quality: '',   // 发质
      tooth: '',   // 牙齿
      vision: '',    // 视力
      hearing: '',   // 听力
      double: '',   // 双眼皮
      motion: '',   // 健身或运动情况
    },
    valid: {
      motion: Yup.string().required('motion is required'),
    },
    num: 0
  },
  info3: {
    list: [{
      label: { en: "Major health issues重大健康问题", zh: "Major health issues重大健康问题" },
      prop: "health",
      type: "input",
      width: 6
    }, {
      label: { en: "Inpatient Surgery History住院手术历史", zh: "Inpatient Surgery History住院手术历史" },
      prop: "inpatient",
      type: "input",
      width: 6
    }, {
      label: { en: "Allergy history, allergy history to narcotic drugs过敏史、麻醉药物过敏史", zh: "Allergy history, allergy history to narcotic drugs过敏史、麻醉药物过敏史" },
      prop: "allergy",
      type: "input",
      width: 6
    }, {
      label: { en: "Mental Healtn Issue", zh: "Mental Healtn Issue" },
      prop: "mental",
      type: "radio",
      option: ['yes', 'no'],
      width: 6
    }, {
      label: { en: "Tattoos and Punctures纹身及穿刺", zh: "Tattoos and Punctures纹身及穿刺" },
      prop: "tattoos",
      type: "radio",
      option: ['slim', 'normal', 'fat'],
      width: 6
    }, {
      label: { en: "Is there a birth defect是否有出生缺陷", zh: "Is there a birth defect是否有出生缺陷" },
      prop: "defect",
      type: "input",
      width: 6
    }, {
      label: { en: "Infectious diseases传染性疾病", zh: "Infectious diseases传染性疾病" },
      prop: "infectious",
      type: "input",
      width: 6
    }, {
      label: { en: "Vaccination status疫苗接种情况", zh: "Vaccination status疫苗接种情况" },
      prop: "vaccination",
      type: "input",
      width: 6
    }, {
      label: { en: "covid疫苗是否接种", zh: "covid疫苗是否接种" },
      prop: "covid",
      type: "radio",
      option: ['yes', 'no'],
      width: 6
    }, {
      label: { en: "contraception measures避孕措施", zh: "contraception measures避孕措施" },
      prop: "measures",
      type: "input",
      width: 6
    }, {
      label: { en: "pup smear test Time and resultspup smear test时间及结果", zh: "pup smear test Time and resultspup smear test时间及结果" },
      prop: "pup",
      type: "input",
      width: 6
    }, {
      label: { en: "Is the menstrual cycle regular月经周期是否规律", zh: "Is the menstrual cycle regular月经周期是否规律" },
      prop: "menstrual",
      type: "radio",
      option: ['yes', 'no'],
      width: 6
    }, {
      label: { en: "History of pregnancy and childbirth孕产史GPAL", zh: "History of pregnancy and childbirth孕产史GPAL" },
      prop: "pregnancy",
      type: "input",
      width: 6
    },],
    obj: {
      health: '',
      inpatient: '',
      allergy: '',
      mental: '',
      tattoos: '',
      defect: '',
      infectious: '',
      vaccination: '',
      covid: '',
      measures: '',
      pup: '',
      menstrual: '',
      pregnancy: '',
    },
    valid: {
      menstrual: Yup.string().required('menstrual is required'),
      pregnancy: Yup.string().required('pregnancy is required'),
    },
    num: 0
  },
  info4: {
    list: [{
      label: { en: "领养", zh: "领养" },
      prop: "adopt",
      type: "radio",
      option: ['yes', 'no'],
      width: 6
    }, {
      label: { en: "不是领养", zh: "不是领养" },
      prop: "no",
      type: "about",
      show: false,
      width: 6,
      fam: [[{
        label: { en: "关系", zh: "关系" },
        prop: "relationshiped",
        type: "input",
        width: 6
      }, {
        label: { en: "年龄", zh: "年龄" },
        prop: "aged",
        type: "input",
        width: 6
      }, {
        label: { en: "身高", zh: "身高" },
        prop: "heighted",
        type: "input",
        width: 6
      }, {
        label: { en: "体重", zh: "体重" },
        prop: "weighted",
        type: "input",
        width: 6
      }, {
        label: { en: "学历", zh: "学历" },
        prop: "schooled",
        type: "input",
        width: 6
      }, {
        label: { en: "健康", zh: "健康" },
        prop: "healthyed",
        type: "input",
        width: 6
      }, {
        label: { en: "手术史", zh: "手术史" },
        prop: "surgicaled",
        type: "input",
        width: 6
      }, {
        label: { en: "新增", zh: "新增" },
        prop: "add",
        type: "add",
        width: 6
      }]]
    }, {
      label: { en: "性格、天赋", zh: "性格、天赋" },
      prop: "talent",
      type: "input",
      width: 6
    }, {
      label: { en: "语言", zh: "语言" },
      prop: "language",
      type: "input",
      width: 6
    }, {
      label: { en: "谢顶家人", zh: "谢顶家人" },
      prop: "family",
      type: "input",
      width: 6
    }, {
      label: { en: "捐献原因", zh: "捐献原因" },
      prop: "donation",
      type: "input",
      width: 6
    }, {
      label: { en: "受赠者要求", zh: "受赠者要求" },
      prop: "recipient",
      type: "input",
      width: 6
    }, {
      label: { en: "童年生活", zh: "童年生活" },
      prop: "childhood",
      type: "input",
      width: 6
    }, {
      label: { en: "空闲时间", zh: "空闲时间" },
      prop: "free",
      type: "input",
      width: 6
    }],
    obj: {

      adopt: '', //领养
      no: '',
      relationshiped: '',  //关系
      aged: '',  //年龄
      heighted: '',  //身高
      weighted: '',  //体重
      schooled: '',  //学历
      healthyed: '', //健康程度
      surgicaled: '',  //手术史
      talent: '', //性格、天赋
      language: '',  //语言
      family: '', //谢顶家人
      donation: '', //捐献原因
      recipient: '',  //受赠者要求
      childhood: '',  //童年生活
      free: '', //空闲时间
    },
    valid: {
      free: Yup.string().required('free is required'),
    },
    num: 0
  }
}
export default getdata;
