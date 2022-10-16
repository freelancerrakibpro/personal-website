$(function(){
   
    $(".typed").typed({
        strings: [" I am Freelancer Rakib", " I am Front-End developer ", " I am Graphics Designer " ,],
        loop: true,
        typeSpeed: 30,
        startDelay: 1200,
        backSpeed: 20,
        backDelay: 500,
        loopCount: 500,
        showCursor: false,
    })
    
});



document.addEventListener("click",function (e){
    if(e.target.classList.contains("gallery-item")){
          const src = e.target.getAttribute("src");
          document.querySelector(".modal-img").src = src;
          const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
          myModal.show();
    }
  });