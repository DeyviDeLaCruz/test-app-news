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
      <vs-col align="center" lg="3" sm="4" xs="12">
        <vs-card @click="openDetail(1)">
          <template #title>
            <h3>Pot with a plant</h3>
          </template>
          <template #img>
            <img src="https://images.pexels.com/photos/219302/pexels-photo-219302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="">
          </template>
          <template #text>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </template>
          <template #interactions>
            <vs-button danger icon>
              <i class='bx bx-heart'></i>
            </vs-button>
            <vs-button class="btn-chat" shadow primary>
              <i class='bx bx-chat' ></i>
              <span class="span">
                54
              </span>
            </vs-button>
          </template>
        </vs-card> 
      </vs-col>
      <vs-col align="center" lg="3" sm="4" xs="12">
        <vs-card @click="openDetail(2)">
          <template #title>
            <h3>Pot with a plant</h3>
          </template>
          <template #img>
            <img src="https://images.pexels.com/photos/219302/pexels-photo-219302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="">
          </template>
          <template #text>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </template>
          <template #interactions>
            <vs-button danger icon>
              <i class='bx bx-heart'></i>
            </vs-button>
            <vs-button class="btn-chat" shadow primary>
              <i class='bx bx-chat' ></i>
              <span class="span">
                54
              </span>
            </vs-button>
          </template>
        </vs-card> 
      </vs-col>
      <vs-col align="center" lg="3" sm="4" xs="12">
        <vs-card>
          <template #title>
            <h3>Pot with a plant</h3>
          </template>
          <template #img>
            <img src="https://images.pexels.com/photos/219302/pexels-photo-219302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="">
          </template>
          <template #text>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </template>
          <template #interactions>
            <vs-button danger icon>
              <i class='bx bx-heart'></i>
            </vs-button>
            <vs-button class="btn-chat" shadow primary>
              <i class='bx bx-chat' ></i>
              <span class="span">
                54
              </span>
            </vs-button>
          </template>
        </vs-card> 
      </vs-col>
      <vs-col align="center" lg="3" sm="4" xs="12">
        <vs-card>
          <template #title>
            <h3>Pot with a plant</h3>
          </template>
          <template #img>
            <img src="https://images.pexels.com/photos/219302/pexels-photo-219302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="">
          </template>
          <template #text>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </template>
          <template #interactions>
            <vs-button danger icon>
              <i class='bx bx-heart'></i>
            </vs-button>
            <vs-button class="btn-chat" shadow primary>
              <i class='bx bx-chat' ></i>
              <span class="span">
                54
              </span>
            </vs-button>
          </template>
        </vs-card> 
      </vs-col>
      <vs-col align="center" lg="3" sm="4" xs="12">
        <vs-card>
          <template #title>
            <h3>Pot with a plant</h3>
          </template>
          <template #img>
            <img src="https://images.pexels.com/photos/219302/pexels-photo-219302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="">
          </template>
          <template #text>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </template>
          <template #interactions>
            <vs-button danger icon>
              <i class='bx bx-heart'></i>
            </vs-button>
            <vs-button class="btn-chat" shadow primary>
              <i class='bx bx-chat' ></i>
              <span class="span">
                54
              </span>
            </vs-button>
          </template>
        </vs-card> 
      </vs-col>
      <vs-col align="center" lg="3" sm="4" xs="12">
        <vs-card>
          <template #title>
            <h3>Pot with a plant</h3>
          </template>
          <template #img>
            <img src="https://images.pexels.com/photos/219302/pexels-photo-219302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="">
          </template>
          <template #text>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </template>
          <template #interactions>
            <vs-button danger icon>
              <i class='bx bx-heart'></i>
            </vs-button>
            <vs-button class="btn-chat" shadow primary>
              <i class='bx bx-chat' ></i>
              <span class="span">
                54
              </span>
            </vs-button>
          </template>
        </vs-card> 
      </vs-col>
    </vs-row>
  </div>
</template>

<script>

export default {
  name: 'Home',
  methods: {
    openDetail(id) {
      this.$router.push('/detail/'+id)
    }
  },
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