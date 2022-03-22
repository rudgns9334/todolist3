import { Component } from 'react';
import ListAppender from './ListAppender.js';
import ItemList from './ItemList.js';

class List extends Component {

    constructor(props){
        super(props);
        this.state = {
            items:[]
        }
    }

    AddList = value => {
        const { items } = this.state;
        var id = this.state.items.length+1;
        var check = false;
        this.setState({
            items: [
                ...items,
                {id, value, check}
            ]
        })
    }

    render() {
      return (
        <div className="list">
            <ListAppender onAddList = {this.AddList}/>
            <ItemList item = {this.state.items}/>
        </div>
      )
    }
  }

export default List;