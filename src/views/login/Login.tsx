import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import './login.css'
import { login } from '../../store/auth/action';
import type { Dispatch } from 'redux';
import { useNavigate, useSearchParams } from 'react-router-dom';

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};
//登录跳转

const Login: React.FC = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const [search] = useSearchParams();
    const redirect = search.getAll("redirect")[0] || "/admin";
    console.log(redirect);

    // 定义回调方法
    const callback = () => {
        navigate(redirect);
    }
    const onFinish = (values: any) => {
        // console.log('Success:', values);56
        dispatch(login({ name, password }, callback));
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
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
                    <Input placeholder='用戶名' value={name} onChange={e => setName(e.target.value)} />
                </Form.Item>

                <Form.Item<FieldType>
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password placeholder='密碼' value={password} onChange={e => setPassword(e.target.value)} />
                </Form.Item>

                <Form.Item >
                    <Button type="primary" htmlType="submit" block>
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>

    )
}

export default Login;