<template>
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
</template>


<script>
import { Project } from '../models/Project.js';

export default {
  props: {
    project: { type: Project, required: true }
  },
  setup() {
    return {}
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