<template>
    <div>
        <el-row>
            <el-col>
                <el-row class="compile-img">
                    <el-col class="compile-top">
                        <span>
                            <b>请输入栏目名称</b>
                        </span>
                        <span style="color:#46C6CC;">编辑</span>
                        <span style="color:#46C6CC;" @click='addList()'>添加栏目</span>
                        <span style="color:#46C6CC;" @click='previewImg'>预览</span>
                        <span v-if='hasbtn' style="color:#FF2929;" @click='delList'>删除</span></span>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col align='center' style="width:100%;">
                        <div class="upload">
                            <el-upload class="avatar-uploader" action="http://localhost:3000/upload" :show-file-list="false" :on-success="handleAvatarSuccess"
                                :before-upload="beforeAvatarUpload">
                                <img v-if="imageUrl" :src="imgaddr" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                        </div>
                    </el-col>
                </el-row>
                <el-row class="compile-bottom">
                    <el-col>
                        <span>
                            图片格式：jpg\png
                        </span>
                        <span>图片大小</span>:
                        <span>小于200k</span>
                        <span>建议尺寸</span>:
                        <span>宽度大于800px</span>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <div class="previewImgBox" v-if='preview_show'>
            <button @click='closeBtn' class="closehind">X</button>
            <img :src="previewImage" alt="">
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            hasbtn: {
                type: Boolean
            },
            id: {
                type: Number
            },
            imgaddr: {
                type: String
            }
        },
        data() {
            return {
                imageUrl: '',
                previewImage: '',
                preview_show: false
            }
        },
        methods: {
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
                this.imgaddr = this.imageUrl;
                this.$store.commit('update_resident_list', this.imageUrl);
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
            addList() {  // 添加栏目
                this.$store.commit('update_list', { hasBtn: true , imgurl: this.imageUrl})
            },
            delList() { // 删除栏目
                this.$store.state.datalist.splice(this.id, 1);
            },
            previewImg() {
                this.preview_show = true;
                this.previewImage = this.imageUrl;
            },
            closeBtn () {
                this.preview_show = false;
            }
        }
    }

</script>
<style scoped>
    .compile-bottom span {
        color: #9e9e9e;
        padding: 0 .05rem;
    }

    .compile-img {
        margin: .2rem 0 .1rem 0;
    }

    .compile-img span {
        padding: 0 .05rem;
    }

    .upload {
        border: 1px dashed #d9d9d9;
        width: 100%;
        height: 2rem;
        overflow: hidden;
        text-align: center;
        box-sizing: border-box;
    }

    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 2rem;
    }

    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 1.87rem;
        height: 2rem;
        line-height: 2rem;
        text-align: center;
    }

    .avatar {
        width: 100%;
        height: 2rem;
        display: block;
    }

    .avatar img {
        width: 100%;
    }

    .avatar-uploader,
    .imgUpload {
        width: 100%;
    }

    .imgUpload {
        border: 1px solid #ccc;
        text-align: center;
    }

    .previewImgBox {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        z-index: 5;
        background: rgba(0, 0, 0, .1);
    }
    .closehind {
        position: absolute;
        right: 0;
        top: 0;
    }
</style>