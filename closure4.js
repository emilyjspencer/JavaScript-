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

// However - we can modify the array:

first.getTeachers().pop()
first.getTeachers()
// ["Louise", "Sarah"]

// We want to implement the idea of immutability, which we can by modifying
// our original function using the JS array method - slice()
// which returns the selected elements in an array, as a new array object.


function danceStudio(){
  var teachers = ["Louise", "Sarah"];
  return {
      getTeachers: function(){
          return teachers.slice();
      },
      addTeacher: function(teacher){
          teachers.push(teacher);
          return teachers.slice();
      }
  }
}

var class1 = danceStudio()
// undefined
class1.getTeachers().pop()
// "Sarah"
class1.getTeachers().pop()
// "Sarah"
class1.getTeachers()
//(2) ["Louise", "Sarah"]

// Using the slice() method means that we haven't modified the original array :) 