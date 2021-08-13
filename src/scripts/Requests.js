import { getRequests, sendRequest, deleteRequest } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "plumbers") {
            const [requestId, plumberId] = event.target.value.split("--")

            /*
                This object should have 3 properties
                   1. requestId
                   2. plumberId
                   3. date_created
            */
            const completion = { 
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(completion)
            }

            /*
                Invoke the function that performs the POST request
                to the `completions` resource for your API. Send the
                completion object as a parameter.
             */

        }
    }
)



export const Requests = () => {
    const requests = getRequests()

    let html = "<ul>"

    const listRequests = requests.map(request => {
        return `
        <li>
            ${request.description}
            <button class="request__delete"
                    id="request--${request.id}">
                Delete
            </button>
        </li>

        <select class="plumbers" id="plumbers">
            <option value="">Choose</option>
                ${plumbers.map(plumber => {
                    return `
                    <option value="${request.id}--${plumber.id}">${plumber.name}</option>`}
                    ).join("")
                }
        </select>`

    })

    html += listRequests.join("")
    html += "</ul>"
    return html
}