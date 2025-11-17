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
  selectedFacilityIndex: number | null;
  setSelectedFacilityIndex: (index: number | null) => void;
  hoveredFacilityIndex: number | null;
  setHoveredFacilityIndex: (index: number | null) => void;
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
  const [selectedFacilityIndex, setSelectedFacilityIndex] = useState<number | null>(null);
  const [hoveredFacilityIndex, setHoveredFacilityIndex] = useState<number | null>(null);

  const value = useMemo<ExternalLayerContextType>(
    () => ({
      externalLayers,
      setExternalLayers,
      setMapLayerLoading,
      mapLayerLoading,
      selectedFacilityIndex,
      setSelectedFacilityIndex,
      hoveredFacilityIndex,
      setHoveredFacilityIndex
    }),
    [externalLayers, mapLayerLoading, selectedFacilityIndex, hoveredFacilityIndex]
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
