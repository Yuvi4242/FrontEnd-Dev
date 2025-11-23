const user = {
  name: "Yuvraj",
  showName: () => {
    
    console.log("Arrow showName -> this.name:", this.name);
  }
};

user.showName();

const userFixed = {
  name: "Yuvraj",
  showName() {
    // Regular method syntax creates a dynamic 'this' bound to the object.
    console.log("Normal showName -> this.name:", this.name);
  }
};

userFixed.showName();
