const renderMovieData = (data) => {
    const cardBody = document.querySelector(".card-body");
 
    if (data.Response === "False") {
        cardBody.innerHTML = `<p>${data.Error}</p>`;
        return;
    }
 
    const movieId = data.imdbID;
    const likeCountFromStorage = localStorage.getItem(`likeCount_${movieId}`) || 0;
    const commentsFromStorage = JSON.parse(localStorage.getItem(`comments_${movieId}`)) || [];
 
    cardBody.innerHTML = `
<div class="row">
<div class="col-md-4">
<img src="${data.Poster}" alt="${data.Title} poster" class="img-fluid">
</div>
<div class="col-md-8">
<h2>${data.Title} (${data.Year})</h2>
<p><strong>Actors:</strong> ${data.Actors}</p>
<p><strong>Director:</strong> ${data.Director}</p>
<p><strong>Plot:</strong> ${data.Plot}</p>
<p><strong>Writer:</strong> ${data.Writer}</p>
<p><strong>Runtime:</strong> ${data.Runtime}</p>
<p><strong>imDB Rating:</strong> ${data.imdbRating}</p>
<p><strong>Release Date:</strong> ${data.Released}</p>
<p><strong>Genre:</strong> ${data.Genre}</p>


</button>
<div id="comments-section">
<h3>Comments</h3>
<ul id="comments-list">
                        ${commentsFromStorage.map(comment => `<li>${comment}</li>`).join('')}
</ul>
<form id="comment-form">
<div class="mb-3">
<label for="comment-input" class="form-label">Add a comment</label>
<input type="text" class="form-control" id="comment-input" placeholder="Enter your comment">
</div>
<button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
</div>
</div>
    `;
 
    // const likeBtn = cardBody.querySelector('#like-btn');
    // const likeCount = cardBody.querySelector('#like-count');
    const commentForm = cardBody.querySelector('#comment-form');
    const commentInput = cardBody.querySelector('#comment-input');
    const commentsList = cardBody.querySelector('#comments-list');
 
    // likeBtn.addEventListener('click', () => {
    //     let count = parseInt(likeCount.textContent);
    //     count++;
    //     likeCount.textContent = count;
    //     localStorage.setItem(`likeCount_${movieId}`, count);
    // });
 
    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const comment = commentInput.value.trim();
        if (comment) {
            commentsFromStorage.push(comment);
            localStorage.setItem(`comments_${movieId}`, JSON.stringify(commentsFromStorage));
            const newComment = document.createElement('li');
            newComment.textContent = comment;
            commentsList.appendChild(newComment);
            commentInput.value = '';
        }
    });
};
 
export default renderMovieData;