import React from 'react';

class Gui_cho_Huy extends React.Component {
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
        };
        this.addItem = this.addItem.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
    }

    onChangeValue(e) {
        let oldIndex = this.state.index;
        let newIndex = oldIndex + 1;
        this.setState({index: newIndex, added: {id: newIndex, value: e.target.value} });
    }

    addItem() {
        
        this.setState(state => {
            const pending = state.pending.concat(state.added);
            return {
                pending,        
            };
        });         
     }

    render() {
        return(
            <div>
                <ul>
                    {this.state.pending.map(item => (
                        <li key={item.id}>{item.value}</li>
                    ))}
                </ul>
                <input
                    type="text"
                    id="enterItem"
                    placeholder="Enter here"
                    onChange={this.onChangeValue} />
                <button onClick={this.addItem}>Add</button>
            </div>
        );        
    }
}

export default Gui_cho_Huy;