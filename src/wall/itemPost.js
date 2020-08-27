export const postItem = {
  render: (data) => {
    let view = `<div class="box-post"> 
     <header class="headerPost">
     <p class="userNamePost"> ${data.name} </p>
     <p id="Fecha" class="Fecha"> ${data.fecha} </p>
     </header>

     <main class="mainPost">
     <h2 id="Idea" class="Idea"> ${data.idea}</h2>
     </main>
     
     <footer class="footerPost">
     <p class="likesCount"> 5 </p>
     <img class="heartWall" src="../img/heart.png">
     </footer>
      
    </div>`;
    return view;
  },
  afterRender: () => {},
};

//<h1 id="title" class="title">${data.title}</h1>
