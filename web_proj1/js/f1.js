function calculateReportCard() {
  var name = document.getElementById('name').value;
  var regNumber = document.getElementById('regNumber').value;
  var classLevel = document.getElementById('class').value;
  var schoolName = document.getElementById('school').value;
  
  var maths = parseInt(document.getElementById('maths').value);
  var science = parseInt(document.getElementById('science').value);
  var english = parseInt(document.getElementById('english').value);
  var hist = parseInt(document.getElementById('hist').value);
  var physical = parseInt(document.getElementById('physical').value);


  var table = `<table >
    <tr>
      <th>Subject</th>
      <th>Marks</th>
    </tr>
    <tr>
      <td>Maths</td>
      <td>${maths}</td>
    </tr>
    <tr>
      <td>Science</td>
      <td>${science}</td>
    </tr>
    <tr>
      <td>English</td>
      <td>${english}</td>
    </tr>
    <tr>
      <td>History</td>
      <td>${hist}</td>
    </tr>
     <tr>
      <td>Physical Education</td>
      <td>${physical}</td>
    </tr>
  </table>`;
  var average = (maths + science + english + hist +physical) / 5;
  
  var recommendation;
  
  if (average >= 90) {
    recommendation = 'Excellent work! Keep it up!';
  } else if (average >=75) {
    recommendation = 'Good job! A bit more effort and you will excel.';
  } else {
    recommendation = 'Needs improvement. Work harder!';
  }

  document.getElementById('output').innerHTML = 
    `<h3>Student Name : ${name}</h3>` +
    `<p><b>Registration Number : </b>${regNumber}</p>` +
    `<p><b>Class : </b>${classLevel}</p>` +
    `<p><b>School : </b>${schoolName}</p>` +
    `<div>${table}</div>`+
    `<p><b>Average Grade Point : </b>${average.toFixed(2)}</p>` +
    `<p><b>Recommendation : </b>${recommendation}</p>`;
}



