import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Note from "./components/Note"
import Footer from "./components/Footer"
import reportWebVitals from './reportWebVitals';
import CreateArea from "./components/CreateArea"
function Main(info){
  const [data,changeData] = useState([])
function addData(info){
  
  changeData([...data,info])
}
function deletedata(idx){
  changeData(data.filter((val,i)=>i!==idx))

}

    return <div>
    <App />
    <div>
        <CreateArea chData={addData} />
        <Note details={data} delete={deletedata} info={data} />
      </div>
    <Footer />
  </div>
}
ReactDOM.render(
 <Main /> ,document.getElementById("root"))




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
