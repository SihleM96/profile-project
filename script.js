let openModal = () => {
    // Get modal

    let modal =
    document.getElementById("myModal");
    modal.style.display = "block"
    //Get <span> element that closes modal

    let span =
    document.getElementsByClassName("close")[0];

    //when user clicks on <span>(x), close modal
    span.onclick = function() {
        modal.style.display = "none";
    }
}
