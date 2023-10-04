const Button = ({ children }) => {
  return (
    <button className="bg-[#C035A2] text-white hover:bg-secondary transition-all delay-100  w-full h-[50px] text-lg rounded-md font-medium">
      {children}
    </button>
  );
};

export default Button;
