var person = {
    name: "Do Thanh Tan",
    age: 23,
    getPerson: function () {
        console.log('Toi ten la: ' + this.name + ' and ' + this.age + ' years old.');
    }
}
person.getPerson();
console.log('Toi ten la: ', person["name"]);

/**======================================== */

function KhoaHoc(name, fee) {
    this.Name = name;
    this.Fee = fee;
}
KhoaHoc.prototype.description = function () {
    console.log('Khoa hoc ' + this.Name + ' has fee ' + this.Fee);
}
var nodejs = new KhoaHoc("NODEJS", 100000);
nodejs.description();