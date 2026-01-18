// normal functions in js

function test_function(name, age, roll_no) {
    console.log(name, "info:")
    console.log("age: ", age)
    console.log("roll_no: ", roll_no)
}

test_function("boy", 20, 18)
test_function("girl", 18, 20)


// arrow function

const func_name = () => {
    console.log("Hello")
}

func_name()