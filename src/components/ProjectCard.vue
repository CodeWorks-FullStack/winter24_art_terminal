<template>
  <div class="card">
    <img :src="project.coverImg" class="card-img-top" :alt="project.title">
    <div class="card-body d-flex justify-content-between">
      <div>
        <p class="card-title fs-5">{{ project.title }}</p>
        <button @click="setActiveProject()" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#projectModal">
          Open Gallery
        </button>
      </div>
      <router-link :to="{ name: 'Profile', params: { profileId: project.creatorId } }">
        <img class="creator-picture selectable" :src="project.creator.picture" :alt="project.creator.name" role="button"
          :title="`Go to ${project.creator.name}'s profile page`">
      </router-link>
    </div>
  </div>
</template>


<script>
import { Project } from '../models/Project.js';
import { projectsService } from '../services/ProjectsService.js';
import { logger } from '../utils/Logger.js';

export default {
  props: {
    project: { type: Project, required: true }
  },
  setup(props) {
    return {
      setActiveProject() {
        logger.log(props.project)
        projectsService.setActiveProject(props.project)
      }
    }
  }
}
</script>


<style lang="scss" scoped>
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