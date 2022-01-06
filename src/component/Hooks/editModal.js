import React ,{useRef} from "react";
import styles from "./index.less"
import Modal from "./modal";
import {Button} from "antd";

function EditModal(props) {
  const {isShowModal, currentData,editModalCancel,editSubmit} = props;
  const inputRef = useRef(currentData.content),
    checkRef = useRef(currentData.complete);
  const handleSave = ()=>{
    const inputValue = inputRef.current.value.trim(),checkValue=checkRef.current.checked;
    if(inputValue.length === 0){
      return false;
    }else{
      const newData = {
        content:inputValue,
        id:new Date().getTime(),
        complete:checkValue
      }
      editSubmit(newData,currentData.id)
    }
  }
  return (
    <>
      <Modal
        isShowModal={isShowModal}
        modalTitle={"编辑事件"}
        modalCancel={editModalCancel}
      >
        <input type="textarea" ref={inputRef} defaultValue={currentData.content}/>
        <input ref={checkRef} type="checkbox" defaultChecked={currentData.complete}/>
        <Button onClick={handleSave}>确定编辑</Button>
      </Modal>
    </>
  )
}

export default EditModal;