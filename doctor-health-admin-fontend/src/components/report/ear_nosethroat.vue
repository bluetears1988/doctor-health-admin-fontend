<template>
    <div class="general">
	   <!-- element表单组件 -->
      <el-form :model="ruleForm" class="demo-ruleForm" :rules="rules" ref="ruleForm" label-position="top">
	     <el-form-item label="既往史" prop="name">
            <el-input v-model="ruleForm.name" size="large"></el-input>
        </el-form-item>

        <el-form-item label="外耳" prop="name">
            <el-input v-model="ruleForm.name" size="large"></el-input>
        </el-form-item>

        <el-form-item label="外耳道" prop="name">
            <el-input v-model="ruleForm.name" size="large"></el-input>
        </el-form-item>

        <el-form-item label="鼓膜" prop="name">
            <el-input v-model="ruleForm.name" size="large"></el-input>
        </el-form-item>

        <el-form-item label="鼻腔" prop="name">
            <el-input v-model="ruleForm.name" size="large"></el-input>
        </el-form-item>

        <el-form-item label="鼻中隔
        " prop="name">
            <el-input v-model="ruleForm.name" size="large"></el-input>
        </el-form-item>

        <el-form-item label="咽" prop="name">
            <el-input v-model="ruleForm.name" size="large"></el-input>
        </el-form-item>

        <el-form-item label="扁桃体" prop="name">
            <el-input v-model="ruleForm.name" size="large"></el-input>
        </el-form-item>

        <el-form-item label="耳鼻咽喉科其他" prop="name">
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
