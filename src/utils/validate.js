export const checkValidData = (email,password) =>{

    const emailCheck = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    
    const passwordCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!emailCheck) return "Email ID is not Valid";
    if(!passwordCheck) return "Password is not Valid";

    return null;

}