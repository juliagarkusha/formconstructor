export class Field {
    type;
    name;
    label;
    defaultValue;
    constructor(props) {
        const { type, name, label, defaultValue } = props;
        this.type = type;
        this.name = name;
        this.label = label;
        this.defaultValue = defaultValue;
    }

    createField(fieldTag) {
        const fieldContainerElement = document.createElement('div');
        const labelElement = document.createElement('label');
        const fieldElement = document.createElement(fieldTag);

        labelElement.innerHTML = this.label;
        labelElement.setAttribute('for', this.name);
        fieldElement.setAttribute('type', this.type);
        fieldElement.setAttribute('id', this.name);
        fieldElement.setAttribute('name', this.name);
        fieldElement.setAttribute('class', 'form-control');
        labelElement.setAttribute('class', 'form-label');

        fieldContainerElement.append(labelElement);
        fieldContainerElement.append(fieldElement);

        return fieldContainerElement;
    }
}
