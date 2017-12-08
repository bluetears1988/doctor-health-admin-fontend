<template>
<section>
<el-col :span="24" class="toolbar form-search-toolbar">
    <el-form :inline="true" :model="formData">
        <el-form-item>
            <el-input v-model="formData.name" placeholder="体检人身份证号"></el-input>
        </el-form-item>
        <el-form-item>
            <el-input v-model="formData.pkgname" placeholder="预约人手机号"></el-input>
        </el-form-item>
        <!-- <el-form-item>
            <el-input v-model="formData.organize" placeholder="体检机构"></el-input>
        </el-form-item>
        <el-form-item> -->
            <el-button type="primary" icon="search"  @click="getClientInfo()">查找</el-button>
        </el-form-item>
    </el-form>
</el-col>

<el-table :data="page.content"  v-loading="pageLoading" stripe border style="width: 100%">
    <el-table-column prop="cardid" label="身份证号" sortable></el-table-column>
    <el-table-column prop="name" label="体检人姓名" sortable></el-table-column>
    <el-table-column prop="pkgname" label="套餐名称" sortable></el-table-column>
    <el-table-column prop="checkDate" label="体检日期" sortable></el-table-column>
    <el-table-column prop="organize" label="体检机构" sortable></el-table-column>
    <el-table-column prop="orderid" label="订单号" sortable></el-table-column>
    <!-- <el-table-column prop="createdDate" label="创建时间" sortable></el-table-column>
    <el-table-column prop="lastModifiedDate" label="最后更改时间" sortable></el-table-column> -->
    <el-table-column prop="remarks" label="备注"></el-table-column>
    <el-table-column label="操作">
        <template scope="scope">
            <!-- <el-button size="small" >修改</el-button> -->
            <el-button type="primary" icon="document" size="small">体检单</el-button>
            <el-button type="success" icon="caret-right" size="small">开始</el-button>
        </template>
    </el-table-column>
</el-table>
</section>
</template>
<script>
export default {
	data() {
        return {
            page:{content:[{'cardid':'231231232'}]},
            formData:{
                extra:{}
            },
            pageLoading: false
        }
    },
    methods: {
        getClientInfo(){
            var that = this;
            // this.$ajax.get('/api/client').then((response) => {
            //     that.page = {content:response.data.data};
            //     console.dirxml(that.page.content);
            // })
        },
    }
}
</script>
<style>
</style>