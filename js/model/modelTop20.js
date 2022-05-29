import { ViewTop20 } from "../view/viewTop20.js";

class ModelTop20 {
    constructor(listHot){
        this.topList = [];
        this.listHop = listHot;
        this.viewTop20 = new ViewTop20();
    }

    bind(listHop){
        listHop.map(object => {
            let date = new Date(object.esRegdt)
            date = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`
            object.date = date;
            this.topList.push(object);
        })
        
        this.topList.map(object => {
            this.viewTop20.viewTop20Render(this.listHop,object)
        })
        
        //console.log(this.topList);
    }

    
}

export {ModelTop20} 