
function Book(props){
    return(
        <div className="book">
            <h5>{props.title}</h5>
            <p>Author: {props.author}</p>
            <p>Year: {props.year}</p>
        </div>
    )
}

export default Book;