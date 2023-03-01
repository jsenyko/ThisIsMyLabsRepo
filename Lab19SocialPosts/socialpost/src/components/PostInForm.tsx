import { useState } from "react";
import { Container, FormGroup, Form } from "reactstrap";
import { Post } from "../interfaces/Post"

export interface IPostFormProps{
    [x: string]: any;
    addPost: Function
}

export function PostForm (props:IPostFormProps) {
    const [title, setTitle] = useState<string>('');
    const [thought, setThought] = useState<string>('');


    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault
        props.setPosts({title: title, thought:thought});
    }

return(
    <Container id="PostForm">
        <FormGroup>
            <Form onSubmit={onSubmit}>
                <label>Title</label>
                <input type="text" onChange={(e) => setTitle(e.target.value)}></input>
                <label>Thought</label>
                <input type="text" onChange={(e) => setThought(e.target.value)}></input>
                <button type="submit">Add Thought</button>
            </Form>
        </FormGroup>
    </Container>
)

}