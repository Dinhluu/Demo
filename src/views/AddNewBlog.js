import { useState } from "react";
import "./Blog.scss";
import axios from "axios";
import { propTypes } from "react-bootstrap/esm/Image";

const AddNewBlog = (props) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmitClick = async () => {
        if (!title) {
            alert("miss title")
            return;
        }
        if (!content) {
            alert("miss content")
            return;
        }


        let data = {
            title: title,
            body: content,
            userId: 1
        }

        let res = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
        if (res && res.data) {
            let newBlog = res.data;
            props.handleAddnew(newBlog);
            console.log('check', newBlog)
        }

    }

    return (
        <div className="add-new-container">
            <div className="add-new-content"> Add new blogs</div>
            <div className="input-data">
                <label>Title:</label>
                <input type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
            </div>
            <div className="input-data">
                <label>Content:</label>
                <input type="text"
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                />
            </div>
            <button className="btn-add-new" onClick={handleSubmitClick}>Submit</button>

        </div>
    )
}

export default AddNewBlog;