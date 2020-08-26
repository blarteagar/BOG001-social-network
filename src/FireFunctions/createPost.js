var db = firebase.firestore()
var auth = firebase.auth().currentUser;
var docRef;
moment.locale('es'); 

export const post = async (title, idea, fecha) => {
<<<<<<< HEAD
  debugger
=======
>>>>>>> 7a639a093f067e1dcc89ead1de7ecdb7046575fe
    try {
     docRef = await db.collection("Posts").add({
      uid: firebase.auth().currentUser.uid,
      title: title,
      idea: idea,
      name: firebase.auth().currentUser.displayName || "no definido",
      email: firebase.auth().currentUser.email,
<<<<<<< HEAD
      fecha:  moment().format('MMMM Do YYY, h:mm:ss a')
    });
    console.log("post creado: ", docRef.id);
    debugger
} catch (error) {
      debugger
    console.error("Error post: ", error);
=======
      fecha:  moment().format('MMMM Do YYYY, h:mm:ss a')
    });
    console.log("post creado: ", docRef.id);
    
} catch (error) {
    
    console.error("Error al crear el  post: ", error);
>>>>>>> 7a639a093f067e1dcc89ead1de7ecdb7046575fe
  }
};


 
<<<<<<< HEAD
export const paintpost = () => { 
    return new Promise((resolve,reject) => {
        db.collection("Posts").get().then((querySnapshot) => {
            let arrayPost = [];    
            querySnapshot.forEach((doc) => {
                arrayPost.push(doc.data())
            });
            resolve(arrayPost)
            }).catch((error) => {
               console.error("error al obetner los posts");
            })
    })
}


 
=======
export const paintpost = async () => { 
 try {
  let postList = await db.collection("Posts")
  let allposts = await postList.get();
  for(const doc of allposts.docs){
    console.log(doc.id, '=>', doc.data());
  }
  return allposts
 } catch (error) {
   
 }
 
}
>>>>>>> 7a639a093f067e1dcc89ead1de7ecdb7046575fe
