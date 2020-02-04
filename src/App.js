import React from "react"
import TodoItem from "./TodoItem"
import './App.css';
import axios from 'axios';



class App extends React.Component
{
  constructor(props)
  {
    super(props);
  
    global.clickCount = 0
    global.inputArray = []
    global.backendData=""
  
 
  

    this.state ={
                  textboxStatus: "noTextBox",
                  userInput: "",
                  todos: global.inputArray,
                  dateInput:"",
                  timeInput:"",
                  alert:"",
                }


   
    this.handleAdd = this.handleAdd.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange=this.handleChange.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleDate = this.handleDate.bind(this)
    this.handleTime = this.handleTime.bind(this)
    

   
  
  }











  handleAdd(event)
    {
      event.preventDefault();
      this.setState({textboxStatus: "formStyle", userInput: "", dateInput:"", timeInput:"", alert:""})
    }



    


componentDidMount(){
  axios.get('https://still-everglades-82859.herokuapp.com/api/stuff',)
  .then(response=>{ 





    if(response.data.length>0) {

    response.data.sort(function(a, b){
    var dateA=new Date(a.date), dateB=new Date(b.date)
    return dateA-dateB //sort by date ascending
})



}



this.setState({todos:response.data})

 })
  

}












  handleSubmit(event) {

  if (this.state.userInput!=="")
      {


        global.inputArray[global.clickCount]={id:"", text:this.state.userInput, date:this.state.dateInput, time:this.state.timeInput} 
         
         axios.post('https://still-everglades-82859.herokuapp.com/api/stuff', global.inputArray[global.clickCount])
         .then(res=> {window.location = '/';}
)

     

        global.inputArray.sort(function(a, b){
    var dateA=new Date(a.date), dateB=new Date(b.date)
    return dateA-dateB //sort by date ascending
})
        event.preventDefault();
        this.setState({textboxStatus: "noTextBox"})
        global.clickCount++

       
      } 
    else {
            event.preventDefault();
            this.setState({textboxStatus: "formStyle", userInput: "", dateInput:""})
          }
    };


  handleCancel(event){
    event.preventDefault();
    this.setState({textboxStatus: "noTextBox", userInput: "", dateInput:"", timeInput: ""})
  }


  handleDate(event)
    {
      this.setState({ dateInput: event.target.value})


      
    }



handleTime(event)
    {
      this.setState({ timeInput: event.target.value})
    }




  handleChange(event)
    {
      this.setState({ userInput: event.target.value})
    }









render(){
              
                const todoItems = this.state.todos.map(item =><TodoItem item={item} handleEdit={this.handleEditParent}/>)

        return(

          <div className="App">
           <header className="App-header">
          <div className="todo-list">
           <h6 className="motivation">Tick says the Clock...Do what you have to do</h6>

               <form className={this.state.textboxStatus}>
                    <input type ="text" name= "userInput" placeholder ="To do Item"value={this.state.userInput} onChange={this.handleChange}/><br/>
                    <input type="date"  name="date" placeholder="Due Date" value={this.state.dateInput} onChange={this.handleDate}/><br/>
                    <input type="time"  name="time" placeholder="Time" value={this.state.timeInput} onChange={this.handleTime}/><br/>
                    <button className="formButton" onClick={this.handleSubmit}> OK </button>
                    <button className="formButton" onClick={this.handleCancel}>CANCEL</button>
                    
                  </form>
                 
                <button className="btn" onClick={this.handleAdd}>
                  Add a New Item
                </button>
               
    
            
            {todoItems}

          </div>
           </header>
          </div>
              )   

        }
}

export default App;
