/*
* Grade calculation script for the FSB Department of CS Universal Grading Scheme.
* See https://github.com/jahatfriends/Grade-Calculatron for mor information.
*
*
* (c) 2023 Joel Hammer
* Friends School of Baltimore
* Department of Computer Science
*
*
*
*/


//Format [Letter grade, Grade point, % Score upper bound (inclusive).
let grades =  [
                ["A+", 4.0, 1.0], ["A", 3.8, 0.96], ["A-", 3.6, 0.92],
                ["B+", 3.3, 0.89], ["B", 3.0, 0.86], ["B-", 2.7, 0.82],
                ["C+", 2.3, 0.79], ["C", 2.0, 0.76], ["C-", 1.7, 0.72],
                ["D+", 1.3, 0.69], ["D", 1.0, 0.66], ["D-", 0.5, 0.62],
                ["F", 0, 0.59]
              ]

const homSelect = document.getElementById("habits-of-mind-select");
const cpSelect = document.getElementById("coding-practice-select");
const ctSelect = document.getElementById("computational-thinking-select");
const showWeights = document.getElementById("show-weights");
const homWeight = document.getElementById("habits-of-mind-weight");
const cpWeight = document.getElementById("coding-practice-weight");
const ctWeight = document.getElementById("computational-thinking-weight");
const totalPoints = document.getElementById("total-points");
const evenWeight = document.getElementById("even-weight-button").onclick = assignEvenWeights;


updateGrade();

homSelect.addEventListener("change", updateGrade);
cpSelect.addEventListener("change", updateGrade);
ctSelect.addEventListener("change", updateGrade);
homWeight.addEventListener("focusout", updateGrade);
cpWeight.addEventListener("focusout", updateGrade);
ctWeight.addEventListener("focusout", updateGrade);
totalPoints.addEventListener("change", updateGrade);

function updateGrade() {
    let homscore = parseFloat(homSelect.value);
    let homweightVal = parseFloat(homWeight.value);
    let cpscore = parseFloat(cpSelect.value);
    let cpWeightVal = parseFloat(cpWeight.value);
    let ctscore = parseFloat(ctSelect.value);
    let ctWeightVal = parseFloat(ctWeight.value);
    
    //Calculate 4-pt weighted average.
    let avg = homscore * homweightVal + cpscore * cpWeightVal + ctscore * ctWeightVal;
    
    let lb, ub;
    for (var i = 0; i < grades.length; i++) {
        if (avg > grades[i][1]) {
            ub = i - 1;
            lb = i;
            break;
        }
    }
    
    //Deal with perfect scores
    if (lb == 0) {
        outputGrade("A+", 100.0);
        return;
    }
    
    //Deal with F's
    if (lb == undefined) {
        outputGrade("F", 59.0)
        return;
    }
    
    let percentScore = (avg - grades[lb][1]) / (grades[ub][1] - grades[lb][1]) * (grades[ub][2] - grades[lb][2]) + grades[lb][2];
    percentScore *= 100;
    percentScore = Math.round(percentScore)
    
    let totalPoints = parseFloat(document.getElementById("total-points").value) * percentScore / 100.0;
    
    outputGrade(grades[ub][0], percentScore, totalPoints);
    
}

function outputGrade(letterGrade, percentScore, totalPoints) {
    document.getElementById("letter-grade-readout").innerHTML = letterGrade;
    
    percentScore = Math.round(percentScore * 100) / 100;
    document.getElementById("percent-grade-readout").innerHTML = percentScore + "%";
    
    document.getElementById("points-earned-readout").innerHTML = totalPoints;
}

function assignEvenWeights() {
    homWeight.value = "0.3333333333";
    cpWeight.value = "0.3333333333";
    ctWeight.value = "0.3333333334";
    
    updateGrade();
}
