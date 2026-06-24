# Answers :Task 1.2
---
## website 1
---

1. - paragraph,break, anchor tag
    
2. Example.com

3. Example domain

## website 2
---
1. nav
2. using a button
3. it changes the color

## website 3
---
1.html,head,body,header,main.
2.inpute:text,email, password,radio,checkbox,submit.

3.
    <title>Sample Webith In Form</title>
</head>
<body>

    <!-- Standard Website Header Elements -->
    <header>
        <h1>Welcome to TechSpace</h1>
        <p>Your portal for developer resources and community events.</p>
    </header>

    <!-- Structural Section Containing the Form -->
    <main>
        <section>
            <h2>Create Your Account</h2>
            <p>Please fill out this form to join our community network.</p>

            <!-- HTML Form Container Element -->
            <form action="/submit-registration" method="POST">
                
                <!-- Text Input Element -->
                <div>
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" placeholder="e.g., coder123" required>
                </div>
                <br>

                <!-- Email Input Element -->
                <div>
                    <label for="user-email">Email Address:</label>
                    <input type="email" id="user-email" name="email" placeholder="you@example.com" required>
                </div>
                <br>

                <!-- Password Input Element -->
                <div>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required>
                </div>
                <br>

                <!-- Radio Button Elements (Select Only One) -->
                <div>
                    <p>Experience Level:</p>
                    <input type="radio" id="beginner" name="experience" value="beginner" checked>
                    <label for="beginner">Beginner</label>
                    
                    <input type="radio" id="advanced" name="experience" value="advanced">
                    <label for="advanced">Advanced</label>
                </div>
                <br>

                <!-- Select Dropdown Element -->
                <div>
                    <label for="track">Preferred Track:</label>
                    <select id="track" name="track">
                        <option value="frontend">Frontend Development</option>
                        <option value="backend">Backend Engineering</option>
                        <option value="data">Data Science</option>
                    </select>
                </div>
                <br>

                <!-- Multi-line Text Area Element -->
                <div>
                    <label for="bio">Short Biography:</label><br>
                    <textarea id="bio" name="bio" rows="4" cols="40" placeholder="Tell us about yourself..."></textarea>
                </div>
                <br>

                <!-- Checkbox Element -->
                <div>
                    <input type="checkbox" id="terms" name="terms" value="agreed" required>
                    <label for="terms">I agree to the privacy policy</label>
                </div>
                <br>

                <!-- Form Submit Button Element -->
                <div>
                    <button type="submit">Register Now</button>
                </div>

            </form>
        </section>
    </main>

    <!-- Standard Website Footer Element -->
    <footer>
        <p>&copy; 2026 TechSpace. All rights reserved.</p>
    </footer>

</body>
</html>



   
