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
          <vs-sidebar-item id="home">
            <template #icon>
              <i class='bx bx-home'></i>
            </template>
            Todo
          </vs-sidebar-item>
          <vs-sidebar-item id="market">
            <template #icon>
              <i class='bx bx-grid-alt'></i>
            </template>
            Politica
          </vs-sidebar-item>
          <vs-sidebar-item id="Music">
            <template #icon>
              <i class='bx bxs-music'></i>
            </template>
            Music
          </vs-sidebar-item>
          <vs-sidebar-group>
            <template #header>
              <vs-sidebar-item arrow>
                <template #icon>
                  <i class='bx bx-group'></i>
                </template>
                Social media
              </vs-sidebar-item>
            </template>

            <vs-sidebar-item id="Instagram">
              <template #icon>
                <i class='bx bxl-instagram'></i>
              </template>
              Instagram
            </vs-sidebar-item>
            <vs-sidebar-item id="twitter">
              <template #icon>
                <i class='bx bxl-twitter' ></i>
              </template>
              Twitter
            </vs-sidebar-item>
            <vs-sidebar-item id="Facebook">
              <template #icon>
                <i class='bx bxl-facebook' ></i>
              </template>
              Facebook
            </vs-sidebar-item>
          </vs-sidebar-group>
          <vs-sidebar-item id="donate">
            <template #icon>
              <i class='bx bxs-donate-heart' ></i>
            </template>
            Donate
          </vs-sidebar-item>
          <vs-sidebar-item id="drink">
            <template #icon>
              <i class='bx bx-drink'></i>
            </template>
            Drink
          </vs-sidebar-item>
          <vs-sidebar-item id="shopping">
            <template #icon>
              <i class='bx bxs-shopping-bags'></i>
            </template>
            Shopping
          </vs-sidebar-item>
          <vs-sidebar-item id="chat">
            <template #icon>
              <i class='bx bx-chat' ></i>
            </template>
            Chat
          </vs-sidebar-item>
          <template #footer>
            <vs-row justify="space-between">
              <vs-button
                icon
                color="dark"
                border
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
export default {
  data() {
    return {
      active: 'home'
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
