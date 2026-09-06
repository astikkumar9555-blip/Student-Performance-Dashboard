 const students=[
    {
        name:"Ashutosh Kumar",
        rollNo:101,
        marks:{
            Maths:80,
            Physics:75,
            Javascript:90
        }
    },
    {
        name:"Rahul",
        rollNo:102,

        marks:{
            Maths:70,
            Physics:65,
            Javascript:85
        }

    },
    {
        name:"Aman",
        rollNo:103,
        marks:{
             Maths:92,
            Physics:88,
            Javascript:95
        }
    }
 ];
 const studentSelect=document.querySelector("#name");
 const studentInfo=document.querySelector(".fourth");

 const studentName=studentInfo.children[0];
 const rollNo=studentInfo.children[1];

 const totalMarks=document.querySelector(".fourth-list-1");

 const percentage=document.querySelector(".fourth-list-2");
 const grade=document.querySelector(".fourth-list-3 li");

 const result=document.querySelector(".result-div h2");

 const buttons=document.querySelectorAll("button");
 const totalButton=buttons[0];
 const percentageButton=buttons[1];
 const gradeButton=buttons[2];

 const table=document.querySelector("table");


 const tableBody=document.createElement("tbody");
 table.appendChild(tableBody);


 const defaultOption=document.createElement("option");
 defaultOption.value="";

 defaultOption.textContent="Select Student";
 studentSelect.appendChild(defaultOption);

 students.forEach(function(student,index){
    const option=document.createElement("option");
    option.value=index;
    option.textContent=student.name;
    studentSelect.appendChild(option);
 });
 function calculateTotal(student){
    const marks=Object.values(student.marks);
    const total=marks.reduce(function(sum,mark){
        return sum+mark;
    },0);
    return total;
 }
 function calculatePercentage(total){
    const totalMarks=300;
    const percentage=(total/totalMarks)*100;
    return percentage;
 }
 function calculateGrade(percentage){
    if(percentage>=90){
        return "A+";
    }
    else  if(percentage>=80){
        return "A";
    }
     else  if(percentage>=70){
        return "B";
    }
     else  if(percentage>=60){
        return "C";
    }
     else  if(percentage>=50){
        return "D";
    }
    else{
        return"F";
    }

 }

 function displayStudent(student){
    try{
        if(!student){
            throw new Error("Student data not found");
        }
        studentName.textContent=student.name;
        rollNo.textContent=student.rollNo;

        const total=calculateTotal(student);
        totalMarks.textContent=total+"/300";

        const percent=calculatePercentage(total);
        percentage.textContent=percent.toFixed(2)+"%";

        const studentGrade=calculateGrade(percent);
        grade.textContent=studentGrade;
        tableBody.innerHTML="";
        Object.entries(student.marks).forEach(
            function([subject,mark]){
                const row=document.createElement("tr");
                const subjectCell=document.createElement("td");
                subjectCell.textContent=subject;

                const markacaell=document.createElement("td");
                marksCell.textContent=mark;
                row.appendChild(subjectCell);
                row.appendChild(marksCell);
                tableBody.appendChild(row);
            }
        );
        result.textContent="Student data loaded successfully";
    }
    catch(error){
        result.textContent="Error"+error.message;
    }
 }
 
 studentSelect.addEventListener("change",function(){
    const index=studentSelect.value;
    if(index===""){
        studentName.textContent="---";
        rollNo.textContent="---";
        totalMarks.textContent="---";
        percentage.textContent="---";
        grade.textContent="---";
        tableBody.innerHTML="";
        result.textContent="Select a student and click a button";
        return;
    }
    const selectedStudent=students[index];
    displayStudent(selectedStudent);
 });

 totalButton.addEventListener("click",function(){
    try{
        const index=studentSelect.value;
        if(index===""){
            throw new Error("Please select a student first");
        }
        const student=students[index];
        const total=calculateTotal(student);
        result.textContent="Total Marks:"+total+"/300";
    }
    catch(error){
        result.textContent="Error:"+error.message;
    }
 });

 percentageButton.addEventListener("click",function(){
     try{
        const index=studentSelect.value;
        if(index===""){
            throw new Error("Please select a student first");
        }
        const student=students[index];
        const total=calculateTotal(student);
        const percent=calculatePercentage(total);
        result.textContent= "Percentage:"+percent.toFixed(2)+"%";
    }
    catch(error){
        result.textContent="Error:"+error.message;
    }
 });

 gradeButton.addEventListener("click",function(){
        try{
        const index=studentSelect.value;
        if(index===""){
            throw new Error("Please select a student first");
        }
        const student=students[index];
        const total=calculateTotal(student);
        const percent=calculatePercentage(total);
        const studentGrade=calculateGrade(percent);

        result.textContent="Grade:"+studentGrade;
        
    }
    catch(error){
        result.textContent="Error:"+error.message;
    }
 });
  