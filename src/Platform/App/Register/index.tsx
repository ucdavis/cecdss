import { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { EXPT_TYPE_OPTS, ORG_TYPE_OPTS, URL_PRIVACY_POLICY } from '../../../Resources/Constants';
import logo from '../../../Resources/Images/logoBig.svg';
import '../../../Styles/Landing.css';
import Navbar from '../Shared/Navbar';
import styled from 'styled-components';
import { useSubmitForm } from '../../../Hooks/Form';
import { registerAPI } from '../../../Api';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';


interface SignUpProps {
    firstName: string;
    lastName: string;
    email: string;
    organization?: string;
    orgType?: string;
    orgWebsite?: string;
    jobTitle?: string;
    linkedin?: string;
    expertise?: string;
    aboutMe: string;
}

interface SignUpFormProps {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    inputs: SignUpProps;
}

const SignUpForm = ({ handleChange, inputs }: SignUpFormProps) => {
    const { user } = useAuth0();
      

    return (
        <Form>
            <div className="grid grid-cols-2 gap-x-6 px-1">
                            <FormGroup>
                                <Label for="firstName" className='text-gray-170 font-semibold text-14p'>
                                First Name
                                </Label>
                                <Input
                                id="firstName"
                                name="firstName"
                                placeholder="First Name"
                                required
                                bsSize="sm"
                                value={inputs.firstName}
                                onChange={handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="lastName" className='text-gray-170 font-semibold text-14p'>
                                Last Name
                                </Label>
                                <Input
                                id="lastName"
                                name="lastName"
                                placeholder="Last Name"
                                bsSize="sm"
                                value={inputs.lastName}
                                onChange={handleChange}
                                />
                            </FormGroup>
                        </div>
                        <div className="mt-2 grid grid-cols-2 gap-x-6 px-1">
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
                                value={user?.email}
                                onChange={handleChange}
                                disabled
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="organization" className='text-gray-170 font-semibold text-14p'>
                                Organization
                                </Label>
                                <Input
                                id="organization"
                                name="organization"
                                placeholder="Organization Name"
                                bsSize="sm"
                                value={inputs.organization}
                                onChange={handleChange}
                                />
                            </FormGroup>
                        </div>
                        <div className="mt-2 grid grid-cols-2 gap-x-6 px-1">
                        
                            <FormGroup className='flex flex-col'>
                                <Label for="orgType" className='text-gray-170 font-semibold text-14p'>
                                Organization Type
                                </Label>
                                <StyledInput
                                placeholder={inputs.orgType}
                                className='h-full text-gray-500 text-14p'
                                bsSize="sm"
                                type='select'
                                name='orgType'
                                value={inputs.orgType}
                                onChange={handleChange}
                                >
                                    {ORG_TYPE_OPTS.length > 0 && ORG_TYPE_OPTS.map((element, index) => (
                                        <option value={element.value} className='text-gray-700'
                                        key={index}>
                                            {element.name}
                                        </option>
                                    ))}
                                </StyledInput>
                            </FormGroup>
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
                                value={inputs.orgWebsite}
                                onChange={handleChange}
                                />
                            </FormGroup>
                        </div>
                        <div className="mt-2 grid grid-cols-2 gap-x-6 px-1">
                            <FormGroup>
                                <Label for="jobTitle" className='text-gray-170 font-semibold text-14p'>
                                Job Title
                                </Label>
                                <Input
                                id="jobTitle"
                                name="jobTitle"
                                placeholder="Enter Job Title"
                                bsSize="sm"
                                value={inputs.jobTitle}
                                onChange={handleChange}
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
                                name='expertise'
                                value={inputs.expertise}
                                onChange={handleChange}
                                >
                                    {EXPT_TYPE_OPTS.length > 0 && EXPT_TYPE_OPTS.map((element, index) => (
                                        <option value={element.value} className='text-gray-700'
                                        key={index}
                                        >
                                            {element.name}
                                        </option>
                                    ))}
                                </StyledInput>
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
                                value={inputs.linkedin}
                                onChange={handleChange}
                                />
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
                                value={inputs.aboutMe}
                                onChange={handleChange}
                                />
                            </FormGroup>
                        </div>
        </Form>
    );
};

const SignupPage = () => {
    const [inputs, setInputs] = useState<SignUpProps>({
        firstName: '',
        lastName: '',
        email: '',
        organization: '',
        orgType: '',
        orgWebsite: '',
        jobTitle: '',
        linkedin: '',
        expertise: '',
        aboutMe: '',
    });


    const { handleSubmit, loading, error } = useSubmitForm<FormData>(registerAPI);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

    const onSubmit = () => {
        console.log('Submit', inputs)
        // TODO: Use the useSubmitForm hook here
    }

  return (
    <>
        <Navbar />
        <div className="h-screen w-screen flex items-center justify-center">
            <div className="w-1/2 h-full bg-brand flex flex-col align-items justify-center text-white p-4 gap-y-14">
                <div className='text-4xl font-bold text-center'>
                    FRREDDS
                </div>
                <div className='flex items-center justify-center'>
                    <img src={logo} alt="FREDDSS Logo" className='h-20' />
                </div>
                <div className='text-center font-bold text-xl'>
                    Forest Resource and Renewable Energy Decision Support System
                </div>
            </div>
            <div className="w-1/2 h-full flex flex-col items-center justify-center text-white p-4">     
            <div className="w-80per max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 h-85per mt-4 flex flex-col items-center justify-between gap-y-3">
                <div className="text-xl font-bold text-brand leading-7 text-gray-900 text-center">
                Complete Account Details to Continue
                </div>
                <div className="mt-1 text-sm leading-6 text-gray-600 text-center">
                Enter your details below to access the FRREDSS Dashboard.
                </div>
                <div className="max-h-75per overflow-y-auto mt-4 w-full">
                <SignUpForm handleChange={handleChange} inputs={inputs} />
                </div>
                <div className='flex items-center justify-center mt-3'>
                <StyledButton onClick={onSubmit}>Submit</StyledButton>
                </div>
                <div className='text-gray-500 mt-1 text-12p'>
                    By clicking continue you agree to our <span>
                        <Link 
                            to={''} 
                            className='text-12p'
                            target="_blank"
                            rel="noopener noreferrer"
                        >Terms of Service</Link>
                        </span> and <span>
                        <Link 
                            to={URL_PRIVACY_POLICY} className='text-12p'
                            target="_blank"
                            rel="noopener noreferrer"
                        >Privacy Policy
                        </Link></span> 
                </div>
            </div>
            </div>
        </div>
    </>
  );
};

export default SignupPage;

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
