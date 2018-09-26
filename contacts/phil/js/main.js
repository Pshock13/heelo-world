function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, navButton;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="navButton" and remove the class "active"
    navButton = document.getElementsByClassName("navButton");
    for (i = 0; i < navButton.length; i++) {
        navButton[i].className = navButton[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
} 
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();