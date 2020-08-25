var db = firebase.firestore()
var auth = firebase.auth().currentUser;
var docRef;
moment.locale('es'); 

export const post = async (title, idea, fecha) => {
  debugger
    try {
     docRef = await db.collection("Posts").add({
      uid: firebase.auth().currentUser.uid,
      title: title,
      idea: idea,
      name: firebase.auth().currentUser.displayName || "no definido",
      email: firebase.auth().currentUser.email,
      fecha:  moment().format('MMMM Do YYY, h:mm:ss a')
    });
    console.log("post creado: ", docRef.id);
    debugger
} catch (error) {
      debugger
    console.error("Error post: ", error);
  }
};


 
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


 