# Leisure Plus

This project started as a technical challenge for Platzi, I wanted to challenge myself to build something that could "make me proud" as you commented in the email with the specifications.

I must say that it was a pretty interesting challenge, and it was hard to handle in a very busy week, but I put my best effort in bringing something cool, while learning different new technologies and working on something that could cover the requirements. My personal challenge was "How can I build something that could work for what they needed, but that also can be part of my portfolio?" And that's when I think about something that could be similar to some streaming services.

## Getting Started

First, copy the code with a classic git clone or directly downloading the code into your computer.

After that, remind to install all the dependencies with ```yarn install``` or ```npm install```. This will give you all the necessary modules to run the project locally.

## Try it yourself! 

This project has been made with the help of TMDB API, to replicate the behavior of the website in your own computer you should have an API KEY provided by TMDB.

Once you have the API key you can set the Key replicating the structure shown in the .env.example file. 


## Deploy on Vercel

This project has been deployed to Vercel, if you want to visit the live demo, you can access the next link leisure-plus.vercel.app

### Potential improvements

Besides being a project that took me a good amount of time during this week, there are several points that I think that could be improved:

- Give more order and modularity to the code, there are some sections were I know that I can have a better modularization and reuse code more effectively, it's something that probably will do in the future but hadn't time to cover during the rush of the past week.
- Deeper tests, in this case I just prepared a very basic tests because I was running out of time, but defenitively this will be one of my first points to improve in this project.
- More personalized filtering and sortering. Instead of just rely in one of the fields provided by the API I think that could be interesting to try something similar to this (Condition Builder)[https://github.com/LuFernandoMG/condition_builder/tree/main] that I prepared some time ago to explore how to apply effectively filtering on big amounts of data that we currently have.
- Authentication and a Backend to keep the information, in the very begginning of the idea, I was thinking on connect the whole application with Firebase and include authentication with email and with google.
- Create my own infinite slider, in this case while I wanted to "save some time" with a third party component, ended up losing a good amount of time debugging a library that was good in one thing but messing a lot of many other things.