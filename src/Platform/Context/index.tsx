import { ComponentType, ReactNode } from 'react';
import { SaveModelProvider } from "./saveModel";
import { ExternalLayerProvider } from './ExternalLayerContext';

type ProviderProps = { children: ReactNode };
type ProviderWithProps = [ComponentType<ProviderProps>, Record<string, unknown>?];

const CombineProviders = (providers: ProviderWithProps[]) => {
  return providers.reduce<ComponentType<ProviderProps>>(
    (AccumulatedProviders, [Provider, props = {}]) => {
      return ({ children }) => (
        <AccumulatedProviders>
          <Provider {...props}>{children}</Provider>
        </AccumulatedProviders>
      );
    },
    ({ children }) => <>{children}</>
  );
};

export const AllProviders: ComponentType<ProviderProps> = CombineProviders([
  [SaveModelProvider],
  [ExternalLayerProvider]
]);