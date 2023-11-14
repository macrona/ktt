import { UserType } from "../../utils/types";
import { login as loginApi } from "../../api/auth";
import { SET_USER, SET_TOKEN } from "../actionType";
import { Dispatch } from 'redux';

export function login(data: UserType, callback?: Function) {
    return (dispatch: Dispatch) => {
        loginApi(data)
            .then((res) => {
                console.log(res)
                if (res.status === 200) {
                    sessionStorage.setItem("token", res.data.token)
                    sessionStorage.setItem("userinfo", JSON.stringify(res.data.user))
                    dispatch({ type: SET_TOKEN, payload: res.data.token });
                    dispatch({ type: SET_USER, payload: res.data.user });
                    // 实现跳转
                    console.log(sessionStorage)
                    if (callback) { callback() };
                }
            })
    }
}