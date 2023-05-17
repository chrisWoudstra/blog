import React from 'react';

export const AddPost = () => {
    return (
        <div className="add-post">
            <h2>Add Post</h2>
            <form>
                <input type="text" name="category" id="category"/>
                <input type="text" name="title" id="title"/>
                <textarea name="teaser" id="teaser" cols="30" rows="10"></textarea>
                <textarea name="body" id="body" cols="30" rows="10"></textarea>
                <button>Submit</button>
            </form>
        </div>
    );
}