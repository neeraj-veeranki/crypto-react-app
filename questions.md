1. How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn't spend much time on the coding assignment then use this as an opportunity to explain what you would add.

  Ans: I have spent around 8 to 10 hours for the project. If i had more time i would add some utilities to show currency values more visually appealing. I could add        graphs to show historical conversions.


2. What was the most useful feature that was added to the latest version of your language of choice? Please include a snippet of code that shows how you've used it.

    Ans: The latest feature i used is Nullish Coalescing. In one scenario i have function which returns an object, the function should send object based on a data            which is sent to it. In some cases it may receive empty data in that case it needs to send default values. In this case i have used to check and send data          accordingly.

          function config(options) {
              options.minutes ??= 45;
              options.seconds ??= 00;
              return options;
          }

          config({ minutes: 55 }); // { minutes: 55, seconds: 00 }
          config({}); // { minutes: 45, seconds: 00 }

3. How would you track down a performance issue in production? Have you ever had to do this?.

  Ans: Yes it happened. I have dealt with lot of prod issues in current and some legacy applications. In that case i will analyse according to following steps:
    a) Checking console if it shows any network related failures and authentication issues.
    b) Check the data which the necessary function expects whether its coming according to expectations.
    c) Identifying the file of the application where the issue is coming from.
    c) Use the chrome 'Overrides' feature where we can override a prod file where the issues is coming with local javascript file. Testing adn debugging using that.

4. What was the latest technical book you have read or tech conference you have been to? What did you
learn?

    Ans:  Recently i am reading data structures book from Adrian Meija. I learned about Trie data structure implementation which is used heavily for searching and            auto complete.

5. What do you think about this technical assessment?

  Ans:  It is very challenging and as well as gives us the freedom to design app.


6. Please, describe yourself using JSON.

  Ans: 
      {
          'name': 'Neeraj',
          'nature': 'Hardworking and Quick learner',
          "passions": [
              "Programming",
              "Teaching others"
          ],
          "interests": [
              "Education",
              "Films",
              "News on future technologies",
              "Cricket"
          ],
          "dreams": [
               "To make this world a better place!"
          ],
          "believes": [
               "That we should all have a chance in life, we should not be judged because of our color, ethnicity and educational background!"
          ]
      }
