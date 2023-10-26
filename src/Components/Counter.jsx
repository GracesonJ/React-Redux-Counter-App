import React from 'react'
import { decrement, increment, incrementby5, reset } from '../Redux/counterSlice'
import { useDispatch, useSelector } from 'react-redux'

function Counter() {
  const dispatch = useDispatch()
  const count = useSelector(state=>state.counterReducer.count)

  return (
    <>
      <div className="container text-center justify-content-center w-50 mt-5 pt-5 border rounded" 
      style={{height:"70vh"}}>
      <h1 className='text-primary '>COUNTER APP</h1>
        <div className=' m-5 p-3 shadow border' >
          <h3 className='' style={{color:"white"}}>{count}</h3>
        </div>
        <div className='mt-5'>
          <button onClick={()=>dispatch(decrement())} className='btn p-3 bg-danger m-5 shadow' style={{color:"white"}}>Decrement</button>
          <button onClick={()=>dispatch(reset())} className='btn p-3 bg-primary m-5 shadow-lg' style={{color:"white"}}> Reset  </button>
          <button onClick={()=>dispatch(increment())} className='btn p-3 bg-danger m-5 shadow' style={{color:"white"}}>Increment</button>
        </div>
        <button onClick={()=>dispatch(incrementby5(5))} className='btn p-3 bg-danger m-5 shadow' style={{color:"white"}}>Increment by Amount</button>
      </div>
    </>
  )
}
 
export default Counter