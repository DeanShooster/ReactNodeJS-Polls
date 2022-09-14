const url = 'http://localhost:4000';

/**
 * API Request for Poll Creation.
 * @param {Poll Object} poll 
 * @returns Poll
 */
async function CreatePoll(poll)
{
    const res = await fetch(`${url}/create`,{
        method: 'POST',
        headers:  { 'Content-Type': 'application/json', APIkey: '12345' },
        body: JSON.stringify(poll)
    });
    return await res.json();
}

/**
 * API Request for polls defined by page - pagination.
 * @param {Page number} params 
 * @returns Polls Array
 */
async function GetPolls(params)
{
    const res = await fetch(`${url}/polls/${params}`,{  method: 'GET'});
    return await res.json();
}

/**
 * API Request for poll answer submition. 
 * @param {Poll Answer} pollAnswer 
 * @returns Success Message
 */
async function SubmitPoll(pollAnswer)
{
    const res = await fetch(`${url}/submit`,{
        method: 'PATCH',
        headers:  { 'Content-Type': 'application/json'},
        body: JSON.stringify(pollAnswer)
    });
    return await res.json();
}

/**
 * API Request for all polls results.
 * @returns 
 */
async function GetPollsResults()
{
    const res = await fetch(`${url}/results`,{method: 'GET'});
    return await res.json();
}

module.exports = {CreatePoll,GetPolls,SubmitPoll,GetPollsResults};