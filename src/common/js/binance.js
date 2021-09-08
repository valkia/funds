function get(url, data={}) {
    // Default options are marked with *
    return fetch(url, {
        //body: JSON.stringify(data), // must match 'Content-Type' header
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
            'user-agent': 'Mozilla/4.0 MDN Example',
        },
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // *client, no-referrer
    })
        .then(response => response.json()) // parses response to JSON
}

export const getPrice = (symbol)=>{
   return  get(`https://www.okex.com/api/v5/market/ticker?instId=${symbol}`,{})
}
// interval:1m
export const getKlines = (symbol,interval)=>{
   return  get(`https://www.okex.com/api/v5/market/index-candles?instId=${symbol}&bar=${interval}&limit=50`,{})
}
