<template>
    <div>
        <el-select v-model="province" placeholder="请选择" @change='provinceBtn'>
            <el-option v-for="item in optiondata" :key="item.name" :value="item.name">
            </el-option>
        </el-select>
        <el-select v-model="city" placeholder="请选择" @change='cityBtn'>
            <el-option v-for="item in cityList" :key="item.name" :value="item.name">
            </el-option>
        </el-select>
        <el-select v-model="area" placeholder="请选择" @change='areaBtn'>
            <el-option v-for="item in areaList" :key="item" :value="item">
            </el-option>
        </el-select>
        <el-select v-model="door" placeholder="请选择" @change='doorBtn'>
            <el-option v-for="item in doorList" :key="item.name" :value="item.name">
            </el-option>
        </el-select>
    </div>
</template>
<script>
    export default {
        props: {
            optiondata: {
                type: Array
            }
        },
        data() {
            return {
                province: '',
                city: '',
                cityList: [],
                area: '',
                areaList: [],
                door: '',
                doorList: []
            }
        },
        methods: {
            provinceBtn(val) {
                this.optiondata.forEach((item, index) => {
                    if (item.name == val) {
                        this.cityList = item.city
                    }
                })
                this.city = '';
                this.area = '';
            },
            cityBtn(val) {
                this.cityList.forEach((item, index) => {
                    if (item.name == val) {
                        this.areaList = item.area
                    }
                })
                this.area = '';
                this.collectInfo();
            },
            areaBtn(val) {
                this.collectInfo();
            },
            doorBtn(val) {
                this.collectInfo();
            },
            collectInfo(){
                if(this.province && this.city && this.area){
                    this.$emit('info',{
                        provic: this.province,
                        city: this.city,
                        area: this.area
                    })
                }
            }
        }
    }

</script>
<style scoped>
    .el-date-editor.el-input {
        width: 49%;
    }

    .el-select {
        width: 24.3%;
    }
</style>