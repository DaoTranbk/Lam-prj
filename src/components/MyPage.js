import React from 'react';
import './MyPage.css';

class MyPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pending: [
                {id: 1, value: 'Hoc'},
                {id: 2, value: 'Ngu'},
                {id: 3, value: 'The thao'},
            ]    ,    //   List co san
            added: {id: '', value: ''}  ,  // gia tri them
            index: 3,
            doing: [],
            done: [],
            draggedToDoingItem: {},
            draggedToPendingItem: {},
            checkShowInput4Pending : false,
            checkShowInput4Doing : false,
            text: "",
            draggedItem: {id:'', value:''},
            isEditing: 0,
            checkDoing:false,
            checkPending:false,
            checkDone:false,
        };

        this.onChangeValue = this.onChangeValue.bind(this);
        
    }
    
    onChangeValue(e) {
        this.setState({added: {id: '', value: e.target.value} });
        console.log(e.target.value);
    }
    onChangeEdit(e){
        this.setState({added: {id : '', value: e.target.value}});
    }

    addItem = (pes) => {
        let oldIndex = this.state.index;      
        let newIndex = oldIndex + 1;
        let value = this.refs.ip.value;
        if(value.trim() !== ""){
            this.setState({added: {id: newIndex, value: value}});
            this.setState(state => {
                let index = newIndex;
                if(pes == 1){
                    const pending = state.pending.concat(state.added);
                    return {
                        pending,   
                        index,     
                    };
                }
                if(pes == 2){
                    const doing = state.doing.concat(state.added);
                    return {
                        doing,   
                        index,     
                    };
                }
            });         
        }
        this.refs.ip.value = "";
        
    }

    removeItem = id => {
        this.setState(state => {
            const pending = state.pending.filter(item => (item.id !== id));
            const doing = state.doing.filter(item=>(item.id!==id));
            return {
                pending,
                doing,
            };
        });
    }

    editItems = (item) => {
        this.refs.editItem.value = item.value;
        this.setState({
            isEditing: item.id
        })
    }
    saveItem = () => {
        if(this.state.added.value.trim()!=""){
            const new_list1 = this.state.pending.map((item => {
                if (item.id === this.state.isEditing) {
                    return {
                        id: this.state.isEditing,
                        value: this.state.added.value,
                    }
                }
                else 
                    return {
                        id: item.id,
                        value: item.value
                    }
                }));
            const new_list2 = this.state.doing.map((item => {
                if (item.id === this.state.isEditing) {
                 //  this.onChangeEdit.bind(this);
                    return {
                        id: this.state.isEditing,
                        value: this.state.added.value,
                    }
                }
                else 
                    return {
                        id: item.id,
                        value: item.value
                    }
                }));
            this.setState({pending: new_list1, doing: new_list2, isEditing:0});
            this.refs.editItem.value ="";
        }
        
    }
   
    
    onDragOver = (event) => {
        event.preventDefault();
    }

    drag = (event,item) =>{
        event.preventDefault();
        this.setState({draggedItem:item});
        this.state.doing.map(item =>{
            if(item.id === this.state.draggedItem.id){
                this.setState({
                    checkDoing:true,
                    checkPending:false,
                    checkDone:false,
                })
            }
        })
        this.state.pending.map(item =>{
            if(item.id === this.state.draggedItem.id ){
                this.setState({
                    checkPending:true,
                    checkDoing:false,
                    checkDone:false,
                })
            }
        })
        this.state.done.map(item =>{
            if(item.id === this.state.draggedItem.id ){
                this.setState({
                    checkPending:false,
                    checkDoing:false,
                    checkDone:true,
                })
            }
        })
    }
    dropOnDoing = (event) =>{
        let pending = this.state.pending;
        let doing = this.state.doing;
        let done = this.state.done;
        let draggedItem = this.state.draggedItem;
        
        if(this.state.checkDoing){
            this.setState({
                checkDoing:false,
            });
        }
        else{
            this.setState({
                doing : doing.concat(draggedItem),
                pending: pending.filter(item => (item.id !== draggedItem.id)),
                done: done.filter(item=> (item.id !== draggedItem.id)),
                draggedItem: {},
            })
            
        }
    }
    dropOnPending = (event) =>{
        let doing = this.state.doing;
        let pending = this.state.pending;
        let done = this.state.done;
        let draggedItem = this.state.draggedItem;
        if(this.state.checkPending){
            this.setState({
                checkPending: false,
            });
        }
        else{
            this.setState({
                pending : pending.concat(draggedItem),
                doing: doing.filter(item => (item.id !== draggedItem.id)),
                done: done.filter(item=> (item.id !== draggedItem.id)),
                draggedItem: {},
            })
        }
    }
    dropOnDone = (event) =>{
        let doing = this.state.doing;
        let pending = this.state.pending;
        let done = this.state.done;
        let draggedItem = this.state.draggedItem;
        if(this.state.checkDone){
            this.setState({
                checkDone: false,
            });
        }
        else{
            this.setState({
                done : done.concat(draggedItem),
                pending: pending.filter(item => (item.id !== draggedItem.id)),
                doing: doing.filter(item => (item.id !== draggedItem.id)),
                draggedItem: {},
            })
        }
    }
    showTextarea4Pending(){
        this.setState({checkShowInput4Pending : true});
    }
    showTextarea4Doing(){
        this.setState({checkShowInput4Doing : true});
    }
    hideTextarea4Pending(){
        this.setState({checkShowInput4Pending: false, });
    }
    hideTextarea4Doing(){
        this.setState({checkShowInput4Doing: false, });
    }

    render() {
        return (
            <div class="MyPage">
                <div class="modal" id="modalEdit">
                    <div class="modal-dialog">  
                        <div class="modal-content">
                            <div class="modal-header">
                                <h6 class="modal-title">Chỉnh sửa</h6>
                                <button type="button" class="close" data-dismiss="modal">×</button>
                            </div>
                            <div class="modal-body">
                                <textarea 
                                    id="editItem" ref ="editItem" placeholder="..." onChange={this.onChangeEdit.bind(this)}>
                                </textarea>
                                
                            </div>
                            <div class="modal-footer">
                            <button class= "btn btn-success btn-sm"  onClick= {this.saveItem.bind(this)} data-dismiss="modal">Save</button>
                            </div>
                            
                        </div> 
                    </div>
                </div>
                
                <div class="todoContainer"
                    onDrop={event => this.dropOnPending(event)}
                    onDragOver={event => this.onDragOver(event)}
                >   
                    
                    
                    <div class="list-group" id="pendingList">
                        <h5>Pending</h5>
                        {this.state.pending.map(item => (
                            <span 
                                
                                ref="id"
                                id={item.id}
                                key={item.id}
                                class="list-group-item" 
                                draggable="true"
                                onDrag={(event) => this.drag(event, item)}    
                            >
                                {item.value} 
                                
                                <button class="remove"  onClick={() => this.removeItem(item.id)}><i class="fa fa-times-circle" title={'Remove'}></i></button>
                                <button class="edit" data-toggle="modal" data-target="#modalEdit" onClick={() => this.editItems(item)}><i class="fa fa-pencil" title={'Edit'}></i></button>
                            </span>
                            
                        ))} 
                                       
                    </div>
                    
                    
                    {this.state.checkShowInput4Pending ? (
                        <div class="enterText">
                            <textarea ref="ip"
                            class="inputItems"
                            placeholder="..." 
                            onChange={this.onChangeValue}>
                            </textarea >
                            <button class="btn btn-success" id="addToDo" onClick={event=>this.addItem(1)}>Add</button>
                            <button class="btn btn-danger" id="close" onClick = {this.hideTextarea4Pending.bind(this)}><i class="fa fa-times"></i></button>
                            
                        </div>
                    ):(<input type="button" class="btn btn-primary" value="Thêm thẻ" onClick={this.showTextarea4Pending.bind(this)}/>)}
                    
                </div>
  
                <div class="doingContainer"
                    onDrop={event => this.dropOnDoing(event)}
                    onDragOver={ event => this.onDragOver(event)}
                >
                    
                    <div class="list-group" id="doingList">
                        <h5>Doing</h5>
                        {this.state.doing.map(item => (
                            <span 
                                key={item.id} 
                                id={item.id}
                                class="list-group-item"
                                draggable
                                onDrag={(event) => this.drag(event, item)} 
                            >
                                {item.value} 
                                
                                <button class="remove"  onClick={() => this.removeItem(item.id)}><i class="fa fa-times-circle" title={'Remove'}></i></button>
                                <button class="edit" data-toggle="modal" data-target="#modalEdit" onClick={() => this.editItems(item)}><i class="fa fa-pencil" title={'Edit'}></i></button>
                            </span>
                        ))}
                    </div>

                    {this.state.checkShowInput4Doing ? (
                        <div class="enterText">
                            <textarea ref="ip"
                            class="inputItems"
                            placeholder="..." 
                            onChange={this.onChangeValue}>
                            </textarea >
                            <button class="btn btn-success" id="addDoing" onClick={event=>this.addItem(2)}>Add</button>
                            <button class="btn btn-danger" id="close" onClick = {this.hideTextarea4Doing.bind(this)}><i class="fa fa-times"></i></button>
                            
                        </div>
                    ):(<input type="button" class="btn btn-primary" value="Thêm thẻ" onClick={this.showTextarea4Doing.bind(this)}/>)}

                </div>
                
                <div class="doneContainer"
                    onDrop={event => this.dropOnDone(event)}
                    onDragOver={ event => this.onDragOver(event)}
                >
                    
                    <div class="list-group" id="doneList">
                        <h5>Done</h5>
                        {this.state.done.map(item => (
                            <span 
                                key={item.id} 
                                id={item.id}
                                class="list-group-item"
                                draggable
                                onDrag={(event) => this.drag(event, item)} 
                            >
                                {item.value} 
                                
                                <button class="remove"  onClick={() => this.removeItem(item.id)}><i class="fa fa-times-circle" title={'Remove'}></i></button>
                                <button class="edit" data-toggle="modal" data-target="#modalEdit" onClick={() => this.editItems(item)}><i class="fa fa-pencil" title={'Edit'}></i></button>
                            </span>
                        ))}
                    </div>
                </div>
            </div>


        );
    }
}

export default MyPage;