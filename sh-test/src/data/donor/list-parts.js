// export const list=[
//   {
//     name:'alice **012',
//     tier1:{
//       //出生年份
//       birth_year:'1998/07/08',
//       //身高 cm
//       height:'170',
//       //体重 kg
//       weight:	'66',
//       //BMI
//       bmi:'22.1',
//       //血型
//       blood_type:'A+',
//       //种族
//       ethnicity:	'African American, African',
//       // heritage:	'African'
//       //最高学历
//       highest_education:'',
//       //学历
//       // education:[],
//       //是否捐献过
//       donated:'yes',
//       //捐献记录
//       donation_record:[],
//       //匿名
//       anonymous:'no',
//       //婚姻状况
//       marriage_status:'single',
//     },
//     tier2:{
//       //1发色
//       hair_color:	'Black',
//       //2肤色
//       skin_color:'Yellow',
//       //3眼睛颜色
//       eye_color:'Brown (dark)',
//       //4雀斑
//       freckle:'true',
//       //5体型
//       shape:'true',
//       //6发质
//       hair_quality:'Straight hair',
//       //7牙齿
//       tooth:'Tooth decay',
//       //8听力
//       hearing:'Normal hearing',
//       //9视力
//       vision:'1.5',
//       //10是否双眼皮
//       double_fold_eyelids:'yes',
//       //10健身或运动情况
//       exercise:'Regular exercise',
//     },
//     tier3: {
//       // 重大健康问题   //  输入框
//       major_health_problem: '',
//       // 住院手术历史   //  输入框
//       inpatient_operation_history: '',
//       // 过敏史、麻醉药物过敏史   //  输入框
//       allergy: '',
//       // 精神健康问题Mental Health Issue    //  单选
//       mental: '',
//       // 纹身及 穿刺(身体穿孔佩戴饰品；（在身体部位打的）孔，洞)   //  单选
//       // 需求图片中(HEP ABC AIDS exposure) :Hep A是甲肝；hep.-b是乙肝 hep.-c是丙肝AIDS exposure指的是接触艾滋病病毒的可能性
//       tattoos_piercings: '',
//       // 出生缺陷   //  单选
//       defect: '',
//       // 传染性疾病   //  输入框
//       infectious: '',
//       // 疫苗接种情况   //  输入框
//       vaccination: '',
//       // covid疫苗是否接种    //  单选
//       covid_vaccine: '',
//       // 避孕措施   //  输入框
//       contraception: '',
//       // 子宫颈抹片检查时间及结果  巴氏实验(涂片检查)巴氏实验(涂片检查)用来检查官颈癌  //  输入框
//       pap_smear_test: '',
//       // 月经周期是否规律   //  单选
//       menstrual: '',
//       // 孕产史GPAL  代表女性的生育史，g代表怀孕次数，p代表分娩次数，a代表堕胎次数，l代表现有子女数量 //  输入框
//       pregnancy: '',
//     },
//     tier4: {
//       adopt: '', //领养    //  单选
//       //不是领养需要回答以下的部分问题
//       family_health: [
//         {
//           relation:'',//关系   //  输入框
//           age:'',//年龄   //  输入框
//           height:'',//身高   //  输入框
//           weight:'',//体重   //  输入框
//           education:'',//学历   //  输入框
//           health_level:'',//健康程度   //  输入框
//           surgical_history:''//手术史   //  输入框
//         }
//       ],
//       character:'',//性格
//       talent: '', //天赋    //  输入框
//       language: '',  //语言   //  输入框
//       family_bald: '', //谢顶家人    //  输入框
//       donation_reason: '', //捐献原因    //  输入框
//       recipient_requirement: '',  //受赠者要求    //  输入框
//       childhood: '',  //童年生活    //  输入框
//       free_time: '', //空闲时间    //  输入框
//     }
//   },
//   {
//     name:'ray **013',
//     tier1:{
//       //出生年份
//       birth_year:'1998/07/08',
//       //身高 cm
//       height:'170',
//       //体重 kg
//       weight:	'66',
//       //BMI
//       bmi:'22.1',
//       //血型
//       blood_type:'A+',
//       //种族
//       ethnicity:	'African American, African',
//       // heritage:	'African'
//       //最高学历
//       highest_education:'',
//       //学历
//       // education:[]
//     },
//     tier2:{
//       //1发色
//       hair_color:	'Black',
//       //2肤色
//       skin_color:'Yellow',
//       //3眼睛颜色
//       eye_color:'Brown (dark)',
//       //4雀斑
//       freckle:'true',
//       //5体型
//       shape:'true',
//       //6发质
//       hair_quality:'',
//       //7牙齿
//       tooth:'',
//       //8听力
//       vision:'',
//       //9视力
//       hearing:'',
//       //10是否双眼皮
//       double_fold_eyelids:'yes',
//       //10健身或运动情况
//       exercise:'',
//     },
//     tier3: {
//       // 重大健康问题   //  输入框
//       major_health_problem: '',
//       // 住院手术历史   //  输入框
//       inpatient_operation_history: '',
//       // 过敏史、麻醉药物过敏史   //  输入框
//       allergy: '',
//       // 精神健康问题Mental Health Issue    //  单选
//       mental: '',
//       // 纹身及 穿刺(身体穿孔佩戴饰品；（在身体部位打的）孔，洞)   //  单选
//       // 需求图片中(HEP ABC AIDS exposure) :Hep A是甲肝；hep.-b是乙肝 hep.-c是丙肝AIDS exposure指的是接触艾滋病病毒的可能性
//       tattoos_piercings: '',
//       // 出生缺陷   //  单选
//       defect: '',
//       // 传染性疾病   //  输入框
//       infectious: '',
//       // 疫苗接种情况   //  输入框
//       vaccination: '',
//       // covid疫苗是否接种    //  单选
//       covid_vaccine: '',
//       // 避孕措施   //  输入框
//       contraception: '',
//       // 子宫颈抹片检查时间及结果  巴氏实验(涂片检查)巴氏实验(涂片检查)用来检查官颈癌  //  输入框
//       pap_smear_test: '',
//       // 月经周期是否规律   //  单选
//       menstrual: '',
//       // 孕产史GPAL  代表女性的生育史，g代表怀孕次数，p代表分娩次数，a代表堕胎次数，l代表现有子女数量 //  输入框
//       pregnancy: '',
//     },
//     tier4: {
//       adopt: '', //领养    //  单选
//       //不是领养需要回答以下的部分问题
//       family_health: [
//         {
//           relation:'',//关系   //  输入框
//           age:'',//年龄   //  输入框
//           height:'',//身高   //  输入框
//           weight:'',//体重   //  输入框
//           education:'',//学历   //  输入框
//           health_level:'',//健康程度   //  输入框
//           surgical_history:''//手术史   //  输入框
//         }
//       ],
//       character:'',//性格
//       talent: '', //天赋    //  输入框
//       language: '',  //语言   //  输入框
//       family_bald: '', //谢顶家人    //  输入框
//       donation_reason: '', //捐献原因    //  输入框
//       recipient_requirement: '',  //受赠者要求    //  输入框
//       childhood: '',  //童年生活    //  输入框
//       free_time: '', //空闲时间    //  输入框
//     }
//
//   }
// ]
