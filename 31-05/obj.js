let data = {
    student1: {
        name: "Anshul",
        age: 20
    },
    student2: {
        name: "Bharat",
        age: 19
    },
    student3: {
        name: "Abhilakshya",
        age: 20
    },
    student4: {
        name: "Harshvardhan",
        age: 18
    }
};

for (let key in data) {
    if (data[key].age > 18) {
        console.log(data[key]);
    }
}