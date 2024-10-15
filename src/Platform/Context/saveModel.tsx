import React, { createContext, useContext, useState, useMemo, ReactNode } from 'react';

export interface SaveModelContextType {
  linkCopied: boolean;
  updateLinkCopied: (val: boolean) => void;
}

const SaveModelContext = createContext<SaveModelContextType | null>(null);

interface SaveModelProviderProps {
  children: ReactNode;
}

export const SaveModelProvider: React.FC<SaveModelProviderProps> = ({ children }) => {
  const [linkCopied, setLinkCopied] = useState<boolean>(false);

  const updateLinkCopied = (val:boolean) => setLinkCopied(val);

  const value = useMemo<SaveModelContextType>(
    () => ({ linkCopied, updateLinkCopied }),
    [linkCopied]
  );

  return (
    <SaveModelContext.Provider value={value}>
      {children}
    </SaveModelContext.Provider>
  );
};

export const useSaveModel = (): SaveModelContextType => {
  const context = useContext(SaveModelContext);
  if (context === null) {
    throw new Error('useSaveModel must be used within a SaveModelProvider');
  }
  return context;
};
