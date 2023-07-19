import { useState, useEffect } from 'react';
import './App.css';
import { Card } from './component/Card';
import Question from './component/Question';

function App() {
  const [isFlipped , setIsFlipped ] = useState(false)
  const [randomIndexS, setRandomIndexS] = useState(null);
  const getQuestion = {
    questions : [ 
      {text : 'It’s clear one of your employees is in the wrong role. Their performance is below expectations and you’ve given the individual some verbal feedback, but you are confident they will not be able to improve because they lack the drive and motivation needed for this role. You think they (and SAP) would be better off if the employee found a different role. What should you do?'},
      {text : 'I’m worried about John. He is usually so boisterous and pleasant, but lately he has been really quiet and withdrawn. He’s not participating in meetings or sharing his ideas with the team. I get the sense that he doesn’t like his job anymore. He’s not putting the effort into his work like he used to. I can’t tell if something is wrong or if he has just changed his mind and doesn’t want to work here anymore. I don’t know what to do?'},
      {text : 'You have been addressing performance concerns with one of your employees.  You have been coaching them and providing them documented feedback. You plan to reach out to your PR Partner to deliver an Successplan if you do not see improvement in the next couple weeks. However, in the interim, you have serious concerns about the project they are working on. It has board level visibility and you are fearful the employee will mess it up. What should you do?'},
     { text : 'As of September, you have an employee who has not met their goals all. You have been coaching and are ready to move to a PIP. It is essential that everyone on your team meets their annual goals. How do you address this in the PIP?'},
      {text : 'You have an employee who has struggled in their role over the last two years. During a recent one-on-one, the employee tells you they are interested in pursuing new opportunities.'},
     { text :  'Over the past 3 months, one of your employees has not shown up for work twice, was late for work 5 times and missed several meetings. On Monday, you deliver a warning letter to them. Three days later, you learn the employee missed another meeting the day after the document was delivered. The following day, they fail to show to work. You call the employee, but do not hear back from them.  What is your next step?'},
      {text : 'You have been coaching an employee for several months and they have not improved. There is currently a HC freeze, so you are not able to backfill the role if the employee leaves.'},
      {text :'After delivering an approved PIP, the employee emails you stating that they have applied for LOA effective immediately and stops showing up for work.  The employee provides you no other information.  What do you do?'},
      {text : "Steven is a Sales Director of Team A , he had a sales executive called Tony whose sales performance is in the doldrums. Steven spent much time in supporting Tony to make sales orders. In the middle of the first quarter of Year 2023 ,Steven contacted PR team and said he wanted to trigger PIP process for Tony. Steven said Tony had two consecutive quarters of 0 performance result (Q4 2022 and Q1 2023), which meet the requirements of implementing PIP process. However, during the communication with Tony, Tony claimed that although he didn't have numbers in the first quarter of 2023, he had completed his tasks in 2022, and even exceeded the sales target, after that he provided screenshots of the completion rate from system. Is this PIP Executable ?"},
      {text:'Simon is a Presales Manager and one of his employees Maria, who has been in her role for 5 years is not performing at the standard required for the role or their career level.  Simon has been in ongoing conversations with Maria regarding her performance for the past two years and Maria was placed on a documented Success Plan six months ago.  Unfortunately, performance has slipped again and Simon contacted his PR Partner as he wants to initiate a PIP.  Simon has been having regular SAP Talks with Maria regarding performance and has documented these in the SAP Talk Tool.Can Simon initiate a PIP?'},
      {text : 'Melissa is the manager of Lisa who is new Sales Academy graduate.  Lisa has been in her role for nine months and was given a newly created territory.  Lisa has completed 3 quarters in her sales role.  Melissa is yet to see any new opportunities created for Lisa’s territory and wants to place Lisa on  PIP. Can Melissa do this?'},
      { text : 'David is a Sales manager and his employee Wendy is not reaching her targets.  Wendy has been given a territory which is challenging due to a economic down turn in that specific industry.  David wants to put Wendy on PIP and has contacted PR Partner to start this process.  Can David place Wendy on a PIP?'},
      {text : 'During what month do people sleep the least?'},
      {text : 'Which 5 letter words in the dictionary can be pronounced the same, even if it has 4 of its letters removed?'},
      {text : "What's wrong in this picture?", image : '../images/image15.png'} ,
      {text : " ", image : '../images/image16.png'}
    ]
    
  }
  const [quesArr, setQuesArr] = useState(getQuestion.questions);

  const [count,setCount] = useState(1);
  
  const flipCard = () => {
    if (quesArr && randomIndexS ===null ) {
      const randomIndex = Math.floor(Math.random() * quesArr.length);
      setRandomIndexS(randomIndex);
    }
    setIsFlipped(true); 

  };

  // useEffect(() => {
    
  // },[isFlipped]);
  console.log(randomIndexS,'idx')
  
  const removeQuestion = (index) => {
    const updatedQuestions = [...quesArr];
    updatedQuestions.splice(index, 1);
    setQuesArr(updatedQuestions);
    setRandomIndexS(null);
  }
   

   
  return (
    <div className="App">
    {isFlipped && <div className='backdrop'>  </div>}
     {isFlipped && <Question count={count}changeIsFlipped={()=>setIsFlipped(false)} quesArr={quesArr && quesArr[randomIndexS]} removeQuestion ={removeQuestion} randomIndex={randomIndexS}/>}
      <div class="game-board">
        <Card flipCheck={flipCard} />        
      </div>

      </div>
  );
}

export default App;
