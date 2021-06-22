let movieName;
const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const text = document.createElement('div');
const span = document.createElement('input');
const select = document.getElementById("selectVisualisation");
let previous_div = "";
let input_fields = [];
let selected_fields = [];
let count = 0;
let visualisation;
let possible_visualisations = [];
let selectedVisualisation;
document.getElementById("button1").addEventListener('click', function () {
    // const text = document.createElement('div');
    // const span = document.createElement('input');
    span.setAttribute("class", "tag-container input");
    // text.appendChild(span);
    form1.setAttribute("class", "tag-container");
    form1.appendChild(text);
    form1.appendChild(span);
});


form1.addEventListener('keyup', (e) => {
    // console.log(objects);
    if (e.key === 'Enter') {
        e.target.value.split(',').forEach(tag => {
            const exists1 = objects.includes(tag);
            // const exists2 = tags.includes(tag);

            if (exists1 === true) {
                // tags.push(tag);
                // span.innerHTML = movieName;
                tags.push(tag);
            }
        });
        addTags();
        span.value = '';
    }
});


function createTag(label) {
    const div = document.createElement('div');
    div.setAttribute('class', 'tag');
    const span = document.createElement('span');
    span.innerHTML = label;
    const closeIcon = document.createElement('i');
    closeIcon.innerHTML = 'x';
    closeIcon.setAttribute('class', 'material-icons');
    closeIcon.setAttribute('data-item', label);
    div.appendChild(span);
    div.appendChild(closeIcon);
    return div;
}

function clearTags() {
    document.querySelectorAll('.tag').forEach(tag => {
        tag.parentElement.removeChild(tag);
    });
}

function addTags() {
    clearTags();
    tags.slice().reverse().forEach(tag => {
        form1.prepend(createTag(tag));
    });
}

form1.addEventListener('click', (e) => {
    // console.log(e.target.tagName);
    if (e.target.tagName === 'I') {
        const tagLabel = e.target.getAttribute('data-item');
        const index = tags.indexOf(tagLabel);
        tags.splice(index, 1);
        addTags();
    }
})

async function showResult() {
    // let divs = ["table-div", "table1-div"];
    // for (let div of divs) {
    //     document.getElementById(div).style.display = "none";
    //     displayHideButtons(div, "hide");
    // }
    await loadVisualisation("table-div", "../../entities/table.js", runTable);
}

function displayHideButtons(div_name, action) {
    let style;
    if (action === "hide") style = "none";
    if (action === "display") style = "block";
    if (div_name === "table-div") {
        document.getElementById("csv-table-button").style.display = style;
    } else {
        let export_types = ["webp", "png", "svg"];
        for (let x of export_types) {
            let button_name = x + "-" + getDivName(div_name) + "-button";
            console.log(button_name);
            document.getElementById(button_name).style.display = style;
        }
    }
}
function getDivName(div_name) {
    console.log(div_name);
    switch (div_name) {
        case  "table-div":
            return "table";
    }
}
async function loadVisualisation(div_name, script_src, fct) {

    let div = document.getElementById(div_name);
    div.style.display = "block";
    div.style.cssText = 'width:100%;flex: 1; display: flex;align-items: center;min-height: 550px; text-align:center;justify-content: center;position: absolute;';
    displayHideButtons(div_name, "display");
    previous_div = div;
    await fct();
    //const script = await import(script_src);
    //console.log(script);
}

async function run() {
    movies = tags;
    visualisation = selectedVisualisation;
    generateStatistics();
    // console.log(visualisation);
    await showResult();
}

for (let fi of input_fields) {
    selected_fields.push(fi.slice(0, -1));
}

function addFilter(filter) {
    if (!selected_fields.includes(filter)) {
        let form = document.getElementById("adv-filters");
        form.style.cssText = 'font-size: 20px;';
        let input, label1;
        label1 = document.createElement("label");
        label1.style.cssText = 'padding: 5px ;border: 0;outline: none;color: white;width: 20%;margin: 30px auto;flex: 1;display: flex;align-items: center;';
        input = document.createElement("input");
        input.style.cssText = ' padding: 5px; border: 0; outline: none; color: #333;flex: 1; width: 20%;margin: 30px auto; text-align:center; display: flex;align-items: center;';
        // input.className = "input";
        input.type = "text";
        if (filter === "date_published")
            input.placeholder = "YYYY-MM-DD";
        else if (filter === "avg_vote")
            input.placeholder = "real number";
        else if (filter === "reviews_from_users")
            input.placeholder = "real number";
        else if (filter === "reviews_from_critics")
            input.placeholder = "real number";
        input.name = filter + count;
        label1.innerText = filter + " : ";
        form.append(label1);
        form.appendChild(input);
        input_fields.push(input.name);
        // }


        form.appendChild(document.createElement("br"));
    }
}

function generateStatistics() {
    // console.log(input_fields);

    for (let input of input_fields) {
        let criteria = input.slice(0, -1);
        let value = document.getElementsByName(input)[0].value;
        filters[criteria] = value;

    }
}


