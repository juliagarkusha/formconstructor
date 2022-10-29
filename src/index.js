import './index.scss';
import { UseForm } from "./models/UseForm";

const bodyElement = document.querySelector('body')

const formFields = [
    {
        type: 'text',
        name: '111111',
        label: 'Label for text',
        defaultValue: '5',
        placeholder: 'qqqqqqqqqq',
    },
    {
        type: 'select',
        name: '2222',
        label: 'Label for select',
        defaultValue: '5',
        options: [
            { label: 'option1', value: '1' },
            { label: 'option2', value: '2' },
            { label: 'option3', value: '3' },
            { label: 'option4', value: '4' },
            { label: 'option5', value: '5' },
        ]
    },
    {
        type: 'checkbox',
        name: '333333',
        label: 'Label for checkbox',
        defaultValue: false,
    }
]

const onSubmitHandler = (validData) => {
    console.log('debug validData:', validData);
}

const testForm = new UseForm(formFields, onSubmitHandler);
const testFormElement = testForm.render();

bodyElement.append(testFormElement);


