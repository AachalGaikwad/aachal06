async function fetchData(){
    try{
        const resp = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!resp.ok){
            throw new Error('Data Not Found');
        }
        const user = await resp.json();
        displayUsers(user);
    }
    catch(error){
        console.log(error.message);
        const errormsg=document.getElementById('MyDiv');
        errormsg.innerHTML = 'Data is not found';
    }
    
}

function displayUsers(user){
    const myData = document.getElementById('MyDiv');

    user.forEach(post => {
        const Users = document.createElement('div');
        Users.innerHTML = `
        <h2>${post.id}</h2>
        <p>${post.email}</p>
        <p>${post.address}</p>
        <p>${post.address.street}</p>
        <p>${post.address.suite}</p>
        <p>${post.address.city}</p>
        <p>${post.address.zipcode}</p>
       
        <hr>
        `;
        myData.appendChild(Users);
    });

}
fetchData();