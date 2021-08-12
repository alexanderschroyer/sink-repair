import { getRequests } from "./dataAccess.js"




export const Requests = () => {
    const requests = getRequests()

    let html = "<ul>"

    const listRequests = requests.map(request => {
        return `
                <li>
                ${request.description}
                </li>`

    })

    html += listRequests.join("")
    html += "</ul>"
    return html
}















// export const Requests = () => {
//     const requests = getRequests()

//         let html = "<ul>"
        
//         const listItems = requests.map(request => {
//             for (const request of requests) {
//                 if (request.id > 0)
//                 return `<li>
//                 <input type="radio" name="request" value="${request.id}" /> ${request.description}
//                 </li>`
//             }
//         })
    
//     html += listItems.join("")
//     html += "</ul>"
//     return html
// }
   
   
   
   
   
   
   
   
//     let html = `
//         <ul>
//             ${
//                 requests.map()
//             }
//         </ul>
//     `

//     return html
// }
