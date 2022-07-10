function gradingStudents(grades) {
    let gradeOutput = [];
     for(let i=0;i<grades[0];i++){
         if(grades[i] < 38){
             gradeOutput.push(grades[i]);
         }
         else if(grades[i]%10 == 4 || grades[i]%10 == 9){
             gradeOutput.push(grades[i]+1);
         }
         else if(grades[i]%10 == 3 || grades[i]%10 == 8){
             gradeOutput.push(grades[i]+2);
         }
         else{
            gradeOutput.push(grades[i]);
         }
     }
     return gradeOutput;

}