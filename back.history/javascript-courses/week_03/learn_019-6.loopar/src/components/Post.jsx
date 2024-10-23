import React from 'react'

// function Post({post}) {
//     return (
//         <div className="post">
//             <h2 className="title">{post.title}</h2>
//             <p className="body">{post.body}</p>
//         </div>
//     )
// }

function Post({post}) {
    
    const [isDarkTheme, setIsDarkTheme] = React.useState(false)
    
    const toggleTheme = () => {
        setIsDarkTheme(theme => !theme)
    }

    return (
        <div onClick={toggleTheme} className={`post ${isDarkTheme ? "dark" : ""}`}>
            <h2 className="title">{post.title}</h2>
            <p className="body">{post.body}</p>
        </div>
    )
}

export default Post
