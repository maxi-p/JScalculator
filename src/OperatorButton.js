const OperatorButton = (props)=>{

    return(
        <button value={props.value} className="operator" onClick={props.handle}>{props.value} </button>
    )
}

export default OperatorButton;