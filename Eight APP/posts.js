const postsContainer = document.getElementById('posts');
const errorElement = document.getElementById('error');

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    if (!response.ok) throw new Error("Network error");
    return response.json();
  })
  .then(posts => {
    posts.slice(0, 10).forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.className = 'post';
      postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
      postsContainer.appendChild(postDiv);
    });
  })
  .catch(error => {
    errorElement.textContent = 'Failed to load posts. Please try again later.';
    console.error(error);
  });
