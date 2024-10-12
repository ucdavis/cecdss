import * as yup from 'yup';
import { Schema, ValidationError } from 'yup';
import { InputModGPO, InputModCHP, InputModGP } from '@ucdavis/tea/input.model';
import { teaGPOSchema, teaCHPSchema, teaGPSchema } from '../../models/Schemas';
import { FrcsInputs } from '../../models/Types';

// FrcsInputs
let frcsSchema: Schema<FrcsInputs> = yup.object().shape({
  system: yup.string().required(),
  treatmentid: yup.number().required().min(0),
  dieselFuelPrice: yup.number().required().min(0),
  wageFaller: yup.number().required().min(0),
  wageOther: yup.number().required().min(0),
  laborBenefits: yup.number().required().min(0),
  ppiCurrent: yup.number().required().min(0),
  residueRecovFracWT: yup.number().required().min(0),
  residueRecovFracCTL: yup.number().required().min(0)
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
