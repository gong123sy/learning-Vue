<template>
  <div>
    <!-- <img src="./assets/logo.png" alt="logo"> -->
    <school />
    <hr>
    <student />
  </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'


export default {
  name: 'App',
  components: { School, Student },
  data() {
    return {
      msg: 'hello vue'
    }
  },
}
</script>

<style></style>
