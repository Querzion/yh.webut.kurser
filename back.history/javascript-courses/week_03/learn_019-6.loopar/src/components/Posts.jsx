import React from 'react'
import Post from './Post'

function Posts() {

    const [posts, setPosts] = React.useState([
        {
            id: 1,
            title: "Post 1",
            body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, tempore laborum suscipit non modi, unde quos repellendus voluptas, dicta excepturi eveniet. Blanditiis, fuga? Blanditiis rem quidem quisquam inventore minus ex repellat nihil eligendi recusandae animi possimus, dolorum impedit deserunt est!",
        },
        {
            id: 2,
            title: "Post 2",
            body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, tempore laborum suscipit non modi, unde quos repellendus voluptas, dicta excepturi eveniet. Blanditiis, fuga? Blanditiis rem quidem quisquam inventore minus ex repellat nihil eligendi recusandae animi possimus, dolorum impedit deserunt est!",
        },
        {
            id: 3,
            title: "Post 3",
            body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, tempore laborum suscipit non modi, unde quos repellendus voluptas, dicta excepturi eveniet. Blanditiis, fuga? Blanditiis rem quidem quisquam inventore minus ex repellat nihil eligendi recusandae animi possimus, dolorum impedit deserunt est!",
        },
        {
            id: 4,
            title: "Post 4",
            body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, tempore laborum suscipit non modi, unde quos repellendus voluptas, dicta excepturi eveniet. Blanditiis, fuga? Blanditiis rem quidem quisquam inventore minus ex repellat nihil eligendi recusandae animi possimus, dolorum impedit deserunt est!",
        },
        {
            id: 5,
            title: "Post 5",
            body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, tempore laborum suscipit non modi, unde quos repellendus voluptas, dicta excepturi eveniet. Blanditiis, fuga? Blanditiis rem quidem quisquam inventore minus ex repellat nihil eligendi recusandae animi possimus, dolorum impedit deserunt est!",
        },
    ])

    return (
        <div className="posts">

            {/* Istället för att sitta och skriva ut varje enskild post, så är loopar mycket bättre */}
            {/* <div className="post">
                <h2 className="title">{posts[0].title}</h2>
                <p className="body">{posts[0].body}</p>
            </div>
            <div className="post">
                <h2 className="title">{posts[1].title}</h2>
                <p className="body">{posts[1].body}</p>
            </div>
            <div className="post">
                <h2 className="title">{posts[2].title}</h2>
                <p className="body">{posts[2].body}</p>
            </div> */}


            {/* När man har i åtanke att skapa ett upplägg och möjligen manipulera det innan så är måsvingar / curly brackets att föredra */}
            {/* {
                posts.map(post => {
                    return (
                        <div className="post">
                            <h2 className="title">{post.title}</h2>
                            <p className="body">{post.body}</p>
                        </div>
                    )
                })
            } */}
            
            {/* Men om man endast ska posta innehållet i ex. posts, och inte manipulera det, så kan man lika gärna göra såhär. 
                Nu har det även adderats ett condition för att det ska användas, att endast köra igång om posts innehållet är större än 0. */}
            {/* { 
                posts.length > 0 && posts.map(post => (
                    <div className="post">
                        <h2 className="title">{post.title}</h2>
                        <p className="body">{post.body}</p>
                    </div>
                ))
            } */}

            {/* Generellt sett så bör man inte använda sig utav index värdet, men man behöver sätta ett key värde som är unikt för varje post. */}
            {/* { 
                posts.length > 0 && posts.map(post, index => (
                    <div key={index} className="post">
                        <h2 className="title">{post.title}</h2>
                        <p className="body">{post.body}</p>
                    </div>
                ))
            } */}

            {/* I det här fallet så har varje post ett id, så då är det att föredra. */}
            {/* { 
                posts.length > 0 && posts.map(post => (
                    <div key={post.id} className="post">
                        <h2 className="title">{post.title}</h2>
                        <p className="body">{post.body}</p>
                    </div>
                ))
            } */}

            {/* Nu bryter vi upp hela den förra delen i en komponent istället, och för att få det att fungera, 
                så behöver man hålla key identifikationen här, och också länka posts. Annars hittas inte inläggen. */}
            {/* {
                posts.length > 0 && posts.map(post => (
                    <Post key={post.id} post={post} />
                ))
            } */}
    
            {/* Här lägger vi till ett meddelande separat om det inte finns några posts. */}
            {/* {
                posts.length <= 0 && <p>No posts available</p>
            } */}

            {/* Här kombineras meddelandet genom den redan existerande funktionen. */}
            {       
                posts.length > 0 ? posts.map(post => (
                    <Post key={post.id} post={post} />
                )) : <p>No posts available</p>
            }
        
        </div>
    )
}

export default Posts




