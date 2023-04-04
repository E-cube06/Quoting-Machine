function App(){
const [quotes, setQuote] = React.useState([]);
const [randomQuote, setRandomQuote] = React.useState([]);
const [color, setColor] = React.useState(["white"])
React.useEffect(
    () =>{
        async function fetchData(){
        const response = await fetch("https://type.fit/api/quotes");
        const data = await response.json();
        setQuote(data);
        let randIndex = Math.floor(Math.random() * data.length);
        setRandomQuote(data[randIndex]);
        }
        fetchData();
    }, []
)
const getNewQuote = () => {
    const colors = ["magenta",
                     "blue",
                    "yellow",
                    "red",
                    "green",
                    "indigo",
                    "violet",
                    "gray",
                    "purple",
                    "pink"];
                    let randColorIndex = Math.floor(Math.random() * colors.length);
                    let randIndex = Math.floor(Math.random() * quotes.length)
                    setColor(colors[randColorIndex]);
                    setRandomQuote(quotes[randIndex]);
}
    return(
       <wrapper id='quote-box'> 
<div style = {{backgroundColor:color, minHeight:"100vh"}}>
        <div className = 'container pt-5'>
            <div className = 'jumbotron'>
                <div className = 'card'>
                    <div className = 'card-header'>Inspirational Quotes</div>
                    <div className = 'card-body'>
                    {
                        randomQuote ?(
                            <>
                                <h5 id='author'className = 'card-title'>{randomQuote.author || "No author"}</h5>
                                <p id='text'className = 'card-text'>&quot;{randomQuote.text}&quot;</p>

                            </>


                        ): <h2>Loading!!</h2>


                    }
                    <button id='new-quote'onClick = {getNewQuote} className ='btn btn-default btn-primary'>New Quote</button>
                    <a id='tweet-quote'className ='btn btn-default btn-warning' href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="+encodeURIComponent('"' +randomQuote.text + '" ' + randomQuote.author)}><i className ='fa fa-twitter'></i></a>
                    <a className = 'btn btn-default btn-danger' href={"https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" + encodeURIComponent(randomQuote.author) + "&content=" + encodeURIComponent(randomQuote.text) + "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"}><i className = 'fa fa-tumblr'></i></a>
                    </div>
                </div>
            </div>
        </div>
        

</div>
</wrapper>

    );
}
ReactDOM.render(<App />, document.getElementById('app'));