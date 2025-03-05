function Dies(props) {
    const istrue = props.isHeld;
   
    return (
        istrue ? (
            <button onClick={props.hold} className="heldtrue">{props.value}</button>
        ) : (
            <button onClick={props.hold}  className="heldfalse">{props.value}</button>
        )
    )
}

export default Dies;