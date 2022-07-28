import {useState} from 'react';

const About = () => {
    const [visible, setVisible] = useState(false);

    const changeVisibility = () =>{
       setVisible(!visible);
    };
    return(
        <div>
            <h1>About area</h1>
            {visible ? <h4>email@email.com</h4>: "Click -->"}
            <button onClick={changeVisibility} className="btn btn-primary">Show info</button>
            <br />
            <br />
            <br />
            <br />
        </div>
    )
};

export default About;

//create a state var (visible), initial value is false
// click on button call function
// function set visable to true