const BASE_URL = 'http://localhost:3000';

const validateEmptyInput = (input) => {
    const messageElement = document.getElementById('message-error');
    messageElement.innerText = '';
    if (!input.length) {
        messageElement.innerText = 'Input tidak boleh kosong';
        return false;
    }
    return true;
};
const validateInput = (event) => {
    const input = event.target.value;

    validateEmptyInput(input);
};

const generateSegitiga = async () => {
    const input = document.getElementById('input-number');
    const result = document.getElementById('result');
    result.innerText = '';
    const isValid = validateEmptyInput(input.value);
    if (isValid) {
        const res = await fetch(`${BASE_URL}/generate-segitiga`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                value: Number(input.value),
            }),
        });
        const data = await res.json();
        const value = data.value;
        let innerText = '';
        value.forEach((value) => {
            innerText += `
            ${value}
            `;
        });
        result.innerText = innerText;
    }
};
const generateGanjil = async () => {
    const input = document.getElementById('input-number');
    const result = document.getElementById('result');
    result.innerText = '';
    const isValid = validateEmptyInput(input.value);
    if (isValid) {
        const res = await fetch(`${BASE_URL}/generate-ganjil`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                value: Number(input.value),
            }),
        });
        const data = await res.json();
        result.innerText = data.value;
    }
};
const generatePrima = async () => {
    const input = document.getElementById('input-prima');
    const isValid = validateEmptyInput(input);
    console.log(input);
    if (isValid) {
        const res = await fetch(`${BASE_URL}/generate-prima`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                value: Number(input.value),
            }),
        });
        const data = await res.json();
        console.log(data);
    }
};
