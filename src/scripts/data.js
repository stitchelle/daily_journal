import renderJournalEntry from "./entriesDom.js"

export default {
    getJournalEntries: () => {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
            .then(response => renderJournalEntry.renderJournalEntry(response))

    }
}
