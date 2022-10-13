import { menuArray } from "./data.js"

let menuHtml = "" 
const orderArray = []
const totalPrice = document.getElementById('total-price-sum')

document.addEventListener('click', function(e){
    if(e.target.dataset.add){
        handleAddClick(e.target.dataset.add)
    } else if(e.target.dataset.remove) {
        handleRemoveClick(e.target.dataset.remove)
    }
})

function handleAddClick(itemId) {
    const targetItemObj = menuArray.filter(function(item){
        return item.id == itemId
    })[0]
    orderArray.push(targetItemObj)
    console.log(orderArray)
    document.querySelector(".order-visible").classList.add("visible")
    renderOrder()
}

function handleRemoveClick(itemId) {
    const targetItemObj = menuArray.filter(function(item){
        return item.id == itemId
    })[0]
    orderArray.pop(targetItemObj)
    console.log(orderArray)
    renderOrder()
}

document.getElementById('complete-order-btn').addEventListener('click', function(){
    document.querySelector('.pay-modal').classList.add("visible")
})

document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault(e)
    document.querySelector('.completed-text-container').classList.add("visible-complete")
    setTimeout( function(){
        document.querySelector('.completed-text-container').classList.remove("visible-complete")
    },2000)
    document.querySelector('.pay-modal').classList.remove("visible")
    document.querySelector(".order-visible").classList.remove("visible") 
    orderArray.length = 0
})

function renderOrder(){ 
    let orderHtml = ""
    let sum = 0
    orderArray.forEach(function(item) {
        sum += item.price
        totalPrice.innerHTML = `$${sum}`
        orderHtml += 
            `<div class ="order">
                <div class="item-container">
                    <p class="order-item" id="order-item">${item.name}</p>
                    <button class="remove-btn" id ="remove-btn" data-remove ="${item.id}">remove</button>
                </div>
                <p class = "price">$${item.price}</p>
            </div>`
            return orderHtml
    })
    if(orderArray.length === 0) {
        totalPrice.innerHTML = "$0"
    }else if(orderArray.length > 2) {
        totalPrice.innerHTML = 
            `<p class = discount-text>Save $3 for 3!</p>
            <p class = 'total-price'>$${sum- 3}</p>`
    }
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
                        <p class = "price" id = "price">$${item.price}</p>
                    </div>
                </div>
                <button class = "item-btn" id = "item-btn" data-add = "${item.id}">+</button>
            </div>
        </main>`
        return menuHtml
}) 

function renderMenu() {
    document.querySelector('main').innerHTML = menuHtml
}

renderMenu()

