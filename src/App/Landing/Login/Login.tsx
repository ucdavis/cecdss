import React, { useState } from 'react'
import Navbar from '../Shared/Navbar'
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { useSubmitForm } from '../../../Hooks/Form';
import { loginAPI } from '../../../API';
import { StyledButton } from '../Register/Register';
import { Link } from 'react-router-dom';
import { URL_REGISTER_PAGE } from '../../../Resources/Constants';

interface LoginProps {
  email: string;
  password: string;
}

interface LoginFormProps {
    handleChange: (name: string, val: string) => void;
    inputs: LoginProps;
}

const LoginForm = ({ handleChange, inputs }: LoginFormProps) => {
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
          type='email'
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

  const { handleSubmit, loading, error } = useSubmitForm<FormData>(loginAPI);


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
        <Navbar />
        <div className="h-screen w-screen flex items-center justify-center">
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
              <LoginForm handleChange={handleChange} inputs={inputs} />
            </div>
            <div>
              <StyledButton>Login</StyledButton>
            </div>
            <div className="flex items-center justify-center mt-2">
                    <Link to={URL_REGISTER_PAGE} className='text-14p text-gray-700'>
                        Don't have an account? Register
                    </Link>
                </div>
          </div>
        </div>
    </>
  )
}

export default Login