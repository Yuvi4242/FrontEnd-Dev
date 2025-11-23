
class PersonClass {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(`Name: ${this.name}`);
    }
}

class StudentClass extends PersonClass {
    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }
    showBranch() {
        console.log(`Branch: ${this.branch}`);
    }
}


const st = new StudentClass("Yuvraj", "CSE");

st.showName();
st.showBranch();

