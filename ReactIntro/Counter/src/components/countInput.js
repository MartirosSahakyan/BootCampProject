export default function CountInput ({label, handleInputValue,value}){

    return(
        <label>
            {label}
            <input value={value} type='number' onChange={(e)=>handleInputValue(e)}></input>
        </label>
    )
}