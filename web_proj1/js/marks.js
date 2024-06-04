function calculate() {
    var maths = parseFloat(document.getElementById('maths').value);
    var english = parseFloat(document.getElementById('english').value);
    var kiswahili = parseFloat(document.getElementById('kiswahili').value);

    var total = maths + english + kiswahili;
    var average = total / 3;
   
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
      

    document.getElementById('result').innerHTML =
        '<p>Total Marks: ' + total.toFixed(2) + '</p>' +
        '<p>Average Marks: ' + average.toFixed(2) + '</p>';
}