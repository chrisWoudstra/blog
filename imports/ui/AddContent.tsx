import React from 'react';
import { useState } from "react";
import { ContentCollection } from "/imports/api/ContentCollection";

export const AddContent = () => {
    const [type, setType] = useState("Blog");
    const [title, setTitle] = useState("");
    const [teaserText, setTeaserText] = useState("");
    const [bodyText, setBodyText] = useState("");

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (!type || !title || !teaserText || !bodyText) {
            alert('Missing fields.');
            return;
        }

        ContentCollection.insert({
            type: type,
            title: title.trim(),
            teaserText: teaserText.trim(),
            body: bodyText.trim(),
            status: 'draft',
            readTime: calculateReadTime(bodyText),
            createdAt: new Date()
        });

        setType("blog");
        setTitle("");
        setTeaserText("");
        setBodyText("");
    };

    /**
     *
     * @param text
     */
    const calculateReadTime = (text: string) => {
        const wpm = 300;
        const words = text.trim().split(/\s+/).length;
        return Math.ceil(words / wpm);
    }

    return (
        <div className="create-content">
            <h3>Create Content</h3>
            <form className="create-content-form" onSubmit={handleSubmit}>
                <select
                    className="type"
                    name="type"
                    id="type"
                    onChange={(e) => setType(e.target.value)}
                >
                    <option value="Blog">Blog</option>
                    <option value="Story">Story</option>
                </select>
                <input
                    className="title"
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    className="teaser-text"
                    name="teaser-text"
                    id="teaser-text"
                    placeholder="Teaser text..."
                    cols="30"
                    rows="4"
                    value={teaserText}
                    onChange={(e) => setTeaserText(e.target.value)}>
                </textarea>
                <textarea
                    className="body"
                    name="body"
                    id="body"
                    cols="30"
                    rows="15"
                    value={bodyText}
                    placeholder="Body..."
                    onChange={(e) => setBodyText(e.target.value)}>
                </textarea>
                <div className="submit-btn-container">
                    <button className="submit" type="submit">Save</button>
                </div>
            </form>
        </div>
    );
}