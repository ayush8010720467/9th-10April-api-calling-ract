import logo from './logo.svg';
import './App.css';
import React from 'react'
import axios from 'axios';
import Loader from './Loader';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: null
    }
  }
  callApi(){
    const url = 'https://api.github.com/users/ayush8010720467/repos'
    // const url = 'https://www.google.com/'
    // fetch(url).then((resp)=>{
    //     console.log(resp);
    //     return resp.json()})
    // .then((resp)=>{console.log('Response', typeof(resp));}).catch((err)=>{
    //   console.log('Error ', err);
    // })
    axios.get(url).
          then((resp)=>{console.log('Response', resp);
            this.setState({
              data: resp.data
            })
        }).
          catch((err)=>{
                console.log('Error ', err);
              }
          )
  }
  componentDidMount(){
    this.callApi();
  }
  showHTML(html){
    return  `${html}`
  }
  render(){
    // return <>{this.state.data?(<div dangerouslySetInnerHTML={{ __html: this.state.data }} ></div>): 'AppComponent rendered'}</>
    return <>{this.state.data?'AppComponent rendered': <Loader/>}</>
  }
}

export default App;
