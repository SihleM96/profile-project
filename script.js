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

// Get HTML containers to add elements to
let slidesContainer = document.getElementById("carousel-container");
let bulletsContainer = document.getElementById("carousel-bullets");

// Content for slides
let slideContent = [
  {
    title: "Godwin Dzvapatzva",
    subtitle: "Head of Curriculum",
    description:
      "Sihle is a pleasure to work with and contributes positively to the organisation through his communication prowess.",
    image: "img/godwin.jpeg"
  },
  {
    title: "Jason Wandrag",
    subtitle: "Curriculum Developer",
    description:
      "Sihle is both bright and creative, which makes him a formidable developer. Sihle faces challenges calmly and head-on, and has shown that he is a force to be reckoned with.",
    image: "img/jason.jpg"
  },
  {
    title: "Mihlali Momoza",
    subtitle: "Colleague",
    description:
      "My experience with Sihle i can safely say his demour is thoughtful,attentive.",
    image: "img/Mihlali.JPG"
  },
  {
    title: "Athenkosi Gongotha",
    subtitle: "Colleague",
    description:
      " Independable candidate , I was always impressed by his ability of completing the work assigned to him on time.",
      image: "img/athi.JPG"
  },

  {
    title: "Zenande Dotwana",
    subtitle: "Colleague",
    description:
      "Zenande: Sihle loves working with code, and is surely one of those people I would recommend because he shows grit, commitment, focus and determination to get through whatever project he is tasked with. His energy is what makes him unique, and who wouldn't want such a person in their organisation?",
    image: "img/nande.JPG"
  },

  {
    title: "Masande Gontyeleni",
    subtitle: "Colleague",
    description:
      "Sihle has shown great willingness to help other people .I have worked with Sihle and he has shown a lot compassion and his ability to solve complex problems. He is able to take on new challenges well.",
    image: "img/Masande.JPG"
  },
];


let totalSlides = slideContent.length;

// Function to create bullets
function createBullet(index) {
    // Create button to be clicked on and add attributes
    let bulletButton = document.createElement("button");
    bulletButton.classList.add("carousel-bullet");
    bulletButton.setAttribute("onclick", `bulletSlider(${index})`);
  
    // Create bullet with active classes
    let bullet = document.createElement("i");
    bullet.classList.add("fas");
    bullet.classList.add("fa-circle");
    if (index == 0) bullet.classList.add("active");
  
    // Add bullet to bulletButton
    bulletButton.appendChild(bullet);
  
    // Add bulletButton to buttonContainer
    bulletsContainer.appendChild(bulletButton);
  }
  
  // Function to create slides
  function createSlide(slide, index) {
    // Create slide container
    let slideWrapper = document.createElement("div");
    slideWrapper.classList.add("carousel-slide");
    if (index == 0) slideWrapper.classList.add("active");
  
    // Create content for slide
    let slideImage = document.createElement("img");
    slideImage.src = slide.image;
  
    let slideHeading = document.createElement("h2");
    slideHeading.innerHTML = slide.title;
  
    let slideSubtitle = document.createElement("h4");
    slideSubtitle.innerHTML = slide.subtitle;
  
    let slideDescription = document.createElement("p");
    slideDescription.innerHTML = slide.description;
  
    // Build slide
    slideWrapper.appendChild(slideImage);
    slideWrapper.appendChild(slideHeading);
    slideWrapper.appendChild(slideSubtitle);
    slideWrapper.appendChild(slideDescription);
  
    // Add slide to container
    slidesContainer.appendChild(slideWrapper);
  }
  
  // Initialize Carousel
  slideContent.forEach((slide, index) => {
    createBullet(index);
    createSlide(slide, index);
  });
  
  let bulletSlider = (index) => {
    let bullets = document.getElementsByClassName("fa-circle");
    for (let i = 0; i < totalSlides; i++) {
      if (index === i) {
        bullets[i].classList.add("active");
        slides[i].classList.add("active");
      } else {
        bullets[i].classList.remove("active");
        slides[i].classList.remove("active");
      }
    }
  };
  
  let changeSlide = (toSlide) => {
    let bullets = document.getElementsByClassName("fa-circle");
    let slides = document.getElementsByClassName("carousel-slide");
    for (let i = 0; i < totalSlides; i++) {
      if (slides[i].classList.contains("active")) {
        let endOfArray = i + toSlide > totalSlides - 1 ? true : false;
        let beginningOfArray = i + toSlide < 0 ? true : false;
        slides[i].classList.remove("active");
        bullets[i].classList.remove("active");
        if (endOfArray) {
          slides[0].classList.add("active");
          bullets[0].classList.add("active");
        } else if (beginningOfArray) {
          bullets[totalSlides - 1].classList.add("active");
          slides[totalSlides - 1].classList.add("active");
        } else {
          bullets[i + toSlide].classList.add("active");
          slides[i + toSlide].classList.add("active");
        }
        break;
      }
    }
  };
  
