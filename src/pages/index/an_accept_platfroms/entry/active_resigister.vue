<template>
    <div class="active_resigister">
        <el-row class="active_box">
            <el-col>
                <el-row>
                    <el-col>
                        <h2>活动信息</h2>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col>
                        <p>活动地址：社区居委会活动室</p>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col>
                        <p>温馨提示：请携带有效证件前往，如身份证</p>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <el-row class="resigster_box">
            <el-col>
                <el-row>
					<el-col>
						<h2>居民报名</h2>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span='12'><span>姓名*</span></el-col>
					<el-col :span='12'><span>联系电话*</span></el-col>
				</el-row>
				<el-row>
					<el-col :span='11'>
						<el-input v-model.trim="rname" placeholder="请输入内容"></el-input>
					</el-col>
					<el-col :span='11' :offset="1">
						<el-input v-model.number.trim="rphone" placeholder="请输入电话"></el-input>
					</el-col>
				</el-row>
				<el-row>
					<el-col>
						<span>备注信息</span>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span='23'>
						<el-input v-model.trim="remark" placeholder="请输入内容"></el-input>
					</el-col>
				</el-row>
				<el-row class="addresBtn">
					<el-col>
						<el-button @click='addresident'>报名</el-button>
					</el-col>
				</el-row> 
            </el-col>
		</el-row>     
    </div>
</template>
<script>
	export default {
		data () {
			return {
				remark: '',
				rname: '',
				rphone: ''
			}
		},
		watch: {
			rphone (val) {
				let reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
				console.log(val)
				if (reg.test(val)) {
					console.log('正确')
				} else {
					console.log('不正确')
				}
			}
		},
		methods: {
			addresident () {
				if (!this.rname) {
					this.$alert('请填写姓名！！！', '警告', {
						confirmButtonText: '确定',
						confirmButtonClass: 'ensure'
					})
					return;
				}
				if (!this.rphone) {
					this.$alert('请填写电话号码！！！', '警告', {
						confirmButtonText: '确定',
						confirmButtonClass: 'ensure'
					})
					return;
				}
				if (!this.remark) {
					this.$alert('请填写', '警告', {
						confirmButtonText: '确定',
						confirmButtonClass: 'ensure'
					})
					return;
				}
				this.$http.post('/addresident/info', {
						"phone": this.rphone,
						"send": this.remark,
						"id": 90,
						"name": this.rname,
				}).then((res) => {
					if (res.data.code == 1) {
						this.$alert(res.data.msg, '提示', {
							confirmButtonText: '确定'
						});
					} else {
						this.$alert(res.data.msg, '提示', {
							confirmButtonText: '确定',
							onClose: () => {
								this.remark = '';
								this.rname = '';
								this.rphone = '';
							}
						});
					}
				})
			}
		}
	}
</script>
<style scoped>
    .active_box {
        background: #fff;
				padding: 0 1%;
				line-height: .4rem;
    }
		.active_box p {
			font-size: .15rem;
		}
		.active_box h2, .resigster_box h2{
			font-weight: 200;
			line-height: .8rem;
		}
		.resigster_box {
				margin-top: .3rem;
			  background: #fff;
				padding: 0 1%;
				line-height: .4rem;
		}
		.resigster_box span {
			color: #ccc;
			line-height: 0;
		}
		.addresBtn {
			line-height: 1rem;
			text-align: center;
		}
		.addresBtn button {
			width: 1.5rem;
			color: #fff;
			font-size: .15rem;
			background: #01b09b;
		}
		/*弹框确认按钮*/
		.ensure {
			background: red !important;
		}
</style>