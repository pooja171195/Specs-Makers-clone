async function find() {
  try {
    let address = document.getElementById("add_div");
    address.innerHTML = `
             <div id="results">
            <h4>No results</h4>
            <p>No locations were found with the given tags. Please modify your selections or input.</p>
            <a href="index.html"  style="color: blue;">Go to home page</a>
            </div>
            `;

    let city = document.getElementById("Current_Location").value;

    let map = document.getElementById("map_div");

    map.innerHTML = `    <iframe width="100%" height="500" id="gmap_canvas" 
          src="https://maps.google.com/maps?q=${city}=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" 
          marginheight="0" marginwidth="0"></iframe>`;
  } catch (err) {
    alert("Check Location");
    console.log("err");
  }
}
