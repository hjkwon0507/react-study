// import styles from './Button.module.css';

function Button({onClick, text}) {
  return <button onClick={onClick}>{text}</button>
}

export default Button;