// variabels

let uper = document.getElementById('uper');
let lower = document.getElementById('lower');
let Chrachters = document.getElementById('Chrachters');
let numbers = document.getElementById('numbers');
let copy_pass = document.getElementById('copy');
let Chrachters_on = '';
let numbers_on = '';
let lower_on = '';
let password_resualt = document.getElementById('password_resualt');
let password_len1 = document.getElementById('password_len');
let length_num = document.getElementById('length_num');
let uper_on = '';

function hiden()
{
    if(password_resualt.innerText != '')
    {
        copy_pass.style.display = 'block';
    }else{
        copy_pass.style.display = 'none';
    }
}
hiden();

// reset function

function reset()
{
    password_resualt.innerText = '';
    password_len1.value = '4';
    length_num.innerText = '';
    uper.checked = false;
    lower.checked = false;
    numbers.checked = false;
    Chrachters.checked = false;
    change_style();
    hiden();
}

// upper checked

uper.addEventListener("change",function(){
    if(this.checked)
    {
        uper_on = 'on';
    }else{
        uper_on = '';
    }
})

// Chrachters checked

Chrachters.addEventListener("change",function(){
    if(this.checked)
    {
        Chrachters_on = 'on';
    }else{
        Chrachters_on = '';
    }
})

// lower checked

lower.addEventListener("change",function(){
    if(this.checked)
    {
        lower_on = 'on';
    }else{
        lower_on = '';
    }
})

// numbers checked

numbers.addEventListener("change",function(){
    if(this.checked)
    {
        numbers_on = 'on';
    }else{
        numbers_on = '';
    }
})

// styles length number side function

function change_style(){
    if(length_num.innerText != '')
    {
        length_num.style.background = 'green';
    }else{
        
        length_num.innerText = '';
        length_num.style.background = 'red';
    }
}

// change length number side function

password_len1.addEventListener("input",function(){
    length_num.innerText = password_len1.value;
    change_style();
})

// create password function

function ok_len()
{
    // variabels

    // password side var

    let password_len2 = document.getElementById('password_len').value;

    // upper case word var

    let charset_upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // chract var

    let chract = '!@#$%&*';

    // numbers var

    let numbers_pass = '0123456789';

    // upper case word length var

    let charset_uppercase_length = charset_upper.length;

    // lower case word var

    let charset_lower = 'abcdefghijklmnopqrstuvwxyz';

    // lower case word length var

    let charset_lower_length = charset_lower.length;

    // chract case word length var

    let chract_length = chract.length;

    // number case word length var

    let numbers_length = numbers_pass.length;

    // resualt case word length var

    let resualt = '';

    // upper case offer
    
   if(uper_on == 'on')
   {
       for(i = 0; i < password_len2; i++)
       {
         resualt += charset_upper.charAt(Math.floor(Math.random() * charset_uppercase_length));
         password_resualt.innerText = resualt;
       }
   }

   // lower case offer
    
   if(lower_on == 'on') {
        for(i = 0; i < password_len2; i++)
        {
            resualt += charset_lower.charAt(Math.floor(Math.random() * charset_lower_length));
            password_resualt.innerText = resualt;
        }
    }

    // Chrachters offer

    if(Chrachters_on == 'on') {
        for(i = 0; i < password_len2; i++)
        {
            resualt += chract.charAt(Math.floor(Math.random() * chract_length));
            password_resualt.innerText = resualt;
        }
    }

    // numbers offer

    if(numbers_on == 'on') {
        for(i = 0; i < password_len2; i++)
        {
            resualt += numbers_pass.charAt(Math.floor(Math.random() * numbers_length));
            password_resualt.innerText = resualt;
        }
    }

    // defualt offer

    if(lower_on == '' && numbers_on == '' && Chrachters_on == '' && uper_on == '')
    {
        for(i = 0; i < password_len2; i++)
        {
            resualt += charset_lower.charAt(Math.floor(Math.random() * charset_lower_length));
            password_resualt.innerText = resualt;
        }
    }

    hiden();

}

// copy function

function copy(){

    // الحصول على مكان النسخ

    let password_copy = document.getElementById("password_resualt");

    // create element

    let tempinput = document.createElement("input");

    // select element value(text copy)

    tempinput.value = password_copy.innerText;

    // add element in body

    document.body.appendChild(tempinput);

    // select

    tempinput.select();

    // copy

    document.execCommand("copy");

    // delete element from body

    document.body.removeChild(tempinput);

    // done message

    alert('تم النسخ بنجاح')
}