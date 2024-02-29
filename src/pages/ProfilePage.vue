<template>
  <div class="container">
    <section v-if="profile" class="row my-3">
      <div class="col-12 text-center">
        <img class="profile-picture" :src="profile.picture" :alt="profile.name">
        <img class="profile-cover-img" :src="profile.coverImg" :alt="profile.name + ' cover image'">
      </div>
      <div class="col-12">
        <h1>{{ profile.name }}</h1>
        <p>{{ profile.bio }}</p>
      </div>
    </section>

    <section class="row">
      <div v-for="profileProject in projects" class="col-md-4">
        <ProjectCard :project="profileProject" />
      </div>
    </section>
  </div>
</template>


<script>
import { computed, onMounted } from 'vue';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { profilesService } from '../services/ProfilesService.js'
import { useRoute } from 'vue-router';
import { AppState } from '../AppState.js'
import { projectsService } from '../services/ProjectsService.js';
import ProjectCard from '../components/ProjectCard.vue';

export default {
  setup() {
    const route = useRoute();
    async function getProfileById() {
      try {
        const profileId = route.params.profileId;
        logger.log('Id from route parameters', profileId);
        await profilesService.getProfileById(profileId);
      }
      catch (error) {
        Pop.error(error);
      }
    }
    async function getProjectsByCreatorId() {
      try {
        const profileId = route.params.profileId;
        await projectsService.getProjectsByCreatorId(profileId);
      }
      catch (error) {
        Pop.error(error);
      }
    }
    onMounted(() => {
      getProfileById();
      getProjectsByCreatorId();
    });
    return {
      profile: computed(() => AppState.activeProfile),
      projects: computed(() => AppState.projects)
    };
  },
  components: { ProjectCard }
}
</script>


<style lang="scss" scoped>
.profile-picture {
  height: 30vh;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
}

.profile-cover-img {
  width: 100%;
  height: 40vh;
  object-fit: cover;
  transform: translateY(-12vh);
  margin-bottom: -12vh;
}
</style>