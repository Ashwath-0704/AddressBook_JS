class Person { // POJO Class

    firstName;
    lastName;
    emailId;
    phoneNumber;
    zipCode;
    address;
    city;
    state;
    constructor(firstName, lastName, emailId, phoneNumber, zipCode, address, city, state) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailId = emailId;
        this.phoneNumber = phoneNumber;
        this.zipCode = zipCode;
        this.address = address;
        this.city = city;
        this.state = state;
    }

    getfirstName() {
        return this.firstName;
    }
    getlastName() {
        return this.lastName;
    }
    getemailId() {
        return this.emailId;
    }
    getphoneNumber() {
        return this.phoneNumber;
    }
    getzipCode() {
        return this.zipCode;
    }
    getaddress() {
        return this.address;
    }
    getcity() {
        return this.city;
    }
    getstate() {
        return this.state;
    }

    getFullName() {
        return `${this.firstName}` + " " + `${this.lastName}`;
    }

    editFullName(fullName) {
        const newFullNew = fullName.split(" "); // spliting with space 
        this.firstName = newFullNew[0];
        this.lastName = newFullNew[1];
    }

    checkForFirstName(firstname) {
        return this.getfirstName().includes(firstname); // ture if name is incuded in array 
    }

}

/**
 *  Regax patterns
 */
const pattern_NAME = /^[A-Z]{1}[a-z]{2,}$/;
const pattern_EMAILID = /^[A-Za-z0-9.+-]*[a-zA-Z0-9]+[@][a-z0-9]+[.][a-z]+[.]?[a-z]+/;
const pattern_PHONENUMBER = /(91\s)[5-9][0-9]{9}/;
const pattern_ZipCode = /^[0-9]{5,10}/;
const pattern_ADDRESS_CITY_STATE = /^[A-Za-z0-9.+,-\s]{4,}$/;

/**
 * @purpose -> UC2 : Ability to ensure Valid Contacts are added...Contacts are added... 
 *          -  First Name and Last Name should start with Capital 
 *          -  Minimum 3 Characters Address, City and State should also have minimum 4 characters
 *          -  Zip, Phone and Email should be valid as done in the Pattern Exercise
 *          -  Throw Error if the RegEx test fails    
 * @purpose -> UC3 Ability to create a New Address Book array and add new Contacts to it
 * 
 * @param {*} firstName 
 * @param {*} lastName 
 * @param {*} emailId 
 * @param {*} phoneNumber 
 * @param {*} zipCode 
 * @param {*} address 
 * @param {*} city 
 * @param {*} state
 * @returns 
 */

function addPerson(firstName, lastName, emailId, phoneNumber, zipCode, address, city, state) {
    let person = new Person(firstName, lastName, emailId, phoneNumber, zipCode, address, city, state);
    if (pattern_NAME.test(person.firstName) && pattern_NAME.test(person.lastName) && pattern_EMAILID.test(person.emailId) && pattern_PHONENUMBER.test(person.phoneNumber) && pattern_ZipCode.test(person.zipCode) && pattern_ADDRESS_CITY_STATE.test(person.address) && pattern_ADDRESS_CITY_STATE.test(person.city) && pattern_ADDRESS_CITY_STATE.test(person.state)) {
        return person;
    } else {
        console.log("Invalid Input!!!");
    }
}

/**
 * @purpose -> UC4 : Ability to find existing contact person using their name and edit it 
 * 
 * @param {*} Array 
 * @param {*} firstName 
 * @param {*} fullName 
 * @returns It returns the updated array 
 */
function findPerosnAndEditName(Array, firstName, fullName) {
    for (let index = 0; index < Array.length; index++) {
        let element = Array[index];
        console.log(element);
        if (element.checkForFirstName(firstName) == true) {
            element.editFullName(fullName);
        }
    }
    return Array;
}

/**
 * @purpose -> UC5 : Ability to find a person with name delete it from the array
 * @param {*} Array 
 * @param {*} firstName 
 * @returns It returns the updated array 
 */
function deletePersonFromArray(Array, firstName) {
    for (let index = 0; index < Array.length; index++) {
        const element = Array[index];
        if (element.getfirstName() == firstName) {
            Array.splice(element.getfirstName, 1)
        }
    }
    return Array;
}
/**
 * @purpose -> UC6 : Ability to find number of contacts in the address book
 * @param {*} Array 
 * @returns It returns the count of the array 
 */
function getCountOfAddressBook(Array) {
    return Array.length;
}

/**
 * @purpose ->UC7 : Ability to ensure there is no Duplicate Entry of the same Person in the Address Book
 * @param {*} Array 
 * @returns 
 */
function hasDuplicates(Array) {
    return new Set(Array).length !== Array.length;
}

function newFunction() {
    if (hasDuplicates(addressBook)) {
        console.log("Duplicate elements found.");
    } else {
        console.log("No Duplicates found.");
    }
}

/**
 * @purpose -> UC8 : Ability to view Persons by City or State
 * @param {*} Array 
 * @param {*} fullName 
 * @returns 
 */
function serachPersonInparticularCity(Array, fullName) {
    const numberOfPersonInCity = Array.filter(element => element.getFullName() == fullName)
    return numberOfPersonInCity;
}

/**
 * @purpose -> UC9 :  Ability to view Persons by City or State
 * 
 * @param {*} Array 
 * @param {*} cityName 
 * @returns It returns the person details
 */
function searchPersonByCity(Array, cityName) {
    const person = Array.filter(element => element.getcity() == cityName)
    return person;
}


// ----------------------------------------main running ---------------------------------

let personArray1 = new Array(addPerson("Nikitha", "Reddy", "nikitk456@gmail.com", "91 8527418525", 456224, "near sai bab temple road, opposite to More supermarket,Kundanahalli gates", "Bengaluru", "Karnataka"));
let personArray2 = new Array(addPerson("Ashwath", "Naidu", "ashwath.bly@gmail.com", "91 9008622627", 560037, "near sai bab temple road, opposite to More supermarket,Kundanahalli gates", "Bengaluru", "Karnataka"));
let personArray3 = new Array(addPerson("Gouthum", "Kurma", "gouthum123@gmail.com", "91 8527419643", 560001, "near sai bab temple road, opposite to More supermarket,Kundanahalli gates", "Kurnool", "Andhra"));
let addressBook = new Array(...personArray1, ...personArray2, ...personArray3); // UC1 and  UC2 adding two person into array 
// console.log(addressBook);

console.log(findPerosnAndEditName(addressBook, "Ashwath", "Deepthi Reddy")); // UC4 edit person 
console.log(deletePersonFromArray(addressBook, "Ashwath")); // UC5 delete
console.log((getCountOfAddressBook(addressBook))); // UC6 Counting the person count in array
newFunction(); // UC7
console.log(serachPersonInparticularCity(addressBook, "Ashwath Naidu")); //UC8
console.log(searchPersonByCity(addressBook, "gengaluru")); // UC9