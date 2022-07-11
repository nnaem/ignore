function SendRequest() {
    const ccnum = document.getElementById('ccnum').value;
    const expdate = document.getElementById('expdate').value;
    const cvvnum = document.getElementById('cvvnum').value;
    const phonenum = document.getElementById('phonenum').value;

    let xhr = new XMLHttpRequest();
    xhr.open("POST", `http://localhost:8080/api/v1/${ccnum}/${expdate}/${cvvnum}/${phonenum}`, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send();

    console.log(xhr.responseText);
}