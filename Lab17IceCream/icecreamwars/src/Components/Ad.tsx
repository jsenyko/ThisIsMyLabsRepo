import '../css/Ad.css';


interface AdProperties{
    flavor:string;
    fontSize: number;
    isLight: boolean;
}


export function Ad(props:AdProperties) {
    let className = "Ad " + (props.isLight ? "Ad--light" : "Ad--dark")
    //classname will become either: "Ad Ad--light"
    // OR it will be "Ad Ad--dark"
    return(
        <div className={className}>
            <p>Vote for: </p>
            <p style={{ fontSize: props.fontSize }}>{props.flavor}</p>
        </div>
    )
}

