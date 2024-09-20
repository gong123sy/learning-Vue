<template>
	<div class="demo">
		<h2 class="title">学生姓名：{{ name }}</h2>
		<h2 class="atguigu">学生性别：{{ sex }}</h2>
	</div>
</template>

<script>
export default {
	name: 'Student',
	data() {
		return {
			name: '张三',
			sex: '男'
		}
	}
}
</script>

<style lang="less" scope>
//less是css的预处理器，可以嵌套写css
.demo {
	background-color: pink;

	.atguigu {
		font-size: 40px;
	}
}
</style>
