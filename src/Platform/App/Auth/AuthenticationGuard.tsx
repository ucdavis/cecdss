import { withAuthenticationRequired } from "@auth0/auth0-react";
import React, { ComponentType } from "react";
import Loader from "../../../Shared/Loader";

interface AuthenticationGuardProps {
  component: ComponentType<any>;
}

export const AuthenticationGuard: React.FC<AuthenticationGuardProps> = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div className="w-screen h-screen flex items-center justify-center">
        <Loader />
      </div>
    ),
  });

  return <Component />;
};
