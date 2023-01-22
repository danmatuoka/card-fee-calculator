import FormValues from "../FormValues";
import ValuesList from "../ValuesList";

const MainContainer = () => {
  return (
    <div className="flex justify-around border border-[#d1dce3] rounded w-[608px] h-[389px]">
      <FormValues />
      <ValuesList />
    </div>
  );
};

export default MainContainer;
