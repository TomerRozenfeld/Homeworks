//1
const tomer = {
    firstname: "Tomer",
    carname: "skoda",
    age: 26,
    lastname: "Rozenfeld", 
    fullname:function() {return this.firstname + " " + this.lastname}
};
fullname=tomer.fullname();
console.log(fullname)
//2
let d = new Date(1996, 7, 11, 19, 52, 30, 12);
console.log(d)
//3
const tomer2 = {
    firstname: "Tomer",
    carname: "skoda",
    age: 26,
    lastname: "Rozenfeld", 
    birthday: new Date(1996, 7, 11, 19, 52, 30, 12),
    fullname2:function() {return this.firstname + " " + this.lastname+ " " +this.birthday}
};
fullname2=tomer2.fullname2()
console.log(fullname2)
//4
let c = new Date(2022, 8, 35);
console.log(c);