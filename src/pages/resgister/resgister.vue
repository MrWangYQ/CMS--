<template>
    <div class="resgister_box" id="resgister">
        <form action="" class="resgister_form" >
            <div class="resgister_title"><h1>resgister admin</h1></div>
            <p>
                <label for="">用户名:</label><input type="text" v-model.trim='user_name' placeholder="名字">
            </p>
            <p>
                <label for="">密　码:</label><input type="password" v-model.trim='user_pwd' placeholder="密码">
            </p>
            <p class="again_pwd">
                <label for=""><span>输入密码:</span></label><input type="password" v-model.trim='again_pwd' placeholder="再次输入密码">
            </p>
            <p>
                <router-link to='/login'>
                    <button type="button">登录</button>
                </router-link>
                <button type="button" @click='resgister_btn'>注册</button>
            </p>
        </form>
    </div>
</template>
<script>
    export default {
        name: 'resgister',
        data () {
            return {
                user_name: '',
                user_pwd: '',
                again_pwd: ''
            }
        },
        mounted () {
            particlesJS.load('resgister', '../../../server/data/particles.json');
        },
        methods: {
            resgister_btn () {
                
                if (this.user_name !== '' && this.user_pwd !== '') {
                    const oldUserName = this.user_name;
                    const oldUserPwd = this.user_pwd;
                    if (oldUserName !== this.user_name && oldUserPwd !== this.user_pwd) {

                    }
                    this.$http.post('/admin/resgisterUser',{
                        user_name: this.user_name, 
                        user_pwd: this.user_pwd
                    })
                    .then((res) => {
                        console.log(res);
                        if (res.data.code == 1) {
                            this.$alert(res.data.message)
                            this.$router.push({name: 'Login'})
                        } else {
                            this.$alert(res.data.message)
                        }  
                    })
                }
            }
        }
    }
</script>
<style scoped>
    .resgister_box {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-image: url(../../../static/image/bg2.jpg);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        position: relative; 
    }
    .resgister_form {
        width: 5rem;
        height: 5rem;
        background: rgba(0, 0, 0, .5);
        box-shadow: 0 0 2px #fff;
        border-radius: .2rem;
        position: absolute;
        left: 50%;
        top: 50%; 
        margin-left: -2.5rem;
        margin-top: -2.5rem;
    }
    .resgister_title {
        text-align: center;
        line-height: 1.3rem;
        color: #fff;
        font-size: .2rem;
        font-family: "楷体"
    }
    .resgister_form p {
        width: 86%;
        height: .5rem;
        margin: 0rem 7% 0.4rem 7%;
        display: -webkit-flex;
    }
    .resgister_form p label {
        width: 25%;
        line-height: .5rem;
        font-size: .2rem;
        color: #fff;
        text-align: right;
    }
    .resgister_form p input {
        width: 80%;
        font-size: .18rem;
        border: 1px solid #fff;
        border-radius: .1rem;
        padding-left: .1rem; 
        margin-left: .2rem; 
    }
     .resgister_form p a {
        width: 100%;
        height: 100%;
        display: inline-block;
    }
    .resgister_form p a button {
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
    .resgister_form p button {
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
    .resgister_form p:last-child {
        width: 95%;
         margin-left: .2rem;  
        text-align: center;
    }
    /* .resgister_form .again_pwd span{
        font-size: .15rem;
    }  */
</style>
