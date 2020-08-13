
const wall = () => {
    let content = document.getElementById("root");
    content.innerHTML = '';
    let template = `<section id = "mainWall">
    <p> Welcome to your Wall </p>
    <p> Here you can see your posts, edit them or erase them </p>
    <p> also you can see how many likes they have </p>
    <p> Enjoy! </p>
    <button id="btnEdit"> Ed </button>
    </section>`;
    return template;
}
    
export default wall;
