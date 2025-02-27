// Context/ExternalLayerContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  ReactNode
} from 'react';

interface ExternalLayerContextType {
  externalLayers: string[];
  setExternalLayers: (layers: string[]) => void;
  setMapLayerLoading: (isLoading: boolean) => void;
  mapLayerLoading: boolean;
}

const ExternalLayerContext = createContext<ExternalLayerContextType | null>(
  null
);

interface ExternalLayerProviderProps {
  children: ReactNode;
}

export const ExternalLayerProvider: React.FC<ExternalLayerProviderProps> = ({
  children
}) => {
  const [externalLayers, setExternalLayers] = useState<string[]>(['almondsCA', 'pistachiosCA', 'pomegranatesCA']);
  const [mapLayerLoading, setMapLayerLoading] = useState<boolean>(false);

  const value = useMemo<ExternalLayerContextType>(
    () => ({
      externalLayers,
      setExternalLayers,
      setMapLayerLoading,
      mapLayerLoading
    }),
    [externalLayers, setExternalLayers, setMapLayerLoading]
  );

  return (
    <ExternalLayerContext.Provider value={value}>
      {children}
    </ExternalLayerContext.Provider>
  );
};

export const useExternalLayerContext = (): ExternalLayerContextType => {
  const context = useContext(ExternalLayerContext);
  if (context === null) {
    throw new Error(
      'useExternalLayerContext must be used within an ExternalLayerProvider'
    );
  }
  return context;
};
