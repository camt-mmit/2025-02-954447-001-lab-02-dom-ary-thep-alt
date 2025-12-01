document.addEventListener('DOMContentLoaded', () => {
    const numberInputs = [...document.querySelectorAll('.app-inp-number')]; // แปลงเป็น array ใส่ [... ]

    numberInputs.forEach((elem) => elem.addEventListener('change', () => {
        const result = numberInputs.reduce(
            (result, elem) => 
                result +(Number.isNaN(elem.valueAsNumber)? 0 : elem.valueAsNumber) ,
            0,
        );

        const numberOutputs = [...document.querySelectorAll('.app-out-number')];
        numberOutputs.forEach((elem) => (elem.textContent = result));
    }),
    );
});