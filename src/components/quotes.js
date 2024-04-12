import "./quotes.css"
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import axios from "axios";
import favIcon from "../components/icons/fav-icon.svg"
import unFavIcon from "../components/icons/unfav-icon.svg"

function Quotes() {
    const [quoteList, setQuoteList] = useState([]);
    useEffect(() => {
        // getQuoteList() 
        return () => {
            getQuoteList(0, 5);
        };

    }, []);


    const getQuoteList = (start, end) => {
        let tempArray = [...quoteList]
        for (let i = start; i < end; i++) {
            axios({
                url: "https://api.api-ninjas.com/v1/quotes?category=happiness",
                method: "GET",
                headers: {
                    'X-Api-Key': '7n3x3aSHv2oXCQag5i8bXw==7XD3OYMH3uuxd2MX'
                },
            }).then((res) => {
                res.data.forEach(rows => {
                    if (!tempArray.some(item => item.quote === rows.quote)) {
                        let tempObj = {
                            ...rows, favourite: false
                        }
                        tempArray.push(tempObj);
                    }
                });
            }).catch((err) => {
                console.log("err", err);
            });
        }
        setQuoteList(tempArray)
    }
    // const updateFav = (quote, status) => {
    //     let quotes = [...quoteList]
    //     const indexToUpdate = quotes?.findIndex(quote => quote.quote === quote);
    //     if (indexToUpdate !== -1) {
    //         quotes[indexToUpdate].favourite = status;
    //     } 
    //     console.log("quote", quotes)
    //     setQuoteList([...quotes])
    // }
    return (
        <div className="quote-container">
            {console.log("quoteList", quoteList)}
            <h1 class="text-align-center text-size-20 text-size-32-ns text-weight-700 mb10">
                Quotation
            </h1>
            <Grid container spacing={2}>
                {quoteList.length > 0 && quoteList?.map((quote, index) => (
                    <Grid item xs={3}>
                        <div className="qoute-card">
                            <div className="quote-text">
                                {quote.quote}
                            </div>
                            {/* <div className="like-icon">
                                {quote.favourite ? (<svg onClick={() => { updateFav(quote.quote, false) }} style={{ cursor: "pointer" }} xmlns="http://www.w3.org/2000/svg" height="48" fill="#e21212" viewBox="0 -960 960 960" width="48" ><path d="m480-121-41-37q-106-97-175-167.5t-110-126Q113-507 96.5-552T80-643q0-90 60.5-150.5T290-854q57 0 105.5 27t84.5 78q42-54 89-79.5T670-854q89 0 149.5 60.5T880-643q0 46-16.5 91T806-451.5q-41 55.5-110 126T521-158l-41 37Z" /></svg>
                                ) : (<svg onClick={() => { updateFav(quote.quote, true) }} style={{ cursor: "pointer" }} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m480-174.077-22.539-20.846q-100.383-91.736-165.653-157.56-65.27-65.825-103.577-115.94-38.308-50.115-53.27-90.247Q120-598.802 120-638.385q0-74.434 50.5-125.025Q221-814 295.385-814q54.692 0 101.653 29.307Q444-755.385 480-699q38.923-57.846 84.659-86.423Q610.394-814 664.615-814 739-814 789.5-763.41 840-712.819 840-638.385q0 39.583-14.961 79.715-14.962 40.132-53.182 90.081-38.219 49.95-103.577 115.94T502.539-194.923L480-174.077Zm0-41.308q98.202-89.574 161.624-153.465 63.421-63.891 100.783-111.674 37.362-47.784 52.093-84.731 14.731-36.948 14.731-72.985 0-62.299-41.231-103.645t-103.16-41.346q-50.755 0-92.682 29.577t-78.927 91.962h-26.693q-37.538-62.154-79.45-91.847-41.912-29.692-91.928-29.692-61.16 0-102.775 41.346-41.616 41.346-41.616 104.071 0 35.819 14.854 72.81 14.854 36.99 51.692 84.766 36.839 47.777 100.916 111.469Q382.308-305.077 480-215.385Zm0-283.923Z" /></svg>)}
                            </div> */}
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>)
}

export default Quotes;
