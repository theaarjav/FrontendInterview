import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
/*
  Create a list of candidates, showing their name, vote count, and buttons to add/subtract votes
  Create a small form which has an input box for candidate names and a SUBMIT button to add candidate names. 
  Writing a name in this box and clicking "SUBMIT" should add this candidate name in the list with vote count: 0
  Show the list in the order of descending number of votes
*/
function App() {
  const [list, setList] = useState([])
  const [newName, setNewName] = useState("")
  const handleVoteCount=(ind, fun)=>{
    var newList=list;
    console.log(newList[ind]);
   if(fun=='-') newList[ind].votes--;
   else newList[ind].votes++;
   setList(newList)
  }

  const handleChange=(e)=>{
    setNewName(e.target.value)
  }



  const handleSubmit=()=>{
    setList([...list, {name: newName, votes:0}]);
    setNewName("");
  }

  return (
    <div >
      {
        list.map(({name, votes, }, i)=>{
          return <div className='flex justify-between items-center'>
            <button onClick={()=>handleVoteCount(i, '-')}>-</button>
            <span>
              {name}
            </span>
            <span>{votes}</span>
            <button onClick={()=>handleVoteCount(i, '+')}>+</button>
          </div>
        })
      }

      <div>
        Add Name:
        <input placeholder='Add name to election' value={newName} type='text' onChange={handleChange}/>
        <button onClick={handleSubmit}>Add {newName}</button>
      </div>
    </div>
  );
}

export default App;
