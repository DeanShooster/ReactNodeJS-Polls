import { useEffect, useState } from 'react';
import {GetPollsResults} from '../../api/pollRequest';

import './poll-result-page.scss';
import Result from './result/Result';

const PollResultPage = () => {

    const [pollResults,setPollsResult] = useState([]);

    useEffect(()=>{
        const fetchResults = async ()=> setPollsResult(await GetPollsResults());
        fetchResults();
    },[]);

    return (
        <section className='result-page-container'>
            {pollResults.map( (poll,index)=>{return <Result poll={poll} key={poll._id}/>})}
        </section>
    );
};

export default PollResultPage;