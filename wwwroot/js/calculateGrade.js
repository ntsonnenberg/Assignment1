$("#submitButton").click(calculateGrade);

/**
 * the calculateGrade function grabs the overall percentage grades of each grade category the user filled out in the html form,
 * then it calculates the users final grade percentage based on the various weights of each grade category,
 * then it finds the letter grade based on the percent grade and display both the final percent grade and final letter grade as an alert
 * */
function calculateGrade()
{
    
    var assignmentPct = $("#assignments").val();
    var projectPct = $("#projects").val();
    var quizPct = $("#quizzes").val();
    var examPct = $("#exams").val();
    var intexPct = $("#intex").val();

    var finalGradePct = (assignmentPct * 0.5) + (projectPct * 0.1) + (quizPct * 0.1) + (examPct * 0.2) + (intexPct * 0.1);
    var letterGrade = "";

    if (finalGradePct >= 94)
        letterGrade = "A";
    else if (finalGradePct >= 90)
        letterGrade = "A-"
    else if (finalGradePct >= 87)
        letterGrade = "B+"
    else if (finalGradePct >= 84)
        letterGrade = "B"
    else if (finalGradePct >= 80)
        letterGrade = "B-"
    else if (finalGradePct >= 77)
        letterGrade = "C+"
    else if (finalGradePct >= 74)
        letterGrade = "C"
    else if (finalGradePct >= 70)
        letterGrade = "C-"
    else if (finalGradePct >= 67)
        letterGrade = "D+"
    else if (finalGradePct >= 64)
        letterGrade = "D"
    else if (finalGradePct >= 60)
        letterGrade = "D-"
    else
        letterGrade = "E"

    alert("Percent Grade: " + finalGradePct + "\nLetter Grade: " + letterGrade);
}