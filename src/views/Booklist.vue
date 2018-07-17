<template>
  <div class="booklist">
      <h1>Book listing</h1>

    <div class="loading" v-if="loading">
      Loading...
    </div>

    <ul id="example-1">
        <li v-for="book in books" :key="book.id">
            {{ book.title }}<br/>
            {{ book.author }}
        </li>
    </ul>

  </div>
</template>

<script>

import Axios from 'axios';

export default {
    data () {
        return {
            loading: false,
            books: null
        }
    },

    created () {
        this.fetchData();
    },

    methods: {
        fetchData () {
            this.loading = true;
            Axios.get(process.env.VUE_APP_API_URI+'/api/book').then( (response) => {
                this.books = response.data;
                this.loading = false;
            });
        }
    }
}

</script>
