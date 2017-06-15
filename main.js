
var lodgeList = [
  { id: 1,
    name: 'Newport Mesa Lodge No. 604',
    address: '1401 E 15th St  ',
    city: 'Newport Beach ',
    state: 'CA, ',
    zip: '92663',
    phone: '(949) 515-8788 ',
    website: 'www.calodges.org/no604',
    body: 'Blue Lodge',
    day: 'Wednesday'
  },

  { id: 2,
    name: 'Huntington Beach Lodge No. 380',
    address: '601 Palm Ave ',
    city: 'Huntington Beach ',
    state: 'CA, ',
    zip: '92648',
    phone: '(714) 536-3119 ',
    website: 'www.hbmasons.com',
    body: 'Blue Lodge',
    day: 'Wednesday'
  },

  { id: 3,
    name: 'Irvine Valley Lodge #671',
    address: '23685 Birtcher Dr ',
    city: 'Lake Forest ',
    state: 'CA, ',
    zip: '92630',
    phone: '(949) 357-0671 ',
    website: 'www.calodges.org/no604',
    body: 'Blue Lodge',
    day: 'Tuesday'
  },

  { id: 4,
    name: 'Orange County York Rite',
    address: '303 W. Lincoln Ave. ',
    city: 'Anaheim ',
    state: 'CA, ',
    zip: '92805',
    phone: '(949) 515-8788 ',
    website: 'www.ocyorkrite.com',
    body: 'York Rite',
    day: 'Monday, Saturday'
  },

  { id: 5,
    name: 'Orange County Scottish Rite',
    address: '303 W. Lincoln Ave. ',
    city: 'Anaheim ',
    state: 'CA, ',
    zip: '92805',
    phone: '(714) 543-7277 ',
    website: 'www.ocscottishrite.org',
    body: 'Scottish Rite',
    day: 'Monday'
  }
]

function renderLodge(lodge) {
  var $lodge = document.createElement('div')
  var $column = document.createElement('div')
  var $lodgeName = document.createElement('h4')
  var $lodgeInfo = document.createElement('div')
  var $lodgeAddress = document.createElement('p')
  var $lodgePhone = document.createElement('p')
  var $lodgeDay = document.createElement('p')

  $lodge.appendChild($column)
  $column.appendChild($lodgeName)
  $column.appendChild($lodgeInfo)
  $lodgeInfo.appendChild($lodgeAddress)
  $lodgeInfo.appendChild($lodgePhone)
  $lodgeInfo.appendChild($lodgeDay)
  $lodgeName.textContent = lodge.name
  $lodgeAddress.textContent = lodge.address + lodge.city + lodge.state + lodge.zip
  $lodgePhone.textContent = lodge.phone
  $lodgeDay.textContent = 'Meets - ' + lodge.day
  $lodge.setAttribute('data-id', lodge.id)
  $lodge.classList.add('row')
  $column.classList.add('col-md-12')

  return $lodge
}

var $listContainer = document.querySelector('#list-container')
var len = lodgeList.length

for (var i = 0; i < len; i++) {
  var $lodge = renderLodge(lodgeList[i])
  $listContainer.appendChild($lodge)
  var $divider = document.createElement('hr')
  $listContainer.appendChild($divider)
}
