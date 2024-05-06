import { createContext, useContext, useState } from "react";

const Context = createContext()

export const RenderProvider = ({children}) => {
  const [render, setRender] = useState(false);
  const [end, setEnd] = useState(false);
  const [hasScroll, setHasScroll] = useState(false);

  return (
    <Context.Provider
      value={{
        render,
        setRender,
        end,
        setEnd,
        hasScroll,
        setHasScroll,
      }}
    >
      {children}
    </Context.Provider>
  );

}


export const useRender = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error("Context Issue!")
  }

  return context;
}