<template>
    <div class="apply">
        <p>
            <span><b>预约名单</b></span>
            <span>短息通知</span>
        </p>
        <el-row>
            <el-table
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
                label="居民姓名"
                width="120"
                align='center'>
                </el-table-column>
                <el-table-column
                label="联系电话"
                width="150"
                align='center'>
                <template slot-scope="scope">{{ scope.row.phone }}</template>
                </el-table-column>
                <el-table-column
                prop="send"
                label="短信通知"
                width="120"
                align='center'>
                </el-table-column>
                <el-table-column
                prop="address"
                label="地址"
                width="120"
                align='center'>
                </el-table-column>
                <el-table-column
                prop="info"
                label="报名备注"
                align='center'
                show-overflow-tooltip>
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
export default {
        data() {
            return {
                tableData: [],
                multipleSelection: [],
                currentPage: 1,
                pagesize: 10
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
            }
        }
    }
</script>
<style>
    .apply p span{
        padding: 0 .1rem;
    }
    .el-pagination {
        margin-top: .5rem;
        float: right;
    }
</style>