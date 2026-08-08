// ===============================
// Show / Hide Comments (Accessible)
// ===============================

const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

// Start hidden
commentWrapper.style.display = 'none';
showHideBtn.setAttribute('aria-expanded', 'false');

showHideBtn.addEventListener('click', () => {
  const isHidden = commentWrapper.style.display === 'none';

  if (isHidden) {
    commentWrapper.style.display = 'block';
    showHideBtn.textContent = 'Hide comments';
    showHideBtn.setAttribute('aria-expanded', 'true');
  } else {
    commentWrapper.style.display = 'none';
    showHideBtn.textContent = 'Show comments';
    showHideBtn.setAttribute('aria-expanded', 'false');
  }
});

// ===============================
// Add New Comment (Accessible)
// ===============================

const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  submitComment();
});

function submitComment() {
  const nameValue = nameField.value.trim();
  const commentValue = commentField.value.trim();

  // Prevent empty comments
  if (!nameValue || !commentValue) {
    alert('Please enter both your name and a comment.');
    return;
  }

  // Create elements
  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');

  // Add text
  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;

  // Append to list
  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);
  list.appendChild(listItem);

  // Clear fields
  nameField.value = '';
  commentField.value = '';

  // Accessibility: announce new comment
  listItem.setAttribute('aria-live', 'polite');

  // Focus back to name field for faster commenting
  nameField.focus();
}
