import { ModelTop20 } from "../model/modelTop20.js";

class ControlTop20{
    constructor(listHot){
        this.listHot = listHot;
        this.ModelTop20 = new ModelTop20(listHot);   // model

        this.top20Bind();
    }

    top20Bind() {
        fetch("./data/top20.json")
            .then(response => {
                return response.json();
            })
            .then(jsondata => this.ModelTop20.bind(jsondata));
    }
}

export {ControlTop20}