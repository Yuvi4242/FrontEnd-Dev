const user = {
    name: "Yuvraj",
    showName: () => {
        console.log(this.name);
    }
};

user.showName();

const userFixed = {
    name: "Yuvraj",
    showName() {
        console.log(this.name);
    }
};

userFixed.showName();
