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
