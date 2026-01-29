const StyledButton = ({ children, disabled, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type="button"
      className={`cursor-pointer w-full ${
        disabled ? "bg-[#E8DEF8] text-black" : "bg-[#512DA8] text-white"
      }  focus:ring-4  font-medium rounded-[13px] text-sm px-5 py-2.5 me-2 mb-2`}
    >
      {children}
    </button>
  );
};

export default StyledButton;
