import './index.scss';
import { UseForm } from "./models/UseForm";

const signInElement = document.querySelector('.signIn')

const formFields = [
    {
        type: 'text',
        name: 'userLogin',
        label: 'Login',
        defaultValue: '',
        placeholder: 'Enter login',
    },
    {
        type: 'select',
        name: 'userCountry',
        label: 'Country',
        defaultValue: '1667155061295',
        options: [
            { label: 'Austria', value: '1667155040073' },
            { label: 'Czech', value: '1667155076442' },
            { label: 'Germany', value: '1667155052649' },
            { label: 'Poland', value: '1667155068892' },
            { label: 'Ukraine', value: '1667155061295' },
        ]
    },
    {
        type: 'checkbox',
        name: 'userRemember',
        label: 'Remember me',
        defaultValue: false,
    }
]

const onSubmitHandler = (validData) => {
    console.log('debug validData:', validData);
}

const testForm = new UseForm(formFields, onSubmitHandler);
const testFormElement = testForm.render();

signInElement.append(testFormElement);


