import { FC, ReactNode } from 'react';
import { UserDetailsProvider } from './UserDetailsContext';
import { Auth0Provider } from '@auth0/auth0-react';

type ProviderComponent = FC<{ children: ReactNode }>;

export const combineComponents = (...components: ProviderComponent[]): ProviderComponent => {
  return components.reduce(
    (AccumulatedComponents, CurrentComponent) => {
      return ({ children }: { children: ReactNode }) => (
        <AccumulatedComponents>
          <CurrentComponent>{children}</CurrentComponent>
        </AccumulatedComponents>
      );
    },
    ({ children }: { children: ReactNode }) => <>{children}</>,
  );
};

const Auth0ProviderWrapper: ProviderComponent = ({ children }) => (
  <Auth0Provider
    domain={`${process.env.REACT_APP_AUTH0_DOMAIN}`}
    clientId={`${process.env.REACT_APP_AUTH0_CLIENT_ID}`}
    authorizationParams={{
      redirect_uri: `${process.env.REACT_APP_AUTH0_REDIRECT_URI}`,
      audience: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/`,
      // scope: "read:current_user update:current_user_metadata"
    }}
  >
    {children}
  </Auth0Provider>
);

const providers = [
  Auth0ProviderWrapper,
  UserDetailsProvider,
];

export const AppContextProvider = combineComponents(...providers);
