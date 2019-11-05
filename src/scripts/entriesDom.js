import make from "./entryComponent.js"

export default {
    render: {
        renderJournalEntry: (entries) => {
            let HtmlForAllEntries = ""
            entries.forEach(entry => {
                const entryHtml = make.makeJournalEntryComponent(entry)
                HtmlForAllEntries += entryHtml
            })
            const logArticle = document.querySelector(".entryLog")
            logArticle.innerHTML = HtmlForAllEntries
        }
    }
}