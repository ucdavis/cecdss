// Register

import { SubmitFormHookProps } from "../Hooks/Form";

export const registerAPI: SubmitFormHookProps = {
    url: '/api/register', 
    method: 'post'
}

export const loginAPI: SubmitFormHookProps = {
    url: '/api/login', 
    method: 'post'
}