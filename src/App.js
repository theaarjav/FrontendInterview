import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import List from './List';
/*
  Create a list of candidates, showing their name, vote count, and buttons to add/subtract votes
  Create a small form which has an input box for candidate names and a SUBMIT button to add candidate names. 
  Writing a name in this box and clicking "SUBMIT" should add this candidate name in the list with vote count: 0
  Show the list in the order of descending number of votes
*/
function App() {
  const [list, setList] = useState([])
  const [newName, setNewName] = useState("")
  const handleVoteCount = (ind, fun) => {
    const ch = list[ind]["votes"] + 1;
    if (fun == '-') 
      setList(list.map((person, i) => i == ind ? { ...person, votes: ch-2 } : person));
    else 
    setList(list.map((person, i) => i == ind ? { ...person, votes: ch } : person));
    var newList=list;
    // newList.sort((a, b)=>a.votes-b.votes);
    // console.log(newList);
    // newList.reverse();
    // console.log(newList);
    // setList(newList)
    setList(list=>list.sort((a, b)=> a.votes-b.votes).reverse())
  }

  const handleChange = (e) => {
    setNewName(e.target.value)
  }



  const handleSubmit = () => {
    setList([...list, { name: newName, votes: 0 }]);
    setNewName("");
  }

  return (
    <div >
      {
        list.map(({ name, votes }, i) => {
          return <List key={i}  name={name} votes={votes} handleVoteCount={handleVoteCount} i={i} />
        })
      }

      <div>
        Add Name:
        <input placeholder='Add name to election' value={newName} type='text' onChange={handleChange} />
        <button onClick={handleSubmit}>Add {newName}</button>
      </div>
    </div>
  );
}

export default App;
