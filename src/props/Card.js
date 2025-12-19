
export default function Card({cardDigit,cardNumber,Lang}){
    return(
        <div style={{background:"grey", width: "250px", padding:"5px"}}>
            <h1>This is Card {cardDigit}</h1>
            <p>This paragraph belongs to {cardNumber} card</p>
            <button>Enter for {Lang}</button>
        </div>
    );
}