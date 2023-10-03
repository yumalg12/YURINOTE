import "./Button.css";

const Button = ({value, type, onClick}) => {
    const btnType = ["positive", "negative", "warning"].includes(type)? type: "default";
    return <button 
    className={["Button", `Button_${btnType}`].join(' ')} 
    onClick={onClick}>{value}</button>;
};

Button.defaultProps = {
    type: "default",
};
export default Button;