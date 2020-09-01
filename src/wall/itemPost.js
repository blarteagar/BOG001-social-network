import { likeFunction, counterFunction } from "../FireFunctions/likes.js"
import { theAuthor, newBtns } from "../wall/addButttons.js"

export const postItem = {

  render: async (postId , postData) => {
    
    let buttonId = "btnHeart" + postId;
    let counterId = "counter" + postId;

//Blanca
    let myUser = (firebase.auth().currentUser.uid) + postId;
    let author = (postData.uid) + postId;

    let bottomId = "bottom" + postId;
    let editId = "btnEdit" + postId;
    let eraseId = "btnErase" + postId;
    let buttons = "";

    if (theAuthor(myUser, author)) {
      console.log("Usuario conectado es el autor del post");
      buttons=newBtns(editId, eraseId);
    }  else {
      buttons="";
    };
//Blanca

    let view = `<div class="box-post"> 
     <header class="headerPost">
     <p class="userNamePost"> ${postData.name} </p>
     <p id="Fecha" class="Fecha"> ${postData.fecha} </p>
     </header>

     <main class="mainPost">
     <h2 id="Idea" class="Idea"> ${postData.idea}</h2>
     </main>
     
     <footer class="footerPost" id="footerPostId">
     ${buttons}//Blanca
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
    
    let counterId = "counter" + postId;   
    let counter = document.getElementById(counterId);
    
    
    let callback = (snapshot) => {
      let result;
      result = snapshot.docs.length;
      console.log(result);
      counter.innerHTML= result;
      
  
    }
    
    counterFunction(postId, callback);
    
    

    btnHeartThisPost.addEventListener("click", async () => {

      try {
        await likeFunction(postId);  
        console.log("finalizada likeFunction del addeventlistener"); 
      }
      catch { console.log("error")}      

    });
  }
}

