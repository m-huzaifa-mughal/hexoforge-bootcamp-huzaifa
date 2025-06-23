let input = document.getElementById('InputText');
let button = document.getElementById('btn');
let list = document.getElementById('list');

    button.addEventListener('click', function() {
        if (input.value == '') {
            alert('Please enter a value');
        }
        else{
        const li = document.createElement('li');
        li.textContent = input.value;
        list.appendChild(li);
        input.value = '';
        }
    });