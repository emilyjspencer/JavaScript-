function danceStudio(){
    var teachers = ["Louise", "Sarah"];
    return {
        getTeachers: function(){
            return teachers;
        },
        addTeacher: function(teacher){
            teachers.push(teacher);
            return teachers;
        }
    }
}

var first = danceStudio()
// undefined
first.getTeachers()
// (2) ["Louise", "Sarah"]
first.addTeacher("Barbara")
// (3) ["Louise", "Sarah", "Barbara"]