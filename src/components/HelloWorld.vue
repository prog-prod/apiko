<template>
  <div class="hello">
    <form @submit.prevent="addLocation(name, image)">
      <input v-model="name" placeholder="Location Name">
      <input v-model="image" placeholder="Location Image URL">
      <button type="submit">Add New Location</button>
    </form>
    <div class="float-left mr-2" v-for="(location, idx) in locations" :key="idx">
      <h1>{{ location.name }} <button @click="deleteLocation(location.id)">Delete</button></h1>
      <img :src="location.image" width="300">
    </div>
  </div>
</template>

<script>


import { db } from '@/db'
export default {
  name: 'HelloWorld',
  props: [
      'msg'
  ],
  data () {
    return {
      locations: [],
      name:'',
      image: '',
    }
  },
  methods: {
    addLocation (name, image) {      // <-- новый метод
      const createdAt = new Date()
      db.collection('locations').add({ name, image, createdAt })
    },
    deleteLocation (id) {   // <-- новый метод
      db.collection('locations').doc(id).delete()
    }
  },
  firestore () {
    return {
      locations: db.collection('locations').orderBy('createdAt')
    }
  },
  created() {
    console.log(this.locations)
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.float-left{
  float: left;
}
.mr-2{
  margin-right: 10px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
