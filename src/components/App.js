import React from 'react'

const App = () => {
     let arr=['A','B','C'];
  return (
    <div id="main">
            <ol id='relativeListItem'>
              {
                arr.map((element,i)=>(
                     <li key={`relativeListItem${i+1}`}>{element}</li>
                ))
              }
            </ol>   
    </div>
  )
}

export default App
