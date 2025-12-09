export function Heeder() {
    const date = new Date();    
    const Titel =" ברוכים הבאים לספריה שלי"; ;
    return (
        <header>
            <h1>{Titel}</h1>
            <p>{date.toDateString()}</p>
        </header>
    );
}