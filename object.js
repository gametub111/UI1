function person(){
    this.age =20;
    this.name="lol"; 
}
person.prototype.gender="male";
let p1 = new person();

console.log(p1.gender);
