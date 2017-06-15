var lodgeList = [
  { name: 'Newport Mesa Lodge No. 604',
    address: '1401 E 15th St  ',
    city: 'Newport Beach ',
    state: 'CA, ',
    zip: '92663',
    phone: '(949) 515-8788 ',
    website: 'www.calodges.org/no604',
    body: 'Blue Lodge',
    day: 'Wednesday'
  },

  { name: 'Huntington Beach Lodge No. 380',
    address: '601 Palm Ave ',
    city: 'Huntington Beach ',
    state: 'CA, ',
    zip: '92648',
    phone: '(714) 536-3119 ',
    website: 'www.hbmasons.com',
    body: 'Blue Lodge',
    day: 'Wednesday'
  },

  { name: 'Irvine Valley Lodge #671',
    address: '23685 Birtcher Dr ',
    city: 'Lake Forest ',
    state: 'CA, ',
    zip: '92630',
    phone: '(949) 357-0671 ',
    website: 'www.calodges.org/no604',
    body: 'Blue Lodge',
    day: 'Tuesday'
  },

  { name: 'Orange County York Rite',
    address: '303 W. Lincoln Ave. ',
    city: 'Anaheim ',
    state: 'CA, ',
    zip: '92805',
    phone: '(949) 515-8788 ',
    website: 'www.ocyorkrite.com',
    body: 'York Rite',
    day: 'Monday, Saturday'
  },

  { name: 'Orange County Scottish Rite',
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

var $lodge1Name = document.querySelector('#lodge1-name')
var $lodge1Info = document.querySelector('#lodge1-info')
var $lodge2Name = document.querySelector('#lodge2-name')
var $lodge2Info = document.querySelector('#lodge2-info')
var $lodge3Name = document.querySelector('#lodge3-name')
var $lodge3Info = document.querySelector('#lodge3-info')
var $lodge4Name = document.querySelector('#lodge4-name')
var $lodge4Info = document.querySelector('#lodge4-info')
var $lodge5Name = document.querySelector('#lodge5-name')
var $lodge5Info = document.querySelector('#lodge5-info')

$lodge1Name.innerHTML = lodgeList[0].name
$lodge2Name.innerHTML = lodgeList[1].name
$lodge3Name.innerHTML = lodgeList[2].name
$lodge4Name.innerHTML = lodgeList[3].name
$lodge5Name.innerHTML = lodgeList[4].name

$lodge1Info.innerHTML = lodgeList[0].address + lodgeList[0].city + lodgeList[0].state + lodgeList[0].zip + '<br>' + lodgeList[0].phone + '<br>' + 'Meets - ' + lodgeList[0].day
$lodge2Info.innerHTML = lodgeList[1].address + lodgeList[1].city + lodgeList[1].state + lodgeList[1].zip + '<br>' + lodgeList[1].phone + '<br>' + 'Meets - ' + lodgeList[1].day
$lodge3Info.innerHTML = lodgeList[2].address + lodgeList[2].city + lodgeList[2].state + lodgeList[2].zip + '<br>' + lodgeList[2].phone + '<br>' + 'Meets - ' + lodgeList[2].day
$lodge4Info.innerHTML = lodgeList[3].address + lodgeList[3].city + lodgeList[3].state + lodgeList[3].zip + '<br>' + lodgeList[3].phone + '<br>' + 'Meets - ' + lodgeList[3].day
$lodge5Info.innerHTML = lodgeList[4].address + lodgeList[4].city + lodgeList[4].state + lodgeList[4].zip + '<br>' + lodgeList[4].phone + '<br>' + 'Meets - ' + lodgeList[4].day
