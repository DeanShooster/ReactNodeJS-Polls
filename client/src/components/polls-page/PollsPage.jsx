import { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { GetPolls } from "../../api/pollRequest";

import './polls-page.scss';

import Poll from "./poll/Poll";

const PollsPage = () => {

    const [polls,setPolls] = useState([]);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchPolls = async () =>{
            const result = await GetPolls(params.page);
            setPolls(result);
        }
        fetchPolls();
    },[params]);

    const nextPageHandler = () => navigate('/polls/'+(parseInt(params.page)+1));
    const previousPageHandler = () => navigate('/polls/'+(parseInt(params.page)-1));

    return (
        <Fragment>
            {polls.length > 0 ? <h1 className="polls-page-title">Polls Page {params.page}</h1> : <h1 className="polls-page-title">No Polls</h1>}
            <section className="polls-page-container">
                {polls.map( (poll,index)=> { return <Poll poll={poll} key={poll._id}/>} )}
            </section>
            {polls.length > 0 && 
                <Fragment>
                    <div className="polls-button-container">
                        <button disabled={parseInt(params.page) <= 1} onClick={previousPageHandler} className={parseInt(params.page) <= 1 ? 'disabled-button' : 'prev-next-button'}>Previous</button>
                        <button disabled={polls.length < 3} onClick={nextPageHandler} className={polls.length < 3 ? 'disabled-button' : 'prev-next-button'}>Next</button>
                    </div>
                </Fragment>}
        </Fragment>
    );
};

export default PollsPage;