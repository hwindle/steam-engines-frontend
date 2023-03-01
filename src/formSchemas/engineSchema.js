import * as yup from 'yup';

const engineSchema = yup.object().shape({
  designer: yup.string().min(3).max(50).trim().required('Required'),
  railwayCompany: yup.string().min(1).max(50).trim().optional(),
  startYear: yup.string().required('Numbers only'),
  endYear: yup.string().required('Numbers only'),
  decade: yup.string().required(),
  wheelbase: yup.string().optional(),
  wikiUrl: yup.string().url().optional(),
  imageUrl: yup.string().required('Required'),
  name: yup.string().min(2).max(60).required('Required'),
  description: yup.string().optional()
});

export default engineSchema;