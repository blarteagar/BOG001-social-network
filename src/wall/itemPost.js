import { likeFunction, counterFunction } from "../FireFunctions/likes.js"

export const postItem = {

  render: (postId , postData) => {
    
    let buttonId = "btnHeart" + postId;
    let counterId = "counter" + postId;


    let view = `<div class="box-post"> 
     <header class="headerPost">
     <p class="userNamePost"> ${postData.name} </p>
     <p id="Fecha" class="Fecha"> ${postData.fecha} </p>
     </header>

     <main class="mainPost">
     <h2 id="Idea" class="Idea"> ${postData.idea}</h2>
     </main>
     
     <footer class="footerPost" id="footerPostId">
     <p class="likesCount" id=${counterId}></p>
     <button class="heartWall"  id=${buttonId}><img class="heartWall" src="../img/heart.png"></button>
     
     </footer>
      
    </div>`;

    
    return view;

  },
  afterRender: async (postId) => {
    let buttonId = "btnHeart" + postId;
    let counterId = "counter" + postId;

    let btnHeartThisPost = document.getElementById(buttonId);

    btnHeartThisPost.addEventListener("click", () => {
      likeFunction(postId);
    })

    let count = await counterFunction(postId);
    let counterText = document.createTextNode(count);
    let counter = document.getElementById(counterId);

    counter.appendChild(counterText);

  },
};

//<h1 id="title" class="title">${data.title}</h1>
