import React, { useEffect, useState } from 'react'
import Victory from './Victory.js'

function decodeHtml(html) {
    let txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}



function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}


export default function ListAnswers(props) {
    const [answerSet, setAnswerSet] = useState([])
    const [chosenAnswer, setChosenAnswer] = useState('')


    useEffect(() => {
        let answers = shuffle([...props.ChosenQuestion.incorrect_answers, props.ChosenQuestion.correct_answer])
        console.log(answers)
        setAnswerSet(answers)


    }, []);

    return (
        <div><div>
            <div>
                {decodeHtml(props.ChosenQuestion.question)}
            </div>
            <button onClick={() => (console.log(props.ChosenQuestion.correct_answer))}>
            </button>

            <div>{answerSet.map((questions, index) => { return <div onClick={() => setChosenAnswer(questions)}>{decodeHtml(questions)}</div> })}</div></div>
            <>
                {chosenAnswer === props.ChosenQuestion.correct_answer ?
                    <Victory onClick={props.onClick} ChosenAnswer={chosenAnswer}></Victory>

                    : <div></div>


                }
            </>
        </div>
    )
}