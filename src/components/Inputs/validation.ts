import * as yup from 'yup';
import { SchemaOf, ValidationError } from 'yup';
import {
  InputModGPO,
  InputModCHP,
  InputModGP
} from '@ucdavis/tea/out/models/input.model';
import { FrcsInputs, TechnoeconomicModels } from '../../models/Types';

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

// Tea Example
// TODO: each schema need to be defined as SchemaOf<InputModGPO> or correct type
// Then each of the properties need to be listed with proper validation rules.
// Eventually we'll even want to make sure the values are between certain numbers, but for now
// we'll just make sure that any percentages are between 0 and 100 and leave everything else alone.
let teaGPOSchema = yup.object().shape({});
let teaCHPSchema = yup.object().shape({});
let teaGPSchema = yup.object().shape({});

export const checkTeaValidity = async (
  model: string,
  inputs: InputModGPO | InputModCHP | InputModGP
) => {
  try {
    if (model === TechnoeconomicModels.genericPowerOnly) {
      await teaGPOSchema.validate(inputs);
    }
    if (model === TechnoeconomicModels.genericCombinedHeatAndPower) {
      await teaCHPSchema.validate(inputs);
    }
    if (model === TechnoeconomicModels.gasificationPower) {
      await teaGPSchema.validate(inputs);
    }
  } catch (err) {
    if (err instanceof ValidationError) {
      return err.errors;
    }
  }

  return [];
};
