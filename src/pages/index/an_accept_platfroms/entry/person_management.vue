<template>
    <div class="person-box">
        <p>
            <span>报名名单</span>
        </p>
        <el-row class="table-box">
            <el-table
                v-loading='deleloading'
                class="table-box"
                ref="multipleTable"
                tooltip-effect="dark"
                style="width: 100%"
                :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                stripe>
                    <el-table-column
                    type="selection"
                    width="55">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="姓名"
                    width="120"
                    align='center'>
                    </el-table-column>
                    <el-table-column
                    prop='phone'
                    label="电话"
                    width="150"
                    align='center'>
                    </el-table-column>
                    </el-table-column>
                    <el-table-column
                    prop="sex"
                    width="150"
                    label="性别"
                    align='center'>
                    </el-table-column>
                    <el-table-column
                    prop="age"
                    width="150"
                    label="年龄"
                    align='center'>
                    </el-table-column>
                    <el-table-column
                    prop="send"
                    width="150"
                    label="短信通知"
                    align='center'>
                    </el-table-column>
                    <el-table-column
                    prop="info"
                    label="备注消息"
                    align='center'
                    show-overflow-tooltip>
                    </el-table-column>
                <el-table-column
                label="操作"
                align='center'>
                 <template slot-scope="scope"> 
                    <el-button @click='delresidentList(scope.row)' type="text">删除</el-button>
                 </template> 
                </el-table-column>
            </el-table> 
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[1,5,10,15]"
                :page-size="pagesize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="tableData.length">
            </el-pagination>
        </el-row>
    </div>
</template>
<script>
    import { getCookie } from '@/utils/utils';
    export default {
        data() {
            return {
                tableData: [],
                currentPage: 1,
                pagesize: 10,
                deleloading: false
            };
        },
        created () {
            this.$http.post('/useractive/info').then((res) => {
                this.tableData = res.data.list;
            }) 
        },
        methods: {
            handleSizeChange: function (size) {
                this.pagesize = size;
            },
            handleCurrentChange: function(currentPage){
                this.currentPage = currentPage;
            },
            handleClick(val) {
                this.$prompt('请输入备注信息', '添加备注', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    inputErrorMessage: '格式不正确'
                }).then(({ value }) => {
                    this.$message({
                        type: 'success',
                        onClose: () => {
                            this.$http.post('/addfield/info', {id: val.id, field: value}).then((res) => {
                                this.tableData = res.data.list;
                            })
                        }
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    });       
                });
                
            },
            delresidentList (val) {
                console.log( window.localStorage.authorization)
                this.$http.post('/delresident/info', {id: val.id, delres: window.localStorage.authorization, token: getCookie('token')}).then((res) => {
                    this.deleloading = false;
                    if (res.data.msg == '过期') {
                        this.$msgbox({
                            title: '消息',
                            message: '身份' + res.data.msg,
                            showCancelButton: true,
                            confirmButtonText: '重新登录',
                            cancelButtonText: '取消',
                            beforeClose: (action, instance, done) => {
                                console.log(action, instance);
                                if (action === 'confirm') {
                                    this.$router.push({
                                        name: 'Login',
                                        query: {
                                            from: this.$route.path
                                        }
                                    });
                                    done();
                                } else {
                                    done();
                                }
                            }
                        })
                    } else {
                        if (window.localStorage.authorization !== "true") {
                            this.$alert(res.data.message)
                        }else {
                            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                                confirmButtonText: '确定',
                                cancelButtonText: '取消',
                                type: 'warning',
                                center: true
                            }).then(() => {
                                this.$message({
                                    type: 'success',
                                    message: '删除成功!',
                                    onClose: () => {
                                        if (res.data.code == 1) {
                                            this.tableData = res.data.data.list;
                                        } else {
                                            this.deleloading = false;
                                        }
                                    }
                                });
                                
                            }).catch(() => {
                                this.$message({
                                    type: 'info',
                                    message: '已取消删除'
                                });
                            });
                        }
                    }
                })
            }
        }
    }
</script>
<style scoped>
    .person-box p {
        font-size: .2rem;
        line-height: .7rem;
        background: #fff;
        padding: 0 .1rem;
    }
    .el-pagination {
        margin-top: .5rem;
        float: right;
    }
    /*el-dialog__header 添加居民*/
    .el-dialog__header {
        height: 0.5rem !important;
        background: #ccc !important;
    }
     .el-dialog__header {
        background: red !important;
    } 
    .el-dialog--center .el-dialog__header {
        padding-top: 0;
    }
    .input_search {
        width: 35%;
        margin-left: 50px;
    }
    .tabList {
        width: 6rem;
        height: 1.2rem;
        text-align: center;
        display: block;
    }
    .tabtr {
        width: 100%;
        display: block;
    }
    .tabtr th, .tabtr td {
        padding: .2rem .55rem;
    }
    .dialog-footer {
        width: 2rem;
    }
</style>