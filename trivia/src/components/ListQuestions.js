import React, { useEffect, useState } from 'react'
import { questionFetch } from './Fetches.js';
import ListAnswers from './ListAnswers.js';

function decodeHtml(html) {
    let txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

export default function ListQuestions(props) {
    const [ChosenQuestion, setChosenQuestion] = useState('')
    const [questions, setQuestions] = useState([])


    useEffect(() => {
        questionFetch(props).then((response) => setQuestions(response))
        setChosenQuestion('')
    }, [])


    return (
        <div>
            <>
                {ChosenQuestion === '' ? <div>


                    <div>{questions.map((questions, index) => { return <div onClick={() => setChosenQuestion(questions)}>{decodeHtml(questions.question)}</div> })}</div></div>
                    :
                    <ListAnswers onClick={props.onClick} ChosenQuestion={ChosenQuestion}></ListAnswers>
                }
            </>

        </div>
    )
}

//{questions.map((questions, index) => { return <div onClick={() => setChosenQuestion(questions.id)}>{questions.question}</div> })}

/*    return (
    <div>
<>
{chosenQuestion !== '' ? <ListAnswers chosenQuestion={chosenQuesion}></ListQuestions>

        :            
         <button onClick={() => (console.log(questions))}>
                {questions.map((questions,index)=>
                { return <div onClick={() => setChosenQuestion(questions.id)}>{questions.question}</div>})}
            </button>

        </div>
</>
</div>

*/