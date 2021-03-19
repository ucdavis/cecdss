import * as yup from 'yup';
import { SchemaOf, ValidationError } from 'yup';

import { FrcsInputs } from '../../models/Types';

// FrcsInputs
let frcsSchema: SchemaOf<FrcsInputs> = yup.object().shape({
  system: yup.string().required(),
  dieselFuelPrice: yup.number().required().positive(),
  treatmentid: yup.number().required()
});

export const checkFrcsValidity = async (inputs: FrcsInputs) => {
  try {
    await frcsSchema.validate(inputs);
  } catch (err) {
    if (err instanceof ValidationError) {
      return err.errors;
    }
  }

  return [];
};
