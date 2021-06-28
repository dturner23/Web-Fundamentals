//One
function a(){
    return 35;
}
console.log(a())

//Two
function a(){
    return 4;
}
console.log(a()+a());

//Three
function a(b){
    return b;
}
console.log(a(2)+a(4));

//Four
function a(b){
        console.log(b);
        return b*3;
    }
console.log(a(3));

//Five
function a(b){
    return b*4;
    console.log(b);
}
console.log(a(10));

//Six

function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));

//Seven

function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );

//Eight

function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);

//Nine

function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();

//Ten

function a(b,c){
    for(var i=b; i<c; i++) {
    console.log(i);
}
return b*c;
}
a(0,10);
console.log(a(0,10));

//Eleven

function a(){
    for(var i=0; i<10; i++){
    for(var j=0; j<10; j++){
        console.log(j);
    }
    console.log(i);
    }
}
console.log(a());

//Twelve

function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}
console.log(a());

//Thirteen

var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);


//Fourteen

var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);

//Fifteen

var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);
