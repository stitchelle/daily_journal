export default {
    buildAndAppendForm: () => {
        const form = `
            <h1>Daily Journal</h1>
            
            <form action="">
                <fieldset>
                    <label id="date" for="journalDate">Date of Entry</label>
                    <input type="date" name="journalDate" id="journalDate">
                </fieldset>
                <fieldset>
                    <label id="concepts" for="conceptsCovered">Concepts Covered</label>
                    <input type="text" name="conceptsCovered" id="conceptsCovered">
                </fieldset>
                <fieldset>
                    <label id="entry" for="journalEntry">Journal Entry</label>
                    <textarea name="journalEntry" id="journalEntry" cols="20" rows="1"></textarea>
                </fieldset>
                <fieldset>
                    <label id="moodOfTheDay" for="journalEntry">Mood of the day</label>
                    <select name="mood" id="mood">
                        <option value="happy">Happy</option>
                        <option value="sad">Sad</option>
                        <option value="mad">Mad</option>
                        <option value="okay">Okay</option>
                    </select>
                </fieldset>
            </form>

            <button id="recordButton">Record Journal Entry</button>  

            <hr/>
            `

        const formContainerDiv = document.querySelector("#form-container")
        formContainerDiv.innerHTML = form
    }
}