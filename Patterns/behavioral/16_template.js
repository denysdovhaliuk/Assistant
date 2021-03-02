class Builder {
  build() {
    console.log('----START BUILD----');
    this.addEngine();
    this.installChassis();
    this.addElectronic();
    this.collectAccessories();
    console.log('----END BUILD----');
  }
};

class TeslaBuilder extends Builder {
  addEngine() {
    console.log('Add Electronic Engine');
  }

  installChassis() {
    console.log('Install Tesla chassis');
  }

  addElectronic() {
    console.log('Add special electronic');
  }

  collectAccessories() {
    console.log('Collect Accessories');
  }
}

class BmwBuilder extends Builder {
  addEngine() {
    console.log('Add BMW Engine');
  }

  installChassis() {
    console.log('Install BMW chassis');
  }

  addElectronic() {
    console.log('Add electronic');
  }

  collectAccessories() {
    console.log('Collect Accessories');
  }
}

const bmwBuilder = new BmwBuilder();
const teslaBuilder = new TeslaBuilder();

teslaBuilder.build();
bmwBuilder.build();
