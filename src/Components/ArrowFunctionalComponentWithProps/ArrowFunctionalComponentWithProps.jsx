import React, { useState } from 'react'

const ArrowFunctionalComponentWithProps = (props) => {
    const [isAdmin, setIsAdmin] = useState(false)

    const onClickEventHandler = (previousState) => {
        const { isAdmin } = previousState
        setIsAdmin(!isAdmin)
    }

    return (
        <div className='arrow-function-component'>
            <h1>
                Hello World from Arrow Functional Component With Props
            </h1>
            <h1> 
                My Name is {props.name} 
            </h1>
            <h1> 
                My Age is {props.age} 
            </h1>
            { isAdmin ? 
             <div>
                <button>
                    Submit
                </button>
             </div> : 
             <div>
                <button onClick={onClickEventHandler}>
                    Click this button to see the Summit button
                </button>
             </div>
            }
        </div>
    );
  }

  export default ArrowFunctionalComponentWithProps
  