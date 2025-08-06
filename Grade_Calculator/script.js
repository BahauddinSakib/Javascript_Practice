function calculate_result() {
    // Get values from inputs by correct IDs
    var a = parseInt(document.getElementById("book11").value);
    var b = parseInt(document.getElementById("book22").value);
    var c = parseInt(document.getElementById("book33").value);
    var d = parseInt(document.getElementById("book44").value);
    var e = parseInt(document.getElementById("book55").value);

    // Validation: no marks > 100 or < 0
    if (
      a > 100 || b > 100 || c > 100 || d > 100 || e > 100 ||
      a < 0 || b < 0 || c < 0 || d < 0 || e < 0
    ) {
        alert("Please enter valid marks between 0 and 100.");
        return false; 
    }

    let totalMarks = 500;
    let obtained = a + b + c + d + e;
    let percentage = (obtained / totalMarks) * 100;

    // Grade calculation logic (example)
    let grade = "";
    let remarks = "";

    if (percentage >= 90) {
      grade = "A+";
      remarks = "Excellent";
    } else if (percentage >= 80) {
      grade = "A";
      remarks = "Very Good";
    } else if (percentage >= 70) {
      grade = "B";
      remarks = "Good";
    } else if (percentage >= 60) {
      grade = "C";
      remarks = "Average";
    } else if (percentage >= 50) {
      grade = "D";
      remarks = "Pass";
    } else {
      grade = "F";
      remarks = "Fail";
    }

    // Show results in HTML
    document.getElementById("obtained").innerText = obtained;
    document.getElementById("obtained_percentage").innerText = percentage.toFixed(2) + "%";
    document.getElementById("obtaining_grade").innerText = grade;
    document.getElementById("remarks").innerText = remarks;

    return false; 
}
