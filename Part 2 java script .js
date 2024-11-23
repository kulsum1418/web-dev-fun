83% of storage used … If you run out, you cant , create, edit, and upload files. Get 100 GB of storage for $2.79 $0.69/month for 2 months.
// Declare constants for filenames and alternative text
const imageFiles = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
const imageAlts = {
  'pic1.jpg': 'Closeup of a blue human eye',
  'pic2.jpg': 'Rock that looks like a wave',
  'pic3.jpg': 'Purple and white pansies',
  'pic4.jpg': 'Section of a wall from a pharaoh’s tomb',
  'pic5.jpg': 'Large moth on a leaf',
};

// Select DOM elements
const thumbBar = document.querySelector('.thumb-bar');
const displayedImg = document.querySelector('.displayed-img');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('button');

// Loop through the image array to populate the thumb-bar
imageFiles.forEach(file => {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${file}`);
  newImage.setAttribute('alt', imageAlts[file]);
  thumbBar.appendChild(newImage);

  // Add a click event listener to update the displayed image
  newImage.addEventListener('click', () => {
    displayedImg.setAttribute('src', newImage.getAttribute('src'));
    displayedImg.setAttribute('alt', newImage.getAttribute('alt'));
  });
});

// Add a click event listener for the darken/lighten button
btn.addEventListener('click', () => {
  const currentClass = btn.getAttribute('class');
  if (currentClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
});