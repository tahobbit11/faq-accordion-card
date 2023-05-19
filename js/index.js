// Text and button
const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
    question.addEventListener("click", () => {
        question.classList.toggle("open");
    });
});