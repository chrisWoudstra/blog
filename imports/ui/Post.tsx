import React, {useState} from 'react';

export const Post = () => {
    const [counter, setCounter] = useState(0);

    const likePost = () => {
        setCounter(counter + 1);
    };

    return (
        <div>
            <ul>
                <li><button onClick={likePost}>heart</button><span>{counter}</span></li>
                <li></li>
            </ul>
        </div>
    );
};
