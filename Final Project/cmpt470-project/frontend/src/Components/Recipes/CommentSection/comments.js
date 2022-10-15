import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
const { v4: uuidv4 } = require('uuid');

function Comments() {
    const [name, setName] = useState("");
    const [comments, setComments] = useState("");
    const [backendComments, setBackendComments] = useState([]);

    var showdate = new Date();
    var displayDate = showdate.getFullYear() + "-" + showdate.getMonth() + "-" + showdate.getDate();

    const addNewComment = () => {
        axios.post("http://localhost:3001/recipes/insertcomment", {
            username: name,
            body: comments,
            createdAt: displayDate,
            id: uuidv4(),

        }).then(() => {
            setBackendComments([
                ...backendComments,
                {
                    username: name,
                    body: comments,
                    createdAt: displayDate,
                    id: uuidv4(),
                },
            ]);
        });
    };


    const deleteNewComment = (value) => {
        console.log(value);
        axios.post(`http://localhost:3001/recipes/deletecomment/`, { id: value }).then((response) => {
            setBackendComments(backendComments.filter((val) => {
                return val.id !== value;
            }));
        })
    }

    useEffect(() => {
        axios.get("http://localhost:3001/recipes/comments").then((response) => {
            setBackendComments(response.data);
        });
    }, []);

    return (
        <div className="comments">
            <h3 className="comments-title">Comments</h3>
            <label className="name_title">Please leave your Name or (Nick Name):</label>
            <input
                type="text"
                className="comment-form-name"
                required="required"
                onChange={(event) => {
                    setName(event.target.value);
                }}
            />
            <div className="comment-form-title">Please leave your comment below</div>
            <textarea type="text" className="comment-form-textarea" required="required" onChange={(event) => {
                setComments(event.target.value);
            }}
            />
            <button className="comment-form-button" onClick={addNewComment}>Post your comment</button>

            <div className="comments-container">
                {backendComments.map((value, key) => (
                    <div className="comment">
                        <div className="comment-image-container">
                            <div className="user-icon" />
                        </div>
                        <div className="comment-right-part">
                            <div className="comment-content">
                                <div className="comment-author">{value.username}</div>
                                <div className="comment"> {value.createdAt} </div>
                            </div>
                            <div className="comment-text">{value.body}</div><br></br>
                            <div className="comment-actions" onClick={() => deleteNewComment(value.id)}>Delete</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Comments;
