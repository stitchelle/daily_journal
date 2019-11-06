import render from "./entriesDom.js"
import API from "./data.js"
import buildAndAppendForm from "./formMaker.js"
/*
Purpose: To create, and return, a string template that
represents a single journal entry object as HTML

Arguments: journalEntry (object)
*/
const deleteEntry = document.querySelector(".entryLog")
const editEntry = document.querySelector(".entryLog")



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

    registerDeleteListener() {
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
    },

    editEntryListener() {
        editEntry.addEventListener("click", event => {
            if (event.target.id.startsWith("editEntry--")) {
                const entryIdToEdit = event.target.id.split("--")[1]
                API.getSingleJournalEntry(entryIdtoEdit)
                .then(entry => {
                    buildAndAppendForm.buildAndAppendForm("edit")
                    const hiddenEntryId = document.querySelector("#entryId")
                    const date = document.querySelector("#journalDate")
                    const concept = document.querySelector("#conceptsCovered")
                    const journalEntry = document.querySelector("#journalEntry")
                    const mood = document.querySelector("#mood")

                hiddenEntryId.value = entry.id // Hidden value. User no see. 
                date.value = entry.date
                concept.value = entry.concept
                journalEntry.value = entry.entry
                mood.value = entry.mood
                })

                /*
                    This function will get the recipe from the API
                    and populate the form fields (see below)
                */
                // updateFormFields(entryIdToEdit)
            }
        })
    },
    saveButtonListenr() {
        document.querySelector("#saveChanges").addEventListener("click", e => {
            const hiddenEntryId = document.querySelector("#entryId").value
            const date = document.querySelector("#journalDate").value
            const concept = document.querySelector("#conceptsCovered").value
            const entry = document.querySelector("#journalEntry").value
            const mood = document.querySelector("#mood").value

            API.editEntry(hiddenEntryId, { date, concept, entry, mood })
                .then(() => {
                    buildAndAppendForm.buildAndAppendForm()
                    API.API.getJournalEntries()
                        .then(response => render.render.renderJournalEntry(response))
                })


        })
    }
}
