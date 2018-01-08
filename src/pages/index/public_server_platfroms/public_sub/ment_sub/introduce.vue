<template>
    <div class="invite">
        <el-row>
            <el-col :span='12'>
                <span><b>基本信息</b></span>
            </el-col>
            <el-col :span='12' align='right'>
                <span>未发布</span>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span='8'>
                <div class="imgUpload">
                    <el-upload
                    class="avatar-uploader"
                    action="http://localhost:3000/upload"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess1"
                    :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl1" :src="imageUrl1" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </div>
                <div class="compile-bottom">
                    <span>图片格式：jpg\png</span>
                    <span>图片大小:</span>
                    <span>小于200k</span>
                    <span>建议尺寸:</span>
                    <span>宽度大于800px</span>
                </div>
            </el-col>
            <el-col :span='15' :offset='1'>
                <div class="from_input">
                    <el-form label-width="80px">
                        <div class="summary_div">活动名称</div> 
                        <el-input v-model="activename" class="label_block" placeholder="输入活动名称"></el-input>
                         <div class="summary_div">活动时间</div> 
                        <div class="block">
                            <el-date-picker
                            v-model="addTime"
                            type="date"
                            placeholder="选择日期">
                            </el-date-picker>
                            <el-date-picker
                            v-model="endTime"
                            type="date"
                            placeholder="截止日期">
                            </el-date-picker>
                        </div>
                        <div class="summary_div">请选择地址</div> 
                        <div>
                            <select-city :optiondata='options' @info='changeCity'></select-city>
                        </div>
                    </el-form>
                </div>
            </el-col>
        </el-row>
        <div v-for='(item, idx) in $store.state.datalist'>
            <img-list :hasbtn='item.hasBtn' :imgaddr='item.imgurl' :id='idx'></img-list>
        </div>
        <el-row>
            <el-col align='center'>
                <el-button type="success" @click='submit_info'>保存并提交</el-button>
            </el-col>
        </el-row>
    </div>
</template>
<script>
  import selectCity from '@/components/selectCity.vue';
  import imgList from '@/components/imgList.vue';
  export default {
        components:{
            selectCity,
            imgList
        },
        data() {
            return {
                imageUrl1: '',
                options: [],
                activename: '',
                addTime: new Date(),
                endTime: new Date('2017-12-12'),
                addressList: ''
            }
        },
        created () {
            // this.$http.get('/useractive/info').then((res) => {
            //     console.log(res);
            // })
            // 城市
            this.$http.get('/province/info').then((res) => {
                this.options = res.data;
            })
        },
        methods: {
            handleAvatarSuccess1 (res, file) {
                this.imageUrl1 = URL.createObjectURL(file.raw);
                this.$store.commit('update_resident_list', this.imageUrl1);
            },
            beforeAvatarUpload (file) {
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
            onSubmit() {
                console.log('submit!');
            },
            submit_info (val){
                if (!this.activename) {
                    this.$message('请输入活动名称')
                    return;
                }
                if (!this.addTime) {
                    this.$message('请输入开始时间')
                    return;
                }
                if (!this.endTime) {
                    this.$message('请输入截止时间')
                    return;
                }
                if (!this.endTime) {
                    this.$message('请输入截止时间')
                    return;
                }
                var _this = this;
                this.$http.post('/admin/activity/add', {
                    'categoryId': 1, 
                    'name': this.activename, 
                    'imagePath': this.$store.state.residentList,
                    'startDate': this.addTime,
                    'endDate': this.endTime,
                    'locationId': 1,
                    'locationName': this.addressList})
                    .then((res) => {
                        if (res.data.msg == 'SUCCESS') {
                            this.$message({
                                message: res.data.msg,
                                type: 'success',
                                onClose: function () {
                                    _this.imageUrl1 = '';
                                    _this.options = [];
                                    _this.activename = '';
                                    _this.addTime = '';
                                    _this.endTime = '';
                                    _this.addressList = '';
                                }
                            });
                        } 
                        console.log(res.data.msg);
                    })
            },
            changeCity (val) {
                 this.addressList = val;
            }
        }
    }
</script>
<style scoped>
  .invite {
    /* font-size: .15rem; */
  }
  .from_input {
      color: #333;
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
    height: 2.3rem;
    line-height: 2.3rem;
    text-align: center;
  }
  .avatar {
    width: 100%;
    height: 2rem;
    display: block;
  }
  .avatar-uploader, .imgUpload {
    width: 100%;
    height: 2rem;
  }
  .imgUpload {
      height: 2rem;
      border: 1px solid #ccc;
      text-align: center;
  }
  .imgUpload img {
      width: 100%;
  }
  .avatar-uploader > div {
      /* width: 100% !important; */
  }


  /*  活动名称   form*/
  .label_block {
      display: block;
  }
  .summary_div {
      line-height: .2rem;
      color: #C4C4C4;
  }
   .el-date-editor.el-input {
    width: 49%;
  } 
  .el-cascader {
      width: 24.3%;
  }

  .compile-bottom span {
    color: #9e9e9e;
     padding: 0 .05rem; 
  }
  .compile-img{
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
</style>