import { useValueContext } from "../../contexts/ValueContext";
import InternalError from "../InternalError";
import Loading from "../Loading";
import Timeout from "../Timeout";

const ValuesList = () => {
  const { values, keys, loading, error, timeout } = useValueContext();

  if (loading) return <Loading />;

  if (timeout) return <Timeout />;

  if (error) return <InternalError />;

  return (
    <div className="flex flex-col bg-[#D1DCE32E] w-2/5 p-8">
      <p className="font-source font-bold italic text-base text-[#3D75BB] ">
        VOCÊ RECEBERÁ:
      </p>
      <hr className="border-t-2 border-[#5D9CEC] opacity-30"></hr>
      <div className="flex">
        <div className="pt-3 pr-1">
          {keys!.map((elem) => (
            <div className="pt-5" key={elem}>
              <p className="value-preview">
                {elem == "1" ? "Amanhã:" : `Em ${elem} dias:`}
              </p>
            </div>
          ))}
        </div>
        <div className="pt-3">
          {values!.map((value, index) => (
            <div className="pt-5" key={index}>
              <p className="value-preview font-bold">
                {value.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValuesList;
