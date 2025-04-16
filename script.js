// your code here
const url = document.getElementById("url");
const buttonValue = document.getElementById("button")

button.addEventListener("click", () =>{
	const nameValue = document.getElementById("name").value;
	const yearValue = document.getElementById("year").value;
	if (nameValue && yearValue) {
        // Create query string
        const queryString = `?name=${encodeURIComponent(nameValue)}&year=${encodeURIComponent(yearValue)}`;
        
        // Update h3 element with new URL
        document.getElementById("url").textContent = `https://localhost:8080/${queryString}`;
    } else if(nameValue){
		const queryString = `?name=${encodeURIComponent(nameValue)}`;
        
        // Update h3 element with new URL
        document.getElementById("url").textContent = `https://localhost:8080/${queryString}`;
	} else if(yearValue){
		const queryString = `?year=${encodeURIComponent(yearValue)}`;
        
        // Update h3 element with new URL
        document.getElementById("url").textContent = `https://localhost:8080/${queryString}`;
	} 
});