describe("", function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe("by default", function(){

    it("starts at 20 degrees", function(){
      expect(thermostat.temperature).toEqual(20);
    });

    it("power saving mode is on", function() {
      expect(thermostat.powerSavingMode).toBe(true);
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

    it("cannot decrease below a min temperature", function() {
      thermostat.minTemp;
      expect(thermostat.decrease).toThrowError('You have reached the minimum temperature');
    });

    it("cannot increase above a max temperature", function() {
      thermostat.maxTemp;
      expect(thermostat.increase).toThrowError('You have reached the maximum temperature');
    });

    it("can be reset", function(){
      thermostat.increase();
      expect(thermostat.temperature).toEqual(21);
      thermostat.pressReset();
      expect(thermostat.temperature).toEqual(thermostat.defaultTemp);
    });

  });


  describe("power saving mode (PSM)", function() {

    it("can be switched OFF", function() {
      thermostat.powerSavingModeOff();
      expect(thermostat.powerSavingMode).toBe(false);
    });

    it("can be switched from OFF to ON", function() {
      thermostat.powerSavingModeOff();
      thermostat.powerSavingModeOn();
      expect(thermostat.powerSavingMode).toBe(true);
    });

    it("has a max temperature", function(){
      thermostat.powerSavingModeMaxTemp
      expect(thermostat.increase).toThrowError('You have reached the maximum temperature');
    });

    describe("when switched on", function() {

      it("any temperature above maximum, reduces to limit", function() {
        thermostat.temperature = 30
        thermostat.powerSavingModeOn();
        expect(thermostat.temperature).toEqual(thermostat.powerSavingModeMaxTemp)
      });

      it("any temperature below limit, remains unchanged", function() {
        thermostat.temperature = 20
        thermostat.powerSavingModeOn();
        expect(thermostat.temperature).toEqual(20)
      });

      it("it decides the max temperature", function() {
        thermostat.powerSavingModeMaxTemp;
        expect(thermostat.increase).toThrowError('You have reached the maximum temperature');
      });

    });

  });

  // describe("reflects energy usage with a rating", function(){

  //   it("less than 18 degrees is considered low usage", function() {
  //   });

  //   it("less than 25 degrees is considered medium usage", function() {
  //   });

  //   it("25 or above is considered high usage", function() {
  //   });

  // });


});

