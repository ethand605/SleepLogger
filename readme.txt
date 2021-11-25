--Readme document for Yuyang Deng yuyangd5@uci.edu 70164920, Austin Tang austinlt@uci.edu 13198400--

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

10/10
- 1/1 The ability to log overnight sleep
- 1/1 The ability to log sleepiness during the day
- 1/1 The ability to view these two categories of logged data
- 2/2 Either using a native device resource or backing up logged data
- 2/2 Following good principles of mobile design
- 2/2 Creating a compelling app
- 1/1 A readme and demo video which explains how these features were implemented and their design rationale

2. How long, in hours, did it take you to complete this assignment?
28 hours


3. What online resources did you consult when completing this assignment? (list specific URLs)
https://howtodoinjava.com/typescript/maps/
https://edupala.com/ionic-data-binding/#:~:text=Ionic%20Angular%20data%20binding%20is,or%20two%2Dway%20data%20binding.
https://ionicframework.com/docs/api/modal
https://stackoverflow.com/questions/47512788/ionic-2-fixed-content-to-the-right
https://ionicframework.com/docs/api/datetime


4. What classmates or other individuals did you consult as part of this assignment? What did you discuss?
N/A


5. Is there anything special we need to know in order to run your code?
We used capacitor storage.
npm install -g @ionic/cli
npm install
npm install --save @capacitor/core @capacitor/cli
ionic lab 

--Aim for no more than two sentences for each of the following questions.--


6. Did you design your app with a particular type of user in mind? If so, whom?
We tried to design the app for the general public.


7. Did you design your app specifically for iOS or Android, or both?
We initially designed it for IOS but we also tried adding elements to the screen so that it wouldn't look too foreign on Androids.


8. How can a person log overnight sleep in your app? Why did you choose to support logging overnight sleep in this way?
The person first picks the date, then they pick the start time, and lastly the end time. We chose to do this because we wanted to minimize user error and have them follow a linear data input.


9. How can a person log sleepiness during the day in yours app? Why did you choose to support logging sleepiness in this way?
This page follows the similar structure of the log overnight sleep page. Again, here we wanted to minimize user error by having them follow a preset path.


10. How can a person view the data they logged in your app? Why did you choose to support viewing logged data in this way?
There are two pages to view sleep hours and sleepiness. We did it this way so the person can clearly spot the differences of sleepiness and hours in different days.


11. Which feature choose--using a native device resource, backing up logged data, or both?
N/A


12. If you used a native device resource, what feature did you add? How does this feature change the app's experience for a user?
N/A


13. If you backed up logged data, where does it back up to?
We used capacitor storage.

14. How does your app implement or follow principles of good mobile design?
We added an uh-oh button so the user can confirm if they want to delete the log. 
We also designed the app with user error prevention heavily in mind with the implementation of a linear data input path as well as deletion modals.
