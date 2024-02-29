<template></template>

<script>
import { onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { projectsService } from '../services/ProjectsService.js'

export default {
  setup() {

    async function getProjects() {
      try {
        await projectsService.getProjects()
      } catch (error) {
        Pop.error(error)
      }
    }

    onMounted(() => {
      console.log('home page mounted');
      getProjects()
    })

    return {

    }
  }
}
</script>

<style scoped lang="scss"></style>
