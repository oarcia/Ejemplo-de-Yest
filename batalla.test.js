const{Guerrero, Jedi, Sith,Batalla} = require('./src/batalla');
describe("Guerrero", function () {
  let guerrero;
  let strength = 150;
  let health   = 300;

  beforeEach (function () {
    guerrero = new Guerrero(health, strength);
  });

  describe("constructor", function () {
    it("debería recibir 2 argumentos (health & strength)", function () {
      expect(Guerrero.length).toEqual(2);
    });

    it("debería recibir la propiedad health como primer argumento", function () {
      expect(guerrero.health).toEqual(health);
    });

    it("debería recibir la propiedad strength como segundo argumento", function () {
      expect(guerrero.strength).toEqual(strength);
    });
  });

  describe("attack() method", function () {
    it("debería ser una función", function () {
      expect(typeof(guerrero.attack)).toBe("function");
    });

    it("debería recibir 0 argumentos", function () {
      expect(guerrero.attack.length).toEqual(0);
    });

    it("debería retornar la propiedad strength del Guerrero", function () {
      expect(guerrero.attack()).toEqual(strength);
    });
  });

  describe("receiveDamage() method", function () {
    it("debería ser una función", function () {
      expect(typeof(guerrero.receiveDamage)).toBe("function");
    });

    it("debería recibir 1 argumento (damage)", function () {
      expect(guerrero.receiveDamage.length).toEqual(1);
    });

    it("debería quitar el damage recibido de la propiedad health", function () {
      guerrero.receiveDamage(50);
      expect(guerrero.health).toEqual(health - 50);
    });

    it("no debería retornar nada", function () {
      expect(guerrero.receiveDamage(50)).toEqual(undefined);
    });
  });
});


describe("Jedi", function () {
  let jedi;
  let name     = "Luke Skywalker";
  let strength = 150;
  let health   = 300;

  beforeEach (function () {
    jedi = new Jedi(name, health, strength);
  });

  it("should inherit from Guerrero", function () {
    expect(jedi instanceof Guerrero).toEqual(true);
  });

  describe("constructor", function () {
    it("debería recibir 3 argumentos (name, health & strength)", function () {
      expect(Jedi.length).toEqual(3);
    });

    it("debería recibir la propiedad name como primer argumento", function () {
      expect(jedi.name).toEqual(name);
    });

    it("debería recibir la propiedad health como segundo argumento", function () {
      expect(jedi.health).toEqual(health);
    });

    it("debería recibir la propiedad strength como tercer argumento", function () {
      expect(jedi.strength).toEqual(strength);
    });
  });

  describe("attack() method", function () {
    it("debería ser una función", function () {
      expect(typeof(jedi.attack)).toBe("function");
    });

    it("debería recibir 0 argumentos", function () {
      expect(jedi.attack.length).toEqual(0);
    });

    it("debería retornar la propiedad strength del Jedi", function () {
      expect(jedi.attack()).toEqual(strength);
    });
  });

  describe("receiveDamage() method", function () {
    it("debería ser una función", function () {
      expect(typeof(jedi.receiveDamage)).toBe("function");
    });

    it("debería recibir un argumento (damage)", function () {
      expect(jedi.receiveDamage.length).toEqual(1);
    });

    it("debería remover el damage recibido de la propiedad health", function () {
      jedi.receiveDamage(50);
      expect(jedi.health).toEqual(health - 50);
    });

    it("debería retornar \"NAME has received DAMAGE points of damage\", if the Jedi is still alive", function () {
      expect(jedi.receiveDamage(50)).toEqual(name + " has received 50 points of damage");
      expect(jedi.receiveDamage(75)).toEqual(name + " has received 75 points of damage");
    });

    it("debería retornar \"NAME has died in act of combat\", if the Jedi dies", function () {
      expect(jedi.receiveDamage(health)).toEqual(name + " has died in act of combat");
    });
  });

  describe("battleCry() method", function () {
    it("debería retornar una función", function () {
      expect(typeof(jedi.battleCry)).toBe("function");
    });

    it("debería recibir 0 argumentos", function () {
      expect(jedi.battleCry.length).toEqual(0);
    });

    it("debería retornar \"May the force be with us!\"", function () {
      expect(jedi.battleCry()).toEqual("May the force be with us!");
    });
  });
});


