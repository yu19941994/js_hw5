let data = [
  {
    county: '台北',
    star: 8.6,
    title: '綠島自由行套裝行程',
    description: '嚴選超高CP值綠島自由行套裝行程，多種綠島套裝組合，提供台東綠島來回船票、綠島環島機車、綠島民宿住宿，行程加贈『綠島浮潛體驗』以及『綠島生態導覽』，讓你用輕鬆的綠島套裝自由行，也能深度認識綠島在地文化。',
    number: 8,
    cost: 1280,
    picUrl: 'images/photo-1477894387642-00a731c511b3.png'
  },
  {
    county: '台北',
    star: 8.2,
    title: '清境高空觀景步道二日遊',
    description: '清境農場青青草原數十公頃碧草，餵食著數以百計的綿羊和牛群，中央山脈最高的北三段群峰形成一堵如帶的高牆，攔住清晨的薄霧山嵐，成就了從花蓮翻山而來的雲瀑在濁水溪谷積成雲海，這些景觀豐沛了清境觀景步道的風格，也涵養它無可取代的特色。',
    number: 12,
    cost: 2580,
    picUrl: 'images/photo-1526772662000-3f88f10405ff.png'
  },
  {
    county: '台中',
    star: 9.2,
    title: '南庄度假村露營車二日遊',
    description: '南庄雲水豪華露營車，快來擁有最愜意的露營體驗吧！ 一泊一食，輕鬆享受露營車樂趣。 獨立衛浴與私人戶外露臺。 入住豪華露營車還能使用戶外SPA大眾湯，感受美人湯魅力。',
    number: 2,
    cost: 2480,
    picUrl: 'images/photo-1598954467835-3b0b6fe3be70.png'
  },
]

const tripMenu = document.querySelector('#tripMenu')
const areaSearch = document.querySelector('#areaSearch')
const searchTimes = document.querySelector('#searchTimes')
const submitBtn = document.querySelector('#submitBtn')
// 表單資訊
const formName = document.querySelector('#name')
const formUrl = document.querySelector('#url')
const formArea = document.querySelector('#area')
const formCost = document.querySelector('#cost')
const formGroup = document.querySelector('#group')
const formStar = document.querySelector('#star')
const formDescription = document.querySelector('#description')

let totalContent = ''
let searchTotal = 0

function init () {
  totalContent = ''
  searchTotal = 0
  data.forEach(item => {
    totalContent += `<li class="col-12 col-md-6 col-lg-4 mb--7 position-relative">
                        <p class="bg--secondary mb-0 text-white py-2 px--7 width--tag position-absolute z-index--100 top font--1">${item.county}</p>
                        <div class="card">
                          <img src="${item.picUrl}" class="card-img-top" alt="menu1">
                          <div class="card-body position-relative">
                            <div class="d-flex flex-column justify-content-between height--inside">
                              <div>
                                <p class="bg--primary mb-0 text-white py-1 px-2 width--tag--sm position-absolute z-index--100 top left">${item.star}</p>
                                <h5 class="card-title border-bottom--primary"><a href="#" class="text-decoration-none text--primary">${item.title}</a></h5>
                                <p class="card-text text--gray">${item.description}</p>
                              </div>
                              <div class="d-flex justify-content-between align-items-center">
                                <div class="d-flex">
                                  <span class="material-icons text--primary">
                                    error
                                  </span>
                                  <p class="text--primary mb-0">剩下最後 ${item.number} 組</p>
                                </div> 
                                <div class="d-flex align-items-center">
                                  <p class="text--primary mb-0">TWD</p>
                                  <p class="text--primary mb-0 h2">$${item.cost}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>`
  })
  tripMenu.innerHTML = totalContent

  searchTotal = data.length
  searchTimes.innerHTML = `<p class="h6 mb-0 text--gray">本次搜尋共 ${searchTotal} 筆資料</p>`
}

function showMenu (chosenCounty) {
  totalContent = ''
  let filterData
  searchTotal = 0

  if(chosenCounty === '全部地區') {
    filterData = data
  }else{
    filterData = data.filter(e => e.county === chosenCounty)
  }
  filterData.forEach(item => {
    totalContent += `<li class="col-12 col-md-6 col-lg-4 mb--7 position-relative">
                        <p class="bg--secondary mb-0 text-white py-2 px--7 width--tag position-absolute z-index--100 top font--1">${item.county}</p>
                        <div class="card">
                          <img src="${item.picUrl}" class="card-img-top" alt="menu1">
                          <div class="card-body position-relative">
                            <div class="d-flex flex-column justify-content-between height--inside">
                              <div>
                                <p class="bg--primary mb-0 text-white py-1 px-2 width--tag--sm position-absolute z-index--100 top left">${item.star}</p>
                                <h5 class="card-title border-bottom--primary"><a href="#" class="text-decoration-none text--primary">${item.title}</a></h5>
                                <p class="card-text text--gray">${item.description}</p>
                              </div>
                              <div class="d-flex justify-content-between align-items-center">
                                <div class="d-flex">
                                  <span class="material-icons text--primary">
                                    error
                                  </span>
                                  <p class="text--primary mb-0">剩下最後 ${item.number} 組</p>
                                </div> 
                                <div class="d-flex align-items-center">
                                  <p class="text--primary mb-0">TWD</p>
                                  <p class="text--primary mb-0 h2">$${item.cost}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>`
  })
  tripMenu.innerHTML = totalContent
  searchTotal = filterData.length
  searchTimes.innerHTML = `<p class="h6 mb-0 text--gray">本次搜尋共 ${searchTotal} 筆資料</p>`
}

function searchHandler (e) {
    showMenu(e.target.value)
}

function addMenu (e) {
  e.preventDefault()
  let obj = {}
  obj.county = formArea.value
  obj.star = formStar.value
  obj.title = formName.value
  obj.description = formDescription.value
  obj.number = formGroup.value
  obj.cost = formCost.value
  obj.picUrl = formUrl.value
  if(obj.county === '' || obj.star === '' || obj.title === '' || obj.description === '' || obj.number === '' || obj.cost === '' || obj.picUrl === '') {
    alert('您有空格尚未填寫')
  }else{
    data.push(obj)
    init()
  }
}

areaSearch.addEventListener('change', searchHandler);
submitBtn.addEventListener('click', addMenu)

init()