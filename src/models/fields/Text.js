import { Field } from "../Field";

export class Text extends Field {
    placeholder;
    constructor(props) {
        super(props);
        const { placeholder } = props;
        this.placeholder = placeholder;
    }

    renderField() {
        const textInputContainerElement = this.createField('input');
        const textInputFieldElement = textInputContainerElement.querySelector('input');
        textInputFieldElement.setAttribute('placeholder', this.placeholder);

        return textInputContainerElement;
    }
}
