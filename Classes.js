/** Question 1: (1000 Points ⭐️)
 * 1. write a class of `Person`, give it the following properties
 * - firstName: String
 * - lastName: String
 * - gender: String
 * - birthYear: Number
 * - interests: [String]
 *
 * 2. Add the constructor that initializes all properties except the interests array should be empty by default
 *
 * 3. Add the following methods
 *
 *
 * + printName(), that print the persons full name  (first name and last name)
 * + calculateAge(currentYear), that takes a number of current year (i.e. 2021), and returns the age of the person
 * + addInterest(newInterest), that takes  a string of a new interest, and adds it to the interest array, and returns back the array
 * after you are done with the class, create at least 3 objects of type Actor of your favorite actors
 */
class Person {
  // continue the code here
  constructor(firstName, lastName, gender, birthYear) {
    this.firstname = firstName;
    this.lastname = lastName;
    this.gender = gender;
    this.birthyear = birthYear;
    this.interests = [];
  }
  printName = () => {
    console.log(`my name is: ${this.firstname} ${this.lastname}`);
  };
  calculateAge = (currentYear) => {
    return currentYear - this.birthyear;
  };
  newInterest = (i) => {
    // this.interests = [i];
    this.interests.push(i);
    return this.interests;
  };
}
const p = new Person("Fatimah", "AlSaleh", "Female", 1994, []);
p.printName();
console.log(p.calculateAge(2021));
console.log(p.newInterest(["gaming"]));
console.log(p);

const p2 = new Person("Maryam", "AlSaleh", "Female", 1996, []);
p2.printName();
console.log(p2.calculateAge(2021));
console.log(p2.newInterest(["Sleeping"]));
console.log(p2);

const p3 = new Person("Ahmad", "AlSaleh", "Male", 1984, []);
p3.printName();
console.log(p3.calculateAge(2021));
console.log(p3.newInterest(["Gamer"]));
console.log(p3);
/** (Question 2): (15000 Points)
 * 1. Write a class `Movie`, give it the following properties
 * - title
 * - duration (in minutes)
 * - genre
 * - [rating]
 *
 * 2. Add the constructor that initializes all properties except the rating array should be empty by default
 *
 * 3. and the following the methods
 * + rate(rating),
 *      That adds a new rating to the rating array.
 *      Rating should be restricted to be greater than 0 and less than 10.
 *      This function will be used to make a single rating for the movie.
 * + averageRating(),
 *      That calculates the average of the rating array.
 *      if rating array includes the following data for example: [9, 9, 10, 10], then the averageRating should return 9.5 as an average
 *      the average equation: average = sumOfValues / countOfValues
 *      (*BONUS*): use the method reduce to calculate the average
 */

class Movie {
  constructor(title, duration, genre) {
    this.title = title;
    this.duration = duration;
    this.gender = genre;
    this.rating = [];
  }

  rate = (rating) => {
    if (rating >= 0 && rating <= 10) {
      this.rating.push(rating);
    }
  };
  rating.reduce((prev, current) => current+prev) / rating.length
}
const m = new Movie("Cruella", 134, "Comedy/Crime", []);
m.rate(7.8);
console.log(m.rating);

/** (Question 3): (1000 Points)
 * 1. Create a class `Actor` that inherits `Person`, and adds the following properties
 * - movies: array of `Movie`
 *
 * 2. Add the following methods
 * + addMovie(movie), that adds a movie to the actors movies
 * +
 */

// write the class here
class Actor extends Person {
  Movie = [];
  addMovie(movie) {
    this.movie.push(movie);
  }
}

const
