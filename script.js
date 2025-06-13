function searchSubjects() {
  let input = document.getElementById("searchBox").value.toLowerCase();
  let subjects = document.querySelectorAll(".subject");

  subjects.forEach(subject => {
    let title = subject.querySelector("h2").innerText.toLowerCase();
    if (title.includes(input)) {
      subject.style.display = "block";
    } else {
      subject.style.display = "none";
    }
  });
}