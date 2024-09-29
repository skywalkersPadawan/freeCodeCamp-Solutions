function studentMsg(totalScores, studentScore) {
  let passFail;
  if (hasPassingGrade(studentScore)) {
    passFail = "You passed the course.";
  } else {
    passFail = "You failed the course.";
  }
  return (
    "Class average: " +
    getAverage(totalScores) +
    ". Your grade: " +
    getGrade(studentScore) +
    ". " +
    passFail
  );
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
