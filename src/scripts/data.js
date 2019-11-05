export default {
    API: {
        getJournalEntries: function () {
            return fetch("http://localhost:3000/entries")
                .then(response => response.json())
        }
    },
    // Use `fetch` with the POST method to add your entry to your API
    saveJournalEntry: (entry) => { //rename variable
        return fetch("http://localhost:3000/entries", { // Replace "url" with your API's URL
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        })
    }
}
