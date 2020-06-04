const form = document.getElementById("addForm");
const itemList = document.getElementById("items");
const filter = document.getElementById("filter");

form.addEventListener("submit", e => {
    if (form.firstElementChild.value === "") {
        alert("Please type an item in the box.")
    } else {
        // Prevent default action of button
        e.preventDefault();

        // Select the input and gets its value
        const item = document.getElementById("item").value

        // Create a new list item as an element
        const listItem = document.createElement("li");

        // Assign a class to it to fit in with the other list items
        listItem.className = "list-group-item";

        // Turn the input value into a text node and append it to the new
        // list item created
        listItem.appendChild(document.createTextNode(item));

        // Or you can assign the input's value to the list item's inner HTML
        // like this but be sure to extract either the input or its value and
        // // and assign as apprioriate.
        // listItem.innerHTML = item;

        // Create delete button element
        const delBtn = document.createElement("button");

        // Assing a class to it to fit with the others
        delBtn.className = "delete-btn";

        // Add the text or append the text node to it
        // delBtn.innerHTML = "X";

        delBtn.appendChild(document.createTextNode("X"))

        // Append the delBtn to the list item
        listItem.appendChild(delBtn);

        // Append the list item to its parent, the ul
        itemList.appendChild(listItem);

        form.firstElementChild.value = "";
    }
})


itemList.addEventListener("click", e => {
    if (confirm("Are you sure?")) {
        if (e.target.className.includes("delete")) {
            const li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
})

filter.addEventListener("keyup", e => {
    // Convert input value to lowercase
    const text = e.target.value.toLowerCase();

    // Get list items
    const items = itemList.getElementsByTagName("li");

    // Convert to an array
    Array.from(items).forEach(item => {
        const itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != - 1) {
            item.style.display = "block";
        }
        else item.style.display = "none";
    })
})

