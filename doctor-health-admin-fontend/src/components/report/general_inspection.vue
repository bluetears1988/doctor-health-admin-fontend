<template>
    <div class="general">
      <el-form label-position="right" ref="form" :model="form" class="demo-form-stacked" :rules="rules">
	     <el-form-item label="身高 （单位：cm）" required prop="shengao">
            <el-input v-model.trim="form.shengao" :disabled="disabledInput" lazy></el-input>
        </el-form-item>

        <el-form-item label="体重 （单位：Kg）" required prop="tizhong">
            <el-input v-model.trim="form.tizhong" :disabled="disabledInput" lazy></el-input>
        </el-form-item>

        <el-form-item label="体重指数 （正常值范围18.5-23.99）" :min="threshold" :max="threshold" required prop="tizhongzhishu">
            <el-input v-model.trim="form.tizhongzhishu" :disabled="disabledInput" lazy number></el-input>
             <!-- <el-input v-model.trim="form_status.tizhongzhishu" :disabled="disabledInput" lazy>{{form.tizhongzhishu | filter(18.5, 23.99)}}</el-input> -->
        </el-form-item>

        <el-form-item label="收缩压 （正常值范围90-139）（单位：mmHg）" required prop="shousuoya">
            <el-input v-model.trim="form.shousuoya" :disabled="disabledInput" lazy number></el-input>
            <!-- <el-input v-model.trim="form_status.shousuoya" :disabled="disabledInput" lazy>{{form.shousuoya | filter(90, 139)}}</el-input> -->
        </el-form-item>

        <el-form-item label="舒张压 （正常值范围60-89）（单位：mmHg）" required prop="shuzhangya">
            <el-input v-model.trim="form.shuzhangya" :disabled="disabledInput" lazy number></el-input>
            <!-- <el-input v-model.trim="form_status.shuzhangya" :disabled="disabledInput" lazy>{{form.shuzhangya | filter(60, 89)}}</el-input> -->
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
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'general',
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
        // threshold:{
        //   tizhongzhishu: {'min':18.5,'max':23.99},
        //   shousuoya: {'min':90,'max':139},
        //   shuzhangya: {'min':60,'max':89}
        // },
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
    props: ['currentPack'],
    filters: {
      // filter_area: function (val, min, max){
      //     return !(val > max || val < min);
      // }
    },
    watch: {
      // 'form.tizhongzhishu': 'updateFormStatus("tizhongzhishu", )',
    },
    computed: mapState([
      // threshold: state => state.threshold['pack' + this.currentPack],
      'threshold'
    ]),
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
        var threshold = this.threshold['pack' + this.currentPack];
        // console.log(this.threshold);
        for(var key in threshold){
        // for(var key in this.threshold){
          // var min =  this.threshold[key]['min'];
          // var max =  this.threshold[key]['max'];
          var min =  threshold[key]['min'];
          var max =  threshold[key]['max'];
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
