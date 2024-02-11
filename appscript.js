function validateForm(){
    let x = document.forms["dataForm"]["First Name"].value;
    if (x=="") {
        alert("Name is required")
        return false;
    }
}