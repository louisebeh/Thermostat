describe("Thermostat", function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe("by default", function(){

    it("power saving is on", function() {
      expect(thermostat.powerSaving).toBe(true);
    });

    it("temp is 20 degrees", function(){
      expect(thermostat.temperature).toEqual(20);
    });

    it("max temp is 32 degrees", function(){
      expect(thermostat.maxTemp).toEqual(32);
    });

    it("min temp is 10 degrees", function(){
      expect(thermostat.minTemp).toEqual(10);
    });

  });


  describe("temperature", function(){

    it("can increase by 1 degree incrementally", function() {
      thermostat.increase();
      expect(thermostat.temperature).toEqual(21);
    });

    it("can decrease by 1 degree incrementally", function() {
      thermostat.decrease();
      expect(thermostat.temperature).toEqual(19);
    });

    it("cannot increase above the max temp", function() {
      thermostat.maxTemp;
      expect(thermostat.increase).toThrowError('maximum temperature reached');
    });

    it("cannot decrease below the min temp", function() {
      thermostat.minTemp;
      expect(thermostat.decrease).toThrowError('minimum temperature reached');
    });

    it("can be reset", function(){
      thermostat.increase();
      expect(thermostat.temperature).toEqual(21);
      thermostat.pressReset();
      expect(thermostat.temperature).toEqual(thermostat.defaultTemp);
    });

  });


  describe("power saving mode", function() {

    it("can be switched OFF", function() {
      thermostat.powerSavingOff();
      expect(thermostat.powerSaving).toBe(false);
    });

    it("can be switched from OFF to ON", function() {
      thermostat.powerSavingOff();
      thermostat.powerSavingOn();
      expect(thermostat.powerSaving).toBe(true);
    });

    it("has a max temp of 25 degrees", function(){
      expect(thermostat.powerSavingMaxTemp).toEqual(25);
    });

    it("cannot increase temp above 25 degrees", function(){
      thermostat.powerSavingMaxTemp
      expect(thermostat.increase).toThrowError('maximum temperature reached');
    });

    describe("when switched on", function() {

      it("any temperature above maximum, reduces to limit", function() {
        thermostat.temperature = 30
        thermostat.powerSavingOn();
        expect(thermostat.temperature).toEqual(thermostat.powerSavingMaxTemp)
      });

      it("any temperature below limit, remains unchanged", function() {
        thermostat.temperature = 20
        thermostat.powerSavingOn();
        expect(thermostat.temperature).toEqual(20)
      });

      it("it decides the max temperature", function() {
        thermostat.powerSavingMaxTemp;
        expect(thermostat.increase).toThrowError('maximum temperature reached');
      });

    });

  });


  describe("energy rating", function(){

    it("less than 18 degrees is considered low usage", function() {
      thermostat.temperature = 15
      expect(thermostat.energyRating()).toEqual('low');
    });

    it("less than 25 degrees is considered medium usage", function() {
      thermostat.temperature = 20
      expect(thermostat.energyRating()).toEqual('medium');
    });

    it("25 or above is considered high usage", function() {
      thermostat.temperature = 30
      expect(thermostat.energyRating()).toEqual('high');
    });

  });


});
