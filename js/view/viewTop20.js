class ViewTop20 {
    constructor(){}

    viewTop20Render(listHot, obj) {
        listHot.insertAdjacentHTML('beforeend', `
        <li id=${obj.id}>
            <a href="">
                <div class="imgBox">
                    <img src="https://janet.co.kr/data/licenseitem/155/hotKeyword_02.jpg"
                        title="" alt="">
                    <h3 class="name">${obj.title}</h3>
                    <h5 class="d_day">D-1</h5>
                </div>
                <div class="subTxt">
                    <p>시행기관 : ${obj.licenseOrgan}</p>
                    <span class="date"> 시험일 : ${obj.date} </span>
                </div>
                <div class="overTxt">
                    <p><strong>유형:</strong> 제462회</p>
                    <p><strong>접수기간:</strong> 2022-04-11 ~ 16</p>
                    <span class="tag"></span>
                </div>
            </a>
        </li>
        `)
    }
}

export {ViewTop20}