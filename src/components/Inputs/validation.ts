import * as yup from 'yup';
import { SchemaOf } from 'yup';

import { FrcsInputs } from '../../models/Types';

// FrcsInputs
let frcsSchema: SchemaOf<FrcsInputs> = yup.object().shape({
  system: yup.string().required(),
  dieselFuelPrice: yup.number().required(),
  treatmentid: yup.number().required()
});

export const checkFrcsValidity = (inputs: FrcsInputs): Promise<boolean> => {
  return frcsSchema.isValid(inputs);
};
