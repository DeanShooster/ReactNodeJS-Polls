import { useEffect, useState } from "react";

const Result = ({poll}) => {

    const [maxVotes,setMaxVotes] = useState();

    useEffect(()=>{
        let max = {answer: poll.options[0].option, votes: poll.options[0].votes};
        if(poll.options[1].votes > max.votes ) max = {answer: poll.options[1].option, votes: poll.options[1].votes};
        if(poll.options[2].votes > max.votes ) max = {answer: poll.options[2].option, votes: poll.options[2].votes};
        setMaxVotes(max);
    },[poll.options])

    return (
        <div>
            <h3>{poll.title}</h3>
            <p>Answer: {maxVotes?.answer}</p>
            <p>Votes: {maxVotes?.votes}</p>
        </div>
    );
};

export default Result;