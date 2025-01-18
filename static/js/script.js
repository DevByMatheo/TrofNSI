const uploadForm = document.querySelector(".uploadForm");
const results = document.querySelector(".results");

uploadForm.addEventListener("submit", async(e) =>{
    const formData = new FormData();
    const image = document.querySelector('.image').files[0];
    formData.append('image', image);

})