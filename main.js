var lodgeList = [
  { id: 1,
    name: 'Newport Mesa Lodge No. 604',
    address: '1401 E 15th St.  ',
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
    address: '601 Palm Ave. ',
    city: 'Huntington Beach ',
    state: 'CA, ',
    zip: '92648',
    phone: '(714) 536-3119 ',
    website: 'www.hbmasons.com',
    body: 'Blue Lodge',
    day: 'Wednesday'
  },

  { id: 3,
    name: 'Irvine Valley Lodge No. 671',
    address: '23685 Birtcher Dr. ',
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
    day: 'Monday' && 'Saturday',
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
  },

  { id: 6,
    name: 'Wiley Kimbrough Lodge No. 91',
    address: '1403 W. 5th St. ',
    city: 'Santa Ana ',
    state: 'CA, ',
    zip: '92702',
    phone: '(714) 543-3075 ',
    website: 'www.wlk91.org',
    body: 'Prince Hall Affiliated',
    day: 'Wednesday'
  },

  { id: 7,
    name: 'Sunset Lodge No. 26',
    address: '516 W Esther St. ',
    city: 'Long Beach ',
    state: 'CA, ',
    zip: '90813',
    phone: '(562) 437-2198 ',
    website: 'www.facebook.com/pages/Sunset-Lodge-No-26-F-AM/121112964569769',
    body: 'Prince Hall Affiliated',
    day: 'Monday'
  },

  { id: 8,
    name: 'El Bekal Temple',
    address: '1320 S Sanderson Ave. ',
    city: 'Anaheim ',
    state: 'CA, ',
    zip: '92806',
    phone: '(714) 563-9111 ',
    website: 'www.elbekal.com',
    body: 'Shrine',
    day: 'Monday'
  },

    { id: 9,
    name: 'Cinema Grotto',
    address: '19310 Avenue of the Oaks ',
    city: 'Newhall ',
    state: 'CA, ',
    zip: '91321',
    phone: 'please email ',
    website: 'www.cinemagrotto.com/',
    body: 'Grotto',
    day: 'Monday'
  },

  { id: 10,
    name: 'Scepter Chapter No. 163',
    address: '71 Plaza Square ',
    city: 'Orange ',
    state: 'CA, ',
    zip: '92866',
    phone: '(714) 538-1443 ',
    website: 'www.scepter163.org',
    body: 'Eastern Star',
    day: 'Thursday'
  }
]

var $lodgesList = document.querySelector('#lodges-list')
var $checkboxes = document.querySelectorAll('input[type=checkbox]')
var $buttonBar = document.querySelector('#day-filter')

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

var len = lodgeList.length

for (var i = 0; i < len; i++) {
  var $lodge = renderLodge(lodgeList[i])
  $lodgesList.appendChild($lodge)
  var $divider = document.createElement('hr')
  $lodgesList.appendChild($divider)
}

function filterByBody(lodges, bodyName) {
  var matches = []
  for (var i = 0; i < lodges.length; i++) {
    if (lodges[i].body === bodyName) {
      matches.push(lodges[i])
    }
  }
  return matches
}

function filterByBodies(lodges, bodies) {
  if (bodies.length === 0) {
    return lodges
  }
  var allMatches = []
  for (var i = 0; i < bodies.length; i++) {
    var $matches = filterByBody(lodges, bodies[i])
    for (var j = 0; j < $matches.length; j++) {
      allMatches.push($matches[j])
    }
  }
  return allMatches
}

function filterByDay(lodges, meetingDay) {
  if (meetingDay === undefined) {
    return lodges
  }
  var matchesByDay = []
  for (var i = 0; i < lodges.length; i++) {
    if (lodges[i].day === meetingDay) {
      matchesByDay.push(lodges[i])
    }
  }
  return matchesByDay
}

function getBodies(checkboxes) {
  var bodies = []
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked === true) {
      bodies.push(checkboxes[i].value)
    }
  }
  return bodies
}

function getDay(buttons) {
  for (var i = 0; i < buttons.children.length; i++) {
    if (buttons.children[i].classList.contains('selected-day')) {
      return buttons.children[i].getAttribute('value')
    }
  }
}

function handleClick() {
  $lodgesList.innerHTML = ''
  var bodies = getBodies($checkboxes)
  var meetingDay = getDay($buttonBar)
  var matches = filterLodges(lodgeList, bodies, meetingDay)
  $lodgesList.innerHTML = ''
  matches.forEach(function(lodge) {
    var $lodgeDiv = renderLodge(lodge)
    $lodgesList.appendChild($lodgeDiv)
    var $divider = document.createElement('hr')
    $lodgesList.appendChild($divider)
  })
}

for (var i = 0; i < $checkboxes.length; i++) {
  $checkboxes[i].addEventListener('change', handleClick)
}

$buttonBar.addEventListener('click', function(event) {
  for (var i = 0; i < $buttonBar.children.length; i++) {
    $buttonBar.children[i].classList.remove('selected-day')
  }
  event.target.classList.add('selected-day')
  var bodies = getBodies($checkboxes)
  var meetingDay = getDay($buttonBar)
  var matches = filterLodges(lodgeList, bodies, meetingDay)
  $lodgesList.innerHTML = ''
  matches.forEach(function(lodge) {
    var $lodgeDiv = renderLodge(lodge)
    $lodgesList.appendChild($lodgeDiv)
    var $divider = document.createElement('hr')
    $lodgesList.appendChild($divider)
  })
})

function filterLodges(lodges, bodies, meetingDay) {
  var dayMatches = filterByDay(lodges, meetingDay)
  var bodyMatches = filterByBodies(dayMatches, bodies)
  return bodyMatches
}
