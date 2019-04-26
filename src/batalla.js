class Guerrero{
    constructor(health, strength)
    {
        this.health=health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage) {
        this.health = this.health - damage 
    }
}
//const trupper = new Guerrero(100,60)

class Jedi  extends Guerrero{
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    attack(){
        return super.strength;
    }
    receiveDamage(damage){
         this.health = this.health - damage;
        if (this.health > 0) {
            return this.name + " has recived" + damage + "points of damage";
        } else  if(this.health <= 0){
            return this.name + " has died in act of combat";
        }
        
       // this.health = (this.health -damage);

    }

    battleCry(){
        return ("May the force be with us!");
    }

}

class Sith extends Guerrero {
    constructor(health,strength){
        super(health,strength);

    }
      attack() {
          return super.strength;
      }

      receiveDamage(damage){
          this.health = this.health - damage;
          if (this.health > 0) {
              return "A Sith" + " has received" + damage + " points of damage";
          } else if (this.health <= 0){
              return "A Sith" + " has died in combat";
          }
          
      }
}

class Batalla{
    constructor(){
        //var jediArmy=[];
        //let jediArmy=[];
        this.jediArmy = []; // esta forma de agregar alos constructores no me la se debemos repasarla
        //var sithArmy = [];
        this.sithArmy = [];
    }
    addJedi(jedi){
      // jediArmy.push(new Jedi("Yoda",100,200)); 
       this.jediArmy.push(jedi);
    }
    addSith(sith){
        this.sithArmy.push(sith);
    }
    jediAttack(){

    }
    sithAttack(){

    }
    showStatus(){

    }

}
module.exports = {
    Guerrero,Jedi,Sith,Batalla
}