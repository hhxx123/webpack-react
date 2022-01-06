import React ,{useRef}from "react";
import styles from "./index.less";
import {Input, Button} from "antd";

function AddInput(props) {
  const {isInputShow,addItem} = props,
    inputRef = useRef();

  const submitValue = ()=>{
     const inputValue = inputRef.current.state.value.trim();
     if(!inputValue){
       return false;
     }else{
       addItem(inputValue);
       inputRef.current.value = "";
     }
  }
  return (
    <>
      {
        isInputShow &&
        <div className={styles.addInput}>
          <Input placeholder={"请输入"} ref={inputRef}/>
          <Button
            onClick={submitValue}
          >增加</Button>
        </div>
      }
    </>

  )
}

export default AddInput;