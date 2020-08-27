export const postItem = { 
    render: (data) => {
     let view = `<div class="box-post"> 
     <p id="Fecha" class="Fecha"> ${data.fecha} 
     <h1 id="title" class="title">${data.title}</h1>
    <h2 id="Idea" class="Idea"> ${data.idea}<h2>
        <div id="areaButtons" class="postBar">
          <a href="" id="btnEdit" type="button" ><img src="/icons/editPost.png" class="iconButton"></a>
          <a href="" id="btnErase" type="button" ><img src="/icons/erasePost.png" class="iconButton"></a>
          <a href="" id="btnLike" type="button" ><img src="/icons/icon-like.png" class="iconButton"></a>
        </div>

      </div>
      `
      return view;
    },
    afterRender: () => {
      let btnEdit = document.getElementById("btnEdit");
      btnEdit.addEventListener("click", () => {
        console.log("editando")
    });
      let btnErase = document.getElementById("btnErase");
      btnErase.addEventListener("click", () => {
        console.log("borrando")
    });   
    },
}


//la clave de identificación de usuario es uid: firebase.auth().currentUser.uid