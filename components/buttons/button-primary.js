import styles from './button-primary.module.scss';

const ButtonPrimary = (props) => {

    const handleClick = () => {
        props.onClick ? props.onClick() : null;
    }

    return (
        <a  
        href={props.link}
        className={props.isDisabled ? styles.disabled : styles.ButtonPrimary}
        download={props.download === true}
        onClick={handleClick} 
        >
            {/* if an icon prop is passed, display it */}
            {props.icon && <img src={props.icon} alt='Button Icon' width='30' height='30'/>}
            {/* display the content passed as a prop i.e. - what goes inside the button? */}
            {props.content}
        </a>
    )
}

export default ButtonPrimary;