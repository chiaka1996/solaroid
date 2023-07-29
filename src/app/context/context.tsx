import { createContext, useState, useContext, ReactNode, useEffect } from "react";

type barContextType = {
    bar: boolean;
    openBar: () => void;
    closeBar: () => void;
}

const barContextDefaultValues: barContextType = {
    bar: false,
    openBar: () => {},
    closeBar: () => {}
}

const BarContext = createContext<barContextType>(barContextDefaultValues);

export function BarState() {
    return useContext(BarContext);
  }

type Props = {
    children: ReactNode;
  };

  export const State = ({ children }: Props) => {

    const [bar, setBar] = useState<boolean>(false)

    const openBar = () => {
        setBar(true);
      };
    
      const closeBar = () => {
        setBar(false);
      };

      const value = {
        bar,
        openBar,
        closeBar
      }  
      
      return (
        <>
          <BarContext.Provider value={value}>{children}</BarContext.Provider>
        </>
      );
  }