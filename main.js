const form = document.querySelector('#my-form');

form.addEventListener('submit', (e)=> {
e.preventDefault();
const name =  document.getElementById('name').value;
const email = document.getElementById('email').value;

    // Create an object to store user details
    const userDetails = {
        name: name,
        email: email,
      };
    
      // Store the user details in local storage with a key "userDetails"
      localStorage.setItem("userDetails", JSON.stringify(userDetails));
    
    
})
 
 