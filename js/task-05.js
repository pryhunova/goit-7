

const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

const onTargetInputValue = () => {
    return (outputRef.textContent =
        inputRef.value.length > 0 ? inputRef.value : 'незнакомец');
    };

inputRef.addEventListener('input', onTargetInputValue);