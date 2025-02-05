import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import styled from 'styled-components';
import * as Yup from 'yup';
import {
  EXPERTISE_TYPE_OPTS,
  ORG_TYPE_OPTS
} from '../../../../Resources/Constants';
import { saveUserDetailsAPI } from '../../../API';
import { useSaveModel } from '../../../Context/saveModel';
import { useSubmitForm } from '../../../Hooks/Form';
import { trackEvent } from '../../../Utils/gaAnalytics';

interface UserDetailsProps {
  fullName: string;
  email: string;
  organization: string;
  orgType: string;
  orgWebsite?: string;
  jobTitle: string;
  linkedin?: string;
  expertise?: string;
  aboutMe?: string;
}

interface Props {
  toggle: () => void;
  onSubmitSuccess: () => void;
  saveUrl: string;
}

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('Full Name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  organization: Yup.string().required('Org is required'),
  orgType: Yup.string().required('Org Type is required'),
  orgWebsite: Yup.string().url('Invalid URL format'),
  jobTitle: Yup.string().required('Job Title is required'),
  linkedin: Yup.string().url('Invalid URL format'),
  expertise: Yup.string(),
  aboutMe: Yup.string()
});

const UserDetails = ({ toggle, onSubmitSuccess, saveUrl }: Props) => {
  const [inputs, setInputs] = useState<UserDetailsProps>({
    fullName: '',
    email: '',
    organization: '',
    orgType: '',
    orgWebsite: '',
    jobTitle: '',
    linkedin: '',
    expertise: '',
    aboutMe: ''
  });

  const [errors, setErrors] = useState<Partial<UserDetailsProps>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { handleSubmit, loading, error } =
    useSubmitForm<UserDetailsProps>(saveUserDetailsAPI);

  const { updateLinkCopied } = useSaveModel();

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    setInputs(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof UserDetailsProps]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = async () => {
    try {
      await validationSchema.validate(inputs, { abortEarly: false });
      setErrors({});
      return true;
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const newErrors: Partial<UserDetailsProps> = {};
        err.inner.forEach(error => {
          if (error.path) {
            newErrors[error.path as keyof UserDetailsProps] = error.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValid = await validateForm();
    if (isValid) {
      try {
        await handleSubmit(inputs);
        setIsSubmitted(true);
      } catch (err) {
        console.error('Error submitting form:', err);
      }
    }
  };

  const onCopy = () => {
    onSubmitSuccess();
    toggle();
    updateLinkCopied(true);
    trackEvent('Copy Model Link', 'Click', 'Model Link Copied');
  };

  return (
    <ModalBackground>
      <FormContainer>
        <div className='flex items-center justify-between gap-x-1'>
          <div className='w-50p' />
          <div className='text-xl font-bold text-brand leading-7 text-gray-900 text-center w-180p'>
            Enter your details
          </div>
          <div className='w-50p text-right cursor-pointer' onClick={toggle}>
            <FontAwesomeIcon
              icon={faXmark}
              style={{ color: '#dc2e2e' }}
              size='xl'
            />
          </div>
        </div>
        <div className='mt-1 text-sm leading-6 text-gray-600 text-center'>
          Enter details to save the model link.
        </div>
        <div className='max-h-75per overflow-y-auto mt-4 w-full'>
          <Form onSubmit={onSubmit}>
            <div className='grid grid-cols-2 gap-x-6 px-1'>
              <FormGroup>
                <Label
                  for='fullName'
                  className='text-gray-170 font-semibold text-14p'
                >
                  Full Name
                </Label>
                <StyledInput
                  id='fullName'
                  name='fullName'
                  placeholder='Full Name'
                  className='h-30p'
                  bsSize='sm'
                  value={inputs.fullName}
                  onChange={handleChange}
                  invalid={!!errors.fullName}
                />
                {errors.fullName && (
                  <ErrorMessage>{errors.fullName}</ErrorMessage>
                )}
              </FormGroup>
              <FormGroup>
                <Label
                  for='email'
                  className='text-gray-170 font-semibold text-14p'
                >
                  Email ID
                </Label>
                <StyledInput
                  id='email'
                  name='email'
                  placeholder='Enter your email'
                  type='email'
                  bsSize='sm'
                  className='h-30p'
                  value={inputs.email}
                  onChange={handleChange}
                  invalid={!!errors.email}
                />
                {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
              </FormGroup>
            </div>
            <div className='mt-2 grid grid-cols-2 gap-x-6 px-1'>
              <FormGroup className='flex flex-col'>
                <Label
                  for='organization'
                  className='text-gray-170 font-semibold text-14p'
                >
                  Organization Name
                </Label>
                <StyledInput
                  id='organization'
                  name='organization'
                  bsSize='sm'
                  className='h-30p'
                  placeholder='Org Name'
                  value={inputs.organization}
                  onChange={handleChange}
                  invalid={!!errors.organization}
                />
                {errors.organization && (
                  <ErrorMessage>{errors.organization}</ErrorMessage>
                )}
              </FormGroup>
              <FormGroup className='flex flex-col'>
                <Label
                  for='orgType'
                  className='text-gray-170 font-semibold text-14p'
                >
                  Organization Type
                </Label>
                <StyledSelectWrapper>
                  <StyledSelect
                    id='orgType'
                    name='orgType'
                    value={inputs.orgType}
                    onChange={handleChange}
                    invalid={!!errors.orgType}
                  >
                    <option value=''>Select Organization Type</option>
                    {ORG_TYPE_OPTS.map((element, index) => (
                      <option value={element.value} key={index}>
                        {element.name}
                      </option>
                    ))}
                  </StyledSelect>
                </StyledSelectWrapper>
                {errors.orgType && (
                  <ErrorMessage>{errors.orgType}</ErrorMessage>
                )}
              </FormGroup>
            </div>
            <div className='mt-2 grid grid-cols-2 gap-x-6 px-1'>
              <FormGroup>
                <Label
                  for='orgWebsite'
                  className='text-gray-170 font-semibold text-14p'
                >
                  Organization Website
                </Label>
                <StyledInput
                  id='orgWebsite'
                  name='orgWebsite'
                  placeholder='Org Website'
                  type='url'
                  bsSize='sm'
                  className='h-30p'
                  value={inputs.orgWebsite}
                  onChange={handleChange}
                  invalid={!!errors.orgWebsite}
                />
                {errors.orgWebsite && (
                  <ErrorMessage>{errors.orgWebsite}</ErrorMessage>
                )}
              </FormGroup>
              <FormGroup>
                <Label
                  for='jobTitle'
                  className='text-gray-170 font-semibold text-14p'
                >
                  Job Title
                </Label>
                <StyledInput
                  id='jobTitle'
                  name='jobTitle'
                  placeholder='Enter Job Title'
                  bsSize='sm'
                  className='h-30p'
                  value={inputs.jobTitle}
                  onChange={handleChange}
                  invalid={!!errors.jobTitle}
                />
                {errors.jobTitle && (
                  <ErrorMessage>{errors.jobTitle}</ErrorMessage>
                )}
              </FormGroup>
            </div>
            <div className='mt-2 grid grid-cols-2 gap-x-6 px-1'>
              <FormGroup className='flex flex-col'>
                <Label
                  for='linkedin'
                  className='text-gray-170 font-semibold text-14p'
                >
                  LinkedIn
                </Label>
                <StyledInput
                  id='linkedin'
                  name='linkedin'
                  placeholder='LinkedIn profile link'
                  type='url'
                  value={inputs.linkedin}
                  onChange={handleChange}
                  invalid={!!errors.linkedin}
                  bsSize='sm'
                  className='h-30p'
                />
                {errors.linkedin && (
                  <ErrorMessage>{errors.linkedin}</ErrorMessage>
                )}
              </FormGroup>
              <FormGroup className='flex flex-col'>
                <Label
                  for='expertise'
                  className='text-gray-170 font-semibold text-14p'
                >
                  Expertise
                </Label>
                <StyledSelectWrapper>
                  <StyledSelect
                    id='expertise'
                    name='expertise'
                    value={inputs.expertise}
                    onChange={handleChange}
                  >
                    <option value=''>Select Expertise</option>
                    {EXPERTISE_TYPE_OPTS.map((element, index) => (
                      <option value={element.value} key={index}>
                        {element.name}
                      </option>
                    ))}
                  </StyledSelect>
                </StyledSelectWrapper>
              </FormGroup>
            </div>
            <div className='mt-2 grid grid-cols-1'>
              <FormGroup>
                <Label
                  for='aboutMe'
                  className='text-gray-170 font-semibold text-14p'
                >
                  About Me
                </Label>
                <StyledInput
                  id='aboutMe'
                  name='aboutMe'
                  type='textarea'
                  className='max-h-200p'
                  value={inputs.aboutMe}
                  onChange={handleChange}
                />
              </FormGroup>
            </div>
            <div className='flex items-center justify-center mt-3 w-full'>
              {isSubmitted ? (
                <CopyToClipboard text={saveUrl} onCopy={onCopy}>
                  <StyledButton>Copy Model Link and Close</StyledButton>
                </CopyToClipboard>
              ) : (
                <StyledButton
                  type='submit'
                  disabled={loading}
                  onClick={() =>
                    trackEvent(
                      'Save User Details',
                      'Click',
                      'User Details Saved'
                    )
                  }
                >
                  {loading ? 'Saving...' : 'Save Details'}
                </StyledButton>
              )}
            </div>
          </Form>
          <div className='w-full flex items-center justify-center mt-1'>
            {error && <ErrorMessage>{error}</ErrorMessage>}
          </div>
        </div>
      </FormContainer>
    </ModalBackground>
  );
};

export default UserDetails;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const FormContainer = styled.div`
  width: 90%;
  max-width: 500px;
  background-color: #fff;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: #ffffff;
  overflow-y: auto;
  max-height: 90vh;
`;

const ErrorMessage = styled.div`
  color: #dc3545;
  font-size: 12px;
  margin-top: 4px;
`;

const StyledInput = styled(Input)<{ invalid?: boolean }>`
    border: 1px solid ${props => (props.invalid ? '#dc3545' : '#CED4DA')};
    border-radius: 3px;
    padding-left: 5px;
    background-color: transparent;
    transition: border-color 0.2s,
    color: #495057;

    &:focus {
        border-color: ${props => (props.invalid ? '#dc3545' : '#395442')};
        outline: none;
    }

    &:active {
        border-color: ${props => (props.invalid ? '#dc3545' : '#395442')};
    }
`;

const StyledSelectWrapper = styled.div`
  position: relative;
  height: 30px;
  overflow: hidden;
`;

const StyledSelect = styled.select<{ invalid?: boolean }>`
  width: 100%;
  height: 100%;
  border: 1px solid ${props => (props.invalid ? '#dc3545' : '#CED4DA')};
  border-radius: 3px;
  padding-left: 5px;
  padding-right: 25px;
  background-color: transparent;
  color: #495057;
  font-size: 14px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url('data:image/svg+xml;utf8,<svg fill="%23495057" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');
  background-repeat: no-repeat;
  background-position: right 5px top 50%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:focus {
    border-color: ${props => (props.invalid ? '#dc3545' : '#395442')};
    outline: none;
  }

  &:active {
    border-color: ${props => (props.invalid ? '#dc3545' : '#395442')};
  }
`;

export const StyledButton = styled(Button)`
  background-color: #395442;
  border: none;
  color: white;
  padding: 10px 30px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }

  &:active {
    background-color: #004085;
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`;
