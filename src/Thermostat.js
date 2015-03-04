var Thermostat = function(){

  this.defaultTemp = 20;
  this.minTemp = 10;
  this.maxTemp = 32

  this.temperature = this.defaultTemp

  this.powerSavingMode = true;
  this.powerSavingModeMaxTemp = 25;

};

  Thermostat.prototype.increase = function() {
    if (this.powerSavingModeOn && (this.temperature < this.powerSavingModeMaxTemp)) {
      this.temperature++;
    } else if (this.powerSavingModeOff && (this.temperature < this.maxTemp)) {
      this.temperature++;
    } else {throw new Error ('You have reached the maximum temperature');
  }
  };

  Thermostat.prototype.decrease = function() {
    if (this.temperature > this.minTemp) {
      this.temperature--;
    } else {throw new Error ('You have reached the minimum temperature');
  }
  };

  Thermostat.prototype.powerSavingModeOn = function() {
    this.powerSavingMode = true;
    this.powerSavingModeMaxTemp;
      if (this.temperature > this.powerSavingModeMaxTemp) {
      this.temperature = this.powerSavingModeMaxTemp
    }
  };

  Thermostat.prototype.pressReset = function() {
    this.temperature = this.defaultTemp;
  };

  Thermostat.prototype.powerSavingModeOff = function() {
    this.powerSavingMode = false;
  };

