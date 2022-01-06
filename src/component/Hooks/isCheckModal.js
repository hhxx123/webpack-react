import React from "react";
import Modal from "./modal";

function isCheckModal(props) {
  const {isShowModal, modalTitle, currentData, checkModalCancel} = props;
  return (
    <>
      <Modal
        modalTitle={modalTitle}
        isShowModal={isShowModal}
        modalCancel={checkModalCancel}
      >
        <p>内容：{currentData.content}</p>
        <p>时间：{(currentData.id)}</p>
        <p>完成状态：{currentData.complete ? "已完成":"待完成"}</p>
      </Modal>
    </>
  )
}

export default isCheckModal;