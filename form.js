const form = document.querySelector('[data-js="form"]');
const container = document.querySelector('[data-js="cardContainer"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const card = document.createElement("li");
  card.classList.add("card-list__item");
  container.append(card);

  const article = document.createElement("article");
  article.classList.add("card");
  card.append(article);

  const heading = document.createElement("h2");
  heading.classList.add("card__question");
  heading.textContent = data.question;

  const answerButton = document.createElement("button");
  answerButton.classList.add("card__button-answer");
  answerButton.setAttribute("type", "button");
  answerButton.setAttribute("data-js", "answerButton");
  answerButton.textContent = "Show answer";

  const answer = document.createElement("p");
  answer.classList.add("card__answer");
  answer.setAttribute("data-js", "answer");
  answer.textContent = data.answer;

  const tagList = document.createElement("ul");
  tagList.classList.add("card__tag-list");

  const tag = document.createElement("li");
  tag.classList.add("card__tag-list-item");
  tag.textContent = `#${data.tag}`;
  tagList.append(tag);

  const bookmarkContainer = document.createElement("div");
  bookmarkContainer.classList.add("card__button-bookmark");

  const bookmarkButton = document.createElement("button");
  bookmarkButton.classList.add("bookmark");
  bookmarkButton.setAttribute("type", "button");
  bookmarkButton.setAttribute("aria-label", "bookmark");
  bookmarkButton.setAttribute("data-js", "bookmark");
  bookmarkContainer.append(bookmarkButton);

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.classList.add("bookmark__icon");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  bookmarkButton.append(svg);

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute(
    "d",
    "M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
  );
  svg.append(path);

  article.append(heading, answerButton, answer, tagList, bookmarkContainer);

  // innerHTML

  //   card.innerHTML = `<article class="card">
  //               <h2 class="card__question">
  //                 ${data.question}
  //               </h2>
  //               <button
  //                 class="card__button-answer"
  //                 type="button"
  //                 data-js="answerButton"
  //               >
  //                 Show answer
  //               </button>
  //               <p class="card__answer" data-js="answer">${data.answer}</p>
  //               <ul class="card__tag-list">
  //                 <li class="card__tag-list-item">#${data.tag}</li>
  //               </ul>
  //               <div class="card__button-bookmark">
  //                 <button
  //                   class="bookmark"
  //                   aria-label="bookmark"
  //                   type="button"
  //                   data-js="bookmark"
  //                 >
  //                   <svg
  //                     class="bookmark__icon"
  //                     xmlns="http://www.w3.org/2000/svg"
  //                     viewbox="0 0 24 24"
  //                   >
  //                     <path
  //                       d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
  //                     />
  //                   </svg>
  //                 </button>
  //               </div>
  //             </article>
  //     `;

  //   container.append(card);

  event.target.reset();
  event.target.elements[0].focus();
});

const questionText = document.querySelector('[data-js="questionText"]');
const answerText = document.querySelector('[data-js="answerText"]');

const questionCharacters = document.querySelector(
  '[data-js="questionCharacters"]'
);
const answerCharacters = document.querySelector('[data-js="answerCharacters"]');

questionText.addEventListener("input", () => {
  questionCharacters.textContent = `${
    150 - questionText.value.length
  } characters left`;
});

answerText.addEventListener("input", () => {
  answerCharacters.textContent = `${
    150 - answerText.value.length
  } characters left`;
});
