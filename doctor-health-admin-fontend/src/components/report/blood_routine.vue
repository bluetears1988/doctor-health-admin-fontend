<template>
    <div class="general">
	   <!-- element表单组件 -->
      <el-form :model="form" class="demo-ruleForm" :rules="rules" ref="form" label-position="right">
	     <el-form-item label="白细胞计数 （正常值范围4.0-10.0）（单位：10^9/L）" prop="name" required>
            <el-input v-model="ruleForm.name" size="large"></el-input>
        </el-form-item>

        <el-form-item label="红细胞计数 （正常值范围3.5-5.0）（单位：10^12/L）" prop="name" required>
            <el-input v-model="ruleForm.name" size="large"></el-input>
        </el-form-item>

        <el-form-item label="血红蛋白 （正常值范围110-150）（单位：g/L）" prop="name" required>
            <el-input v-model="ruleForm.name" size="large"></el-input>
        </el-form-item>

        <el-form-item label="红细胞压积 （正常值范围0.35-0.49）（单位：10^9/L）" prop="name" required>
            <el-input v-model="ruleForm.name" size="large"></el-input>
        </el-form-item>

        <el-form-item label="平均红细胞体积 （正常值范围80.0-100.0）（单位：fL）" prop="name" required>
            <el-input v-model="ruleForm.name" size="large"></el-input>
        </el-form-item>

        <el-form-item label="平均红细胞血红蛋白含量 （正常值范围26.0-38.0）（单位：pg）" prop="name" required>
            <el-input v-model="ruleForm.name" size="large"></el-input>
        </el-form-item>

        <el-form-item label="平均红细胞血红蛋白浓度 （正常值范围300-400）（单位：g/L）" prop="name" required>
            <el-input v-model="ruleForm.name" size="large"></el-input>
        </el-form-item>

        <el-form-item label="红细胞分布宽度-变异系数 （正常值范围10-15）（单位：%）" prop="name" required>
            <el-input v-model="ruleForm.name" size="large"></el-input>^
        </el-form-item>

        <el-form-item label="血小板计数 （正常值范围100-300）（单位：10^9/L）" prop="name">
            <el-input v-model="ruleForm.name" size="large"></el-input>
        </el-form-item>

        <el-form-item label="平均血小板体积 （正常值范围6.8-13.5）（单位：fL）" prop="name">
            <el-input v-model="ruleForm.name" size="large"></el-input>
        </el-form-item>

        <el-form-item label="血小板分布宽度 （正常值范围10-15）（单位：fL）" prop="name">
            <el-input v-model="ruleForm.name" size="large"></el-input>
        </el-form-item>

        <el-form-item label="淋巴细胞百分比 （正常值范围20-50）（单位：%）" prop="name">
            <el-input v-model="ruleForm.name" size="large"></el-input>
        </el-form-item>

        <el-form-item label="中间细胞百分比 （正常值范围3-12）（单位：%）" prop="name">
            <el-input v-model="ruleForm.name" size="large"></el-input>
        </el-form-item>

        <el-form-item label="中性粒细胞百分比 （正常值范围50-70）（单位：%）" prop="name">
            <el-input v-model="ruleForm.name" size="large"></el-input>
        </el-form-item>

        <el-form-item label="淋巴细胞绝对值 （正常值范围0.8-5.0）（单位：10^9/L）" prop="name">
            <el-input v-model="ruleForm.name" size="large"></el-input>
        </el-form-item>

        <el-form-item label="中间细胞绝对值 （正常值范围0.1-0.8）（单位：10^9/L）" prop="name">
            <el-input v-model="ruleForm.name" size="large"></el-input>
        </el-form-item>

        <el-form-item label="中性粒细胞绝对值 （正常值范围2.0-7.2）（单位：10^9/L）" prop="name">
            <el-input v-model="ruleForm.name" size="large"></el-input>
        </el-form-item>

         <el-form-item label="医生小结">
            <el-input
              type="textarea"
              :rows="4"
              placeholder="请输入内容"
              v-model="form.textarea_g" :disabled="disabledInput">
            </el-input>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click.native.prevent="save('form')" :disabled="!disableButton">保存</el-button>
            <el-button @click.native.prevent="edit" :disabled="disableButton">编辑</el-button>
        </el-form-item>

        </el-form>
    </div>
</template>

<script>
  export default {
    name: 'blood',
    data: function () {
      // var validators = {
      //     number: function (val) {
      //         return /^[1-9]\d*$/.test(val);
      //     },
      //     // shousuoya: function (val) {
      //     //     // return /^[A-Za-z0-9_\-\u4e00-\u9fa5]{1,10}$/.test(val);
      //     //     return !(val > 139 || v < 90);
      //     // },
      //     // shuzhangya: function (val) {
      //     //     // return /^[1-9]\d*$/.test(val);
      //     //     return !(val > 89 || v < 60);
      //     // }
      // };

      return {
        disabledInput: false,
        disableButton: true,
        form: {
          shengao: '',
          tizhong: '',
          tizhongzhishu: '',
          shousuoya: '',
          shuzhangya: '',
          textarea_g: ''
        },
        form_status: {
          shengao: true,
          tizhong: true,
          tizhongzhishu: true,
          shousuoya: true,
          shuzhangya: true
        },
        units:{
          shengao: 'cm',
          tizhong: 'Kg',
          tizhongzhishu: '',
          shousuoya: 'mmHg',
          shuzhangya: 'mmHg',
        },
        threshold:{
          tizhongzhishu: {'min':18.5,'max':23.99},
          shousuoya: {'min':90,'max':139},
          shuzhangya: {'min':60,'max':89}
        },
        rules: {
          shengao: [
            {required:true,message:'请输入身高',trigger:'blur'},
            // {validator:validators.number,message:'请输入数字',trigger:'blur'}
          ],
          tizhong: [
            {required:true,message:'请输入体重',trigger:'blur'}
          ],
          tizhongzhishu: [
            {required:true,message:'请输入体重指数',trigger:'blur'}
          ],
          shousuoya: [
            {required:true,message:'请输入收缩压',trigger:'blur'}
          ],
          shuzhangya: [
            {required:true,message:'请输入舒张压',trigger:'blur'}
          ],
        }
      }
    },
    filters: {
      // filter_area: function (val, min, max){
      //     return !(val > max || val < min);
      // }
    },
    watch: {
      // 'form.tizhongzhishu': 'updateFormStatus("tizhongzhishu", )',
    },
    computed:{

    },
    methods: {
      save: function(form){
        this.$refs.form.validate((valid) => {
          if (valid) {
            // alert('submit!');
            var mid_form = {};
            Object.assign(mid_form, this.form);

            this.addunit(mid_form);
            console.dirxml(mid_form);
            this.$emit('transferForm', mid_form);

            this.disabledInput = true;
            this.disableButton = false;
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      edit: function(){
        this.disabledInput = false;
        this.disableButton = true;
      },
      updateFormStatus: function(){
        for(var key in this.threshold){
          var min =  this.threshold[key]['min'];
          var max =  this.threshold[key]['max'];
          var val =  this.form[key];
          this.form_status[key] = !(val > max || val < min);
        }
      },
      addunit: function(obj){
        this.updateFormStatus();
        for(var key in obj){
          if(this.units.hasOwnProperty(key)){
            obj[key] += ' ' + this.units[key] + '#';
          }

          if(this.form_status.hasOwnProperty(key)){
            obj[key] += this.form_status[key];
          }
          // console.log(obj[key]);
        }
      },
    created: function () {
    }
  }
}
</script>
<style>
</style>
