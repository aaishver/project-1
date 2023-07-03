let role = [];

const addJobRole = (ev)=>{
    ev.preventDefault();
    let job = {
        id: Date.now(),
        jobrole: document.getElementsByName('JOBROLE').value,
        location: document.getElementsByName('LOCATION').value
    }
    role.push(job);
    document.forms[0].reset();

    console.warn('added',{role});
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n'+ JSON.stringify(role, '\t', 2);

    localStorage.setItem('MyJobRoles', JSON.stringify(movies));
}
document.addEventListener('DOMcontentLoaded', ()=>{
    document.getElementById('top-btn').addEventListener('click', addJobRole);
});