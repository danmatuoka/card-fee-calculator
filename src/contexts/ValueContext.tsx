import React, {
  createContext,
  useState,
  ReactNode,
  SetStateAction,
  Dispatch,
  useReducer,
  useContext,
} from "react";
import { SubmitHandler } from "react-hook-form";
import { api } from "../services";

interface IValueProviderProps {
  children: ReactNode;
}

interface IFormInput {
  amount: string;
  installments: string;
  mdr: string;
}

interface IValueContext {
  onSubmit: (data: IFormInput) => Promise<void>;
  values?: Array<number>;
  keys?: string[];
}

export const ValueContext = createContext({} as IValueContext);

const ValueProvider = ({ children }: IValueProviderProps) => {
  const [values, setValues] = useState([0, 0, 0, 0]);
  const [keys, setKeys] = useState<string[]>(["1", "15", "30", "90"]);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const response = await api.post("/", data);
      setValues(Object.values(response.data));
      setKeys(Object.keys(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ValueContext.Provider value={{ onSubmit, values, keys }}>
      {children}
    </ValueContext.Provider>
  );
};

export default ValueProvider;

export const useValueContext = () => useContext(ValueContext);
