import React, { useEffect, useState } from 'react'

export default function Victory(props) {
    return (
        <div>{props.ChosenAnswer} is correct Wahoo!
            <button onClick={() => props.onClick('')}>
                Try Another?
            </button>
        </div>
    )
}