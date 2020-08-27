// <div class="stickyPad">
// <div class="navBar">
//     <div class="close"></div>
//     <div class="minimize"></div>
// </div>
// <div class="container"><textarea name="" id="" cols="30" rows="10"></textarea></div>
// </div> 
function createSticky() {
    // create all the required div

    let textarea = document.createElement("textarea");
    // create subtree
    let container = createBox();
    container.appendChild(textarea);
    // add styling to them using css classes

    textarea.setAttribute("class", "textarea");
    // append it to body


}