<template>
  <div class="about">
    <vs-row justify="center">
      <vs-col lg="6" sm="8" xs="12">
        <h1>{{ title }}</h1>
      </vs-col>
    </vs-row>
    <vs-row justify="center">
      <vs-col lg="6" sm="8" xs="12">
        <img :src="img" width="100%">
      </vs-col>
    </vs-row>
    <vs-row justify="center">
      <vs-col lg="6" sm="8" xs="12">
        <p>{{ content }}</p>
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
export default {
  name: 'Detail',
  data() {
    return {
      title: 'Este es la noticia noticiosa para noticiar personas noticieras',
      img: 'https://images.pexels.com/photos/219302/pexels-photo-219302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iure cum accusamus hic enim ad porro ab accusantium unde nesciunt? Veritatis delectus repellendus ab rerum officia quas. Expedita, iusto blanditiis.'
    }
  },
  methods: {
    getDetail() {
      // obtener detalle de la noticia desde la API
    }
  },
}
</script>

<style>
  img {
    border-radius: 4%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
</style>