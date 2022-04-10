import logo from './logo.svg';
import './App.css';
import React from 'react'
import axios from 'axios';
import Loader from './Loader';
import Card from './Card';
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
          then((resp)=>{
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
  getAllElems(data){
    console.log("getAllElems",data)
    return <>
            {data.map((elem,index)=>{ return <Card key={index} data={elem}></Card>})}
      </>
  }
  render(){
    // return <>{this.state.data?(<div dangerouslySetInnerHTML={{ __html: this.state.data }} ></div>): 'AppComponent rendered'}</>
    return <>{this.state.data?
      this.getAllElems(this.state.data)
      : <Loader/>}</>
    // return <Card/>
  }
}

export default App;
