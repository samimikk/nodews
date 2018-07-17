<template>
  <div class="booklist">
      <h1>Book listing</h1>

    <div class="loading" v-if="loading">
      Loading...
    </div>

  </div>
</template>

<script>

import Axios from 'axios';

export default {
    data () {
        return {
            loading: false
        }
    },

    created () {
        this.fetchData()
    },

    methods: {
        fetchData () {
            this.loading = true;
            Axios.get('your_host_goes_here/api/book');
        }
    }
}

</script>
