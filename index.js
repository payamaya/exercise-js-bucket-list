//1) CreatElement , add text appendChild
const p = document.createElement('p')
p.innerText = 'List paragraph'
console.log(p)
const section = document.querySelector('.list')
section.appendChild(p)

// 2) insertAjacentElement
const p2 = document.createElement('p')
p2.innerText = 'List bucket with adjacentHTML'
const section2 = document.querySelector('.list')
section.appendChild(p2)
section.insertAdjacentElement('afterend', p2)
section.insertAdjacentElement('afterbegin', p2)
section.insertAdjacentElement('beforebegin', p2)
section.insertAdjacentElement('beforeend', p2)

// 3) console.log all the p
const mainELement = document.querySelector('.list')
const pElements = document.querySelectorAll('p')
pElements.forEach((p, index) => {
  console.log(index + 1, p.innerHTML)
})
// 4) Create innerHTML
const allPara = document.querySelector('.list')
const newPara = '<div>This is a div element as a string</div>'

// 5) set innerHTML
allPara.innerHTML += newPara
console.log(allPara.innerHTML)

// 6) commen t out the p
const sectionComment = document.querySelector('.list')
const paragraph = sectionComment.querySelectorAll('p')
for (let i = 0; i < paragraph.length; i++) {
  const p = paragraph[i]
  const commentText = `<!-- ${p.outerHTML} -->`
  p.insertAdjacentHTML('beforebegin', commentText)
  p.remove()
}
console.log(sectionComment.innerHTML)

// 7) Add three more items to the end of the p
const addPara = document.querySelector('.list')
const newParagraphs = [
  '<p>New paragraph 1</p>',
  '<p>New paragraph 2</p>',
  '<p>New paragraph 3</p>',
]
for (let i = 0; i < newParagraphs.length; i++) {
  addPara.insertAdjacentHTML('beforeend', newParagraphs[i])
}
console.log(addPara)

// 8)How many items
const list = document.querySelector('.list')
const childrenList = list.children
console.log(childrenList) // HTMLCollection[div,p,p,p]

// 9) Change the h2 innerText
const name = document.querySelector('h2')
const changeName = (name.innerText = 'Paul')

// 10) replaceChild

const newItem = document.createElement('p')
newItem.innerText = 'New item replacing the removed item'
console.log(newItem.innerText)
const elementChild = document.querySelector('.list').children[0]
elementChild.replaceChild(newItem, elementChild.childNodes[0])
console.log(elementChild.innerHTML)

// 11) Replace the middle item
// const newItem2 = document.createElement('p')
// newItem2.innerText = 'New item replacing the removed item from the middle'
// console.log(newItem2.innerText)
// const elementChild2 = document.querySelector('.list').children[2]
// elementChild2.replaceChild(newItem2, elementChild2.childNodes[0])
// console.log(elementChild2.innerHTML)

// 11) Replace the middle item
const middleItem = document.createElement('p')
middleItem.innerText = 'Replacing the middle item with a new item'

const listItem = document.querySelector('.list')

const itemToReplace = listItem.children[2]
listItem.replaceChild(middleItem, itemToReplace)

console.log(listItem.innerText)

// 12) remove the last element

const removeItem = document.querySelector('.list')

console.log(removeItem.removeChild(removeItem.lastElementChild))
