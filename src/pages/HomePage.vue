<template>
  <div class="container">
    <section class="row">
      <div class="col-12">
        <h1>Projects</h1>
      </div>
    </section>

    <section class="row">
      <div v-for="project in projects" :key="project.id" class="col-md-3 mb-3">
        <div class="card">
          <img :src="project.coverImg" class="card-img-top" :alt="project.title">
          <div class="card-body d-flex justify-content-between">
            <div>
              <p class="card-title fs-5">{{ project.title }}</p>
              <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#projectModal">Open Gallery</button>
            </div>
            <img class="creator-picture" :src="project.creator.picture" :alt="project.creator.name">
          </div>
        </div>
      </div>
    </section>
  </div>

  <ModalComponent />
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

<style scoped lang="scss">
.creator-picture {
  height: 8vh;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
}

.card-img-top {
  height: 32vh;
  object-fit: cover;
}
</style>
