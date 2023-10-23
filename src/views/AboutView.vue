<template>
    <div class="home-container">
      <div class="home-container1">
        <div class="home-container2"><h1 class="home-text">About Us</h1></div>
        <div class="home-container3">
          <div class="home-container4">
            <img
              src="https://avatars.githubusercontent.com/u/85700574?s=400&u=9c2ddeec917b23b0b4791fb70913aa22fd8aea59&v=4"
              alt="Jakkaphat"
              class="home-image"
            />
            <h1 class="home-text1">Jakkaphat Ploylake</h1>
            <span class="home-text2">642115006</span>
            <h1 class="home-git">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <a href="https://github.com/ridertus"><i style="font-size:24px" class="fa">&#xf09b; </i> ridertus</a></h1>
          </div>
          <div class="home-container5"></div>
          <div class="home-container6">
            <img
              src="https://avatars.githubusercontent.com/u/120053788?v=4"
              alt="Taninwat"
              class="home-image1"
            />
            <h1 class="home-text3">Taninwat Phuttichaiwarangkul</h1>
            <span class="home-text4">642115019</span>
            <h1 class="home-git">
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
              <a href="https://github.com/taninwat019"><i style="font-size:24px" class="fa">&#xf09b; </i> taninwat019</a></h1>
          </div>
          <div class="home-container7"></div>
          <div class="home-container8">
            <img
              src="https://avatars.githubusercontent.com/u/120012234?v=4"
              alt="Thaiphat"
              class="home-image2"
            />
            <h1 class="home-text5">Thaiphat Sukhumpraisan</h1>
            <span class="home-text6">642115024</span>
            <h1 class="home-git">
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
              <a href="https://github.com/LiquifiedPopuko"><i style="font-size:24px" class="fa">&#xf09b; </i> LiquifiedPopuko</a></h1>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .home-container {
    width: 100%;
    display: flex;
    overflow: auto;
    min-height: 100vh;
    align-items: flex-start;
    flex-direction: row;
    justify-content: center;
    background-color: #ffdfc0;
  }
  .home-container1 {
    flex: 0 0 auto;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .home-container2 {
    width: 100%;
    height: 213px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .home-text {
    font-size: 5em;
    font-weight: 600;
    font-family: "Poppins",sans-serif;
  }
  .home-container3 {
    flex: 0 0 auto;
    width: auto;
    height: 100px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
  .home-container4 {
    flex: 0 0 auto;
    width: 400px;
    height: 450px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    flex-direction: column;
    justify-content: center;
    background-color: #FFC288;
  }
  .home-image {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 50%;
  }
  .home-image:hover {
    width: 600;
    height: 600;
  }

  .home-text1 {
    font-weight: 1000;
    padding: 15px;
    font-size: 20px;
    margin-top: 10px;
    font-family: "Poppins",sans-serif;
    margin-bottom: 5px;
  }
  .home-text2 {
    font-family: "Poppins",sans-serif;
  }
  .home-container5 {
    flex: 0 0 auto;
    width: 50px;
    height: 450px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .home-container6 {
    flex: 0 0 auto;
    width: 400px;
    height: 450px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    flex-direction: column;
    justify-content: center;
    background-color: #FFC288;
  }
  .home-image1 {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 50%;
  }
  .home-text3 {
    font-weight: 1000;
    padding: 15px;
    font-size: 20px;
    margin-top: 15px;
    font-family: "Poppins",sans-serif;
    margin-bottom: 5px;
  }
  .home-container7 {
    flex: 0 0 auto;
    width: 50px;
    height: 450px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .home-container8 {
    flex: 0 0 auto;
    width: 400px;
    height: 450px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    flex-direction: column;
    justify-content: center;
    background-color: #FFC288;
  }
  .home-image2 {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 50%;
  }
  .home-text5 {
    font-weight: 1000;
    padding: 15px;
    font-size: 20px;
    margin-top: 15px;
    font-family: "Poppins",sans-serif;
    margin-bottom: 5px;
  }
  @media(max-width: 1600px) {
    .home-container {
      border-color: var(--dl-color-gray-black);
      border-width: 1px;
    }
    .home-container2 {
      height: 223px;
      padding-bottom: 0px;
    }
    .home-text {
      width: 453px;
      height: 100px;
      font-size: 5em;
      text-align: center;
      font-family: 'Poppins',sans-serif;
      padding-bottom: 0px;
      text-transform: capitalize;
    }
    .home-container3 {
      height: 464px;
    }
    .home-container4 {
      width: 400px;
      height: auto;
      border-radius: 8px;
      padding: 10px;
      background-color: #FFC288;
    }
    .home-image {
      width: 300px;
      height: 300px;
      border-radius: 50%;
    }
    .home-text1 {
      font-size: 20px;
      font-family: 'Poppins',sans-serif;
      padding-top: 15px;
      padding-left: 15px;
      padding-right: 15px;
      padding-bottom: 5px;
    }
    .home-text2 {
      font-family: 'Poppins',sans-serif;
    }
    .home-container5 {
      width: 50px;
      height: 450px;
    }
    .home-container6 {
      width: 400px;
      height: auto;
      border-radius: 8px;
      padding: 10px;
      background-color: #FFC288;
    }
    .home-image1 {
      width: 300px;
      height: 300px;
      border-radius: 50%;
    }
    .home-text3 {
      font-size: 20px;
      font-family: 'Poppins',sans-serif;
      padding-top: 15px;
      padding-left: 15px;
      padding-right: 15px;
      padding-bottom: 5px;
    }
    .home-text4 {
      font-family: 'Poppins',sans-serif;
    }
    .home-container7 {
      width: 50px;
      height: 450px;
    }
    .home-container8 {
      width: 400px;
      height: auto;
      border-radius: 8px;
      padding: 10px;
      background-color: #FFC288;
    }
    .home-image2 {
      width: 300px;
      height: 300px;
      border-radius: 50%;
    }
    .home-text5 {
      font-size: 20px;
      font-family: 'Poppins',sans-serif;
      padding-top: 15px;
      padding-left: 15px;
      padding-right: 15px;
      padding-bottom: 5px;
    }
    .home-text6 {
      font-family: 'Poppins',sans-serif;
    }
  }
  @media(max-width: 1200px) {
    .home-container4 {
      width: 300px;
    }
    .home-container6 {
      width: 293px;
    }
    .home-container8 {
      width: 300px;
    }
  }
  .home-git{
    font-weight: 1000;
    padding: 10px;
    font-size: 20px;
    font-family: "Poppins",sans-serif;
    margin-bottom: 5px;
  }
  </style>
  