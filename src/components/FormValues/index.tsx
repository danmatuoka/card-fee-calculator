import { useForm, SubmitHandler } from "react-hook-form";
import { KeyboardEvent, useContext } from "react";
import { ValueContext } from "../../contexts/ValueContext";

interface IFormInput {
  amount: string;
  installments: string;
  mdr: string;
  days?: number[];
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
    <div className="flex flex-col bg-white w-3/5 p-8">
      <h2 className="text-2xl font-source font-bold text-[#656565]">
        Simule sua Antecipação
      </h2>
      <form className="flex flex-col" onKeyDown={onKeyDownEnter}>
        <label className="label-input">
          Informe o valor da venda *
          <input
            className="input-field"
            {...register("amount", { required: true })}
          />
        </label>
        <label className="label-input">
          Em quantas parcelas *
          <input
            className="input-field"
            {...register("installments", { required: true, min: 1, max: 12 })}
          />
        </label>
        <span className="text-[10px] text-[#CECECE] font-semibold">
          Máximo de 12 parcelas
        </span>
        <label className="label-input">
          Informe o percentual de MDR *
          <input
            className="input-field"
            {...register("mdr", { required: true })}
          />
        </label>
        <p className="label-input">Periodo:</p>
        <div className="flex">
          <label className="label-checkbox">
            Amanhã
            <input type="checkbox" {...register("days")} value="1" />
          </label>
          <label className="label-checkbox">
            15 dias
            <input type="checkbox" {...register("days")} value="15" />
          </label>
          <label className="label-checkbox">
            30 dias
            <input type="checkbox" {...register("days")} value="30" />
          </label>
        </div>
        <div className="flex">
          <label className="label-checkbox">
            60 dias
            <input type="checkbox" {...register("days")} value="60" />
          </label>
          <label className="label-checkbox">
            90 dias
            <input type="checkbox" {...register("days")} value="90" />
          </label>
          <label className="label-checkbox">
            120 dias
            <input type="checkbox" {...register("days")} value="120" />
          </label>
        </div>
      </form>
    </div>
  );
};

export default FormValues;
