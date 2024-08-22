function showKeyCodes(e) {
    const insert = document.getElementById('insert');

    insert.innerHTML = " ";

    const keyObj = {
        'e.key': e.key === ' ' ? 'Space' : e.key,
        'e.keyCode': e.keyCode,
        'e.code': e.code
    }

    for (const key in keyObj) {
        const div = document.createElement('div');
        div.className = 'item';
        const small = document.createElement('small');
        const h4 = document.createElement('h4');
        const keyText = document.createTextNode(key);
        const keyValue = document.createTextNode(keyObj[key]);  

        h4.appendChild(keyValue);
        small.appendChild(keyText);
        div.appendChild(small);
        div.appendChild(h4);
        insert.appendChild(div);
    }
}

window.addEventListener('keydown', showKeyCodes);