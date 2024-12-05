const a ={
    "pname":"redmi",
    "model": "note 10",
    "storage" : "64GB",
    "RAM" : "4GB"
}
const pname=a.pname;
const model =a.model;


const {storage:storage, RAM:pram} = a;


console.log(pname);
console.log(model);
console.log(storage);
console.log(pram);