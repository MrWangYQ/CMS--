<template>
    <div class="login_box" id="login">
        <form action="" class="login_form" >
            <div class="login_title"><h1>login admin</h1></div>
            <p>
                <label for="">用户名：</label><input type="text" v-model.trim='user_name' placeholder="用户名">
            </p>
            <p>
                <label for="">密　码：</label><input type="password" v-model.trim='user_pwd' placeholder="用户密码">
            </p>
            <p>
                <button type="button" @click='login_btn'>登录</button>
                <router-link to='/resgister'>
                    <button type="button" @click='resgister_btn'>注册</button>
                </router-link>
            </p>
        </form>
    </div>
</template>
<script>
    import {setCookie} from '../../utils/utils.js'
    export default {
        name: 'Login',
        data () {
            return {
                user_name: '',
                user_pwd: ''
            }
        },
        mounted () {
            particlesJS.load('login', '@/../server/data/particles.json');
        },
        methods: {
            login_btn () {
                const pathaddr = this.$route.query.form || '/admin';
                console.log(pathaddr);
                if (this.user_name !== '' && this.user_pwd !== '') {
                    this.$store.commit('switch_loading', true);
                    this.$http.post('/admin/loginUser',{
                        user_name: this.user_name,
                        user_pwd: this.user_pwd
                    })
                    .then((res) => {
                        if (res.data.code == 1) {
                            console.log(res.data.authorization, 'res')
                            window.localStorage.authorization = res.data.authorization;
                            console.log(window.localStorage.authorization, 'window')
                            this.$store.commit('switch_loading', false);
                            setCookie('token', res.data.token);
                            this.$store.commit('get_login_user', this.user_name);
                            this.$router.push({path: pathaddr})
                        } else {
                            this.$store.commit('switch_loading', false);
                            this.$alert(res.data.message)
                        }
                    })
                } else {
                    this.$alert('请输入账号')
                }
            },
            resgister_btn () {
                this.$router.push({name: 'Resgister'})
            }
        }
    }
</script>
<style scoped>
    .login_box {
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-image: url(../../../static/image/bg2.jpg);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        position: relative; 
    }
    .login_form {
        width: 5rem;
        height: 5rem;
        background: rgba(0, 0, 0, .5);
        box-shadow: 0 0 2px #fff;
        border-radius: .1rem;
        position: absolute;
        left: 50%;
        top: 50%; 
        margin-left: -2.5rem;
        margin-top: -2.5rem;
    }
    .login_title {
        text-align: center;
        line-height: 1.5rem;
        color: #fff;
        font-size: .2rem;
        font-family: "楷体"
    }
    .login_form p {
        width: 84%;
        height: .5rem;
        margin: 0rem 7% 0.6rem 7%; 
        display: -webkit-flex;
    }
    .login_form p label {
        width: 25%;
        line-height: .5rem;
        font-size: .2rem;
        color: #fff;
        text-align: right;
    }
    .login_form p input {
        flex: 1;
        font-size: .18rem;
        border: 1px solid #fff;
        border-radius: .1rem;
        padding-left: .1rem; 
        margin-left: .2rem;
    }
    .login_form p a {
        width: 100%;
        height: 100%;
        display: inline-block;
    }
    .login_form p a button {
        width: 75%;
        height: .5rem;
        margin: 0 7%;
        border: none;
        color: #fff;
        font-size: .2rem;
        border-radius: .1rem;
        background: rgb(1, 176, 186);
        outline: none;
    }
    .login_form p button {
        width: 75%;
        height: .5rem;
        margin: 0 7%; 
        border: none;
        color: #fff;
        font-size: .2rem;
        border-radius: .1rem;
        background: rgb(1, 176, 186);
        outline: none;
    }
    .login_form p:last-child {
        width: 92%;
    }
</style>
