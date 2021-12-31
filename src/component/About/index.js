import React from "react";
import 'antd/dist/antd.css';
import {Select, Form, Input, Checkbox, Button, Row, Col} from "antd";
import AbstractForm from "../common/Form";

const Option = Select.Option;

export default class App extends AbstractForm {
  formContent = () => {
    return <Row>
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}>
        <Input/>
      </Form.Item>
    </Row>
  }
}






