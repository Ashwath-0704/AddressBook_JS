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

// ----------------------------------------main running ---------------------------------

let personArray1 = new Array(addPerson("Nikitha", "Reddy", "nikitk456@gmail.com", "91 8527418525", 456224, "near sai bab temple road, opposite to More supermarket,Kundanahalli gates", "Bengaluru", "Karnataka"));
let personArray2 = new Array(addPerson("Ashwath", "Naidu", "ashwath.bly@gmail.com", "91 9008622627", 560037, "near sai bab temple road, opposite to More supermarket,Kundanahalli gates", "Bengaluru", "Karnataka"));
let personArray3 = new Array(addPerson("Gouthum", "Kurma", "gouthum123@gmail.com", "91 8527419643", 560001, "near sai bab temple road, opposite to More supermarket,Kundanahalli gates", "Kurnool", "Andhra"));
let addressBook = new Array(...personArray1, ...personArray2, ...personArray3); // UC1 and  UC2 adding two person into array 
// console.log(addressBook);