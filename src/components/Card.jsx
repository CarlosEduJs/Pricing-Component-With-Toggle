export const Card = ({
  type,
  price,
  storage,
  userAlloweds,
  sendUp,
  isSelected,
  onClick,
  onKeyDown,
}) => {
  return (
    <div
      className={`flex flex-col gap-4 py-8 px-5 transition-all ${isSelected ? "bg-primary-gradient scale-110" : "bg-white"} hover:scale-110 rounded-md shadow-md min-w-[250px] max-md:w-[60%] max-sm:w-[85%] text-center cursor-pointer outline-blue-500`}
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={0}
    >
      <h1 className={`text-sm font-bold ${isSelected ? "text-white" : "text-neutral-grayish-blue"}`}>{type}</h1>
      <h2 className={`text-5xl ${isSelected ? "text-white" : "text-neutral-dark-grayish-blue"} font-bold`}>
        ${price}
      </h2>
      <div className="flex flex-col">
        <span className={`border-y border-neutral-200 py-3 text-xs font-bold ${isSelected ? "text-white" : "text-neutral-dark-grayish-blue/70"}`}>
          {storage} Storage
        </span>
        <span className={` py-3 text-xs font-bold ${isSelected ? "text-white" : "text-neutral-dark-grayish-blue/70"}`}>
          {userAlloweds} Users Alloweds
        </span>
        <span className={`border-y border-neutral-200 py-3 text-xs font-bold ${isSelected ? "text-white" : "text-neutral-dark-grayish-blue/70"}`}>
          Send up to {sendUp} GB
        </span>
      </div>
      <button className={`py-2 text-xs tracking-widest rounded-md transition-all font-bold ${isSelected ? "bg-white text-primary-gradient-end hover:bg-transparent hover:border hover:border-white hover:text-white" : "bg-primary-gradient hover:border hover:border-primary-gradient-end text-white hover:bg-none hover:text-primary-gradient-end"}`}>Learn More</button>
    </div>
  );
};
