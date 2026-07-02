# Task 3: Interactive Temperature Converter Web Tool

Hi there! This is my third project completed for the internship. It is an interactive, fully validated temperature converter tool that handles calculations across Celsius, Fahrenheit, and Kelvin scales simultaneously.

I built this application using a clean tech stack consisting of **HTML5, CSS3, and Vanilla JavaScript**.

## ⚡ Main Logic Implementations:
* **Real-time Numeric Check:** The JavaScript engine analyzes the raw text inputs and throws a user-friendly error message if non-numeric characters are parsed.
* **Simultaneous Matrix View:** Instead of picking a single output target, typing a valid value and hitting "Convert" populates all output metrics at once.
* **Absolute Zero Thresholding:** Includes explicit logical checks to ensure inputs falling beneath Absolute Zero limits (below −273.15°C / 0 K) are securely blocked with an informative notification warning.

---

## 📋 Checklist Verification

- [x] **Numeric Input:** Includes an input block paired with a dedicated validation script to catch dynamic type mismatches.
- [x] **Input Unit Menu:** Dropdown selection listing standard Celsius, Fahrenheit, and Kelvin options.
- [x] **Parallel Conversions:** All calculated results are displayed together side-by-side using clear dynamic rendering.
- [x] **Trigger Mechanism:** Features a centralized active trigger button processing calculations upon user click events.
- [x] **Clean Centered Design:** Designed inside a polished, modern slate card module placed centrally inside the browser viewport.

---

## 📂 System Files Included
* `index.html` - Base user layout.
* `style.css` - Visual UI rules and responsive cards.
* `script.js` - Formula rules, constraints tracking, and DOM injection scripts.
* `screenshot.png` - Standard UI presentation template snapshot.
