import { Text } from "./fields/Text";
import { Select } from "./fields/Select";
import { Checkbox } from "./fields/Checkbox";

export class UseForm {
    fields = [];
    onSubmitHandler;
    constructor(formFields, onSubmitHandler = () => {}) {
        formFields.forEach(field => {
            if(field.type === 'text') {
                this.fields.push(new Text(field));
            }
            if(field.type === 'select') {
                this.fields.push(new Select(field));
            }
            if(field.type === 'checkbox') {
                this.fields.push(new Checkbox(field));
            }
        });

        this.onSubmitHandler = onSubmitHandler;
    }

    onSubmit(event) {
        event.preventDefault();
        let formData = new FormData(event.target);
        let data = {};

        this.fields.forEach(field => {
            data[field.name] = formData.get(field.name);
        })

        this.onSubmitHandler(data);
    }
    
    render() {
        const formElement = document.createElement('form');
        const submitBtn = document.createElement('button');
        formElement.setAttribute('class', 'gap-3 p-5 d-flex flex-column');
        submitBtn.setAttribute('type', 'submit');
        submitBtn.setAttribute('class', 'btn btn-primary w-100');
        submitBtn.textContent = 'Save';

        this.fields.forEach(field => {
            formElement.append(field.renderField());
        })

        formElement.addEventListener('submit', this.onSubmit.bind(this));
        formElement.append(submitBtn);

        return formElement;
    }
}