function Laptop(name, model, serial, year, ram, rom, disk, mass) {
    this.name = name;
    this.model = model;
    this.serial = serial;
    this.year = year;
    this.ram = ram;   //озу
    this.rom = rom;   //пзу
    this.disk = disk;  //сидиром
    this.mass = mass;
    this.getRam = function () {

        return this.ram + 'mb';
    
    }
    this.getRom = function () {
    
        return this.rom + 'mb';
    }
    Laptop.counter++;
}
Laptop.counter = 0;
Laptop.getCount = function(){
    return Laptop.counter;
}

var lenovo = new Laptop('somename', 'some-model', 'some-serial', 'some-year', 50, 100, 'some-memory', 'some-mass');

console.log("Размер RAM: " + lenovo.getRam());
console.log("Размер ROM: " + lenovo.getRom());

//ultrabook

function Uboked(){
    Laptop.call(this);
    this.setWeight = function(mass){
        if (mass > 1.5)
            throw "Weight ultrabook should not exceed 1,5kg!";
        this.mass = mass;

    }
    this.getYear = function(){
        return this.year
    }
}
var ubok = new Uboked();
ubok.name = 'some_name'
ubok.model = 'some_model'
ubok.serial = 'some_serial'
ubok.year = 'some_year'
ubok.ram = 16;
ubok.rom = 512;
ubok.disk = 'none';
ubok.mass = 3,0;
console.log("Год выхода: " + ubok.getYear());
console.log(Laptop.getCount());