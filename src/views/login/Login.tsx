import React from 'react';
import { Button, Form, Input } from 'antd';

import './login.css'
const onFinish = (values: any) => {
    // console.log('Success:', values);56

};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const Login: React.FC = () => (
    <div className="login-form">
        <h2><span className='login-header'>CRM管理</span></h2>
        <Form
            name="basic"
            // labelCol={{ span: 8 }}
            // wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item<FieldType>
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input placeholder='用戶名' />
            </Form.Item>

            <Form.Item<FieldType>
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password placeholder='密碼' />
            </Form.Item>

            <Form.Item >
                <Button type="primary" htmlType="submit" block>
                    登录
                </Button>
            </Form.Item>
        </Form>
    </div>

);

export default Login;