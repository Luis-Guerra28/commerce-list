import * as Yup from 'yup'

export const validationSchema = Yup.object({
  name: Yup.string().required(),
  cost: Yup.number().required(),
  units: Yup.number(),
  supplier: Yup.string(),
  category: Yup.string(),
  status: Yup.string(),
  description: Yup.string(),
})

export const initialValues = {
  name: '',
  cost: '',
  units: '',
  supplier: '',
  category: '',
  status: '',
  description: '',
}