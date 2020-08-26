import React, { useState,useEffect } from "react";
import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles.js'; 
import wordsToNumbers from 'words-to-numbers';
const alanKey ='41451801c5be1cc25d558341b0b04d782e956eca572e1d8b807a3e2338fdd0dc/stage';
function App() {
    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setactiveArticles] = useState(-1);
    const classes = useStyles();
    useEffect(() => {
    const alanBtn = require("@alan-ai/alan-sdk-web");
    alanBtn({
    key: alanKey,
    onCommand: ({ command, articles, number }) =>{
        if(command === 'newHeadlines'){
            setNewsArticles(articles);
            setactiveArticles(-1);
        } else if(command === 'highlight'){
            setactiveArticles((prevActiveArticle) => prevActiveArticle+1);
        } else if(command === 'open'){
            const parsedNumber = number.length > 2 ? wordsToNumbers(number, {fuzzy: true}) : number;
            if(parsedNumber > 20){
                window.open("https://sitechecker.pro/wp-content/uploads/2017/12/ahrefs-404-page-not-found.png",'_blank');
            }else{
            window.open(articles[parsedNumber-1].url,'_blank');
            }
        } 
    }
    });
    },[]);

    return (
    <div>
    <div className={classes.logoContainer}> 
        <img src="https://alan.app/voice/images/previews/preview.jpg" className={classes.alanLogo} alt="alan logo"/>
    </div>
        <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
    </div>
    );
    }
    
export default App;