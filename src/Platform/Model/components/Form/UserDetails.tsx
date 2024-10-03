import { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import styled from 'styled-components';
import { EXPERTISE_TYPE_OPTS, ORG_TYPE_OPTS } from '../../../../Resources/Constants';
import { registerAPI } from '../../../API';
import { useSubmitForm } from '../../../Hooks/Form';

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

interface UserDetailsFormProps {
    handleChange: (name: string, val: string) => void;
    inputs: UserDetailsProps;
}

const UserDetailsForm = ({ handleChange, inputs }: UserDetailsFormProps) => {
    return (
        <Form>
            <div className="grid grid-cols-2 gap-x-6 px-1">
                            <FormGroup>
                                <Label for="fullName" className='text-gray-170 font-semibold text-14p'>
                                Full Name
                                </Label>
                                <Input
                                id="fullName"
                                name="fullName"
                                placeholder="Full Name"
                                required
                                bsSize="sm"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email" className='text-gray-170 font-semibold text-14p'>
                                Email ID
                                </Label>
                                <Input
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                                type='email'
                                bsSize="sm"
                                />
                            </FormGroup>
                        </div>
                        <div className="mt-2 grid grid-cols-2 gap-x-6 px-1">
                            <FormGroup>
                                <Label for="organization" className='text-gray-170 font-semibold text-14p'>
                                Organization
                                </Label>
                                <Input
                                id="organization"
                                name="organization"
                                placeholder="Organization Name"
                                bsSize="sm"
                                />
                            </FormGroup>
                            <FormGroup className='flex flex-col'>
                                <Label for="orgType" className='text-gray-170 font-semibold text-14p'>
                                Organization Type
                                </Label>
                                <StyledInput
                                placeholder={inputs.orgType}
                                className='h-full text-gray-500 text-14p'
                                bsSize="sm"
                                type='select'
                                value={inputs.orgType}
                                onChange={(e: any) => handleChange('orgType', e.target.value)
                                }
                                >
                                    {ORG_TYPE_OPTS.length > 0 && ORG_TYPE_OPTS.map((element, index) => (
                                        <option value={element.value} className='text-gray-700'
                                        key={index}>
                                            {element.name}
                                        </option>
                                    ))}
                                </StyledInput>
                            </FormGroup>
                        </div>
                        <div className="mt-2 grid grid-cols-2 gap-x-6 px-1">
                            <FormGroup>
                                <Label for="orgWebsite" className='text-gray-170 font-semibold text-14p'>
                                Organization Website
                                </Label>
                                <Input
                                id="orgWebsite"
                                name="orgWebsite"
                                placeholder="Organization Website"
                                bsSize="sm"
                                type='url'
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="jobTitle" className='text-gray-170 font-semibold text-14p'>
                                Job Title
                                </Label>
                                <Input
                                id="jobTitle"
                                name="jobTitle"
                                placeholder="Enter Job Title"
                                bsSize="sm"
                                />
                            </FormGroup>
                        </div>
                        <div className="mt-2 grid grid-cols-2 gap-x-6 px-1">
                            <FormGroup>
                                <Label for="linkedin" className='text-gray-170 font-semibold text-14p'>
                                Linkedin
                                </Label>
                                <Input
                                id="linkedin"
                                name="linkedin"
                                placeholder="Enter your Linkedin profile link"
                                bsSize="sm"
                                type='url'
                                />
                            </FormGroup>
                            <FormGroup className='flex flex-col'>
                                <Label for="expertise" className='text-gray-170 font-semibold text-14p'>
                                Expertise
                                </Label>
                                <StyledInput
                                placeholder={inputs.expertise}
                                className='h-full text-gray-500 text-14p'
                                bsSize="sm"
                                type='select'
                                value={inputs.expertise}
                                onChange={(e: any) =>
                                handleChange('expertise', e.target.value)
                                }
                                >
                                    {EXPERTISE_TYPE_OPTS.length > 0 && EXPERTISE_TYPE_OPTS.map((element, index) => (
                                        <option value={element.value} className='text-gray-700'
                                        key={index}
                                        >
                                            {element.name}
                                        </option>
                                    ))}
                                </StyledInput>
                            </FormGroup>
                        </div>
                        <div className="mt-2 grid grid-cols-1">
                            <FormGroup>
                                <Label for="aboutMe" className='text-gray-170 font-semibold text-14p'>
                                About Me
                                </Label>
                                <Input
                                id="aboutMe"
                                name="aboutMe"
                                placeholder=""
                                bsSize="sm"
                                type='textarea'
                                />
                            </FormGroup>
                        </div>
        </Form>
    );
};

const UserDetails = () => {
    const [inputs, setInputs] = useState<UserDetailsProps>({
        fullName:'',
        email:'',
        organization:'',
        orgType:'',
        orgWebsite:'',
        jobTitle:'',
        linkedin:'',
        expertise:'',
        aboutMe:''
    });


    const { handleSubmit, loading, error } = useSubmitForm<FormData>(registerAPI);


    const handleChange = (name: string, value: string) => {
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const onSubmit = () => {
        console.log('Submit', inputs)
        // TODO: Use the useSubmitForm hook here
    }

  return (
    <>
        <div className="w-1/2 h-full flex flex-col items-center justify-center text-white p-4">     
            <div className="w-80per max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 h-85per mt-4 flex flex-col items-center justify-between gap-y-3">
                <div className="text-xl font-bold text-brand leading-7 text-gray-900 text-center">
                Enter your details 
                </div>
                <div className="mt-1 text-sm leading-6 text-gray-600 text-center">
                Enter details to save the model link.
                </div>
                <div className="max-h-75per overflow-y-auto mt-4 w-full">
                <UserDetailsForm handleChange={handleChange} inputs={inputs} />
                </div>
                <div className='flex items-center justify-center mt-3'>
                <StyledButton>Save Model</StyledButton>
                </div>
            </div>
        </div>
    </>
  );
};

export default UserDetails;

export const StyledInput = styled(Input)`
  border: 1px solid #CED4DA;
  border-radius: 3px;
  padding-left: 5px;
  background-color: transparent;
  transition: border-color 0.2s,
  color: #495057;

  &:focus {
    border-color: #395442;
    outline: none;
  }

  &:active {
    border-color: #395442;
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
`;