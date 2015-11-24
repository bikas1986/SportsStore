/**
 * Created by Bikas on 17/09/15.
 */
var Gadget = (function(){
    var counter = 0;

    var SomeConstructor = function(){
        counter++;
    }
    SomeConstructor.prototype.getLastId = function(){
        console.log('Id :: '+counter);
    }
    return SomeConstructor;
}());

var g1 = new Gadget();
g1.getLastId();

var g2 = new Gadget();
g2.getLastId();

var g3 = new Gadget();
g3.getLastId();
