<template>
  <div class="about">
    <vs-row justify="center">
      <vs-col lg="6" sm="8" xs="12">
        <h1>{{ news[index].title }}</h1>
      </vs-col>
    </vs-row>
    <vs-row justify="center">
      <vs-col lg="6" sm="8" xs="12">
        <img :src="news[index].urlToImage" width="100%">
      </vs-col>
    </vs-row>
    <vs-row justify="center">
      <vs-col lg="6" sm="8" xs="12">
        <p v-if="news[index].description.length > news[index].content.length">{{ news[index].description }}</p>
        <p v-else>{{ news[index].content }}</p>
      </vs-col>
    </vs-row>
    <vs-row>
      <vs-col align="center" w="12">
        <vs-button to="/">
          <i class='bx bx-arrow-back' style="margin-right: 5px;"></i> Regresar
        </vs-button>
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Detail',
  data() {
    return {
      index: this.$route.params.id
    }
  },
  computed: {
    ...mapState(['news'])
  },
}
</script>

<style>
  img {
    border-radius: 4%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
</style>