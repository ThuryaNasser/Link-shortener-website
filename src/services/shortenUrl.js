const shortenUrl = (
    longUrl = '',
    setShortUrl = () => { }) => {
    fetch('https://api-ssl.bitly.com/v4/shorten', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer bafc1e3be3aa6cf1be314eb910e6baca622be716',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "long_url": longUrl, "domain": "bit.ly" })
    })
        .then(response => response.json())
        .then(data => { setShortUrl(data.link); });
}

export default shortenUrl;