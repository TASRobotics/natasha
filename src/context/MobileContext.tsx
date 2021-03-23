import React, { useRef, useEffect, useState } from 'react';

type MobileContextProps = {
  mobile: boolean;
};

export const MobileContext = React.createContext<MobileContextProps>({
  mobile: false
});

const MobileContextProvider = ({
  children
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  const mobileRef = useRef<boolean>(false);
  const [mobile, setMobile] = useState<boolean>(false);

  const updateDimensions = () => {
    if (window.innerWidth < 1200 && !mobileRef.current) {
      mobileRef.current = true;
      setMobile(true);
    } else if (window.innerWidth >= 1200 && mobileRef.current) {
      mobileRef.current = false;
      setMobile(false);
    }
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  return (
    <MobileContext.Provider value={{ mobile: mobile }}>
      {children}
    </MobileContext.Provider>
  );
};

export { MobileContextProvider };
