var hist = 70, eng = 60, sci = 90, math = 60, total, average;
total = hist + eng + sci + math;
average = total / 4;
document.write(`The total is: ` + total + "<br>");
document.write(`The average is: ` + average + "<br>");

if (average >= 80) {
    document.write("A" + "<br>");
} else if (average >= 70) {
    document.write("B" + "<br>");
} else if (average >= 60) {
    document.write("C" + "<br>");
} else if (average >= 50) {
    document.write("D" + "<br>");
} else {
    document.write("failed" + "<br>");
}
