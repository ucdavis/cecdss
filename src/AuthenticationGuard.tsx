import { withAuthenticationRequired } from "@auth0/auth0-react";
import React, { ComponentType } from "react";
import Loader from "./Shared/Loader";
import { Navigate } from "react-router-dom";
import { useUserDetailsContext } from "./Context/UserDetailsContext";

interface AuthenticationGuardProps {
  component: ComponentType<any>;
  name: string;
}

export const AuthenticationGuard: React.FC<AuthenticationGuardProps> = ({ component, name }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div className="w-screen h-screen flex items-center justify-center">
        <Loader />
      </div>
    ),
  });

  const { userDetails } = useUserDetailsContext();

  // if (name !== 'register' && !userDetails?.is_registration_complete) {
  //     return <Navigate to="/pages/register" />;
  //   }

  return <Component />;
};
