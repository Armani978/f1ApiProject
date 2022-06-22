// Using JavaScript(axios) and the DOM you are to create a table of data using the F1 racer API. The table should have a total of 7 columns and dynamically populate the data when a "season" and "round" are specified within your form.

// retrieve and show:
// first name
// last name
// date of birth
// position
// wins
// nationality
// Constructor


function handleSubmit(e){
    console.log(document.getElementsByName('season')[0].value);
    console.log(document.getElementsByName('round')[0].value);
    createTableApi(document.getElementsByName('season')[0].value, document.getElementsByName('round')[0].value);

}
async function createTableApi(season, round) {
   let apiAxios = await axios.get(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    console.log(apiAxios)
    apiAxios = apiAxios.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    console.log(apiAxios)
    
    let tableHead = document.getElementsByTagName("thead")[0]
    for (const ergast of apiAxios) {
        let tableRow = document.createElement("tr")
        tableHead.appendChild(tableRow)
// Get the first name
       let th = document.createElement("th")
        th.scope = "row"
        th.innerText= ergast.Driver.givenName
        tableRow.appendChild(th)
// Get the last name
        tableData = document.createElement("td")
        tableData.innerText = ergast.Driver.familyName
        tableRow.appendChild(tableData)
// Get the date of birth
        tableData = document.createElement("td")
        tableData.innerText = ergast.Driver.dateOfBirth
        tableRow.appendChild(tableData)
// Get the position
        tableData = document.createElement("td")
        tableData.innerText = ergast.position
        tableRow.appendChild(tableData)
// Get the wins
        tableData = document.createElement("td")
        tableData.innerText = ergast.wins
        tableRow.appendChild(tableData)
// Get nationality
        tableData = document.createElement("td")
        tableData.innerText = ergast.Driver.nationality
        tableRow.appendChild(tableData)
// Constructors
        tableData = document.createElement("td")
        tableData.innerText = ergast.Constructors[0].name
        tableRow.appendChild(tableData)

    }}