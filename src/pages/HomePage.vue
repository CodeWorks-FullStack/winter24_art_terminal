<template>
  <div class="container">
    <section class="row">
      <div class="col-12">
        <h1>Projects</h1>
      </div>
    </section>

    <section class="row">
      <div v-for="project in projects" :key="project.id" class="col-md-3 mb-3">
        <ProjectCard :project="project" />
      </div>
    </section>

  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { projectsService } from '../services/ProjectsService.js'
import { AppState } from '../AppState.js'
import ProjectCard from '../components/ProjectCard.vue';
export default {
  setup() {
    async function getProjects() {
      try {
        await projectsService.getProjects();
      }
      catch (error) {
        Pop.error(error);
      }
    }
    onMounted(() => {
      getProjects();
    });
    return {
      projects: computed(() => AppState.projects)
    };
  },
  components: { ProjectCard }
}
</script>

<style scoped lang="scss"></style>
