# Subway-Counter

This project is a web-based application that utilizes vanilla JavaScript to count the number of people entering a subway station. The interface features a large header displaying the title "People Entered:" and a counter below it that shows the current number of people who have entered, starting at 0.

The application includes three buttons: "INCREMENT", "SAVE", and "RESET". The "INCREMENT" button, when clicked, triggers the increment() function, which increases the counter by one. The "SAVE" button, when clicked, triggers the save() function, which saves the current count to local storage. The "RESET" button, when clicked, triggers the reload() function, which resets the counter to 0.

The application also displays the number of batch entries that have been saved, which is updated each time the "SAVE" button is clicked. This is achieved through the updateSaveCount() function.

Also, this project is a simple and effective tool for counting the number of people entering a subway station, with the added functionality of saving and resetting the count as needed. The use of vanilla JavaScript provides the interactivity and dynamic updates that make it a user-friendly and useful tool.


## Screenshot

![image](https://github.com/emadnahed/Subway-Counter/assets/81587039/ca57ba1a-71e3-447b-9ef3-7a9c0619acc0)

## `increment()`

The `increment()` function increases the value of the `count` variable by 1 and updates the text content of the HTML element with the id `count-el` to reflect the new count.

## `save()`

The `save()` function appends the current count to the text content of the HTML element with the id `save-el`, separated by a comma and a space. It then resets the `count` variable to 0 and updates the text content of the `count-el` element to 0.

## `reload()`

The `reload()` function reloads the web page, effectively resetting the counter and the saved counts.

## Usage

To use this project, simply open the HTML file in a web browser and click the "Increment" button to increase the count. Click the "Save" button to save the current count to the list, and click the "Reload" button to reset the counter and the saved counts.

## License

This project is licensed under the MIT License.
