import buildAndAppendForm from "./formMaker.js"
import API from "./data.js"
import renderJournalEntry from "./entriesDom.js"



buildAndAppendForm.buildAndAppendForm()

API.API.getJournalEntries()

.then(response => renderJournalEntry.renderJournalEntry(response))