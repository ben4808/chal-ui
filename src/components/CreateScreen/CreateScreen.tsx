import { useEffect, useRef, useState } from 'react';
import { CreateScreenProps } from './CreateScreenProps';

function CreateScreen(props: CreateScreenProps) {
    const [clue, setClue] = useState("");
    const [answer, setAnswer] = useState("");
    const [shareLink, setShareLink] = useState("");
    const [cursorPos, setCursorPos] = useState(-1);

    function setClueOnBlur() {
        let newClue = document.getElementById("clueText")!.innerText;
        setClue(newClue);
    }

    let answerChars = answer.trim().split("");

    return (
        <div id="CreateScreen">
            <div id="create-title">Create a Kwizzle</div>
            <div id="clueText" className="create-clue editable" contentEditable={true} suppressContentEditableWarning={true}
                onBlur={setClueOnBlur}>
                {clue.length === 0 && <span className="clue-placeholder">Enter clue here</span>}
                {clue}
            </div>
            <div className="create-answer">
                {answerChars.forEach(char => {
                    <div className="answer-char">{char}</div>
                })}
            </div>
            <div id="generate-link">Generate Link</div>
            <div className="link-div">
                <input type="text" className="link-textbox"></input>
                <div className="copyButton">Copy</div>
            </div>
        </div>
    );
}

export default CreateScreen;
