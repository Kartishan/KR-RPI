const fullPhoto = document.querySelector('.fullPhoto');
const thumbnails = document.querySelectorAll('.smallPhoto');

for(let i = 0; i < thumbnails.length; i++){
    thumbnails[i].addEventListener('click', function(){
        fullPhoto.src = thumbnails[i].src;
    });
}

var truncateTextElements = document.querySelectorAll('.truncateText');

truncateTextElements.forEach(function(element) {
    element.addEventListener('click', function() {
        element.classList.toggle('full');
    });
});
const modalOpen=document.getElementById("modalOpen");
const CommentModal= document.getElementById("CommentModal");
const closeModalBtn= document.getElementById("closeModalBtn");

modalOpen.addEventListener("click",function(){
    CommentModal.classList.add("open")
});
closeModalBtn.addEventListener("click",function(){
    CommentModal.classList.remove("open")
});
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        CommentModal.classList.remove("open")
    }
});
document.getElementById('Checker').addEventListener('submit', function(e){
    e.preventDefault();
    alert('Отзвы успешно оставлен!');
})


const fifthContainerGrids = document.querySelectorAll('.fifthContainerGrid');
const modalOpenButton = document.getElementById('CommentOpen');
let areReviewsVisible = false;

modalOpenButton.addEventListener('click', function() {
    fifthContainerGrids.forEach(function(grid) {
        if (areReviewsVisible) {
            grid.classList.add('hidden');
            for (let i = 0; i < 1; i++) {
                fifthContainerGrids[i].classList.remove('hidden');
            }
        } else {
            grid.classList.remove('hidden');
        }
    });

    areReviewsVisible = !areReviewsVisible;
});
