<template>
	<div class="manual">
		<el-form label-position="right" ref="reportForm" :model="reportForm" :rules="rules" class="demo-form-stacked">
			<!-- <el-form-item label="体检报告ID" required prop="id">
				<el-input v-model.trim="reportForm.id" :disabled="disabledInput" lazy></el-input>
			</el-form-item> -->
			<el-form-item label="体检人姓名" required prop="name">
				<el-input v-model.trim="reportForm.name" :disabled="disabledInput" lazy></el-input>
			</el-form-item>

			<el-form-item label="体检机构" required>
				<el-select v-model="reportForm.organize" placeholder="请选择体检机构" :disabled="disabledInput">
		            <el-option
		              v-for="item in items"
		              :key="item.id"
		              :value="item.id"
		              :label="item.name">
		            </el-option>
		        </el-select>
			</el-form-item>

			<el-form-item label="体检套餐" required>
				<el-select v-model="reportForm.currentPack" placeholder="请选择体检套餐" :disabled="disabledInput">
		            <el-option
		              v-for="item in items"
		              :key="item.id"
		              :value="item.id"
		              :label="item.name">
		            </el-option>
		        </el-select>
			</el-form-item>
			<el-form-item label="备注" prop="remarks">
                <el-input
                    type="textarea"
                    :rows="2"
                    placeholder=""
                    v-model="reportForm.remarks">
                </el-input>
            </el-form-item>

			<el-form-item>
			    <el-button type="primary" @click.native.prevent="startAdd" :disabled="!disableButton">开始录入数据</el-button>
			    <el-button @click.native.prevent="edit" :disabled="disableButton">编辑</el-button>
			</el-form-item>

			<transition name="fade"  :reportForm="reportForm">
		        <router-view class="view"></router-view>
		    </transition>
    	</el-form>
	</div>

</template>

<script>

export default {
	name: 'add',
	data: function(){
		return {
			disabledInput: false,
        	disableButton: true,
			items: [{name:'妇女专项套餐1', id:'1'},{name:'妇女专项套餐2', id:'2'},{name:'妇女专项套餐3', id:'3'}],
			reportForm:{
				currentPack:1,
				id:'',
				name:''
			},
			rules: {
	          name:[
	            {required:true,message:'请输入体检人姓名',trigger:'blur'}
	          ],
	          id:[
	            {required:true,message:'请输入体检报告ID',trigger:'blur'}
	          ],
	          shengao:[
              {required:true,message:'请输入身高',trigger:'blur'}
            ]
	        },
		}
	},
	methods: {
		startAdd: function () {
			this.$refs.reportForm.validate((valid) => {
	          if (valid) {
	            // alert('submit!');
	            this.disabledInput = true;
        		this.disableButton = false;
				this.$router.push({path:'/reports/manual/add/pack' + this.reportForm.currentPack, query:this.reportForm});
	          } else {
	            console.log('error submit!!');
	            return false;
	          }
	        });
		},
		edit: function () {
			this.disabledInput = false;
        	this.disableButton = true;
		},
		
	},
	watch: {
     '$route': function (to,from) {
         
     }
  }
}
</script>

<style>
</style>