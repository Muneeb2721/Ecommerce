const Button = ({
  text = "",
  border = "",
  borderColor = "",
  paddingX = "",
  paddingY = "",
  textSize = "",
  textColor = "",
  bgColor = "",
  hoverBgColor = "",
  hoverTextColor = "",
  pointer = "",
  alignment = "",
  rounded = ""
 }) => {
  const classes = `${border} ${borderColor} ${paddingX} ${paddingY} ${textSize} ${textColor} ${bgColor} ${hoverBgColor} ${hoverTextColor} ${pointer} ${alignment} ${rounded} transition-colors duration-300`;
  
  return (
    <button className={classes}>
      {text}
    </button>
  );
};

export default Button;