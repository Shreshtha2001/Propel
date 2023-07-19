import { useRef , useEffect, useState} from "react";

export const Card = (props) => {
  const imageRefs = useRef([]);
  const [items,setItems] = useState([ { key: "0", number: "1" },
  { key: "1", number: "2 " },
  { key: "2", number: "3" },
  { key: "3", number: "4" },
  { key: "4", number: "5" },
  { key: "5", number: "6" },
  { key: "6", number: "7" },
  { key: "7", number: "8" },
  { key: "8", number: "9" },
  { key: "9", number: "10" },
  { key: "10", number: "11" },
  { key: "11", number: "12" },
  { key: "12", number: "13" },
  { key: "13", number: "14" },
  { key: "14", number: "15" },
  { key: "15", number: "16" },

])
  // const items = [
    
  // ];

useEffect(() => {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (parseInt(item.number)%2===0) {      
          const imageRef = imageRefs.current[i];
      if (imageRef) {
        imageRef.classList.add("rotate");
      }
    }
  }
}, []);


const flipCard = (idx) =>
{
    
  if (items[idx].isFlippedCheck) {
    return;
  }
      const imageRef= imageRefs?.current[items[idx].key];
      imageRef?.classList.add('flipped')     
      const updatedItems = [...items];
      updatedItems[idx].isFlippedCheck = true;
      props.flipCheck();   
}

  return (
    <>
      {items.map((item, index ) => (
        <div className="tile" onClick={()=>flipCard(index)} ref={(element) => (imageRefs.current[index] = element)}
        key={item.key}>
           <img src="../images/questionMark.png" alt="questionMark" />
          <span className="tile-number">{item.number}</span>
        </div>
      ))}
    </>
  );
};
