import React, {useState} from 'react';

export default function Hooks() {

    const [count, setCount] = useState(5);
    const [fruit, setFruit] = useState('Apple');
    const [graduate, setGraduate] = useState(false);

    return (
        <div>
            <p>Initial value of the count variable is {count}</p>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
            <hr />
            <p>Domagoj's Favourite Fruit is {fruit}</p>
            <button onClick={() => setFruit('Mango')}>Set to mango</button>
            <hr />
            {!graduate ? 'Is graduate' : 'Is not graduate'} <br />
            <button onClick={() => setGraduate('true')}>Change Graduate</button>
        </div>

    )
}