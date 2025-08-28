// Fetch local JSON and populate dynamically
import data from './data.json';

// fetch('/data.json')
// 	.then((response) => response.json())
// 	.then((data) => {
const container = document.querySelector('.scores-container');

// Loop through data and generate HTML
data.forEach((item) => {
	const card = document.createElement('div');
	card.className = `${item.category.toLowerCase()} p-4 rounded-xl flex justify-between ${
		item.backgroundColor
	} font-bold`;

	card.innerHTML = `
      <div class="left-side flex gap-3">
        <img src="${item.icon}" alt="${item.category} icon" />
        <p class="${item.color}">${item.category}</p>
      </div>
      <div class="right-side">
        <p>
          <span class="text-Dark-Gray-Blue">${item.score}</span>
          <span class="text-gray-400">/ 100</span>
        </p>
      </div>
      `;

	container.appendChild(card);
});

const button = document.createElement('button');
button.className = `bg-Dark-Gray-Blue text-Pale-Blue w-full h-15 rounded-4xl hover:bg-linear-to-b from-Light-Slate-Blue to-Light-Royal-Blue cursor-pointer font-bold shadow-sm hover:shadow-blue-400/50 my-4 mt-6`;
button.textContent = 'Continue';

container.appendChild(button);
// })
// .catch((err) => console.error('Error loading JSON:', err));
