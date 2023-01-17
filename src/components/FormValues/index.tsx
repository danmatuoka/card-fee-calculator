import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { KeyboardEvent } from "react";

interface IFormInput {
  amount: Number;
  installments: Number;
  mdr: Number;
}

const FormValues = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  const onKeyDownEnter = (event: KeyboardEvent<HTMLFormElement>) => {
    if (event.key === "Enter") {
      handleSubmit(onSubmit)(event);
    }
  };

  return (
    <div>
      <h2>Simule sua Antecipação</h2>
      <form onKeyDown={onKeyDownEnter}>
        <input {...register("amount")} />
        <input {...register("installments")} />
        <input {...register("mdr")} />
      </form>
    </div>
  );
};

export default FormValues;
