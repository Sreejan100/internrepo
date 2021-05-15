import React,{useEffect,useState} from 'react'
import './HomePage.css'

function HomePage() {
    const [questions, setQuestion] = useState([{
        question: '',
        option1: '',
        option2: '',
        option3: '',
        option4: ''
    }]);

    var [input, setInput] = useState('');
    var [score, setScore] = useState(0);
  
    useEffect(() => {
        fetch("/questions").then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setQuestion(jsonRes));
    });

   
  
    return (
        <div className="HomeBody">

            <h1 className="HomeHeader">Answer the quiz</h1>
            {questions.map(question =>
                <div>
                       <div className="question">
                 <p className="questionpara">{question.question}</p>
             
            </div>
            < div className="answerslotone">
                  <div className="answerone">
                      <p>{question.option1}</p>
                  </div>
                  <div className="answertwo">
                       <p>{question.option2}</p>
                  </div>
                  <div className="answerthree">
                      <p>{question.option3}</p>
                  </div>
                  <div className="answerfour">
                      <p>{question.option4}</p>
                  </div>
            </div>
            <div className="answersection">
                  <div className = "inputanswer">
                  <input   type="text" name="answer" onChange={event => setInput(event.target.value)} placeholder="Enter your answer" />
                  </div>
                  <div className = "ansbut">
                  <button className="btn btn-primary btn-sm " onClick={event => setScore(score+3)}>Submit</button> 
                  </div>             
            </div>
                </div>
                )}
            <p className="quizscore">The scored marks by you is: {score}</p>

        </div>
    )
}

export default HomePage
