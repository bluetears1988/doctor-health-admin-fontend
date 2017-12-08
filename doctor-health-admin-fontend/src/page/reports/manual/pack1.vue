<template>
	<div class="pack1">
		<general @transferForm="getForm" :currentPack = "currentPack"></general>

		<el-form-item>
		    <el-button type="primary" @click.native.prevent="onSubmit">提交</el-button>
		</el-form-item>
	</div>

</template>

<script>
import general from '@/components/report/general_inspection.vue'
import blood from '@/components/report/blood_routine.vue'
import ear_nosethroat from '@/components/report/ear_nosethroat.vue'
import elect from '@/components/report/electrocardiogram.vue'
import internal from '@/components/report/internal_medicine.vue'
import ophthalmology from '@/components/report/ophthalmology.vue'
import surgery from '@/components/report/surgery.vue'
import ultrasound from '@/components/report/ultrasound_room.vue'
import urine from '@/components/report/urine_routine.vue'
import Xray from '@/components/report/Xray_room.vue'

export default {
	name: 'pack1',
	components: {
		'general':general,
		'blood':blood,
		'ear':'ear_nosethroat',
		'elect':elect,
		'internal':'internal',
		'ophthalmology':ophthalmology,
		'surgery':'surgery',
		'ultrasound':ultrasound,
		'urine':'urine',
		'Xray':Xray,
	},
	data: function(){
		return {
			currentPack:'',
			types:['妇女专项套餐','妇女专项套餐2','妇女专项套餐3'],
			form:{

			}
		}
	},
	methods: {
		onSubmit: function () {
           var data = Object.assign(this.form, this.$route.query);
           console.dirxml(this.form);
           this.$ajax({
           		method: 'post',
           		url: '/report',
           		data: this.form
           });
		},
		getForm: function(subform){
			Object.assign(this.form, subform);
		}
	},
	created: function () {
		this.currentPack = this.$route.query.currentPack;
    }
}
</script>

<style>
</style>