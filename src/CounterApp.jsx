import {useState} from 'react'
import PropTypes from 'prop-types';



export const CounterApp = ({ value }) =>{

    const [ counter, setCounter ] = useState(value);

    //----------
const trineo= [1,2,3,5];

var n = 1;
if (trineo[n] > trineo[n] && trineo[n-1] < trineo[n] ){

    console.log(true);
}else{
    console.log(false);
}

    //-----------

    console.log("2" === 2);

    const handleAdd = (event) => {
        setCounter(counter+1);
        // setCounter( (c) => c + 1);
        console.log(event);
    }

    const handleSubtract = (event) => {
        setCounter(counter-1);
        // setCounter( (c) => c + 1);
        console.log(event);
    }

    const handleReset = (event) => {
        setCounter(value);
        // setCounter( (c) => c + 1);
        console.log(event);
    }

       
return(
    <>
    <h2> Count to infinity if you wish </h2>
    <h2> { counter } </h2>
    <button onClick={ handleAdd }> + </button>
    <button onClick={ handleSubtract }> - </button>
    <button onClick={ handleReset }> Reset </button>
    </>
);

}


CounterApp.propTypes = {

    value: PropTypes.number,

}

CounterApp.defaultProps = {

    value:0
}
