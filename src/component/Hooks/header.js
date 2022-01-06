import React from "react";
import styles from "./index.less";

function Header(props){
  const {onOpenInput} = props;
  return(
    <div className={styles.header}>
      <h1>事件代办</h1>
      <span className={styles.icon} onClick={onOpenInput}>&#43;</span>
    </div>
  )
}
export default Header;