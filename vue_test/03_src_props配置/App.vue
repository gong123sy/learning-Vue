<template>
	<div>
		<Student name="GSY" sex="男" :age="21" /> <!-- v-bind 传递数字类型 -->
	</div>
</template>

<script>
import Student from './components/Student'

export default {
	name: 'App',
	components: { Student }
}
</script>
