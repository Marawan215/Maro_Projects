let chat = document.getElementById('chat');
let inp = document.getElementById('inp');
let submit = document.getElementById('submit');
let chat_user = document.getElementById('chat_user');
let chat_robot = document.getElementById('chat_robot');
let hello_user = JSON.parse(localStorage.getItem('user_data_alien'));

inp.addEventListener('keydown',function(event){
    if(event.key === 'Enter')
    {
        send();
    }
})

function send()
{
    
    // English

    if(inp.value != '' && inp.value.toLowerCase() == 'hello' || inp.value.toLowerCase() == 'hi')
    {
        chat_user.innerHTML += `<p class="user">${inp.value}</p>`;
        chat_robot.innerHTML += `<p>hello. can i help you?</p>`;
        clear();
        
    }else if(inp.value !='' && inp.value.toLowerCase() == 'i want knowing what resualt banging 2*2')
    {
        chat_user.innerHTML += `<p class="user">${inp.value}</p>`;
        chat_robot.innerHTML += `<p>sure, resualt banging 2*2 = 4</p>`;
        clear();
    }else if(inp.value !='' && inp.value.toLowerCase() == 'thank you' || inp.value.toLowerCase() == 'thank you very match')
    {
        chat_user.innerHTML += `<p class="user">${inp.value}</p>`;
        chat_robot.innerHTML += `<p>pardon if you want to helper? can you ask me.</p>`;
        clear();
    }else if(inp.value !='' && inp.value.toLowerCase() == 'what’s your name' || inp.value != '' && inp.value.toLowerCase() == 'what,s your name' || inp.value.toLowerCase() == 'what’s your name?' || inp.value.toLowerCase() == 'what,s your name?')
    {
        chat_user.innerHTML += `<p class="user">${inp.value}</p>`;
        chat_robot.innerHTML += `<p>my name is mar ai and i the ai sampel model</p>`;
        clear();

    }else if( inp.value !='' && inp.value.toLowerCase() == 'i want knowing what resualt banging 2×2'){
        chat_user.innerHTML += `<p class="user">${inp.value}</p>`;
        chat_robot.innerHTML += `<p>sure, resualt banging 2×2 = 4</p>`;  
        clear();
    }else if( inp.value !='' && inp.value.toLowerCase() == 'i want alien dragon web site link'){
        chat_user.innerHTML += `<p class="user">${inp.value}</p>`;
       chat_robot.innerHTML += `<p>sure, this alien dragon web site link: <a href="http://127.0.0.1:5500/data/index.html">alien dragon link</a>.</p> `;
       clear();  
    }else if( inp.value !='' && inp.value.toLowerCase() == 'bye'){
        chat_user.innerHTML += `<p class="user">${inp.value}</p>`;
       chat_robot.innerHTML += `<p>bye, i hope good luck for you.</p> `;  
       clear();
    }else if( inp.value !='' && inp.value.toLowerCase() == 'ok'){
        chat_user.innerHTML += `<p class="user">${inp.value}</p>`;
       chat_robot.innerHTML += `<p>ok.</p> `;  
       clear();
    }else if( inp.value !='' && inp.value.toLowerCase() == 'can you help me'){
       chat_user.innerHTML += `<p class="user">${inp.value}</p>`;
       chat_robot.innerHTML += `<p>sure, what you want?</p> `; 
       clear();
    }else if( inp.value !='' && inp.value.toLowerCase() == 'yes'){
        chat_user.innerHTML += `<p class="user">${inp.value}</p>`;
        chat_robot.innerHTML += `<p>ok, how i can help you?</p> `;
        clear();
        addMessage()
    }

    //Arabic

    else if(inp.value != '' && inp.value == 'أهلا' || inp.value == 'مرحبا'|| inp.value == 'كيف حالك')
    {
        chat_user.innerHTML += `<p class="user">${inp.value}</p>`;
        chat_robot.innerHTML += `<p>أهلا, كيف يمكنني مساعدتك؟</p> `; 
        clear(); 
    }else if(inp.value != '' && inp.value == 'ما هو حاصل ضرب 2*2' || inp.value == 'أريد معرفة حاصل ضرب 2*2' || inp.value == 'ما هو حاصل ضرب 2×2' || inp.value == 'أريد معرفة حاصل ضرب 2×2')
    {
        chat_user.innerHTML += `<p class="user">${inp.value}</p>`;
        chat_robot.innerHTML += `<p>بالطبع, حاصل ضرب 2*2 هو 4</p> `; 
        clear();
    }else if(inp.value != '' && inp.value == 'شكرا' || inp.value == 'شكرا لك' || inp.value == 'شكرا جزيلا' || inp.value == 'شكرا جزيلا لك' || inp.value == 'أشكرك')
    {
        chat_user.innerHTML += `<p class="user">${inp.value}</p>`;
        chat_robot.innerHTML += `<p>.العفو, إذا أردت أي مساعدة لا تتردد في الطلب مني</p> `; 
        clear();
    }else if(inp.value != '' && inp.value == 'ما هو إسمك' || inp.value == 'من أنت')
    {
        chat_user.innerHTML += `<p class="user">${inp.value}</p>`;
        chat_robot.innerHTML += `<p>.إسمي هو مار أه أي و أنا نموذج ذكاء إصطناعي بسيط و المشمهندس مروان هو من قام ببرمجتي و صنعي</p> `; 
        clear();
    }else if(inp.value != '' && inp.value == 'هل يمكنك مساعدتي')
    {
        chat_user.innerHTML  += `<p class="user">${inp.value}</p>`;
        chat_robot.innerHTML += `<p>بالطبع, ما هو سؤالك؟</p> `; 
        clear();
    }else if(inp.value != '' && inp.value == 'بالطبع' || inp.value == 'أكيد' || inp.value == 'بالتأكيد' || inp.value == 'نعم' || inp.value == 'أجل')
    {
        chat_user.innerHTML += `<p class="user">${inp.value}</p>`;
        chat_robot.innerHTML += `<p>حسنا, ما هو سؤالك؟</p> `; 
        clear();
    }else if(inp.value != '' && inp.value == 'حسنا')
    {
        chat_user.innerHTML += `<p class="user">${inp.value}</p>`;
        chat_robot.innerHTML += `<p>.حسنا</p> `; 
        clear();
    }else if(inp.value != '' && inp.value == 'إلى اللقاء' || inp.value == 'مع السلامة' || inp.value == 'باي')
    {
        chat_user.innerHTML += `<p class="user">${inp.value}</p>`;
        chat_robot.innerHTML += `<p>.إلى اللقاء , أتمنى لك حظ جيد</p> `; 
        clear();
    }else if(inp.value != '' && inp.value == 'أريد رابط موقع شركة ألين دراجون')
    {
        chat_user.innerHTML += `<p class="user">${inp.value}</p>`;
        chat_robot.innerHTML += `<p><a href="#">alien dragon web site</a> :بالطبع هذا هو الرابط</a></p> `;
        clear();  
    }else if(inp.value !='' && inp.value == 'ما إسمك ' || inp.value == 'ما هو إسمك')
    {
        chat_user.innerHTML += `<p class="user">${inp.value}</p>`;
        chat_robot.innerHTML += `<p>إسمي هو مار أه أي</p>`;
        clear();
    }
    else{
        chat_user.innerHTML += `<p class="user">${inp.value}</p>`;
        chat_robot.innerHTML += `<p>.أسف أنا مزلت تحت التطوير و التدريب لذا لا أستطيع فهم ما تقصده</p> `;  
        clear();
    }

    chat.scroll({
        top: 90000000000000000000000000,
        behavior:'smooth',
    })

    inp.focus();

}

function clear()
{
    inp.value = '';
}