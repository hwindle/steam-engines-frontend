import * as yup from 'yup';

const engineSchema = yup.object().shape({
  designer: yup.string().min(3).max(50).trim().required(),
  railwayCompany: yup.string().min(1).max(50).trim().optional(),
  startYear: yup.string().required(),
  endYear: yup.string().required(),
  decade: yup.string().required(),
  wheelbase: yup.string().min(6).max(10).optional(),
  wikiUrl: yup.string().url().optional(),
  imageUrl: yup.string().url().required(),
  name: yup.string().min(2).max(60).required(),
  description: yup.string().optional()
});

export default engineSchema;