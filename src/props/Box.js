import Card from "./Card";

export default function Box(){
    return(
        <>
            <h1>This Box displays Cards</h1>
            <Card cardDigit="1" cardNumber="First" Lang="English"/>
            <Card cardDigit="2" cardNumber="Second" Lang="Hindi"/>
            <Card cardDigit="3" cardNumber="Third" Lang="Telugu"/>
        </>
    );
}