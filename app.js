let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let post = document.getElementById("post");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log ("buttom click");

    formvalidation();
});

let formvalidation = () =>{
    if (input.value === ""){
        msg.innerHTML = "post não deve está em branco";
        console.log("failure");
    }
    else{
        console.log("sucesso");
        msg.innerHTML = "";
        acceptData();
    }
};

let data = {};

let acceptData = () => {
    data["texto"] = input.value;
    console.log(data)
    createpost();
};

let createpost = () => {
    post.innerHTML += `
    <div>
    <p>${data.texto}</p>
    <span class="options">
      <i onClick="editPost(this)" class="fas fa-edit"></i>
      <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>
  `;
  input.value = "";
};

let deletePost = (e) => {
   e.parentElement.parentElement.remove(); 
};
let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}