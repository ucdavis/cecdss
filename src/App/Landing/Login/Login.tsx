import React, { useState } from 'react'
import Navbar from '../Shared/Navbar'
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { useSubmitForm } from '../../../Hooks/Form';
import { loginAPI } from '../../../API';
import { StyledButton } from '../Register/Register';
import { Link } from 'react-router-dom';
import { URL_REGISTER_PAGE } from '../../../Resources/Constants';
import triangle from '../../../Resources/Images/triangle.svg'
import triangleTree from '../../../Resources/Images/triangleTreeCrop.svg'

interface ErrorProps {
  [key: string]: boolean;
}

interface LoginProps {
  email: string;
  password: string;
}

interface LoginFormProps {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    inputs: LoginProps;
    errors: ErrorProps
}

const LoginForm = ({ handleChange, inputs, errors }: LoginFormProps) => {
  return (
    <Form className='w-full'>
      <FormGroup>
          <Label for="email" className='text-gray-170 font-semibold text-14p'>
          Email ID
          </Label>
          <Input
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            type="email"
            value={inputs.email}
            onChange={handleChange}
            invalid={!!errors.email}
          />
      </FormGroup>
      <FormGroup>
          <Label for="password" className='text-gray-170 font-semibold text-14p'>
          Password
          </Label>
          <Input
          id="password"
          name="password"
          placeholder="Enter New Password"
          required
          type='password'
          value={inputs.password}
          onChange={handleChange}
          />
      </FormGroup>
    </Form>
  );
};

const Login = () => {
  const [inputs, setInputs] = useState<LoginProps>({
      email: '',
      password: '',
  });
  const [errors, setErrors] = useState({ email: false, password: false });

  const { handleSubmit, loading, error } = useSubmitForm<FormData>(loginAPI);


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
        <div className="h-screen w-screen flex items-center justify-center relative">
          <div className="w-400p max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 h-auto mt-6 flex flex-col items-center justify-center gap-y-6">
            <div className='w-full'>
              <div className="text-xl font-bold text-brand leading-7 text-gray-900 text-center">
              Login
              </div>
              <div className="mt-1 text-sm leading-6 text-gray-600 text-center">
              Enter your email to log in to your account
              </div>
            </div>
            <div className='w-full mt-2'>
              <LoginForm handleChange={handleChange} inputs={inputs} errors={errors} />
            </div>
            <div>
              <StyledButton onClick={onSubmit}>Login</StyledButton>
            </div>
            <div className="flex items-center justify-center mt-2">
                    <Link to={URL_REGISTER_PAGE} className='text-14p text-gray-700'>
                        Don't have an account? Register
                    </Link>
                </div>
          </div>
          <div className='absolute bottom-0' style={{ left: '-8%' }}>
            <img src={triangle} alt="FREDDS Logo" className='h-full' />
          </div>
          <div className='absolute top-0 h-full right-0'>
            <img src={triangleTree} alt="FREDDS Logo" className='h-full' />
          </div>
        </div>
    </>
  )
}

export default Login