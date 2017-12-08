<template>
	<div class="manual">
		<el-form label-position="right" ref="reportForm" :model="reportForm" class="demo-form-stacked">
			<el-form-item label="体检报告ID">
				<el-input v-model="reportForm.ID"></el-input>
			</el-form-item>

			<el-form-item label="体检套餐">
				<el-select v-model="currentPack" placeholder="请选择体检套餐">
		            <el-option
		              v-for="type in types"
		              :value="type">
		            </el-option>
		        </el-select>
			</el-form-item>
			<el-form-item label="体检人姓名">
				<el-input v-model="reportForm.name"></el-input>
			</el-form-item>

			<el-form-item>
			    <el-button type="primary" @click="onSubmit">开始录入数据</el-button>
			    <el-button>清空</el-button>
			</el-form-item>

			<transition name="fade">
		        <router-view class="view"></router-view>
		    </transition>
    	</el-form>
	</div>

</template>

<script>
export default {
	name: 'manual',
	data: function(){
		return {
			currentPack:'',
			types:['妇女专项套餐','妇女专项套餐2','妇女专项套餐3'],
			form:{

			}
		}
	},
	methods: {
		onSubmit(){

		}
	}
}
</script>

<style>
</style>