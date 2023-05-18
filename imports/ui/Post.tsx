import React, {useState} from 'react';
import { useParams } from "react-router-dom";

export const Post = () => {
    const params = useParams();

    const [counter, setCounter] = useState(0);

    const likePost = () => {
        setCounter(counter + 1);
    };

    return (
        <div>
            <ul>
                <li><button onClick={likePost}>heart</button><span>{counter}</span></li>
                <li>{params.id}</li>
            </ul>
        </div>
    );
};
