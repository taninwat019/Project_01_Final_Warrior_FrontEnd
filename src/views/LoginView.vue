<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      student: {
        id: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      // Add logic to send login data to the server
      console.log('Login Data:', this.student);
      // Add an API call to authenticate the student
      // Example: axios.post('/api/login', this.student)
    },
  },
});
</script>

<template>
    <div class="container">
      <div class="title">Login</div>
      
      <form @submit.prevent="login">
        <div class="user-details">
          <div class="input-box">
            <span class="details">ID </span>
            <input v-model="student.id" type="text" id="id" placeholder="ID" required>
          </div>
          <div class="input-box">
            <span class="details">Password </span>
            <input v-model="student.password" type="password" id="password" placeholder="password" required />
          </div>
        </div>
        <div class="button">
          <input type="submit" value="Login">
        </div>
        <span class="details">Don't have account? </span><a class="register" href="Register">Register</a>
      </form>
    </div>
  </template>
  
  <style scoped>
  *{
    color: black;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins',sans-serif;
  }
  body{
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background: #1F2937;
  }
  .container{
    max-width: 700px;
    width: 100%;
    background: #fff;
    padding: 25px 30px;
    border-radius: 5px;
    margin: auto;
  }
  .container .title{
    font-size: 25px;
    font-weight: 500;
  }
  .container form .user-details{
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0 12px 0;
  }
  form .user-details .input-box{
    margin-bottom: 15px;
    width: calc(100% / 2 - 20px);
  }
  .user-details .input-box .details{
    display: block;
    font-weight: 500;
    margin-bottom: 5px;
  }
  .user-details .input-box input{
    height: 45px;
    width: 90%;
    outline: none;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding-left: 15px;
    font-size: 16px;
    border-bottom-width: 2px;
    transition: all 0.3s ease;
  }
  .user-details .input-box input:focus,
  .user-details .input-box input:valid{
    border-color:  #FFC288;
  }
  form input[type="radio"]{
    display: none;
  }
  form .button{
    height: 45px;
    margin: 45px 0;
  }
  form .button input{
    height: 100%;
    width: 90%;
    color: #fff ;
    border: none;
    font-size: 18px;
    font-weight: 500;
    border-radius: 5px;
    letter-spacing: 1px;
    background: #FFC288;
  }
  form .button input:hover{
    background: #ffac5f;
  }
  @media (min-width: 1024px){
    #app{
      display: grid;
      grid-template-columns: 1fr;
      padding: 0 2rem;
    }
  }
  @media(max-width: 584px){
   .container{
    max-width: 100%;
  }
  form .user-details .input-box{
      margin-bottom: 15px;
      width: 100%;
    }
    form .category{
      width: 100%;
    }
    .content form .user-details{
      max-height: 300px;
      overflow-y: scroll;
    }
    .user-details::-webkit-scrollbar{
      width: 5px;
    }
    }
    @media(max-width: 459px){
    .container .content .category{
      flex-direction: column;
    }
    
  }
  .register {
    color: #FFC288;
  }
  </style>
  