<template>
  <div class="modal fade" id="projectModal" tabindex="-1" aria-labelledby="projectModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div v-if="project" class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="projectModalLabel">{{ project.title }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <section class="row">
              <div v-for="img in project.projectImgs" class="col-12 mb-2">
                <img :src="img" alt="" class="img-fluid">
              </div>
            </section>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>


<script>
import { computed } from 'vue';
import { AppState } from '../AppState.js';

export default {
  setup() {
    return {
      project: computed(() => AppState.activeProject)
    }
  }
}
</script>


<style lang="scss" scoped>
img {
  width: 100%;
}
</style>