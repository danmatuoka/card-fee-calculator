import { AxiosError } from "axios";
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
  days?: number[] | boolean;
}

interface IValueContext {
  onSubmit: (data: IFormInput) => Promise<void>;
  values?: Array<number>;
  keys?: string[];
  loading: boolean;
  error: boolean;
  timeout: boolean;
}

export const ValueContext = createContext({} as IValueContext);

const ValueProvider = ({ children }: IValueProviderProps) => {
  const [values, setValues] = useState([0, 0, 0, 0]);
  const [keys, setKeys] = useState<string[]>(["1", "15", "30", "90"]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [timeout, setTimeout] = useState(false);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setLoading(true);
    setTimeout(false);
    setError(false);

    data.days == false
      ? (data = {
          amount: data.amount,
          installments: data.installments,
          mdr: data.mdr,
        })
      : data;

    try {
      const response = await api.post("", data);
      setValues(Object.values(response.data));
      setKeys(Object.keys(response.data));
    } catch (error) {
      const err = error as AxiosError;
      console.log(err);
      if (err.response?.status == 408) {
        setTimeout(true);
      }
      if (err.response?.status == 500) {
        setError(true);
      }
    }
    setLoading(false);
  };

  return (
    <ValueContext.Provider
      value={{ onSubmit, values, keys, loading, error, timeout }}
    >
      {children}
    </ValueContext.Provider>
  );
};

export default ValueProvider;

export const useValueContext = () => useContext(ValueContext);
