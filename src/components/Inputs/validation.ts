import * as yup from 'yup';
import { SchemaOf, ValidationError } from 'yup';
import {
  InputModGPO,
  InputModCHP,
  InputModGP
} from '@ucdavis/tea/out/models/input.model';
import { teaGPOSchema, teaCHPSchema, teaGPSchema } from '../../models/Schemas';
import { FrcsInputs } from '../../models/Types';

// FrcsInputs
let frcsSchema: SchemaOf<FrcsInputs> = yup.object().shape({
  system: yup.string().required(),
  dieselFuelPrice: yup.number().required().min(0),
  treatmentid: yup.number().required().min(0)
});

export const checkFrcsValidity = async (inputs: FrcsInputs) => {
  try {
    await frcsSchema.validate(inputs, { abortEarly: false });
  } catch (err) {
    if (err instanceof ValidationError) {
      return err.errors;
    }
  }

  return [];
};

export const checkTeaValidity = async (
  model: string,
  inputs: InputModGPO | InputModCHP | InputModGP
) => {
  try {
    if (model === 'GPO') {
      await teaGPOSchema.validate(inputs, { abortEarly: false });
    }
    if (model === 'CHP') {
      await teaCHPSchema.validate(inputs, { abortEarly: false });
    }
    if (model === 'GP') {
      await teaGPSchema.validate(inputs, { abortEarly: false });
    }
  } catch (err) {
    if (err instanceof ValidationError) {
      return err.errors;
    }
  }

  return [];
};
