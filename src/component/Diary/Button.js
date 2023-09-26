import "./Button.css";

const Button = ({value, type, onClick, addSpan}) => {
    const btnType = ["positive", "negative", "warning"].includes(type)? type: "default";
    return <button 
    className={["Button", `Button_${btnType}`].join(' ')} 
    onClick={onClick}>{addSpan? (<span>{value}</span>): value}
    </button>;
};

Button.defaultProps = {
    type: "default",
    addSpan: false,
};
export default Button;