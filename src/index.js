import ReactDOM from 'react-dom/client';
import About from './view/about/about'
import Contact from './view/contact/contact'
import Feedback from './view/feedback/feedback'
import Home from './view/home/home'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


function App(){
  const path = window.location.pathname;


  if(path==='/'){
    root.render(<Home/>)
  }
  else if(path==='/about'){
    root.render(<About/>)
  }
  else if(path==='/contact'){
    root.render(<Contact/>)
  }
  else if(path==='/feedback'){
    root.render(<Feedback/>)
  }
  else{
    root.render(<h1>404 not found</h1>)
  }
  }

