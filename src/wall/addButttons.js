export const newBtns = (editId, eraseId) => {
let viewBottomDiv = `
    <button class="editButton"  id=${editId}><img class="iconPost" src="../img/editPost.png"></button>
    <button class="eraseButton"  id=${eraseId}><img class="iconPost" src="../img/erasePost.png"></button>`
return viewBottomDiv;
};

export const theAuthor = (myUser, author) => {
    console.log(myUser, author);
    if (myUser===author) {
    return true;
    } else {
    return false;
    };
}