item = document.querySelectorAll('.item');
for(i = 0; i < item.length;i++){
    item[i].setAttribute("style", "color:red;");
};

input = document.querySelector('input').value;

var message = document.querySelector('#message');
input = document.querySelector('input');
input.addEventListener('input', function(){
    if(this.value == ''){
        message.textContent = "";
    }else {
        message.textContent = "hey there bitch!";
    }
});
n = 1;
setInterval(function(l){
    var l = input.value;
    console.log(l);
    return n = l;
},100);

document.querySelector('button').addEventListener('click',function(){

    if(n == 1 || n == 2 || n == 3 || n == 4){
        item[n-1].setAttribute('style','color:blue;');
        console.log(n);
    }
    let div = document.createElement('div');
    div.innerHTML = "Вы прочитали важное сообщение " + n;
    document.body.append(div);

});











