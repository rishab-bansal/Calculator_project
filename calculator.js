var exp = "";
var on = false;
function anlyse(value) {
    if (value === "C" || value === "bs" || value === "=") {
        if (value === "C") {
            exp = "";
            document.getElementById("input").value = exp;
        }
        if (value === "bs") {
            if (exp.length > 0) {
                if (exp.length !== 1) {
                    exp = exp.substr(0, exp.length - 1);
                }
                else {
                    exp = 0;
                }
                document.getElementById("input").value = exp;
            }
        }
        if (value === "=") {
            try {
                var node = document.createElement("li");
                var txt = document.createTextNode(exp);
                node.appendChild(txt);
                node.classList.add("list-group-item");
                node.classList.add("bg-warning");
                document.getElementById("ex").appendChild(node);
                exp = JSON.stringify(eval(exp));
                document.getElementById("input").value = exp;
            }

            catch (err) {
                alert("Enter a valid expression");
            }
        }
    }
    else {
        exp = exp + value;
        document.getElementById("input").value = exp;
    }
}

function toggle() {
    if (!on) {
        document.getElementById("keys").style.visiblity = "hidden";
        document.getElementById("ex").style.visibility = "visible";
        on = true;
    }

    else {
        document.getElementById("keys").style.visiblity = "visible";
        document.getElementById("ex").style.visibility = "hidden";
        on = false;
    }
}

function hideHistory() {
    document.getElementById("ex").style.visibility = "hidden";
}