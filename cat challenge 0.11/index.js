class Cat {
  constructor(tiredness, hunger, lonliness, happiness) {
    (this.tiredness = tiredness),
      (this.hunger = hunger),
      (this.lonliness = lonliness),
      (this.happiness = happiness);
  }
  sleep(time) {
    this.tiredness -= time;
    this.happiness += time;
    this.hunger += time;
    return this;
  }

  feed(food) {
    this.hunger -= food;
    this.happiness += food;
    this.tiredness += food;
    return this;
  }
  pet(time) {
    this.tiredness -= time;
    this.lonliness -= time;
    this.happiness = time * 2;
    return this;
  }
  status() {
    console.log(`tiredness: ${this.tiredness}`);
    console.log(`hunger: ${this.hunger}`);
    console.log(`lonliness: ${this.lonliness}`);
    console.log(`happiness: ${this.happiness}`);
  }
}
