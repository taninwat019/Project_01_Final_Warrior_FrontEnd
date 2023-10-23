<template>
  <div class="container">
    <div class="title">Edit Profile</div>
    <div class="content">
      <form>
        <div class="user-details">
          <div class="input-box">
            <span class="details">ID</span>
            <input type="text" placeholder="ID"> <!-- <input type="text" v-model="student.id" placeholder="ID" required> -->
          </div>
          <div class="input-box">
            <span class="details">Name</span>
            <input type="text" placeholder="Name">
          </div>
          <div class="input-box">
            <span class="details">Surname</span>
            <input type="text" placeholder="Surname">
          </div>
          <div class="input-box">
            <span class="details">Department</span>
            <input type="text" placeholder="Department">
          </div>
          <div class="input-box">
            <span class="details">New Password</span>
            <input type="password" placeholder="New Password">
          </div>
          <div class="input-box">
            <span class="details">Confirm New Password</span>
            <input type="password" placeholder="Confirm New Password">
          </div>
          <div class="input-box-img">
            <span class="details">Profile image</span>
            <input type="file" id="img" name="img" accept="image/*">
          </div>
        </div>
        <div class="button">
          <input type="submit" value="Confirm">
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
// export default {
//   data() {
//     return {
//       student: {
//         id: '',
//         name: '',
//         surname: '',
//         department: '',
//         password: '',
//       }
//     };
//   },
//   methods: {
//     registerStudent() {
//       // You can save the student data to a database or send it to an API here
//       console.log('Student registered:', this.student);
//       // Reset the form fields
//       this.student = {
//         id: '',
//         name: '',
//         surname: '',
//         department: '',
//         password: ''
//       };
//     }
//   }
// };
</script>
 
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
  background: #ffdfc0;
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
.user-details .input-box-img input:focus,
.user-details .input-box-img input:valid{
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