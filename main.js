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

      var userDetails_serialized = JSON.stringify(userDetails)
     
      // Store the user details in local storage with a key "userDetails"
      localStorage.setItem("userDetails", userDetails_serialized);
      var userDetails_deserialized = JSON.parse(localStorage.getItem("userDetails"))
    console.log(userDetails_deserialized);
    
})
 
 