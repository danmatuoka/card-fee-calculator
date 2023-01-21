import { useValueContext } from "../../contexts/ValueContext";

const ValuesList = () => {
  const { values, keys } = useValueContext();

  return (
    <div>
      {keys!.map((elem) => (
        <div key={elem}>
          <p>{elem == "1" ? "Amanhã:" : `Em ${elem} dias:`}</p>
        </div>
      ))}
      {values!.map((value, index) => (
        <div key={index}>
          <p>
            {value.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ValuesList;
