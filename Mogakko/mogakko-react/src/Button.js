import styles from './Button.module.css';

function Button(props) {
  return(
    <div className={styles.state}>
      <button onClick={props.goodClick}>좋아요 👍🏻 : {props.good}</button>
      <button onClick={props.badClick}>싫어요 👎🏻 : {props.bad}</button>
      <button onClick={props.merryClick}>메리크리스마스 🎄 : {props.merry}</button>
    </div>
  )
}

export default Button;