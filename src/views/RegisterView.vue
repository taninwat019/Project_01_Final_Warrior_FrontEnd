<script lang="ts">
import type { StudentItem } from '@/type';

  export default {
    data() {
      return {
        student: {
          id: 0,
          name: '',
          surname: '',
          department: '',
          password: '',
          image: '',
        }
      };
    },
    methods: {
    registerStudent() {
      // Create an instance of the StudentItem interface and populate it with the form data
      const newStudent: StudentItem = {
        id: this.student.id,
        name: this.student.name,
        surname: this.student.surname,
        image: this.student.image, // Assign the image data
        advisorId: '', // You may need to provide values for these properties
        courseId: [],
      };

      // You can now save the 'newStudent' data to your database or API here
      // Example code to save to the database:
      // saveToDatabase(newStudent);

      console.log('Student registered:', newStudent);

      // Reset the form fields
      this.student = {
        id: 0,
        name: '',
        surname: '',
        department: '',
        password: '',
        image: '', // Clear the image input
      };
    },
    handleImageUpload(event: Event) {
      const fileInput = event.target as HTMLInputElement;
      if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = () => {
          this.student.image = reader.result as string;
        };
        reader.readAsDataURL(fileInput.files[0]);
      }
    }
    }
  };
</script>

<template>
    <div class="container">
      <div class="title">Registration</div>
      <div class="content">
        <form @submit.prevent="registerStudent">
          <div class="user-details">
            <div class="input-box">
              <span class="details">ID </span>
              <input type="text" v-model="student.id" placeholder="ID" required>
            </div>
            <div class="input-box">
              <span class="details">Name </span>
              <input type="text" v-model="student.name" placeholder="Name" required>
            </div>
            <div class="input-box">
              <span class="details">Surname </span>
              <input type="text" v-model="student.surname" placeholder="Surname" required>
            </div>
            <div class="input-box">
              <span class="details">Department </span>
              <input type="text" v-model="student.department" placeholder="Department" required>
            </div>
            <div class="input-box">
              <span class="details">Password </span>
              <input type="password" v-model="student.password" placeholder="Password" required>
            </div>
            <div class="input-box">
              <span class="details">Confirm Password </span>
              <input type="password" placeholder="Confirm Password" required>
            </div>
            <div class="input-box-img">
              <label for="img">Profile image </label>
              <input type="file" id="img" name="img" accept="image/*" @change="handleImageUpload">
            </div>
          </div>
          
          <div class="button">
            <input type="submit" value="Register">
          </div>
          <span class="details">Already have an account? </span><a class="login" href="Login">Login</a>
        </form>
      </div>
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
    width: 95%;
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
  .user-details .input-box-img .details{
    display: block;
    font-weight: 500;
    margin-bottom: 5px;
  }
  .user-details .input-box-img input{
    height: 45px;
    width: auto;
    outline: none;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding-left: 15px;
    padding-top: 8px;
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
  .login {
    color: #FFC288;
  }
  </style>