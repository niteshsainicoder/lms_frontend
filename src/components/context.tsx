'use client';
import { createContext, useContext, useEffect, useState } from "react";

type EditPopUpType = {
  Id: string;
  Method:string;
};

type Props = {
  popUpMessage: string;
  setPopUpMessage: React.Dispatch<React.SetStateAction<string>>;
  EditPopUp: EditPopUpType;
  setEditPopUp: React.Dispatch<React.SetStateAction<EditPopUpType>>;
};

const contexts = createContext<Props | null>(null);

export default function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [popUpMessage, setPopUpMessage] = useState<string>("");
  const [EditPopUp, setEditPopUp] = useState<EditPopUpType>({
    Id: "",
 Method:''
  });

  useEffect(() => {
    if (popUpMessage) {
      const timer = setTimeout(() => setPopUpMessage(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [popUpMessage]);

  return (
    <contexts.Provider
      value={{
        popUpMessage,
        setPopUpMessage,
        EditPopUp,
        setEditPopUp,
      }}
    >
      {children}
    </contexts.Provider>
  );
}

export const useContexts = () => {
  const context = useContext(contexts);
  if (!context) {
    throw new Error("useContexts must be used within a Context Provider");
  }
  return context;
};
