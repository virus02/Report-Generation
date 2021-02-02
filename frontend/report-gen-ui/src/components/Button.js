const Button = ({ color, text, onClick }) => {
    return(
        <button className='btn' onClick={onClick} style={{ 'backgroundColor': color }} >{text}</button>
    )
}

Button.defaultProps = {
    color: "stealblue"
};

export default Button;