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
                        <input type="radio" name="mood" id="happy" value="Happy" checked>
                        <label for="moodChoice1">Happy</label>
                        <input type="radio" name="mood" id="sad" value="Sad" checked>
                        <label for="moodChoice2">Sad</label>
                        <input type="radio" name="mood" id="mad" value="Mad" checked>
                        <label for="moodChoice3">Mad</label>
                        <input type="radio" name="mood" id="okay" value="Okay" checked>
                        <label for="moodChoice5">Okay</label>
                        <input type="radio" name="mood" id="all" value="All" checked>
                        <label for="moodChoice5">All</label>
                    </div>
                </fieldset>
            </form>
        `

        const moodFilterContainerDiv = document.querySelector("#mood-filter-container")
        moodFilterContainerDiv.innerHTML = moodFilter
    }
}