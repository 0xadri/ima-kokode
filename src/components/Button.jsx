const Button = ({ children, ...props }) => {
  return (
    <button className="someclasses" {...props}>
      {children}
    </button>
  );
};

export default Button;
