import React from 'react';
import {Button, Form, InputGroup} from "react-bootstrap";
import CircleCheckbox from "../../components/CircleCheckbox/CircleCheckbox";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";

import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../state/store";
import {updateAnswer, updateAnswerCorrectness} from "../../state/quizSlice";

interface AnswerProps {
    answerIndex: number;
    questionIndex: number;
}
const QuizAnswer: React.FC<AnswerProps> = ({ answerIndex, questionIndex }) => {
    const answer = useSelector((state: RootState) => state.quiz.quiz.questions[questionIndex].answers[answerIndex]);
    const dispatch = useDispatch();
    const handleAnswer = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newAnswer = event.target.value;
        dispatch(updateAnswer({ questionIndex, answerIndex, answer: newAnswer }));
    };
    const handleAnswerCorrectnessChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newCorrectness = Boolean(event.target.value);
        dispatch(updateAnswerCorrectness({ questionIndex, answerIndex, isCorrect: newCorrectness }))
    };

    return (
        <div className="d-flex align-items-center py-2">
            <CircleCheckbox
                checked={answer.isCorrect}
                onChange={handleAnswerCorrectnessChange}
                name="isCorrect"
            />

            <InputGroup hasValidation className="mx-2">
                <InputGroup.Text id="inputGroupPrepend">{answerIndex+1}</InputGroup.Text>
                <Form.Control
                    type="text"
                    aria-describedby="inputGroupPrepend"
                    required
                    name="answer"
                    value={answer.answer}
                    onChange={handleAnswer}
                />
                <Form.Control.Feedback type="invalid">
                    Please choose a username.
                </Form.Control.Feedback>
            </InputGroup>

            <Button><FontAwesomeIcon icon={faTrashCan}/></Button>

        </div>
    );
};

export default QuizAnswer;