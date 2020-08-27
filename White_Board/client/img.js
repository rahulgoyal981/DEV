let upload = document.querySelector("#upload");
let download = document.querySelector("#download");
upload.addEventListener("change", function (e) {
    let uInp = document.querySelector("input[type='file']");
    // any image is selected
    // let changed = false;
    let container = createBox();
    let file = uInp.files[0];
    let img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    img.setAttribute("class", "upload-img");
    container.appendChild(img);
    //  remove
    uInp.value = null;

});

download.addEventListener("click",function(){
    let a = document.createElement("a");
    a.download = "file.png";
    a.href = board.toDataURL('image/png');
    a.click();
    a.remove();
})
// any image is selected
// let changed = false;


    // uInp.click();
    // uInp.addEventListener("change",function(){
    //     let file = uInp.files[0];
    //     let img = document.createElement("img");
    //     img.src = URL.createObjectURL(file);
    //     let container = createBox();
    //     img.setAttribute("class","upload-img");
    //     container.appendChild(img);
    //     img.onload = function(){
    //         URL.revokeObjectURL(img.src);
    //     }
    // console.log(upload.files);
    // const reader = new FileReader();
    // reader.readAsDataURL(upload.files[0]);
    // let img = document.createElement("img");
    // // using fileReader
    // reader.onload = function(){
    //     img.src = reader.result;
    // }
    


