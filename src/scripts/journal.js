// import buildAndAppendForm from "./formMaker.js"

// buildAndAppendForm.buildAndAppendForm()



    const journalEntry = [{
        date: "2019/09/30",
        concept: "Basic Terminal Commands",
        entry: "We created out GitHub accounts and learned basic terminal commands.",
        mood: "OK"
    },
    {
        date: "2019/10/01",
        concept: "Chapters 2,3 and 4",
        entry: "Command Line, Styling with CSS and Semantic HTML components",
        mood: "OK"
    },
    {
        date: "2019/10/02",
        concept: "Chapter 6",
        entry: "Intro to Git snd DVCS",
        mood: "OK"
    }]

    const makeJournalEntryComponent = (journalEntry) {
        return`
        <section>
        <h3>${journalEntry.concept}</h3>
        <p>${journalEntry.entry}</p>
        <p>${journalEntry.mood}</p>
        <p>${journalEntry.date}</p>
      </section>
    `
    }