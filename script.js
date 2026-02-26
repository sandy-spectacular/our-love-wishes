const wishes = [
  "Visit Paris",
  "Visit Switzerland",
  "Visit Phu Quoc",
  "Visit Maldives",
  "Visit Japan",
  "Visit Dubai",
  "Visit Seoul",
  "Night time ride",
  "Midnight food street craving",
  "Weekend movie marathon",
  "Visit Madurai and have parotta",
  "Outdoor game activity",
  "Spend whole day in shopping mall",
  "Ramen date",
  "Candle light dinner date",
  "Stargazing night in hill station",
  "Amusement or water park day",
  "Family trip",
  "Spa day",
  "Cook each other's special dish",
  "Gaming together on weekend",
  "Fishing together at riverside"
];

const sky = document.getElementById("sky");

wishes.forEach((wish) => {
  const star = document.createElement("div");
  star.className = "star";
  star.style.top = Math.random() * 90 + "%";
  star.style.left = Math.random() * 90 + "%";

  const completed = localStorage.getItem(wish);
  if (completed === "done") {
    star.classList.add("gold");
  }

  star.onclick = () => {
    if (!star.classList.contains("gold")) {
      const upload = confirm("Wish:\n" + wish + "\n\nMark as completed?");
      if (upload) {
        star.classList.add("gold");
        localStorage.setItem(wish, "done");
      }
    } else {
      alert("Completed wish:\n" + wish);
    }
  };

  sky.appendChild(star);
});
