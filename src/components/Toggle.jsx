export const Toggle = ({ currentType, setType }) => {
  const handleToggle = () => {
    setType(currentType === "annually" ? "monthly" : "annually");
  };

  return (
    <div className="flex items-center justify-between w-[230px]">
      <h1
        className={`text-sm font-bold ${
          currentType === "annually"
            ? "text-neutral-dark-grayish-blue"
            : "text-neutral-light-grayish-blue"
        }`}
      >
        Annually
      </h1>
      <div
        className="rounded-full bg-primary-gradient w-[55px] flex items-center h-[30px] px-1 cursor-pointer"
        onClick={handleToggle}
      >
        <div
          className={`bg-white rounded-full w-[27px] h-[90%] transition-transform ${
            currentType === "monthly" ? "translate-x-[22px]" : ""
          }`}
        ></div>
      </div>
      <h1
        className={`text-sm font-bold ${
          currentType === "monthly"
            ? "text-neutral-dark-grayish-blue"
            : "text-neutral-light-grayish-blue"
        }`}
      >
        Monthly
      </h1>
    </div>
  );
};
