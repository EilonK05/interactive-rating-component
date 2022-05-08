const ratingDiv = document.querySelector('.rating-component');
const thanksDiv = document.querySelector('.after-submit-component');
const numberButtons = document.querySelectorAll('.number');
const submitButton = document.querySelector('button');
const thanksRating = document.querySelector('.rating-amount');

numberButtons.forEach(btn => btn.addEventListener('click', (e) => numberClick(e)));

submitButton.addEventListener('click', () => {
    ratingDiv.classList.add('hidden');
    thanksDiv.classList.remove('hidden');
})

function numberClick(e) {
    submitButton.disabled = false;
    for (const button of numberButtons) {
        if (button == e.target) {
            button.classList.add('selected');
            thanksRating.textContent = `You selected ${button.textContent} out of 5`
        } else {
            button.classList.remove('selected');
        }
    }
}