import { useEffect, useState } from 'react';
import { SolveScreenProps } from './SolveScreenProps';

function SolveScreen(props: SolveScreenProps) {
    const [clue, setClue] = useState("");
    const [answer, setAnswer] = useState("");
    const [shareLink, setShareLink] = useState("");
    const [cursorPos, setCursorPos] = useState(-1);

    let answerChars = answer.trim().split("");

    return (
        <div id="CreateScreen">
            <div id="create-title">Create a Kwizzle</div>
            <div id="clueText" className="solve-clue">
                {clue}
            </div>
            <div className="solve-answer">
                {answerChars.forEach(char => {
                    <div className="solve-answer-char">
                        {char}
                    </div>
                })}
            </div>
            <div id="give-up-button">Give Up</div>
            <div id="create">Create a Kwizzle</div>
            <div className="link-div">
                <input type="text" className="link-textbox"></input>
                <div className="copyButton">Copy</div>
            </div>
        </div>
    );
}

export default SolveScreen;
