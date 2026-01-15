// 1. console.log(): General purpose output, sabse zyada use hone wala method.
let name = "Your Name";
console.log("Standard output:", name);

// 2. console.info(): Information share karne ke liye, kuch browsers mein iske saath 'i' icon aata hai.
console.info("Info: Server started successfully on port 3000");

// 3. console.warn(): Warning dikhane ke liye (Yellow color highlight), non-critical issues ke liye best hai.
console.warn("Security Warning: Password is weak");

// 4. console.error(): Critical errors dikhane ke liye (Red color highlight), crashes ya failed operations ke liye.
console.error("Critical Error: Failed to fetch data from API");

// 5. console.table(): Array ya Objects ko tabular format mein dekhne ke liye, readability badhata hai.
const user = [ {id: 1, name: "Your Name", age: 18} ];
console.table(user); 

// 6. console.clear(): Pure console screen ko saaf (clean) karne ke liye.
// console.clear();

// 7. console.time() & console.timeEnd(): Code block ki performance (time taken) measure karne ke liye.
console.time("Loop Timer"); // Timer start
for(let i = 0; i < 10000; i++) {}
console.timeEnd("Loop Timer"); // Timer stop aur result print

// 8. console.count(): Specific label kitni baar call hua hai, uska count maintain karne ke liye.
function clickHandler() {
    console.count("Button Clicked Count"); // Har click par increment hoga
}
clickHandler(); clickHandler();

// 9. console.group() & console.groupEnd(): Related logs ko ek collapsible folder/group mein organize karne ke liye.
console.group("User Profile Details");
console.log("Name: Your Name");
console.log("Age: 18");
console.groupEnd(); // Group band karne ke liye zaroori hai

// 10. console.assert(): Agar condition 'false' hai, tabhi error message print karega. Defensive coding mein kaam aata hai.
let userAge = 16;
console.assert(userAge >= 18, "Validation Failed: User is underage");

// 11. console.trace(): Ye batata hai ki function kis path se call hokar yahan tak pahuncha (Call Stack).
function a() {
    b();
}

function b() {
    console.trace("Execution Trace"); // Poora call hierarchy dikhayega
}
a();