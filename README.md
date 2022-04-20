1. When clicking on a Cheese card, open a Dialog that contains all the details of the card, including the item's description.

2. Add a Purchase button to the Cart (In the sliding view that opens when you click the 'Cart' button). Clicking on the Purchase button will send all items in the cart to the server (backend) and store them for later use (You are not required to use a Database in this exercise, but you may do so if you wish).

3. Show all recently purchased items when clicking on the "Recent Purchases" button on the top left of the page. You may choose to display those items in a Drawer, a Dialog or any other control you see fit. Note that the recent purchased items must be retrieved from the server.

4. Add a UI automation test that performs the Purchase action you implemented as part of Feature #2. For this test case you will add two separate items to the cart and click on the Purchase button you have added as part of Feature #2. For this exercise we will be using the Cypress.io tool-set. You will find code to get you started in the 'e2e' folder. Note: You are free to add any selectors to your client code which may be required by the e2e tests.
