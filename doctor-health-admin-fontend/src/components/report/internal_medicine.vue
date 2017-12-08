<template>
    <div class="internal">
	   <!-- element表单组件 -->
      <el-form label-position="right" ref="form" :model="form" class="demo-form-stacked">
	     <el-form-item label="病史" prop="name">
            <el-input v-model="ruleForm.name" size="large"></el-input>
        </el-form-item>

        <el-form-item label="家族史" prop="name">
            <el-input v-model="ruleForm.name" size="large"></el-input>
        </el-form-item>

        <el-form-item label="心率(次/分)" prop="name">
            <el-input v-model="ruleForm.name" size="large"></el-input>
        </el-form-item>

        <el-form-item label="心律" prop="name">
            <el-input v-model="ruleForm.name" size="large"></el-input>
        </el-form-item>

        <el-form-item label="心音" prop="name">
            <el-input v-model="ruleForm.name" size="large"></el-input>
        </el-form-item>

        <el-form-item label="肺部听诊" prop="name">
            <el-input v-model="ruleForm.name" size="large"></el-input>
        </el-form-item>

        <el-form-item label="肝脏触诊" prop="name">
            <el-input v-model="ruleForm.name" size="large"></el-input>
        </el-form-item>

        <el-form-item label="脾脏触诊" prop="name">
            <el-input v-model="ruleForm.name" size="large"></el-input>
        </el-form-item>

        <el-form-item label="肾脏叩诊" prop="name">
            <el-input v-model="ruleForm.name" size="large"></el-input>
        </el-form-item>

        <el-form-item label="内科其他" prop="name">
            <el-input v-model="ruleForm.name" size="large"></el-input>
        </el-form-item>

         <el-form-item label="医生小结" prop="name">
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="textarea">
            </el-input>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="onSubmit">保存</el-button>
            <el-button>取消</el-button>
        </el-form-item>

        </el-form>
    </div>
</template>

<script>
  export default {
    name: 'internal',
    data: function () {
      return {
        form: {
        }
      }
    },
    watch: {
    },
    methods: {

    },
    created: function () {
    }
  }
</script>
<style>
</style>
