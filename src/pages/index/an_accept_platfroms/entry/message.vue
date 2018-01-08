<template>
    <div class="tab-content-msg">
        <div class="tabtn"> 
            <div class="management" :class='{tabtn_left: btn_active}' @click='infoBtn'>活动信息报名</div>
            <div class="management" :class='{tabtn_left: btn_actived}' @click='activeBtn'>人口管理</div>
        </div>
        <div class="tabContent">
            <active-resigister v-if='btn_active'></active-resigister>
        </div> 
        <div class="tabContent">
            <person-management v-if='btn_actived'></person-management>
        </div>
            <!-- <el-row>
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
            </div>  -->
        </div>
</template>
<script>
    import activeResigister from './active_resigister'
    import personManagement from './person_management'
    export default {
        data() {
            return {
                imageUrl: '',
                input: '',
                btn_active: false,
                btn_actived: true
            };
        },
        components: {
            activeResigister,
            personManagement
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
            },
            infoBtn () {
                this.btn_active = true;
                this.btn_actived = false;
            },
            activeBtn () {
                this.btn_active = false;
                this.btn_actived = true;
            }
        }
    }  
</script>
<style scoped>
    .tab-content-msg {
        position: relative;
    }


    .activity-top  { 
        width: 100%; 
        height: .6rem;
        background: #fff;
        line-height: .6rem;
        position: relative;
    } 
    .tabtn {
        width: 100%; 
        height: .5rem;
        line-height: .5rem;
        display: -webkit-flex;
        justify-content: center;
        position: absolute; 
        top: -.8rem;
        left: 0rem; 
    }
    .management {
        width: 2rem; 
        margin: 0 .1rem; 
        display: inline-block;
        text-align: center;
        border-radius: .1rem;
        border: 1px solid #ccc;
    }
    .tabtn_left {
        background: #01b0b9;
        color: #fff;
    } 
    .tabContent {
        width: 100%;
        margin-top: 1.1rem; 
    } 
</style>