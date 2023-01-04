import React, { useState } from 'react'; 

interface IGlobalContextProps {
  pageLoading: boolean
  setPageLoading: (loading: boolean) => void; 
  columnWidth: number;
  contentPosition: number; 
  setContentPosition: (currentPosition: number) => void;
}

export const GlobalContext = React.createContext<IGlobalContextProps>({
  pageLoading: false,
  setPageLoading: () => { },
  columnWidth: 9,
  contentPosition: 27,
  setContentPosition: () => { },
})

export const GlobalContextProvider = (props: any) => {

  const [isLoading, setIsLoading] = useState(false); 
  const [contentPosition, setContentPosition] = useState(27)

  return (
    <GlobalContext.Provider 
      value={{
        pageLoading: isLoading,
        setPageLoading: setIsLoading,
        columnWidth: 9,
        contentPosition: contentPosition,
        setContentPosition: setContentPosition,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}