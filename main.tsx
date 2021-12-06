function onbtnTambahClick() {
    let Angka1: number;
    let Angka2: number;
    Angka1 = (document.getElementById('edInputAwal') as HTMLInputElement).valueAsNumber;
    Angka2 = (document.getElementById('edInputAkhir') as HTMLInputElement).valueAsNumber;
    (document.getElementById('edHasil') as HTMLInputElement).value = Number(Angka1 + Angka2).toString();
};

function onbtnKurangClick() {
    let Angka1: number;
    let Angka2: number;
    Angka1 = (document.getElementById('edInputAwal') as HTMLInputElement).valueAsNumber;
    Angka2 = (document.getElementById('edInputAkhir') as HTMLInputElement).valueAsNumber;
    (document.getElementById('edHasil') as HTMLInputElement).value = Number(Angka1 - Angka2).toString();
};

function onbtnKaliClick() {
    let Angka1: number;
    let Angka2: number;
    Angka1 = (document.getElementById('edInputAwal') as HTMLInputElement).valueAsNumber;
    Angka2 = (document.getElementById('edInputAkhir') as HTMLInputElement).valueAsNumber;
    (document.getElementById('edHasil') as HTMLInputElement).value = Number(Angka1 * Angka2).toString();
};

function onbtnBagiClick() {
    let Angka1: number;
    let Angka2: number;
    Angka1 = (document.getElementById('edInputAwal') as HTMLInputElement).valueAsNumber;
    Angka2 = (document.getElementById('edInputAkhir') as HTMLInputElement).valueAsNumber;
    (document.getElementById('edHasil') as HTMLInputElement).value = Number(Angka1 / Angka2).toString();
};

function onbtnModulusClick() {
    let Angka1: number;
    let Angka2: number;
    Angka1 = (document.getElementById('edInputAwal') as HTMLInputElement).valueAsNumber;
    Angka2 = (document.getElementById('edInputAkhir') as HTMLInputElement).valueAsNumber;
    (document.getElementById('edHasil') as HTMLInputElement).value = Number(Angka1 % Angka2).toString();
};

function onbtnClearClick() {
    (document.getElementById('edInputAwal') as HTMLInputElement).value = '';
    (document.getElementById('edInputAkhir') as HTMLInputElement).value = '';
    (document.getElementById('edHasil') as HTMLInputElement).value = '';
};

export function InitFunction() {
    let vObj1 = document.getElementById('btnTambah') as HTMLInputElement;
    let vObj2 = document.getElementById('btnKurang') as HTMLInputElement;
    let vObj3 = document.getElementById('btnKali') as HTMLInputElement;
    let vObj4 = document.getElementById('btnBagi') as HTMLInputElement;
    let vObj5 = document.getElementById('btnModulus') as HTMLInputElement;
    let vObj6 = document.getElementById('btnClear') as HTMLInputElement;
    vObj1.addEventListener('click', onbtnTambahClick);
    vObj2.addEventListener('click', onbtnKurangClick);
    vObj3.addEventListener('click', onbtnKaliClick);
    vObj4.addEventListener('click', onbtnBagiClick);
    vObj5.addEventListener('click', onbtnModulusClick);
    vObj6.addEventListener('click', onbtnClearClick);
};
