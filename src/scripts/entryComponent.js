import render from "./entriesDom.js"
import API from "./data.js"
/*
Purpose: To create, and return, a string template that
represents a single journal entry object as HTML

Arguments: journalEntry (object)
*/
export default {

    makeJournalEntryComponent: (journalEntry) => {
        return `
        <section>
        <h3>${journalEntry.concept}</h3>
        <p>${journalEntry.entry}</p>
        <p>${journalEntry.mood}</p>
        <p>${journalEntry.date}</p>
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
            API.API.saveJournalEntry({ date, concept, entry, mood })
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
    }
}
