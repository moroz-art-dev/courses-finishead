import React, {Component} from 'react'
import classes from "./Quiz.module.css"
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz"

class Quiz extends Component {
    state = {
        activeQuestion: 0,
        answerState: null, // { [id]: 'success' 'error'}
        quiz: [
            {
                id: 1,
                question: 'Какого цвета небо?',
                rightAnswerId: 2,
                answers: [
                    {text: 'Черный', id: 1},
                    {text: 'Синий', id: 2},
                    {text: 'Крсный', id: 3},
                    {text: 'Зеленый', id: 4},
                ]
            },
            {
                id: 2,
                question: 'В каком году основали Санкт-Петергбург?',
                rightAnswerId: 3,
                answers: [
                    {text: '1700', id: 1},
                    {text: '1702', id: 2},
                    {text: '1703', id: 3},
                    {text: '1803', id: 4},
                ]
            }
        ]
    }

    onAnswerClickHandler = answerId => {

        if(this.state.answerState){
            const key = Object.keys(this.state.answerState)[0]
            if(this.state.answerState[key] === 'success'){
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion]
        if(question.rightAnswerId === answerId){
            this.setState({
                answerState: {[answerId]: 'success'}
            })
            const timeout = window.setTimeout(() => {
                if(this.ifQuizFinished()){
                    console.log('Finished')
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout)
            },1000)



        } else {
            this.setState({
                answerState: {[answerId]: 'error'}
            })
        }


    }

    ifQuizFinished(){
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    <ActiveQuiz
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLenght={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                        state={this.state.answerState}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz