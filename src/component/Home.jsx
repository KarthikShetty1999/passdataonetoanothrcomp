
import React,{useState} from 'react';
import {Link} from 'react-router-dom';
const Home = (props) => {

const [state, setState] = useState([{
    name: "",
    email: "",
  }]);
  function handleChange(event) {
    const {name,value} = event.target;
    setState((prev)=>{
      return {...prev, [name]:value};
    });
    };
    const handleClick = (e) =>{
        e.preventDefault();
    };
        return(
            <div>
                <Link state={{data:state}} to="/ChildComp">Goto Child</Link>
                <div className="App">
                     <form >
                        <label>
                            Name
                            <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            />
                        </label>
                         <label>
                            Age
                            <input
                            type="text"
                            name="email"
                           onChange={handleChange}
                        />
                    </label>
                    <button className='submit' onClick={handleClick}>submit</button>
                </form>
            </div>
        </div>
        );
};
export default Home;
