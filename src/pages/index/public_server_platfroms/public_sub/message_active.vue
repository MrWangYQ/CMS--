<template>
    <div class="tab-content-msg">
            <el-row>
                <el-col>
                    <h4>基本信息</h4>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span='12' class="left-col left-margin-right">
                    <el-row>    
                        <el-col :span='12'>
                            <span>责任人</span>
                        </el-col>
                        <el-col :span='12' class="left-span">
                            <span>选择责任人</span>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span='12' class="right-margin-left">
                    <el-row>    
                        <el-col :span='12'>
                            <span>责任人单位</span>
                        </el-col>
                        <el-col :span='12' class="left-span">
                            <span>选择责任单位</span>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <el-row class="register-btn">
                <el-col :span="12" class="left-margin-right">
                    <el-button type='info'>信息按钮</el-button>
                </el-col>
                <el-col :span="12" class="right-margin-left">
                    <el-button type="info">成功按钮</el-button>
                </el-col>
            </el-row>
            <el-row class="input-write">
                <span>输入信息</span>
                <el-col>
                    <el-input v-model="input" placeholder="文本框内容"></el-input>
                </el-col>
            </el-row>
            <el-row>
                <el-col>
                    <el-row class="compile-img">
                        <el-col class="compile-top">
                            <span>
                                <b>请输入栏目名称</b>
                            </span>
                            <span style="color:#46C6CC;">编辑</span>
                            <span style="color:#46C6CC;">添加栏目</span>
                            <span style="color:#46C6CC;">预览</span>
                            <span style="color:#FF2929;">删除</span></span>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                            <img v-if="imageUrl" :src="imageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </el-row>
                    <el-row class="compile-bottom">
                        <el-col>
                            <el-col>
                                <span>
                                    图片格式：jpg\png
                                </span>
                                <span>图片大小</span>:
                                <span>小于200k</span>
                                <span>建议尺寸</span>:
                                <span>宽度大于800px</span>
                            </el-col>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <el-row>
                <el-col>
                    <el-row class="compile-img">
                        <el-col class="compile-top">
                            <span>
                                <b>请输入栏目名称</b>
                            </span>
                            <span style="color:#46C6CC;">编辑</span>
                            <span style="color:#46C6CC;">添加栏目</span>
                            <span style="color:#46C6CC;">预览</span>
                            <span style="color:#FF2929;">删除</span>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                            <img v-if="imageUrl" :src="imageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </el-row>
                    <el-row class="compile-bottom">
                        <el-col>
                            <el-col>
                                <span>
                                    图片格式：jpg\png
                                </span>
                                <span>图片大小</span>:
                                <span>小于200k</span>
                                <span>建议尺寸</span>:
                                <span>宽度大于800px</span>
                            </el-col>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <el-row>
                <el-col>
                    <el-row class="compile-img">
                        <el-col class="compile-top">
                            <span>
                                <b>请输入栏目名称</b>
                            </span>
                            <span style="color:#46C6CC;">编辑</span>
                            <span style="color:#46C6CC;">添加栏目</span>
                            <span style="color:#46C6CC;">预览</span>
                            <span style="color:#FF2929;">删除</span>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                            <img v-if="imageUrl" :src="imageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </el-row>
                    <el-row class="compile-bottom">
                        <el-col>
                            <el-col>
                                <span>
                                    图片格式：jpg\png
                                </span>
                                <span>图片大小</span>:
                                <span>小于200k</span>
                                <span>建议尺寸</span>:
                                <span>宽度大于800px</span>
                            </el-col>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <div class="present-message">
                <el-button type="success">保存并发布</el-button>
            </div> 
        </div>
</template>
<script>
    export default {
        data() {
            return {
                imageUrl: '',
                input: ''
            };
        },
        methods: {
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;
                if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            }
        }
    }  
</script>
<style scoped>
    .tab-content-msg {
        padding: 0 1%;
        background: #fff;
    }
    .tab-content h4 {
        height: .8rem;
        line-height: .8rem;
        font-family: MicrosoftYaHei;
        font-size: .18rem;
        color:#212121;
    }
    .left-col{
        color: #9e9e9e;
    }
    .left-margin-right{
        padding-right: .15rem;
    }
    .right-margin-left{
        padding-left: .1rem;
    }
    .left-span {
        text-align: right;
    }
    .register-btn {
        margin: .1rem 0;
    }
    .register-btn button{
        width: 100%;
        text-align: left;
    }
    .input-write span{
        color: #9e9e9e;
        line-height: .3rem; 
    }
    .input-write input::-webkit-input-placeholder {
        color: #333;
    }
    .compile-img{
        margin: .2rem 0 .1rem 0;
    }
    .compile-bottom {
        margin: .1rem 0 .2rem 0;
    }
    .compile-img span {
        padding: 0 .05rem;
    }
    .compile-bottom span {
        color: #9e9e9e;
        padding: 0 .05rem;
    }


    .avatar-uploader .el-upload {
        width: 100%;
        border: 1px solid #d9d9d9;
        border-radius: 0.08rem;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: .8rem;
        color: #8c939d;
        width: 100%;
        height: 1.78rem;
        line-height: 1.78rem;
        text-align: center;
    }
    .avatar {
        width: 1.78rem;
        height: 1.78rem;
        display: block;
    }
    .present-message {
        padding: .5rem 0;
        text-align: center;
    }
    .present-message button {
        width: 2rem;
        height: .5rem;
    }
    .el-submenu .el-menu-item {
        min-width: 1rem;
    }
</style>