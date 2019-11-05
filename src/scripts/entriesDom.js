import makeJournalEntryComponent from "./entryComponent.js"

export default {
    renderJournalEntry: (entries) => {
        let HtmlForAllEntries = ""
        entries.forEach(entry => {
            const entryHtml = makeJournalEntryComponent.makeJournalEntryComponent(entry)
            HtmlForAllEntries += entryHtml
        })
        const logArticle = document.querySelector(".entryLog")
        logArticle.innerHTML = HtmlForAllEntries
    }
}