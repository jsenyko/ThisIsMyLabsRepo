import { useState } from "react"
import { Button, Modal, ModalHeader, ModalBody, } from "reactstrap";
import { Post } from "../interfaces/Post"
import { PostForm } from "./PostInForm";
import { PostInList } from "./PostInList";

export function SocialPosts() {
    
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const [posts, setPosts] = useState<Post[]>(
        [{title: "Sports", thought: "Tom Brady Retires"}, 
        {title: "Weather", thought: "below zero temperatures acrossed the midwest"}, 
        {title: "more sports", thought: "SuperBowl is in Arizona"}, 
        {title: "Finance", thought: "You should save $100 a month"},
        {title: "Health", thought: "New study shows that cats help mental health"},
        {title: "Weather", thought: "Warmer temperatures mid next week"}]
    );
    
    function addPost(post:Post){
        setPosts([...posts, post]);
    }
    
    return(
    <div className="SocialPosts">
        <Button color="danger" onClick={toggle}> New Thought </Button>

    <Modal isOpen={modal} toggle={toggle}>

    <ModalHeader toggle={toggle}>My Thoughts</ModalHeader>

    <ModalBody>
        
            <PostForm addPost={addPost}/>

    </ModalBody>
    </Modal>

        { posts.map((post) => <PostInList key={post.title} post={post} />)}

        
    </div>
    )
}