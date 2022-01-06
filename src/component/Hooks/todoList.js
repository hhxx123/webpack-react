import React from "react";
import styles from "./index.less";
import {Button,Checkbox} from "antd";

function TodoList(props) {
  const {todoList,onCheck,checkModal,deleteItem,editModal} = props;
  return (
    <>
      {todoList.length > 0 && todoList.map((item)=>{
        return  <li className={styles.todoItem} key={item.id}>
          <div className={styles.checkBox}>
            <Checkbox type={"checkbox"} checked={item.complete} onChange={()=>{onCheck(item)}}/>
          </div>
          <div style={{"textDecoration":item.complete ? "line-through":""}}>{item.content}</div>
          <div>
            <Button onClick={()=>{checkModal(item)}}>查看</Button>
            <Button onClick={()=>{editModal(item)}}>修改</Button>
            <Button onClick={()=>{deleteItem(item.id)}}>删除</Button>
          </div>
        </li>
      })}

    </>
  )

}

export default TodoList;