// API
const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * STEPS:
 *
 ok 1. Create a fetchAnswer function and call the API
 ok 2. Output the API's response
 ok 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */
const boton=document.getElementById('button');
const input=document.getElementById('input');
const answer=document.getElementById('answer');

async function fetchAnswer() {
    try{
    const response=await fetch(API_ENDPOINT);
    const responsejson=await response.json();
    console.log(responsejson.answer);
    return responsejson.answer;
    }
    catch(e){
        console.log(e)
    }
}

async function handleButtonClick() {
    try{
        const siNo=await fetchAnswer();
        answer.textContent=siNo;
    }
    catch(erro){
        console.log(erro)
    }
}

boton.addEventListener('click',handleButtonClick);
