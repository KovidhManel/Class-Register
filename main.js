var student_array= [];

function submit() {
    var student1 = document.getElementById("input1").value;
    var student2 = document.getElementById("input2").value;
    var student3 = document.getElementById("input3").value;
    var student4 = document.getElementById("input4").value;
    var student5 = document.getElementById("input5").value;

 student_array.push(student1)
 student_array.push(student2)
 student_array.push(student3)
 student_array.push(student4)
 student_array.push(student5)
 console.log(student_array)

 document.getElementById("output").innerHTML=student_array;

 document.getElementById("submitbutton").style.display="none"
 document.getElementById("sortbutton").style.display="inline-block"

}

function sort(){

    student_array.sort();
    document.getElementById("output").innerHTML=student_array;
}