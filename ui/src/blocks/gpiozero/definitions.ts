export default function define(Blocks: Blockly.BlockDefinitions) {
  Blocks['importgpiozero'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('from gpiozero import *');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
      this.setTooltip('Import the gpiozero library');
      this.setHelpUrl('http://gpiozero.readthedocs.io');
    },
  };

  Blocks['buttonset'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('button'), 'button')
        .appendField(' = Button(')
        .appendField(new Blockly.FieldTextInput('pin'), 'pin')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Set a variable for a button');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#button');
    },
  };

  Blocks['motionset'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('pir'), 'pir')
        .appendField(' = MotionSensor(')
        .appendField(new Blockly.FieldTextInput('pin'), 'pin')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Set a variable for a MotionSensor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#motion-sensor-d-sun-pir');
    },
  };

  Blocks['lightset'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('ldr'), 'ldr')
        .appendField(' = LightSensor(')
        .appendField(new Blockly.FieldTextInput('pin'), 'pin')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Set a variable for a Light Sensor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#light-sensor-ldr');
    },
  };

  Blocks['distanceset'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('distance'), 'distance')
        .appendField(' = DistanceSensor(')
        .appendField(new Blockly.FieldTextInput('pin'), 'pin')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Set a variable for a Distance Sensor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#distance-sensor-hc-sr04');
    },
  };

  Blocks['ledset'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('led'), 'led')
        .appendField(' = LED(')
        .appendField(new Blockly.FieldTextInput('pin'), 'pin')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Set a variable for an LED');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#led');
    },
  };

  Blocks['pledset'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('pwm'), 'pwm')
        .appendField(' = PWMLED(')
        .appendField(new Blockly.FieldTextInput('pin'), 'pin')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Set a variable for an PWMLED');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#pwmled');
    },
  };

  Blocks['rgbledset'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('rgb'), 'rgb')
        .appendField(' = RGBLED(')
        .appendField(new Blockly.FieldTextInput('pin'), 'pin')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Set a variable for an RGB LED');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#rgbled');
    },
  };

  Blocks['buzzerset'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('buzzer'), 'buzzer')
        .appendField(' = Buzzer(')
        .appendField(new Blockly.FieldTextInput('pin'), 'pin')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Set a variable for an Buzzer');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#buzzer');
    },
  };

  Blocks['motorset'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('motor'), 'motor')
        .appendField(' = Motor(')
        .appendField(new Blockly.FieldTextInput('pin'), 'pin')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Set a variable for a Motor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#motor');
    },
  };

  Blocks['servoset'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('servo'), 'servo')
        .appendField(' = Servo(')
        .appendField(new Blockly.FieldTextInput('pin'), 'pin')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Set a variable for a Servo');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#servo');
    },
  };

  Blocks['angset'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('angular'), 'angular')
        .appendField(' = AngularServo(')
        .appendField(new Blockly.FieldTextInput('pin'), 'pin')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Set a variable for an Angular Servo');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#angularservo');
    },
  };

  Blocks['ledbset'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('leds'), 'leds')
        .appendField(' = LEDBoard(')
        .appendField(new Blockly.FieldTextInput('pin'), 'pin')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(45);
      this.setTooltip('Set a variable for an LED Board');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_boards.html#ledboard');
    },
  };

  Blocks['graphset'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('graph'), 'leds')
        .appendField(' = LEDBarGraph(')
        .appendField(new Blockly.FieldTextInput('pin'), 'pin')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(45);
      this.setTooltip('Set a variable for an LED Bar Graph');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_boards.html#ledbargraph');
    },
  };

  Blocks['bbuttonset'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('button'), 'button')
        .appendField(' = ButtonBoard(')
        .appendField(new Blockly.FieldTextInput('pin'), 'pin')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(45);
      this.setTooltip('Set a variable for a Button Board');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_boards.html#buttonboard');
    },
  };

  Blocks['buttonaction'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('button'), 'button')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['wait_for_press', 'wait_for_press'], ['wait_for_release', 'wait_for_release']]), 'action')
        .appendField('(')
        .appendField(new Blockly.FieldTextInput(''), 'bracket')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Set a variable for a button');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#button');
    },
  };

  Blocks['lineaction'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('sensor'), 'sensor')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['wait_for_line', 'wait_for_line'], ['wait_for_no_line', 'wait_for_no_line']]), 'action')
        .appendField('(')
        .appendField(new Blockly.FieldTextInput(''), 'bracket')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Set a variable for a line sensor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#line-sensor-trct5000');
    },
  };

  Blocks['motionaction'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('pir'), 'pir')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['wait_for_motion', 'wait_for_motion'], ['wait_for_no_motion', 'wait_for_no_motion']]), 'action')
        .appendField('(')
        .appendField(new Blockly.FieldTextInput(''), 'bracket')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Set a variable for a motion sensor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#line-sensor-trct5000');
    },
  };

  Blocks['lightaction'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('ldr'), 'ldr')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['wait_for_dark', 'wait_for_dark'], ['wait_for_light', 'wait_for_light']]), 'action')
        .appendField('(')
        .appendField(new Blockly.FieldTextInput(''), 'bracket')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Set a variable for a light sensor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#light-sensor-ldr');
    },
  };

  Blocks['distanceaction'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('distance'), 'distance')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['wait_for_in_range', 'wait_for_in_range'], ['wait_for_out_of_range', 'wait_for_out_of_range']]), 'action')
        .appendField('(')
        .appendField(new Blockly.FieldTextInput(''), 'bracket')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Set a variable for a distance sensor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#light-sensor-ldr');
    },
  };

 Blocks['ledaction'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('led'), 'led')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['on', 'on'], ['off', 'off'], ['blink', 'blink'], ['toggle', 'toggle']]), 'action')
        .appendField('(')
        .appendField(new Blockly.FieldTextInput(''), 'bracket')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Set a variable for an LED');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#led');
    },
  };

  Blocks['pledaction'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('pwm'), 'pwm')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['on', 'on'], ['off', 'off'], ['blink', 'blink'], ['toggle', 'toggle'], ['pulse', 'pulse']]), 'action')
        .appendField('(')
        .appendField(new Blockly.FieldTextInput(''), 'bracket')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Set a variable for an PWM LED');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#pwmled');
    },
  };

  Blocks['rgbledaction'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('rgb'), 'rgb')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['on', 'on'], ['off', 'off'], ['blink', 'blink'], ['toggle', 'toggle'], ['pulse', 'pulse'], ['color', 'color']]), 'action')
        .appendField('(')
        .appendField(new Blockly.FieldTextInput(''), 'bracket')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Set a variable for an RGB LED');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#rgbled');
    },
  };

  Blocks['buzzeraction'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('buzzer'), 'buzzer')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['on', 'on'], ['off', 'off'], ['beep', 'beep'], ['toggle', 'toggle']]), 'action')
        .appendField('(')
        .appendField(new Blockly.FieldTextInput(''), 'bracket')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Set a variable for a Buzzer');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#buzzer');
    },
  };

  Blocks['motoraction'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('motor'), 'motor')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['forward', 'forward'], ['backward', 'backward'], ['stop', 'stop']]), 'action')
        .appendField('(')
        .appendField(new Blockly.FieldTextInput(''), 'bracket')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Set a variable for a Motor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#motor');
    },
  };

  Blocks['servoaction'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('servo'), 'servo')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['detach', 'detach'], ['max', 'max'], ['mid', 'mid'], ['min', 'min'], ['angle', 'angle']]), 'action')
        .appendField('(')
        .appendField(new Blockly.FieldTextInput(''), 'bracket')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Set a variable for a Servo');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#servo');
    },
  };

  Blocks['angaction'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('angular'), 'angular')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['detach', 'detach'], ['max', 'max'], ['mid', 'mid'], ['min', 'min'], ['angle', 'angle']]), 'action')
        .appendField('(')
        .appendField(new Blockly.FieldTextInput(''), 'bracket')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Set a variable for an Angular Servo');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#angularservo');
    },
  };

  Blocks['ledbaction'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('leds'), 'leds')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['blink', 'blink'], ['close', 'close'], ['on', 'off'], ['pulse', 'pulse'], ['toggle', 'toggle']]), 'action')
        .appendField('(')
        .appendField(new Blockly.FieldTextInput(''), 'bracket')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(45);
      this.setTooltip('Set a variable for an LED Board');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_boards.html#ledboard');
    },
  };

  Blocks['graphaction'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('graph'), 'graph')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['on', 'on'], ['off', 'off'], ['toggle', 'toggle']]), 'action')
        .appendField('(')
        .appendField(new Blockly.FieldTextInput(''), 'bracket')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(45);
      this.setTooltip('Set a variable for an LED Bar Graph');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_boards.html#ledbargraph');
    },
  };

  Blocks['bbuttonaction'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('buttonb'), 'buttonb')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['wait_for_active', 'wait_for_active'], ['wait_for_inactive', 'wait_for_inactive'], ['wait_for_press', 'wait_for_press'], ['wait_for_release', 'wait_for_release']]), 'action')
        .appendField('(')
        .appendField(new Blockly.FieldTextInput(''), 'bracket')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(45);
      this.setTooltip('Set a variable for a Button Baord');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_boards.html#buttonboard');
    },
  };
  

  Blocks['buttonvar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('button'), 'button')
        .appendField('.')
        .appendField(new Blockly.FieldTextInput(''), 'action')
        .appendField(' = ')
        .appendField(new Blockly.FieldTextInput(''), 'act');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Set an action variable for a button');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#button');
    },
  };

  Blocks['motionvar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('pir'), 'pir')
        .appendField('.')
        .appendField(new Blockly.FieldTextInput(''), 'action')
        .appendField(' = ')
        .appendField(new Blockly.FieldTextInput(''), 'act');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Set an action variable for a motion sensor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#line-sensor-trct5000');
    },
  };

  Blocks['linevar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('sensor'), 'sensor')
        .appendField('.')
        .appendField(new Blockly.FieldTextInput(''), 'action')
        .appendField(' = ')
        .appendField(new Blockly.FieldTextInput(''), 'act');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Set an action variable for a line sensor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#line-sensor-trct5000');
    },
  };

  Blocks['lightvar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('ldr'), 'ldr')
        .appendField('.')
        .appendField(new Blockly.FieldTextInput(''), 'action')
        .appendField(' = ')
        .appendField(new Blockly.FieldTextInput(''), 'act');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Set an action variable for a light sensor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#line-sensor-trct5000');
    },
  };


  Blocks['distancevar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('distance'), 'disance')
        .appendField('.')
        .appendField(new Blockly.FieldTextInput(''), 'action')
        .appendField(' = ')
        .appendField(new Blockly.FieldTextInput(''), 'act');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Set an action variable for a Distance sensor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#line-sensor-trct5000');
    },
  };

  Blocks['ledvar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('led'), 'led')
        .appendField('.')
        .appendField(new Blockly.FieldTextInput(''), 'action')
        .appendField(' = ')
        .appendField(new Blockly.FieldTextInput(''), 'act');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Set an action variable for an LED');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#led');
    },
  };

  Blocks['pledvar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('pwm'), 'pwm')
        .appendField('.')
        .appendField(new Blockly.FieldTextInput(''), 'action')
        .appendField(' = ')
        .appendField(new Blockly.FieldTextInput(''), 'act');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Set an action variable for an PWMLED');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#pwmled');
    },
  };

  Blocks['rgbledvar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('rgb'), 'rgb')
        .appendField('.')
        .appendField(new Blockly.FieldTextInput(''), 'action')
        .appendField(' = ')
        .appendField(new Blockly.FieldTextInput(''), 'act');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Set an action variable for an RGB LED');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#rgbled');
    },
  };

  Blocks['buzzervar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('buzzer'), 'buzzer')
        .appendField('.')
        .appendField(new Blockly.FieldTextInput(''), 'action')
        .appendField(' = ')
        .appendField(new Blockly.FieldTextInput(''), 'act');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Set an action variable for an Buzzer');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#buzzer');
    }, 
  };

  Blocks['motorvar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('motor'), 'motor')
        .appendField('.')
        .appendField(new Blockly.FieldTextInput(''), 'action')
        .appendField(' = ')
        .appendField(new Blockly.FieldTextInput(''), 'act');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Set an action variable for a Motor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#motor');
    }, 
  };

  Blocks['servovar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('servo'), 'servo')
        .appendField('.')
        .appendField(new Blockly.FieldTextInput(''), 'action')
        .appendField(' = ')
        .appendField(new Blockly.FieldTextInput(''), 'act');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Set an action variable for a Servo');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#servo');
    }, 
  };

  Blocks['angvar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('angular'), 'angular')
        .appendField('.')
        .appendField(new Blockly.FieldTextInput(''), 'action')
        .appendField(' = ')
        .appendField(new Blockly.FieldTextInput(''), 'act');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip('Set an action variable for an Angular Servo');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_output.html#angularservo');
    }, 
  };

  Blocks['ledbvar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('leds'), 'leds')
        .appendField('.')
        .appendField(new Blockly.FieldTextInput(''), 'action')
        .appendField(' = ')
        .appendField(new Blockly.FieldTextInput(''), 'act');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(45);
      this.setTooltip('Set an action variable for an LED Board');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_boards.html#ledboard');
    }, 
  };

  Blocks['graphvar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('graph'), 'graph')
        .appendField('.')
        .appendField(new Blockly.FieldTextInput(''), 'action')
        .appendField(' = ')
        .appendField(new Blockly.FieldTextInput(''), 'act');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(45);
      this.setTooltip('Set an action variable for an LED Bar Graph');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_boards.html#ledbargraph');
    }, 
  };

  Blocks['bbuttonboard'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('buttonb'), 'buttonb')
        .appendField('.')
        .appendField(new Blockly.FieldTextInput(''), 'action')
        .appendField(' = ')
        .appendField(new Blockly.FieldTextInput(''), 'act');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(45);
      this.setTooltip('Set an action variable for a Button Board');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_boards.html#buttonboard');
    }, 
  };

  Blocks['lineset'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('sensor'), 'sensor')
        .appendField(' = ')
        .appendField('LineSensor(')
        .appendField(new Blockly.FieldTextInput('pin'), 'pin')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Setup a line sensor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#line-sensor-trct5000');
    },
  };
}