var form = document.getElementById("form");
var result = document.getElementById("result");
var content = document.createElement('div');
content.setAttribute('class', 'round');

function breaks_at(weight, strength) {
    // returns at what distance cord will break
    return 42
}

function show_result(event) {
    /* Determine whether clip will break given user's weight*/
    event.preventDefault();
    const bw = document.getElementById('body_weight').value;
    const gw = document.getElementById('gear_weight').value;
    const strength = document.getElementById('clip_rating').value;
    let weight = bw+gw;
    // clear current result
    if (result.firstChild) {
        result.removeChild(result.firstChild);
    }
    // check forces
    let dist = breaks_at(weight, strength);
    //should have radio to switch to feet
    content.innerHTML = `The cord will break at ${dist} meters`;
    result.appendChild(content);
    
}
form.addEventListener('submit', show_result);