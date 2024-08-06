let collapsibles = document.querySelectorAll(".collapsible");
const icons = document.getElementById('toggleIcon');


collapsibles.forEach((item,icon) =>
  item.addEventListener("click", function () {
    item.classList.toggle("collapsible--expanded");

  })
);


function showSideBar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex'
}

function hideSideBar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none'
}


// document.getElementById('toggleBtn').addEventListener('click', function() {
//     const content = document.getElementById('toggleContent');
//     const icon = document.getElementById('toggleIcon');
    
//     if (content.style.display === 'none' || content.style.display === '') {
//         content.style.display = 'block'; 
//         icon.src = './images/chevron +.png'; 
//     } else {
//         content.style.display = 'none';
//         icon.src = './images/chevron-.png'; 
//     }
// });


let toggle = document.getElementById('toggleBtn');

toggle.addEventListener('click', function(){

});