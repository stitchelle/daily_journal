export default {
    buildAndAppendForm: () => {
        const form = `
            <header>
                <h1>Daily Journal</h1>
                <hr/>
            </header

            <form action="">
                <fieldset class="form-fieldset">
                    <label id="date" for="journalDate">Date of Entry</label>
                    <input type="date" name="journalDate" id="journalDate">
                </fieldset>
                <fieldset class="form-fieldset">
                    <label id="concepts" for="conceptsCovered">Concepts Covered</label>
                    <input type="text" name="conceptsCovered" id="conceptsCovered">
                </fieldset>
                <fieldset class="form-fieldset">
                    <label id="entry" for="journalEntry">Journal Entry</label>
                    <textarea name="journalEntry" id="journalEntry" cols="20" rows="1"></textarea>
                </fieldset>
                <fieldset class="form-fieldset">
                    <label id="moodOfTheDay" for="mood-of-the-day">Mood of the day</label>
                    <select name="mood-input" id="mood">
                        <option value="happy">Happy</option>
                        <option value="sad">Sad</option>
                        <option value="mad">Mad</option>
                        <option value="okay">Okay</option>
                    </select>
                </fieldset>
            </form>

            <button id="recordButton">Record Journal Entry</button>  
            `

        const formContainerDiv = document.querySelector("#form-container")
        formContainerDiv.innerHTML = form
    },
    buildAndAppendFilter: () => {
        const moodFilter = `
            <form>
                <fieldset>
                    <legend>Filter Journal Entries by Mood</legend>
                    <div>
                        <input type="radio" name="mood" id="ok" value="Ok" checked>
                        <label for="moodChoice1">Ok</label>
                        <input type="radio" name="mood" id="great" value="Great" checked>
                        <label for="moodChoice2">Great</label>
                        <input type="radio" name="mood" id="amazing" value="Amazing" checked>
                        <label for="moodChoice3">Amazing</label>
                        <input type="radio" name="mood" id="all" value="All" checked>
                        <label for="moodChoice4">All</label>
                    </div>
                </fieldset>
            </form>
        `

        const moodFilterContainerDiv = document.querySelector("#mood-filter-container")
        moodFilterContainerDiv.innerHTML = moodFilter
    }
}