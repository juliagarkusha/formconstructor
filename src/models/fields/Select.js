import { Field } from "../Field";

export class Select extends Field {
    options;
    constructor(props) {
        super(props);
        const { options } = props;
        this.options = options;
    }

    renderField() {
        const selectContainerElement = this.createField('select');
        const selectElement = selectContainerElement.querySelector('select');
        this.options.forEach(option => {
            const optionElement = document.createElement('option');

            optionElement.setAttribute('value', option.value);
            optionElement.textContent = option.label;

            selectElement.append(optionElement);
        })

        return selectContainerElement;
    }
}