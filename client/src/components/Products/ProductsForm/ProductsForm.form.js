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

export const getInitialValues = (product) => {
  return {
    name: product?.name || '',
    cost: product?.cost || '',
    units: product?.units || '',
    supplier: product?.supplier || '',
    category: product?.category || '',
    status: product?.status || '',
    description: product?.description || '',
  }
}