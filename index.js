const toggleSwitch = document.querySelector (
    '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
    }
    // documentElement is html tag.
}

toggleSwitch.addEventListener("change", switchTheme, false);


let input = document.getElementById("input");
let output = document.getElementById("output");

function calculate(data) {
    switch(data) {
        case "AC":
            input.innerHTML = "";
            output.innerHTML = 0;
            break;
        case "C":
            input.innerHTML = input.innerHTML.substr(0, input.innerHTML.length - 1);
            output.innerHTML = math.evaluate(input.innerHTML) === undefined ? 0 : math.evaluate(input.innerHTML);
            break;
        case "=":
            output.innerHTML = math.evaluate(input.innerHTML);
            input.innerHTML = output.innerHTML;
            break;
        default: 
            input.innerHTML += data;
            output.innerHTML = math.evaluate(input.innerHTML);
    }
}

document.addEventListener("keypress", function(event) {
    var x = event.key;
    if (x === "=") {
        calculate(x);
    }
    else if(x === '+' || x === '-' || x === '/' || x === 'x' || (x >= '0' && x <= '9')){
        calculate(x);
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === 'Backspace') {
        calculate('C');
    }
    else if (event.key === 'Enter') {
        calculate('=');
    }
});
