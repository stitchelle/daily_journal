import render from "./entriesDom.js"
import API from "./data.js"
/*
Purpose: To create, and return, a string template that
represents a single journal entry object as HTML

Arguments: journalEntry (object)
*/
const deleteEntry = document.querySelector(".entryLog")

export default {

    makeJournalEntryComponent: (journalEntry) => {
        return `
        <section>
        <h3>${journalEntry.concept}</h3>
        <p>${journalEntry.entry}</p>
        <p>${journalEntry.mood}</p>
        <p>${journalEntry.date}</p>
        <button id="editEntry--${journalEntry.id}">Edit Entry</button>
        <button id="deleteEntry--${journalEntry.id}">Delete Entry</button>
      </section>
    `
    },
    addEventListenerToRecordButton: () => {
        document.querySelector("#recordButton").addEventListener("click", e => {
            const date = document.querySelector("#journalDate").value
            const concept = document.querySelector("#conceptsCovered").value
            const entry = document.querySelector("#journalEntry").value
            const mood = document.querySelector("#mood").value

            //save journal entry (json-server returns it) then render it
            API.saveJournalEntry({ date, concept, entry, mood })
                .then(API.API.getJournalEntries)
                .then(response => render.render.renderJournalEntry(response))
        })
    },
    attachEventListenerToRadioButton: button => {
        const radioButton = document.getElementsByName("mood")
        radioButton.forEach((button) => {
            button.addEventListener("click", event => {
                const mood = event.target.value

                API.API.getJournalEntries()
                    .then(response => {
                        let filteredArray = response.filter(entries => {
                            let filterEntries = false

                            if (entries.mood === mood) {
                                filterEntries = true
                            } else if (mood === "All") {
                                filterEntries = true
                            }
                            return filterEntries
                        })
                        render.render.renderJournalEntry(filteredArray)
                    })
            })
        })
    },
    
    registerDeleteListener () {
        deleteEntry.addEventListener("click", event => {
            if (event.target.id.startsWith("deleteEntry--")) {
                // Extract recipe id from the button's id attribute
                const entryToDelete = event.target.id.split("--")[1]

                // Invoke the delete method, then get all recipes and render them
                API.deleteEntry(entryToDelete)
                    .then(API.getAllEntries)
                    .then(response => render.render.renderJournalEntry(response))
            }
        })
    }
}
