import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WriteBtn from './WriteBtn';
import Write from './Write';
import Update from './Update';
import ItemList from './ItemList.js';

class List extends Component {

    constructor(props){
        super(props);
        this.state = {
            items:[{
                    id: "0",
                    value: "",
                    content: "",
                }
            ]
        }
    }

    AddList = (value,content) => {
        const { items } = this.state;
        var id = Math.random().toString(36).substr(2, 16);
        this.setState({
            items: [
                ...items,
                {id, value, content}
            ]
        })
    }

    DeleteList = (id) => {
        const { items } = this.state;
        const newItems = items.filter(item => item.id !== id);
        this.setState({
            items: [
                ...newItems
            ]
        });
    }

    UpdateList = (id, value, content) => {
        const { items } = this.state;
        const index = items.findIndex((i)=> i.id===id);
        items[index].value = value;
        items[index].content = content;
        this.setState({
            items:[
                ...items
            ]
        })
    }

    render() {
      return (
        <div className="list">
            <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <>
                    <WriteBtn />
                    <ItemList item={this.state.items} onDeleteList={this.DeleteList}/>
                    </>
                }></Route>
                <Route path="/write" element={<><Write onAddList={this.AddList} /></>}></Route>
                <Route path="/update/:itemId" element={<><Update item={this.state.items} onUpdateList={this.UpdateList} /></>}></Route>
            </Routes>
            </BrowserRouter>
        </div>
      )
    }
  }

export default List;