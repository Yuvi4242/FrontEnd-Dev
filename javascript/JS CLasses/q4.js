class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    generateForm() {
        let html = "";

        this.fields.forEach(f => {
            html += `
                <label>${f.label}</label>
                <input type="${f.type}" id="${f.label}" /><br><br>
            `;
        });

        html += `<button onclick="getFormData()">Submit</button>`;
        document.getElementById("formContainer").innerHTML = html;
    }
}

function getFormData() {
    const allInputs = document.querySelectorAll("input");
    let data = {};

    allInputs.forEach(input => {
        data[input.id] = input.value;
    });

    console.log("Form Data:", data);
}

// Example
const form = new FormBuilder([
    { type: "text", label: "Username" },
    { type: "email", label: "Email" }
]);

form.generateForm();
