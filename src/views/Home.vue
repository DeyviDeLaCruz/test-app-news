<template>
  <div class="home">
    <vs-row class="buscador" justify="center">
      <vs-col lg="4" sm="6" xs="12">
        <vs-input 
          state="primary"
          placeholder="Buscar..."
          block
        >
          <template #icon>
            <i class='bx bx-search'></i>
          </template>
        </vs-input>
      </vs-col>
    </vs-row>
    <vs-row>
      <vs-col align="center" lg="3" sm="4" xs="12" v-for="(item, index) in news" :key="index">
        <vs-card @click="openDetail(index)">
          <template #title>
            <h3>{{ item.title }}</h3>
          </template>
          <template #img>
            <img :src="item.urlToImage" >
          </template>
          <template #text>
            <p v-if="item.description">{{ item.description.slice(0, 200)+'...' }}</p>
            <p v-else></p>
          </template>
          <template #interactions>
            <vs-button class="btn-chat" shadow primary>
              <i class='bx bx-time' style="margin-right: 5px"></i>
              <span class="span">
                {{ Date.parse(item.publishedAt) | moment("YYYY-MM-DD h:mm:ss a") }}
              </span>
            </vs-button>
          </template>
        </vs-card> 
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  methods: {
    openDetail(id) {
      this.$router.push('/detail/'+id)
    }
  },
  computed: {
    ...mapState(['news']),
  }
}
</script>
<style>
  .buscador {
    margin: 30px 0;
  }
  .vs-card-content {
    margin: 0 0 30px 15px;
  }

  .vs-card__text {
    text-align: left;
  }
</style>