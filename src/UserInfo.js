import { useState } from "react";


export const UserInfo = ()=>{
    const [users, setUser] = useState(null);

    const {userId, id, body, title}= users || {};

    return users ? (
        <>
        <h3>{userId}</h3>
        <p>id:{id}  </p>
        <p>:{body}</p>
        <h3>Hobbies:{title}</h3>
        <ul>
            {title.map(titles => <li key={titles}>{titles}</li>)}
        </ul>
        </>
    ) : <p>Loading...</p>;
}