describe("Sith", function () {
  let sith;
  let health   = 60;
  let strength = 25;

  beforeEach(function () {
    sith = new Sith(health, strength);
  });

  it("debería heredar de Guerrero", function () {
    expect(sith instanceof Guerrero).toEqual(true);
  });

  describe("constructor function", function () {
    it("debería recibir dos argumentos (health & strength)", function () {
      expect(Sith.length).toEqual(2);
    });

    it("debería recibir la propiedad health como primer argumento", function () {
      expect(sith.health).toEqual(health);
    });

    it("debería recibir la propiedad strength como segundo argumento", function () {
      expect(sith.strength).toEqual(strength);
    });
  });

  describe("attack() method", function () {
    it("debería ser una función", function () {
      expect(typeof(sith.attack)).toBe("function");
    });

    it("debería recibir 0 argumentos", function () {
      expect(sith.attack.length).toEqual(0);
    });

    it("debería retornar la propiedad strength del Sith", function () {
      expect(sith.attack()).toEqual(strength);
    });
  });

  describe("receiveDamage() method", function () {
    it("debería ser una función", function () {
      expect(typeof(sith.receiveDamage)).toBe("function");
    });

    it("debería recibir un argumento (damage)", function () {
      expect(sith.receiveDamage.length).toEqual(1);
    });

    it("debería quitar el damage recibido de la propiedad health", function () {
      sith.receiveDamage(50);
      expect(sith.health).toEqual(health - 50);
    });

    it("debería retornar \"A Sith has received DAMAGE points of damage\", if the Sith is still alive", function () {
      expect(sith.receiveDamage(45)).toEqual("A Sith has received 45 points of damage");
      expect(sith.receiveDamage(10)).toEqual("A Sith has received 10 points of damage");
    });

    it("debería retornar \"A Sith has died in combat\", if the Sith dies", function () {
      expect(sith.receiveDamage(health)).toEqual("A Sith has died in combat");
    });
  });
});


describe("Batalla", function () {
  let jedi, sith, batalla;

  function generateJedi () {
    let name     = "Harald";
    let strength = 150;
    let health   = 300;

    return new Jedi(name, health, strength);
  }

  function generateSith () {
    let health   = 60;
    let strength = 25;

    return new Sith(health, strength);
  }

  beforeEach(function () {
    jedi = generateJedi();
    sith  = generateSith();
    batalla    = new Batalla();
  });

  describe("constructor function", function () {
    it("debería recibir 0 argumentos", function () {
      expect(Batalla.length).toEqual(0);
    });

    it("debería asignar un arreglo vacío a la propiedad de jediArmy", function () {
      expect(batalla.jediArmy).toEqual([]);
    });

    it("debería asignar un arreglo vacío a la propiedad de sithArmy", function () {
      expect(batalla.sithArmy).toEqual([]);
    });
  });

  describe("addJedi() method", function () {
    it("debería ser una función", function () {
      expect(typeof(batalla.addJedi)).toBe("function");
    });

    it("debería recibir un argumento (un objeto Jedi)", function () {
      expect(batalla.addJedi.length).toEqual(1);
    });

    it("debería agregar al Jedi recibido a la armada", function () {
      batalla.addJedi(jedi);
      expect(batalla.jediArmy).toEqual([ jedi ]);
    });

    it("no debería retornar nada", function () {
      expect(batalla.addJedi(jedi)).toEqual(undefined);
    });
  });

  describe("addSith() method", function () {
    it("debería ser una función", function () {
      expect(typeof(batalla.addSith)).toBe("function");
    });

    it("debería recibir un argumento (un objeto Sith)", function () {
      expect(batalla.addSith.length).toEqual(1);
    });

    it("debería agregar al Sith recibido a la armada", function () {
      batalla.addSith(sith);
      expect(batalla.sithArmy).toEqual([ sith ]);
    });

    it("no debería retornar nada", function () {
      expect(batalla.addSith(sith)).toEqual(undefined);
    });
  });

  describe("Armadas atacan", function () {
    beforeEach (function () {
      batalla.addJedi(jedi);
      batalla.addSith(sith);
    });

    describe("jediAttack() method", function () {
      it("debería ser una función", function () {
        expect(typeof(batalla.jediAttack)).toBe("function");
      });

      it("debería recibir cero argumentos", function () {
        expect(batalla.jediAttack.length).toEqual(0);
      });

      it("debería hacer el Sith receiveDamage() igual al strength de un Jedi", function () {
        let oldHealth = sith.health;
        batalla.jediAttack();
        expect(sith.health).toEqual(oldHealth - jedi.strength);
      });

      it("debería retornar el resultado de llamar receiveDamage() de un Sith con el strength de un Jedi", function () {
        expect(batalla.jediAttack()).toEqual("A Sith has died in combat");
      });
    });

    describe("sithAttack() method", function () {
      it("debería ser una función", function () {
        expect(typeof(batalla.sithAttack)).toBe("function");
      });

      it("should receive 0 arguments", function () {
        expect(batalla.sithAttack.length).toEqual(0);
      });

      it("debería hacer a un Jedi receiveDamage() igual al strength de un Sith", function () {
        let oldHealth = jedi.health;
        batalla.sithAttack();
        expect(jedi.health).toEqual(oldHealth - sith.strength);
      });

      it("debería retornar el resultado de llamar receiveDamage() de un Jedi con el strength de un Sith", function () {
        expect(batalla.sithAttack()).toEqual(jedi.name + " has received " + sith.strength + " points of damage");
      });
    });
  });
});
