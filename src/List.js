import React from 'react'

const List = ({name, votes, handleVoteCount, i}) => {
  return (
    <div>
        {name} <button onClick={()=>handleVoteCount(i, '-')}>-</button>{votes} <button onClick={()=>handleVoteCount(i, '+')}>+</button>
    </div>
  )
}

export default List;