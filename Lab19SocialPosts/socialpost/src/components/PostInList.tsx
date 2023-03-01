import { Post } from "../interfaces/Post"

interface PostListProps{
    post: Post
}

export function PostInList(props:PostListProps){
    return(
        <div>
            <strong>Title: {props.post.title}</strong>
            <p>Thought: {props.post.thought}</p>
        </div>
    )
}