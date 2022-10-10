import { menuArray } from "./data.js"

let menuHtml = "" 
menuArray.forEach(function(item) {
    menuHtml += 
    `<div class="menu-item">
                <div class="item">
                    <div class = "emoji" id = "emoji1">${item.emoji}</div>
                    <div class = "content">
                        <h3>${item.name}</h3>
                        <p class = "ingredients" id = "ingredients">
                        ${item.ingredients}
                        </p>
                        <p class="price" id="price">$${item.price}</p>
                    </div>
                </div>
                <button class= "item-btn" id="item-btn">+</button>
            </div>
        </main>`
        return menuHtml
}) 

function render() {
    document.querySelector('main').innerHTML = menuHtml
}

render()