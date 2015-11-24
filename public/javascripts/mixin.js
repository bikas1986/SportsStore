/**
 * Created by Bikas on 18/09/15.
 */
var Person = function(name){
    this.name = name;
};
Person.prototype.sayName = function(){
    console.log('My name is '+this.name);
}

var biku = new Person('Biku');
for(prop in biku){
    if(biku.hasOwnProperty(prop)){
        console.log(prop);
    }

}