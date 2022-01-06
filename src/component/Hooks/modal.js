import React from "react";
import styles from "./index.less";
import {Modal} from "antd";

function ModalIndex(props) {
  const {isShowModal, modalTitle, children,modalCancel} = props;
  return (
    <>
      {isShowModal &&
      <Modal
        title={modalTitle}
        visible={isShowModal}
        onCancel={modalCancel}
      >
        {children}
      </Modal>
      }
    </>
  )
}

export default ModalIndex