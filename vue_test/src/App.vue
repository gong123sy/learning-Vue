<template>
  <div>
    <img src="./assets/logo.png" alt="logo">
    <school></school>
    <student></student>
  </div>
</template>

<script>
import School from './components/School'
import Student from './components/Student.vue'


export default {
  name: 'App',
  components: {
    School,
    Student
  }
}
</script>

<style></style>
