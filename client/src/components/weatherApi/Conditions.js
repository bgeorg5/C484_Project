const Conditions = (props) =>{
    return (
        <div>
            {props.responseObj.cod === 200 ?
            <div>
                <p><strong>{props.responseObj.name}</strong></p>
                <p>It is Currently { } {Math.round(props.responseObj.main.temp)} { } Degrees out with { } 
                {props.responseObj.weather[0].description}. </p>
            </div>
            : null
}
        </div>

    )
}
export default Conditions

//contribution by Thomas
