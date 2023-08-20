document.addEventListener('DOMContentLoaded',()=>{
    const registrationForm=document.getElementById('registrationForm');
    registrationForm.addEventListener('submit',async(event)=>{
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        let obj={
            name:name,
            email:email,
            password:password
        }
        try{
            const response = await axios.post("http://localhost:3000/user/signup",obj)
            console.log(response.status);
            if(response.status===201){
                
                window.location.href='../public/login.html';
            }
            else{
                throw new error("failed to login")
            }
        }
        catch(error){
            document.body.innerHTML+=`<div style="color:red;"> ${error}</div>`;
            
        }
    })
})