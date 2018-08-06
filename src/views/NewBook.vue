<template>
  <div class="newbook">
    <h1>Add new book</h1>
    <form>
        
        <input type="text" v-model="name" placeholder="name"><br/>
        <input type="text" v-model="author" placeholder="author"><br/>
        <input type="text" v-model="isbn" placeholder="isbn"><br/>
        <input type="text" v-model="description" placeholder="description"><br/>
        <input type="text" v-model="numofpages" placeholder="num. of pages"><br/>
        
        <br/>
        <button v-on:click="storeBook">Create book</button>
    </form>
  </div>
</template>

<script>

import Axios from 'axios';

export default {
    data () {
      return {
        name: "",
        author: "",
        isbn: "",
        description: "",
        numofpages: ""
      }
    },

    methods: {
        storeBook: function(event) {
            event.preventDefault();

            let book = {
                name: this.name,
                author: this.author,
                isbn: this.isbn,
                description: this.description,
                numofpages: this.numofpages
            };

            Axios.post(process.env.VUE_APP_API_URI+'/api/book',book).
                then( (resp) => {
                    console.log(resp);
                });
        }
    }
}

</script>
