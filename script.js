let collapsibles = document.querySelectorAll(".collapsible");


collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    item.classList.toggle("collapsible--expanded");
   
    const icon = item.querySelector(".toggleIcon");

    if (item.classList.contains("collapsible--expanded")) {
        icon.src = 'chevron-.png'; 
    } else {
        icon.src = 'chevron +.png'; 
    }
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



