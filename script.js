document.getElementById("nextButton").addEventListener("click", () => {
    let currentStep = 1;
    function showNext() {
        let currentText = document.getElementById("text" + currentStep);
        let nextText = document.getElementById("text" + (currentStep + 1));
        if (nextText) {
            currentText.classList.remove("visible");
            nextText.classList.add("visible");
            currentStep++;
        } else {
            document.getElementById("nextButton").style.display = "none";
        }
    }
    showNext();
});

setTimeout(() => {
    document.getElementById("bg-music").play();
}, 2000);
