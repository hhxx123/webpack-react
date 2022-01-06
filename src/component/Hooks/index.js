//npx 和 npm 区别
//yarn start
//fast-click
//rem font-size
//props 谁使用 谁提供
//redux

import React, {useState, useCallback, useEffect} from "react";
import 'antd/dist/antd.css';
import MyHeader from "./header";
import AddInput from "./addInput";
import styles from "./index.less";
import TodoList from "./todolist"
import IsCheckModal from "./isCheckModal";
import EditModal from "./editModal";

function Hooks(props) {
  const [isInputShow, setIsInputShow] = useState(false),
    [todoList, setTodoList] = useState([]),
    [isShowCheckModal, setIsShowCheckModal] = useState(false),
    [isShowEditModal,setIsShowEditModal] = useState(false),
    [currentData, setCurrentData] = useState({});

  useEffect(() => {//副作用要有明确的执行顺序
    const todoList = localStorage.getItem("todoList") ? JSON.parse(localStorage.getItem("todoList")) : []
    setTodoList(todoList);
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const openInput = () => {
    setIsInputShow(!isInputShow);
  }

  const addItem = useCallback((value) => {//useCallback 什么时候不合适
    const dataItem = {
      id: new Date().getTime(),
      content: value,
      complete: false
    };
    setTodoList((todoList) => [...todoList, dataItem]);

    setIsInputShow(false);
  }, [])

  const onCheck = useCallback((item)=>{
    setTodoList((todoList)=>todoList.map((i)=>{
      if(i.id === item.id){
        i.complete = !i.complete;
      }
      return i;
    }))
  },[])

  const openCheckModal = useCallback((currentData) => {
     setCurrentData(currentData);
     setIsShowCheckModal(true);
  }, [todoList])

  const deleteItem = useCallback((id)=>{
    setTodoList((todoList)=>todoList.filter(i=>i.id!==id));
  },[])

  const openEditModal = useCallback((currentData)=>{
    setCurrentData(currentData);
    setIsShowEditModal(true);
  },[])

  const editSubmit = useCallback((newData,id)=>{
    setTodoList((todoList)=>todoList.map((item)=>{
      if(item.id === id){
        item = newData
      }
      return item;
    }))
    setIsShowEditModal(false);
  },[])

  return (
    <div className={styles.hooksWrap}>
      <MyHeader onOpenInput={openInput}/>
      <AddInput isInputShow={isInputShow}
                addItem={addItem}
      />
      <TodoList todoList={todoList}
                onCheck={onCheck}
                checkModal={openCheckModal}
                deleteItem={deleteItem}
                editModal={openEditModal}/>
      <IsCheckModal
        modalTitle={"查看代办"}
        isShowModal={isShowCheckModal}
        currentData={currentData}
        checkModalCancel={()=>{setIsShowCheckModal(false)}}
      >
      </IsCheckModal>
      <EditModal
        modalTitle={"编辑代办"}
        isShowModal={isShowEditModal}
        currentData={currentData}
        editModalCancel={()=>{
          setIsShowEditModal(false)
        }}
        editSubmit={editSubmit}
      >

      </EditModal>

    </div>
  )
}

export default Hooks;