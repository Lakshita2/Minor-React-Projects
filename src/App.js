
import './App.css';

const items = [
  {
    title: "My new Website",
    description: "written by Mario"
  },
  {
    title: "Welcome Party!",
    description: "written by yash"
  }
  ]
  
  function App() {
    return (
      <div className="App"  >
        
        <ul>
            {
              items.map((item)=> <li key={item.title}>
                <div className="card text-center">
                <div className="card-body">
                <h3>{item.title} </h3>
                <p>{item.description}</p>
                </div>
                </div> 
                </li>)
            }
        </ul>
        
        
      </div>
    );
  }
  
  export default App;
  