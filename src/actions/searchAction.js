export default addUsername = e => ({ // imagine this being triggered in a form submit flow, receiving the form event
    type: "ADD_A_USERNAME",
    payload: { username: e.target.value }
})