<template>
  <div id="app">
    <template>
      <div class="hidden">
        <vs-sidebar
          absolute
          reduce
          v-model="active"
          open
          >
          <template #logo>
            News
          </template>
          <div v-if="this.$route.name != 'Home'">
            <vs-sidebar-item to="/">
              <template #icon>
                <i class='bx bx-arrow-back'></i>
              </template>
              volver
            </vs-sidebar-item>
          </div>
          <div v-else>
            <a class="vs-sidebar__item hasIcon" :class="active === 'general' ? 'active' : ''" @click="getNews('general')">
              <div class="vs-sidebar__item__icon">
                <i class='bx bx-home'></i>
              </div>
              <div class="vs-sidebar__item__text-tooltip">
                Todo
              </div>
            </a>
            <a class="vs-sidebar__item hasIcon" :class="active === 'business' ? 'active' : ''" @click="getNews('business')">
              <div class="vs-sidebar__item__icon">
                <i class='bx bx-briefcase-alt'></i>
              </div>
              <div class="vs-sidebar__item__text-tooltip">
                Negocios
              </div>
            </a>
            <a class="vs-sidebar__item hasIcon" :class="active === 'entertainment' ? 'active' : ''" @click="getNews('entertainment')">
              <div class="vs-sidebar__item__icon">
                <i class='bx bx-right-arrow'></i>
              </div>
              <div class="vs-sidebar__item__text-tooltip">
                Entretenimiento
              </div>
            </a>
            <a class="vs-sidebar__item hasIcon" :class="active === 'health' ? 'active' : ''" @click="getNews('health')">
              <div class="vs-sidebar__item__icon">
                <i class='bx bx-band-aid'></i>
              </div>
              <div class="vs-sidebar__item__text-tooltip">
                Salud
              </div>
            </a>
            <a class="vs-sidebar__item hasIcon" :class="active === 'science' ? 'active' : ''" @click="getNews('science')">
              <div class="vs-sidebar__item__icon">
                <i class='bx bx-bong'></i>
              </div>
              <div class="vs-sidebar__item__text-tooltip">
                Ciencia
              </div>
            </a>
            <a class="vs-sidebar__item hasIcon" :class="active === 'sports' ? 'active' : ''" @click="getNews('sports')">
              <div class="vs-sidebar__item__icon">
                <i class='bx bx-tennis-ball'></i>
              </div>
              <div class="vs-sidebar__item__text-tooltip">
                Deporte
              </div>
            </a>
            <a class="vs-sidebar__item hasIcon" :class="active === 'technology' ? 'active' : ''" @click="getNews('technology')">
              <div class="vs-sidebar__item__icon">
                <i class='bx bx-mouse'></i>
              </div>
              <div class="vs-sidebar__item__text-tooltip">
                Tecnologia
              </div>
            </a>
          </div>
          
          <template #footer>
            <vs-row justify="space-between">
              <vs-button
                icon
                color="dark"
                border
                href="https://github.com/DeyviDeLaCruz"
              >
                <i class='bx bxl-github'></i>
              </vs-button>
            </vs-row>
          </template>
        </vs-sidebar>
      </div>
    </template>
    <router-view></router-view>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      active: 'general'
    }
  },
  mounted() {
    this.getNews('general')
  },
  methods: {
    //...mapActions(['getNews']),
    getNews(category) {
      this.active = category
      const loading = this.$vs.loading();
      this.$store.dispatch('getNews', this.active).then(res => {
        loading.close();
      }).catch(error => {
        loading.close();
      });
    }
  },
}
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
  background-color: #F4F7F8;
}

#app {
  font-family: Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  padding: 0px 30px 0 100px;
  overflow-y: scroll;
}
</style>
