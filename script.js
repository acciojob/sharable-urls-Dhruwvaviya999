// your code here
const url = document.getElementById("url");
const buttonValue = document.getElementById("button")

button.addEventListener("click", () =>{
	const nameValue = document.getElementById("name").value;
	const yearValue = document.getElementById("year").value;
	if (nameValue && yearValue) {
        // Create query string
        const queryString = `?name=${nameValue}&year=${yearValue}`;
        
        // Update h3 element with new URL
        document.getElementById("url").textContent = `https://localhost:8080/${queryString}`;
      } 
});