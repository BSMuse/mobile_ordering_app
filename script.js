import { menuArray } from "./data.js"

let menuHtml = "" 
const orderArray = []

document.addEventListener('click', function(e){
    if(e.target.dataset.add){
        handleAddClick(e.target.dataset.add)
    }
})

function handleAddClick(itemId) {
    const targetItemObj = menuArray.filter(function(item){
        return item.id == itemId
    })[0]
    orderArray.push(targetItemObj)
    console.log(orderArray)
    document.querySelector(".order-visible").classList.add("visible")
    addToOrder()
}

function addToOrder(){ 
    let orderHtml = ""
    orderArray.forEach(function(item) {
        orderHtml += 
            `<div class = "item-container">
                <p class = "order-item" id = "order-item" >${item.name}</p>
                <button class = "remove-btn" id = "remove-btn">remove</button>
            </div>
            <p id = "price">$${item.price}</p>`
            return orderHtml
    })
    document.getElementById('order-container').innerHTML = orderHtml
}

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
                <button class= "item-btn" id="item-btn" data-add="${item.id}">+</button>
            </div>
        </main>`
        return menuHtml
}) 

function renderMenu() {
    document.querySelector('main').innerHTML = menuHtml
}

renderMenu()

