
const wall = () => {
    document.getElementById("root").innerHTML = "";
    viewWall =
    `
    
    <section id = "mainWall">
    <p> Welcome to your Wall </p>
    <p> Here you can see your posts, edit them or erase them </p>
    <p> also you can see how many likes they have </p>
    <p> Enjoy! </p>
    <button id="btnEdit"> Ed </button>
    </section>
    
    `
    ;

    let divElement = document.createElement('div');
    divElement.innerHTML = viewWall;
    return divElement;
};
    
export default wall;
