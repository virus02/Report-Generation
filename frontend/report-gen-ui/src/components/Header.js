import Button from './Button';

const Header = ({ onAdd, showAdd }) => {
    return(
        <header>
            <h1> Report Generator </h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close': 'Add'} onClick={onAdd} />
        </header>
    )
}

export default Header;