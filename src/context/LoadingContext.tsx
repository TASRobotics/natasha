import React, { useState } from 'react';

type LoadingContextProps = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

export const LoadingContext = React.createContext<LoadingContextProps>({
  loading: false,
  setLoading: (loading) => {}
});

const LoadingContextProvider = ({
  children
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <LoadingContext.Provider
      value={{ loading: loading, setLoading: setLoading }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export { LoadingContextProvider };
