export default {
    buildAndAppendForm: () => {
        const form = `
            <form action="">
                    <h1>Daily Journal</h1>
                    <fieldset>
                        <label for="journalDate">Date of Entry</label>
                        <input type="date" name="journalDate" id="journalDate">
                    </fieldset>
                    <fieldset>
                        <label for="conceptsCovered">Concepts Covered</label>
                        <input type="text" name="conceptsCovered" id="conceptsCovered">
                    </fieldset>
                    <fieldset>
                        <label for="journalEntry">Journal Entry</label>
                        <textarea name="journalEntry" id="journalEntry" cols="20" rows="1"></textarea>
                    </fieldset>
                    <fieldset>
                        <label for="journalEntry">Mood of the day</label>
                        <select name="mood" id="mood">
                        <option value="happy">Happy</option>
                        <option value="sad">Sad</option>
                        <option value="mad">Mad</option>
                        <option value="okay">Okay</option>
                        </select>
                    </fieldset>
                    <button id="recordButton">Record Journal Entry</button>        
            </form>
            `

        const formContainerDiv = document.querySelector("#form-container")
        formContainerDiv.innerHTML = form
    }
}