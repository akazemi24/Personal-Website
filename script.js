const updates = [
    "Currently learning: AWS deployment",
    "Currently building: AI-powered applications",
    "Interested in: machine learning and product design",
    "Working on: recommendation systems and real-world AI tools"
  ];
  
  let index = 0;
  
  function changeText() {
    document.getElementById("changing-text").textContent = updates[index];
    index = (index + 1) % updates.length;
  }