<template>
	<div>
		<h1 class="title">你好啊</h1>
		<School />
		<Student />
	</div>
</template>

<script>
//两个组件里有相同的类名，后引入的会覆盖先引入的
import Student from './components/Student'
import School from './components/School'

export default {
	name: 'App',
	components: { School, Student }
}
</script>

<style scoped>
.title {
	color: red;
}
</style>
