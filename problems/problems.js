/* The problems this week will focus on the usage of Map and Set.

The Map is a built-in object that's used to associate keys to values. A very common task in programming is lookup a value based on a key (e.g. looking up student data by student id, looking up car information based on model/make). First, familiarize yourself with the functionality of Map by reading the "Using the Map object" section of this page. Then, attempt the exercises below. For exercises that involve programming, set up test cases using Jest and leverage those test cases to verify correctness.

1. Answer the following questions:
    - Can a map contain functions as values? 
        *A map can conatin a function as a key.
    - Can a map have methods?
        *Yes, but at that point you might as well use an object(?)
    - Explain in words when a map is preferable to an object. (the MDN page has a table comparing objects and maps) 
        *1. A Map does not contain any keys by default.
        *2. A Map's keys can be any value.
        *3. Keys in a Map are ordered.
        *4. Map.size is an easy way to determine length
        *5. Map is directly iterable.
        *6. More performant.

2. Write a class called PhoneDirectory that has the following methods:
    - add_entry: Should take two arguments, name and phone_number
    - lookup_by_name: Should take a name and return the phone number associated with the name
    - lookup_by_number: Should take a phone number and return the name associated
    - The lookup functions should return null if the entry isn't found
    - hint: You may use more than one map.

3. Modify the class above to include the following methods:
    - remove_by_name: Remove an entry from the directory by name
    - remove_by_number: Remove an entry from the directory by number
    - print: Return a string containing all entries in the directory, alphabetically with the format name: number\n for each entry

The Set is another built-in object that is used to store a set of unique entries. Familiarize yourself with the functionality of Set by reading "Using the Set object" on this page. Then, attempt the exercises below:

1. Answer the following questions:
    - How is a set different from a map? 
        *A value in a set may only occur once and is unique to the collection. Also map is on an array, set is a collection of values.
    - Is element equality checked with == or ===? 
       *The element equality is checked with a strict equality operator (===).
2. Write a function that takes two sets setA and setB and returns all the elements in setB that are not in setA as a set.
3. Write a function that takes two sets setA and setB and returns the set of all elements that are in both setA and setB. */


class PhoneDirectory{
    constructor(){
        this.phonebookByName = new Map();
        this.phonebookByNumber = new Map();
    }

    addEntry(name, phoneNumber){
        this.phonebookByName.set(name, phoneNumber);
        this.phonebookByNumber.set(phoneNumber, name);
        return `${name}, ${phoneNumber} has been added to the directory.`;
    }

    lookupByName(name){
        if(this.phonebookByName.has(name)){
            const entryNumber = this.phonebookByName.get(name);
            return `Name: ${name}, Number: ${entryNumber}`;
        }
        return `No entry found with the name "${name}"`;
    }

    lookupByNumber(phoneNumber){
        if(this.phonebookByNumber.has(phoneNumber)){
            const entryName = this.phonebookByNumber.get(phoneNumber);
            return `Name: ${entryName}, Number: ${phoneNumber}`;
        }
        return `No entry found with the number "${phoneNumber}"`;
    }

    removeByName(name){
        const entryNumber = this.phonebookByName.get(name);
        this.phonebookByName.delete(name);
        this.phonebookByNumber.delete(entryNumber);
        return `${name} has been removed from the directory.`
    }

    removeByNumber(phoneNumber){
        const entryName = this.phonebookByNumber.get(phoneNumber);
        this.phonebookByNumber.delete(phoneNumber);
        this.phonebookByName.delete(entryName);
        return `${phoneNumber} has been removed from the directory.`
    }

    print(){
        let phoneDirectory = '';
        this.phonebookByName.forEach((number, name) => {
            phoneDirectory+= `Name: ${name}, Number: ${number}\n`;
        });
        return phoneDirectory;
    }
}

function uniqueElementsOfSetB(setA, setB){
    setA.forEach(value => {
        if (setB.has(value)){
            setB.delete(value);
        }
    });
    return setB;
}

function joinTwoSets(setA, setB){
    const joinedArr = [...setA].concat([...setB]);
    const setC = new Set(joinedArr);
    return setC;
}

module.exports = {
    PhoneDirectory,
    uniqueElementsOfSetB,
    joinTwoSets
}