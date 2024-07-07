document.getElementById('searchButton').addEventListener('click', async () => {
    const country = document.getElementById('countryInput').value.trim();
    if (!country) {
        alert('Please enter a country name');
        return;
    }

    try {
        const woeid = await getWoeid(country);
        const trends = await getTrends(woeid);
        displayTrends(trends);
    } catch (error) {
        alert('Error fetching trending topics');
        console.error(error);
    }
});

async function getWoeid(country) {
    const response = await fetch(`http://localhost:3000/api/woeid`);
    const data = await response.json();
    const location = data.fetch(loc => loc.name.toLowerCase() === country.toLowerCase());
    if (!location) throw new Error('Country not found');
    return location.woeid;
}

async function getTrends(woeid) {
    const response = await fetch(`http://localhost:3000/api/trends/${woeid}`);
    const data = await response.json();
    return data[0].trends;
}

function displayTrends(trends) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    trends.forEach(trend => {
        const div = document.createElement('div');
        div.className = 'trend';
        div.textContent = trend.name;
        resultsDiv.appendChild(div);
    });
}
