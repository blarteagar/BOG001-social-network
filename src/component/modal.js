export const loadModal = (title,message) => {
  document.getElementById("headerModal").innerText = title;
  document.getElementById("messageModal").innerText = message;
  let modal = document.getElementById("myModal");
  modal.style.display = "flex";
}

export const closeModal = () => {
let CLOSE =  document.getElementById("myModal");
CLOSE.style.display = "none";
}

export const windowModal = { 
  render: async () => {
   let view = `<div class="modal-content">
   <header class="modal-header" id="closeModal">
     <h2 id="headerModal"></h2>
     <span id="closeButton" class="close">&times;</span>
    </header>
    <article id="bodyModal" class="modal-body"> 
     <section id="contentElement">
        <h3 class="messageModal" id="messageModal"></h3>
     </section>      
  </article>
    </div>
     `
     document.getElementById("myModal").innerHTML = view;
  },
  afterRender: () => {
    document.getElementById("closeButton").addEventListener('click',closeModal)
  } 
    
}
     


  