import buildAndAppendForm from "./formMaker.js"
import API from "./data.js"
import render from "./entriesDom.js"



buildAndAppendForm.buildAndAppendForm()

/* ---what I originally did---
API.API.getJournalEntries()

.then(response => renderJournalEntry.renderJournalEntry(response))
*/
/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
API.API.getJournalEntries().then(response => render.render.renderJournalEntry(response))