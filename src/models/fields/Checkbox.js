import { Field } from "../Field";

export class Checkbox extends Field {
    constructor(props) {
        super(props);
    }

    renderField() {
        const checkboxContainerElement = this.createField('input');
        checkboxContainerElement.setAttribute('class', 'form-check');
        const checkboxElement = checkboxContainerElement.querySelector('input');
        checkboxElement.setAttribute('class', 'form-check-input');
        const labelElement = checkboxContainerElement.querySelector('label');
        labelElement.setAttribute('class', 'form-check-label');

        this.defaultValue && checkboxElement.setAttribute('checked', 'checked');
        return checkboxContainerElement;
    }
}