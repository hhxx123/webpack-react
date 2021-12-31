import React from "react";
import {Form, Button} from "antd";

export default class AbstractForm extends React.PureComponent {
  formRef = React.createRef();
  static defaultProps = {
    initialValues: {},
    method: () => {
      console.log("未定义方法")
    }
  }

  formContent = () => {
    return undefined;
  }

  handleCancel = () => {
    this.formRef.current.resetFields();
  }

  preProcessSubmitParams = (it)=>null;

  handleSubmit = () => {
    let params = {};
    let {method} = this.props;
    this.formRef.current.validateFields().then((value) => {
      let params = this.preProcessSubmitParams();
      method(params, (result) => {

      },error=>{

      })
    }).catch(errorInfo => {

    })
  }

  render() {
    let {initialValues} = this.props;
    return (
      <Form
        ref={this.formRef}
        initialValues={initialValues}
      >
        {this.formContent()}
        <Button type="primary" onClick={this.handleSubmit}>Submit</Button>
        <Button onClick={this.handleCancel}>Cancel</Button>
      </Form>
    )
  }

}

