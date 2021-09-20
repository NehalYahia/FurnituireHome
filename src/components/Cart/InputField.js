const InputField=props=>
{
    return(
        <div className="rounded-pill border d-flex justify-content-between px-3 py-1 align-items-center mb-3  ">
        <input type="text" className="inputFieldStyle" placeholder={props.name}/>
    </div>
    )

}

export default InputField;