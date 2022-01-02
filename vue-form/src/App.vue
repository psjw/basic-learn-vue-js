<template>
<!--.prevent event.preventDefault(); 와같은동작 -->
  <form v-on:submit.prevent="submitForm">
    <div>
      <!-- for="username"은 text의 id="username"을 바라본다. -->
      <label for="username">id:</label>
      <input type="text" id="username" v-model="username"/>
    </div>
    <div>
      <label for="password">pw:</label>
      <input type="password" id="password" v-model="password"/>
    </div>
    <button type="submit" >login</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data: function(){
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    //submitForm: function(event){
    submitForm: function(){
      //event.preventDefault();  
      console.log(this.username, this.password);
      var url = 'https://jsonplaceholder.typicode.com/users';
      var data = {
        username: this.username,
        password: this.password
      }
      axios.post(url, data)
      .then(function(response){
        console.log(response);
      })
      .catch(function(error){
          console.log(error);
      });
      
    }
  },
}
</script>

<style>

</style>