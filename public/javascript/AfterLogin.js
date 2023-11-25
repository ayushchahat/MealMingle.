

  function showBox(boxId) {
    // Hide all boxes
    var allBoxes = document.querySelectorAll('.box');
    var slidebar = document.querySelector('.slidebar')
    slidebar.style.display='none';
    allBoxes.forEach(function(box) {
      box.style.display = 'none';
    });

    // Show the selected box
    var selectedBox = document.getElementById(boxId);
    selectedBox.style.display = 'block';
  }




// Code to handle Complaint Section

//Clicking the "Write Your Complaint" button complaint will hide and form will open
function ShowHideComplaint(){
    var complaintsection = document.querySelector('#complaintShowHide')
    complaintsection.style.display = 'none';
    var complaintsection = document.querySelector('#ComplaintRegister')
    complaintsection.style.display = 'block';
}



//Clicking on complaint button complaint will load and shown 
function loadcomment()
{
  fetchComplaints();
}

function fetchComplaints() {
    fetch('/FetchComplaints')
        .then(response => response.json())
        .then(complaints => displayComplaints(complaints))
        .catch(error => console.error('Error fetching complaints:', error));
}

function displayComplaints(complaints) {
    const complaintsSection = document.getElementById("complaintsSection");

    complaintsSection.innerHTML = ""; // Clear existing content

    if (complaints.length === 0) {
        const noComplaintsMessage = document.createElement("p");
        noComplaintsMessage.textContent = "No complaints available.";
        complaintsSection.appendChild(noComplaintsMessage);
    } else {
        complaints.forEach(complaint => {
            const complaintElement = document.createElement("div");
            complaintElement.innerHTML = `<p style="border-width:3px; border-style:solid; border-color:#FF0000; padding: 1em;" > ${complaint.Complaint}</p>`;
            // complaintElement.textContent = complaint.Complaint;
            complaintsSection.appendChild(complaintElement);
        });
    }
}







