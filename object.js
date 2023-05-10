/*
let alien = {
    name : 'Navin',
    tech : 'JS',
    laptop : {
        cpu : 'i7',
        ram : 4,
        brand : 'Asus'
    }
}

for(let key in alien.laptop){

    console.log(key, alien.laptop[key]);
}
*/

// object with methods
let laptop2 = {
    cpu: 'i7',
    ram: 16,
    brand: 'Apple',

    getConfig: function(){

        console.log(this.cpu);
    }
}

let laptop1 = {
    cpu: 'i9',
    ram: 16,
    brand: 'HP',

    compare: function(laptop){
        if(this.cpu > laptop.cpu){
            console.log(this);
        }
        else
            console.log(laptop);

    }
}



laptop2.getConfig();
laptop1.compare(laptop2);