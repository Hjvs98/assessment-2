///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/

//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
  {
    name: "pizza",
    price: 9.99,
  },
  {
    name: "pasta",
    price: 8.99,
  },
  {
    name: "salad",
    price: 7.99,
  },
];

//CODE HERE

// const summedPrice = cart.reduce((a, c) => a + c.price, 0);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

const calcFinalPrice = (cartTotal, couponValue, tax) => {
  return (cartTotal - couponValue) * (1 + tax);
};
console.log(calcFinalPrice(69, 15, 0.06));

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
In my customer object I would have the following properties: firstName: which would be a string with the customer's first name, lastName: which would be a string of the customer's last name, 
phone number: which will be a number that we reach out with updates on their order, email: which will be a string so we can send updates to their email on orders, and finally, address: which 
will be a string so we know where to send the food or mail the bill if payment is bad and we cant reach via phone or email. I also added the city as a string and state as a string and then 
zipCode as a number to verify all address info.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customer1 = {
    firstName: "Jamie",
    lastName: "Sandbar",
    phoneNumber: 8096933241,
    email: "iridesandbars@gmail.com",
    streetAddress: "305 lowden poo ln"
    city: "Las Vegas"
    state: "UT"
    zipCode: 69420
}
