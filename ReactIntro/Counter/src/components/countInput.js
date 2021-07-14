export default function CountInput ({label, handleInputValue}){

    return(
        <label>
            {label}
            <input  type='number' onChange={(e)=>handleInputValue(e)}></input>
        </label>
    )
}