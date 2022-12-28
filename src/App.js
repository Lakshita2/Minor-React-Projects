
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
        <h2>Welcome To My Blog</h2>
        <ul>
            {
              items.map((item)=> <li key={item.title}>
                <div className="card text-center">
                
                <h3>{item.title} </h3>
                <p>{item.description}</p>
                </div>
                
                </li>)
            }
        </ul>
        
        
      </div>
    );
  }
  
  export default App;
  