<template>
    <div id="feed">
      <div v-for="post in posts" :key="post.id" class="post">
        <div class="post-wrapper">
          <div class="user">
            <img :src="post.user.profilePicture" :alt="post.user.name + ' Profile Picture'" />
            <span>{{ post.user.name }}</span>
          </div>
          <div class="post-content">
            <p>{{ post.content }}</p>
            <img :src="post.image" :alt="post.description" v-if="post.image" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    data() {
      return {
        posts: [
          {
            id: 1,
            user: {
              name: 'John Doe',
              profilePicture: 'https://via.placeholder.com/150'
            },
            content: 'Hello, this is my first post!',
            image: 'https://via.placeholder.com/300',
            description: 'Placeholder Image',
            comments: [
              {
                id: 1,
                user: 'Jane Doe',
                content: 'Nice post! Keep it up!'
              },
              {
                id: 2,
                user: 'James Smith',
                content: 'Great content. Looking forward to more.'
              }
            ]
          },
          // More posts...
        ]
      };
    },
  };
  </script>
  
  <style>
  #feed {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .post {
    width: 60%;
    margin: 20px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
  }
  
  .post-wrapper {
    display: flex;
    flex-direction: column;
  }
  
  .user {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .user img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }
  
  .post-content {
    margin-bottom: 10px;
  }
  
  .reactions button {
    margin-right: 10px;
  }
  
  .comments {
    margin-top: 10px;
  }
  
  .comment {
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
  
  .comment span {
    font-weight: bold;
  }
  </style>
  