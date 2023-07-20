import React,{useState} from "react";
import "./ExpenseForm.css"

const ExpenseForm = (props)=>{
    const [enteredTitle,setEnteredTitle] = useState("")
    const [enteredAmount,setEnteredAmount] = useState("")
    const [enteredDate,setEnteredDate] = useState("")
    // const [userInput,setUserInput] = useState({
    //     enteredTitle:"",
    //     enteredAmount:"",
    //     enteredDate:""
    // })
    const titleChangeHandler = (e)=>{
            setEnteredTitle(e.target.value)
        // setUserInput((prevState)=>{
        //     return {
        //         ...prevState,
        //         enteredTitle:e.target.value
        //     }
        // })
    }
    const amountChangeHandler = (e)=>{
            setEnteredAmount(e.target.value)
        // setUserInput((prevState)=>{
        //     return {
        //         ...prevState,
        //         enteredAmount:e.target.value
        //     }
        // })
    }
    const dateChangeHandler = (e)=>{
            setEnteredDate(e.target.value)
        // setUserInput((prevState)=>{
        //     return {
        //         ...prevState,
        //         enteredDate:e.target.value
        //     }
        // })
    
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
          };
        props.onSaveExpenseData(expenseData)
        setEnteredTitle("")
        setEnteredAmount("")
        setEnteredDate("")
    }
    
    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} onChange={amountChangeHandler} min="0.01" step="0.01"/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} onChange={dateChangeHandler} placeholder="mm-dd-yyyy" min="2019-01-01" max="2023-12-31"/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm



//combining all the eventListeners into single inputEventListener

// import React,{useState} from "react";
// import "./ExpenseForm.css"

// const ExpenseForm = ()=>{
//     const [enteredTitle,setEnteredTitle] = useState("")
//     const [enteredAmount,setEnteredAmount] = useState("")
//     const [enteredDate,setEnteredDate] = useState("")
//     // const [userInput,setUserInput] = useState({
//     //     enteredTitle:"",
//     //     enteredAmount:"",
//     //     enteredDate:""
//     // })
//     // const titleChangeHandler = (e)=>{
//     //         setEnteredTitle(e.target.value)
//     //     // setUserInput((prevState)=>{
//     //     //     return {
//     //     //         ...prevState,
//     //     //         enteredTitle:e.target.value
//     //     //     }
//     //     // })
//     // }
//     // const amountChangeHandler = (e)=>{
//     //         setEnteredAmount(e.target.value)
//     //     // setUserInput((prevState)=>{
//     //     //     return {
//     //     //         ...prevState,
//     //     //         enteredAmount:e.target.value
//     //     //     }
//     //     // })
//     // }
//     // const dateChangeHandler = (e)=>{
//     //         setEnteredDate(e.target.value)
//     //     // setUserInput((prevState)=>{
//     //     //     return {
//     //     //         ...prevState,
//     //     //         enteredDate:e.target.value
//     //     //     }
//     //     // })
    
//     // }
//     const inputChangeHandler =(identifer,value)=>{
//         if(identifer === "title"){
//             setEnteredTitle(value)
//         }else if(identifer === "amount"){
//             setEnteredAmount(value)
//         }else{
//             setEnteredDate(value)
//         }
//     }
//     return(
//         <form>
//             <div className="new-expense__controls">
//                 <div className="new-expense__control">
//                     <label>Title</label>
//                     <input type="text" onChange={((e)=>{
//                         inputChangeHandler("title",e.target.value)
//                     })} />
//                 </div>
//                 <div className="new-expense__control">
//                     <label>Amount</label>
//                     <input type="number" onChange={((e)=>{
//                         inputChangeHandler("amount",e.target.value)
//                     })} min="0.01" step="0.01"/>
//                 </div>
//                 <div className="new-expense__control">
//                     <label>Date</label>
//                     <input type="date" onChange={((e)=>{
//                         inputChangeHandler("date",e.target.value)
//                     })} placeholder="mm-dd-yyyy" min="2019-01-01" max="2023-12-31"/>
//                 </div>
//             </div>
//             <div className="new-expense__actions">
//                 <button type="submit">Add Expense</button>
//             </div>
//         </form>
//     )
// }

// export default ExpenseForm