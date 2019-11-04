import buildAndAppendForm from "./formMaker.js"

buildAndAppendForm.buildAndAppendForm()



/*
Purpose: To create, and return, a string template that
represents a single journal entry object as HTML

Arguments: journalEntry (object)
*/

const makeJournalEntryComponent = (journalEntry) => {
    return `
        <section>
        <h3>${journalEntry.concept}</h3>
        <p>${journalEntry.entry}</p>
        <p>${journalEntry.mood}</p>
        <p>${journalEntry.date}</p>
      </section>
    `
}

const renderJournalEntry = (entries) => {
    let HtmlForAllEntries = ""
    entries.forEach(entry => {
        const entryHtml = makeJournalEntryComponent(entry)
        HtmlForAllEntries += entryHtml
    })
    const logArticle = document.querySelector(".entryLog")
    logArticle.innerHTML = HtmlForAllEntries
}


const getJournalEntries = () => {
    return fetch("http://localhost:3000/entries")
        .then(response => response.json())
        .then(response => renderJournalEntry(response))
        
    }

getJournalEntries()




