const Mock = require('mockjs')

const userinfo = Mock.mock('http://localhost:8888/api/login',{
    username: '@cname()',
    password: '@string("number", 10)',
})
export default userinfo;