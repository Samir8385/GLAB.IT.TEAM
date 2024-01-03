function greet() {
    var name = document.getElementById('username').value;
    var string = "Username "+name;
    document.getElementsByClassName('greet')[0].innerHTML = string;
}