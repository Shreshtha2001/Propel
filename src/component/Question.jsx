import { useEffect, useState, useRef } from "react";

const Question = (props) => {
  const [quesArr, setQuesArr] = useState(props.quesArr);
  const changeHeight = useRef(null);
  const onCloseClicked = ()=>
  {

    // setTimeout(() => {
    //   props.changeIsFlipped();
    // }, 3000);
    props.changeIsFlipped();
    setTimeout(()=>
    {
      props.removeQuestion(props.randomIndex)
    })
  }

  useEffect(()=>
  {
    if(quesArr.image && quesArr.text.trim())
    {
      console.log('hel')
      changeHeight?.current?.classList.add('dynamicHeight')
    }
  })
  return (
    <div className="question-container" ref={changeHeight}>
      <>
      <div className="closeDialog_question" onClick={onCloseClicked}><i class="fa fa-times" aria-hidden="true"></i></div>
       <div className="question"> { quesArr.text && <div>  {quesArr?.text} </div>}
        <div style={{width : '50%', }}>  { quesArr.image &&  <img src={ quesArr.image} alt= "pic"/>} </div>
        </div>
      {/* <div className="answers"> {quesArr?.options?.map((e,idx)=> <button key={idx} onClick={()=>checkAnswer(e)}> {e} </button>)}</div> */}
      {/* <div className="result">{result}</div> */}
</>    
     </div>
  );
};

export default Question;
