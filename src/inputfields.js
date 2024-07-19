import { useState } from "react";

const InputFields = () => {

    const [source,setSource]=useState('');
    const [destination,setDestination]=useState('');
    const [startTime,setStartTime]=useState(0);
    const handleSubmit=(e)=>{
            ;

    }
    return ( 
        <div className="inputFields">
            <h2>Trip information</h2>
            <form onSubmit={handleSubmit}>
                <label>Source</label>
                <input type="text"
                required
                value={source}
                onChange={(e)=>setSource(e.target.value)}
                />
                <label>Destination</label>
                <input type="text"
                required
                value={destination}
                onChange={(e)=>setDestination(e.target.value)}
                />
                <label>Start time</label>
                <input type="number"
                min="0"
                max="23"
                required
                value={startTime}
                onChange={(e)=>setStartTime(e.target.value)}
                />
                <button>Calculate</button>
            </form>

        </div>

     );
}
 
export default InputFields;