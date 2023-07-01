const data = [
  {
    name: "Boby la Pointe",
    average: "99",
    mark: "Great",
    description:
      "You scored higher than 65% of the people who have taken these tests.",
    reaction: "99",
    memory: "99",
    verbal: "99",
    visual: "99",
  },
  {
    name: "Sangoku",
    average: "75",
    mark: "Good",
    description:
      "You scored higher than 65% of the people who have taken these tests.",
    reaction: "75",
    memory: "75",
    verbal: "75",
    visual: "75",
  },
  {
    name: "Louis Vianney",
    average: "50",
    mark: "Passed",
    description:
      "You scored higher than 65% of the people who have taken these tests.",
    reaction: "50",
    memory: "50",
    verbal: "50",
    visual: "50",
  },
  {
    name: "Maurice Belay",
    average: "25",
    mark: "Failed",
    description:
      "You scored higher than 65% of the people who have taken these tests.",
    reaction: "25",
    memory: "25",
    verbal: "25",
    visual: "25",
  },
];

let currentIndex = 0;

function updateContent(index) {
  let currentData = data[index];

  document.getElementById("name").textContent = currentData.name;
  document.getElementById("average").textContent = currentData.average;
  document.getElementById("mark").textContent = currentData.mark;
  document.getElementById("description").textContent = currentData.description;
  document.getElementById("reaction").textContent = currentData.reaction;
  document.getElementById("memory").textContent = currentData.memory;
  document.getElementById("verbal").textContent = currentData.verbal;
  document.getElementById("visual").textContent = currentData.visual;
}

window.onload = function () {
  updateContent(currentIndex);

  document.querySelector(".button").addEventListener("click", function () {
    currentIndex++;
    if (currentIndex >= data.length) {
      currentIndex = 0;
    }
    updateContent(currentIndex);
  });
};
