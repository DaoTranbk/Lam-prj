import React from 'react';
import './App.css';
import Header from './components/Header';
  


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false,
    };
    this.changeStatusofCheck = this.changeStatusofCheck.bind(this);
  

  }

  changeStatusofCheck(props) {
    this.setState({check: true});
    console.log("lam");
  }

  render() {
    // if (this.state.check === false) {
      return (
        <div>
          <Header check={this.state.check} changeStatus={this.changeStatusofCheck} />
          {/* <Main changeStatus={this.changeStatusofCheck}/> */}
        </div>
      );
    //}
    // else {
    //   return (
    //     <div>
    //       <LoggedHeader />
            
    //     </div>
    //   );
    // }
    
  }

}


export default App;
