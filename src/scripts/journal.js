import buildAndAppendForm from "./formMaker.js"
import buildAndAppendFilter from "./formMaker.js"
import API from "./data.js"
import render from "./entriesDom.js"
import save from "./entryComponent.js"


buildAndAppendForm.buildAndAppendForm()
buildAndAppendFilter.buildAndAppendFilter()

/* ---what I originally did---
API.API.getJournalEntries()

.then(response => renderJournalEntry.renderJournalEntry(response))
*/
/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.
*/
// API.API.getJournalEntries().then(response => render.render.renderJournalEntry(response))

API.API.getJournalEntries().then((data) => render.render.renderJournalEntry(data))

// renderJournalEntries.renderJournalEntries()
save.addEventListenerToRecordButton()