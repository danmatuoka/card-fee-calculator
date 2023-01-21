import { useForm, SubmitHandler } from "react-hook-form";
import { KeyboardEvent, useContext } from "react";
import { api } from "../../services";
import { ValueContext } from "../../contexts/ValueContext";

interface IFormInput {
  amount: string;
  installments: string;
  mdr: string;
  days: number[];
}

const FormValues = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const { onSubmit } = useContext(ValueContext);

  const onKeyDownEnter = (event: KeyboardEvent<HTMLFormElement>) => {
    if (event.key === "Enter") {
      handleSubmit(onSubmit)(event);
    }
  };

  return (
    <div>
      <h2>Simule sua Antecipação</h2>
      <form onKeyDown={onKeyDownEnter}>
        <label>
          Informe o valor da venda *
          <input {...register("amount")} />
        </label>
        <label>
          Em quantas parcelas *
          <input {...register("installments")} />
        </label>
        <span>Máximo de 12 parcelas</span>
        <label>
          Informe o percentual de MDR *
          <input {...register("mdr")} />
        </label>
        <label>
          Amanhã
          <input type="checkbox" {...register("days")} value="1" />
        </label>
        <label>
          15 dias
          <input type="checkbox" {...register("days")} value="15" />
        </label>
        <label>
          30 dias
          <input type="checkbox" {...register("days")} value="30" />
        </label>
        <label>
          60 dias
          <input type="checkbox" {...register("days")} value="60" />
        </label>
        <label>
          90 dias
          <input type="checkbox" {...register("days")} value="90" />
        </label>
      </form>
    </div>
  );
};

export default FormValues;
