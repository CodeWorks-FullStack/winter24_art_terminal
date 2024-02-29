<template>
  <div class="container">
    <section class="row">
      <div class="col-12">
        <h1>Projects</h1>
      </div>
    </section>

    <section class="row">
      <div class="col-12">
        {{ projects }}
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { projectsService } from '../services/ProjectsService.js'
import { AppState } from '../AppState.js'
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
      projects: computed(() => AppState.projects)
    }
  }
}
</script>

<style scoped lang="scss"></style>
