import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {ListItem} from "./components/listItem";


class App extends Component {

  constructor(props){
  super(props);

  this.state = {
     data: [
      {
        title: 'Work',
        priority : 2,
      },
      {
        title:'Study',
        priority: 1,
      },
       {
         title:'Sleep',
         priority: 3,
       },
        {
         title:'Sleep',
         priority: 3,
        },
         {
             title:'Sleep',
             priority: 3,
         },
         {
             title:'Sleep',
             priority: 3,
         }


    ]
  }

    this.removeElem = this.removeElem.bind(this);
  }


  removeElem(removeIndex){
        this.setState({data: this.state.data.filter((item,index) => index !== removeIndex)})
  }

  render(){
    return <div className="App">
      {this.state.data.map((item, index)=>
          <ListItem key = {index}
                    title = {item.title}
                    onRemove={() => this.removeElem(index)}
                    priority = {item.priority}/>
      )}
    </div>
  }
}

export default App;
