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
    },
    deleteEntry(entryId) {
        return fetch(`http://localhost:3000/entries/${entryId}`, {
            method: "DELETE"
        })
            .then(response => response.json())
    },
    getAllEntries() {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
    },
    getSingleJournalEntry(entryId) {
        fetch(`http://localhost:3000/entries/${entryId}`)
            .then(response => response.json())
     },

    // updateFormFields: entryId => {

    //     // Get reference to input fields in the form
    //     const hiddenEntryId = document.querySelector("#entryId")
    //     const date = document.querySelector("#journalDate")
    //     const concept = document.querySelector("#conceptsCovered")
    //     const journalEntry = document.querySelector("#journalEntry")
    //     const mood = document.querySelector("#mood")

    //     fetch(`http://localhost:3000/entries/${entryId}`)
    //         .then(response => response.json())
    //         .then(entry => {
    //             /*
    //                 Now that you KNOW you have the data, render
    //                 an editing form that represents the current
    //                 state of the resource.
    //             */
    //             hiddenEntryId.value = entry.id // Hidden value. User no see. 🙈
    //             date.value = entry.date
    //             concept.value = entry.concept
    //             journalEntry.value = entry.entry
    //             mood.value = entry.mood
    //         })
    // },
    editEntry: (id, updatedObject) => {

        // Logic for the PUT operation
        fetch(`hhttp://localhost:3000/entries/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedObject)
        })
            .then(res => res.json())


    }
}
