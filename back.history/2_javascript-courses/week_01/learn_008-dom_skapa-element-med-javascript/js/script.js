const commentForm = document.querySelector('#comment-form');
const commentsDiv = document.querySelector('#comments');

/* // Vulnarable of cross-side scripting, so don't use it!
commentForm.addEventListener('submit', e => {
    e.preventDefault();

    const input = document.querySelector('#comment-input');

    // if the input is empty, stop it's output
    if(input.value === "") return
    //console.log(input.value); // output the input value

    const newId = crypto.randomUUID();

    // ##################################################
    //  VERSION 1
    // commentsDiv.innerHTML += `
    // <div id="${newId}" class="comment">
    //     <p>${input.value}</p>
    // </div> `
    // VERSION 2
    commentsDiv.insertAdjacentHTML("beforeend", `
        <div id="${newId}" class="comment">
        <p>${input.value}</p>
        </div> ` 
    )

    // ##################################################
    
    // adds 'active' class to comment
    // document.querySelector('#' + newId).addEventListener('click', e => {
    //     e.currentTarget.classList.add('active')
    // })

    input.value = ""
}) */

/* // This is the safer way to do this
commentForm.addEventListener('submit', e => {
    e.preventDefault();

    const input = document.querySelector('#comment-input');

    // if the input is empty, stop it's output
    if(input.value === "") return

    const newId = crypto.randomUUID();

    const comment = document.createElement('div');
    comment.classList.add("comment");

    comment.addEventListener('click', e => {
        comment.classList.toggle("active");
    })

    const commentText = document.createElement("p");
    commentText.textContent = input.value;

    comment.appendChild(commentText);
    commentsDiv.appendChild(comment);

    input.value = ""
}) */

// Previous version divided into multiple sections
commentForm.addEventListener('submit', e => {
    e.preventDefault();

    const input = document.querySelector('#comment-input');

    if(input.value === "") return   // if the input is empty, stop it's output

    const newComment = createCommentElement(input.value);

    // commentsDiv.appendChild(newComment);
    commentsDiv.insertAdjacentElement("afterbegin", newComment);
    
    input.value = ""
})

function createCommentElement(value) {
    
    const comment = document.createElement('div');
    comment.classList.add("comment");
    
    comment.addEventListener('click', e => {
        comment.classList.toggle("active");
    })
    
    const commentText = document.createElement("p");
    commentText.textContent = value;
    
    comment.appendChild(commentText);

    return comment;
}