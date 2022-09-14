import { useState } from "react";
import { SubmitPoll } from "../../../api/pollRequest";

const Poll = ( {poll} ) => {

    const [answer,setAnswer] = useState(null);

    const chosenAnswerHandler = (event) => setAnswer(event.target.value);

    const pollSubmitHandler = async (event) =>{
        event.preventDefault();
        if(!answer) {alert('choose an answer.'); return;}
        const pollAnswer = {id: poll._id, answer};
        const result = await SubmitPoll(pollAnswer);
        if(result.Message) alert('Submitted successfully');
    }

    return (
        <div className="poll">
            <p>{poll?.title}</p>
            <form onSubmit={pollSubmitHandler}>
                <div>
                    <input type='radio' name='ans' value={poll.options[0].option} onClick={chosenAnswerHandler}/>
                    <label>{poll.options[0].option}</label>
                </div>
                <div>
                    <input type='radio' name='ans' value={poll.options[1].option} onClick={chosenAnswerHandler}/>
                    <label>{poll.options[1].option}</label>
                </div>
                <div>
                    <input type='radio' name='ans' value={poll.options[2].option} onClick={chosenAnswerHandler}/>
                    <label>{poll.options[2].option}</label>
                </div>
                <button>Submit Vote</button>
            </form>
        </div>
    );
};

export default Poll;