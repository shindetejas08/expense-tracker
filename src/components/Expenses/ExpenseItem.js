import React,{useState} from "react"
import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate"
import Card from "../UI/Card"

const ExpenseItem = (props)=>{
    const {date, amount} = props.item
    const [title,setTitle] = useState(props.item.title)

    const handleClick = ()=>{
        setTitle("Updated!!!")
    }
    return(

        <Card className="expense-item">
            <ExpenseDate date={date}/> 
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
                <button onClick={handleClick}>ClickMe</button>
            </div>
        </Card>
    )
}

export default ExpenseItem