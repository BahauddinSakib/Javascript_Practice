document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from submitting the traditional way

        // Get the real username and password values
        const userField = document.getElementById("username");
        const passField = document.getElementById("password");

        // Dynamically change the name attributes just before submission
        userField.setAttribute("name", "user_" + Math.random().toString(36).substr(2, 9));
        passField.setAttribute("name", "pass_" + Math.random().toString(36).substr(2, 9));

        // Get the values of the fields after renaming
        const username = userField.value;
        const password = passField.value;

        // Validate username length
        if (username.length < 4) {
            alert("Username must be at least 4 characters long.");
            return;
        }

        // Validate password (at least 6 characters and contains a number)
        const passwordRegex = /^(?=.*\d).{6,}$/;
        if (!passwordRegex.test(password)) {
            alert("Password must be at least 6 characters long and contain at least one number.");
            return;
        }

        // Submit the form data to the server
        fetch("/Account/Login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        }).then((response) => {
            if (response.ok) {
                window.location.href = "/Account/NextPage";
            } else {
                alert("Invalid login credentials.");
            }
        }).catch((error) => {
            console.error("Error:", error);
        });
    });
});

