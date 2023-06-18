const IS_ABSENT = 0
//Move the cursor to where you want to enter text.
let empCheck = Math.floor(Math.random() * 10) % 2; 
if (empCheck == IS_ABSENT) {
console.log("Employee is Absent"); 
return;
} 
else
{ 
console.log("Employee is PRESENT");
}