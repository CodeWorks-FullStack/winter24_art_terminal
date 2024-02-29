<template>
  <div class="container">
    <section class="row">
      <div class="col-12">

      </div>
    </section>
  </div>
</template>


<script>
import { onMounted } from 'vue';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { profilesService } from '../services/ProfilesService.js'
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute()

    async function getProfileById() {
      try {
        const profileId = route.params.profileId
        logger.log('Id from route parameters', profileId)
        await profilesService.getProfileById(profileId)
      } catch (error) {
        Pop.error(error)
      }
    }

    onMounted(() => {
      getProfileById()
    })
    return {}
  }
}
</script>


<style lang="scss" scoped></style>