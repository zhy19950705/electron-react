import React, { useState, useEffect, } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { withRouter } from "react-router-dom";
import './index.less';
const electron = window.require('electron');
const { ipcRenderer } = electron;

const Login = (props: any) => {
    useEffect(() => {
        console.log(props.history)
    })
    const { form: { getFieldDecorator } } = props;
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        
        props.form.validateFields((err: any, values: any) => {
            console.log({ err, values })
            ipcRenderer.send('login');
            // ipcRenderer.send('mini');
            props.history.push('/home')
        });
    }

    return (
        <div className="login">
            <Form className="login-form" onSubmit={handleSubmit}>
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Checkbox>Remember me</Checkbox>
                    <a className="login-form-forgot" href="">
                        Forgot password
            </a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
            </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
export default Form.create()(Login);