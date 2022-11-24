function criarMenu(menus) {

    for(const m of menus) 
    {
        var menu = document.createElement('menu');
        var ul = document.createElement('ul');
        var item1 = document.createElement('li');
        var item2 = document.createElement('li');
        item1.innerHTML = 'Home';
        item2.innerHTML = 'Produtos';
        ul.appendChild(item1);
        ul.appendChild(item2);
        menu.appendChild(ul);
        m.appendChild(menu);
    }
}