var thermostat = new Thermostat();

  $(document).ready(function() {
    $('#temperature').text(thermostat.temperature);

    $('.decrease').click(function(){
        thermostat.decrease();
      $('#temperature').text(thermostat.temperature);
    });

    $('.increase').click(function(){
        thermostat.increase();
      $('#temperature').text(thermostat.temperature);
    });

    $('.reset').click(function(){
        thermostat.pressReset();
      $('#temperature').text(thermostat.temperature);
    });

    $('.decrease').click(function(){
        thermostat.decrease();
      $('#temperature').text(thermostat.temperature);
    });

    $('.powerSavingOn').click(function(){
        thermostat.powerSavingOn();
      $('#temperature').text(thermostat.temperature);
    });

    $('.powerSavingOff').click(function(){
        thermostat.powerSavingOff();
      $('#temperature').text(thermostat.temperature);
    });

});