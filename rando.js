var num1 = parseInt(Math.random()*20)+1; 
var num2 = parseInt(Math.random()*20)+1; 
var num3 = parseInt(Math.random()*20)+1; 
var big;

if(num1>num2 && num1>num3){
    big = "As the largest number in your ID is variable 1, " + num1 + ", it means you are a low-level employee. You are not allowed into the creature files. Any more exposure to the information will result in your termination and arrest.";
}
else if(num2>num1 && num2>num3){
    big = "As the largest number in your ID is variable 2, "  + num2 + ", that indicates you are a middle-level employee. Please do only your assigned task for today inside the creature files. We welcome you.";
}
else if(num3>num1 && num3>num1){
    big = "As the largest number in your ID is variable 3, "  + num3 + ", that must mean you are a high-level employee. Welcome to the creature files.";
}
else if(num3==num2 && num3==num1){
    big = "As your ID has 3 numbers of the exact same value, then that means the prophecies were true... There is indeed another O5 member! Praise the Lord!";
}
else{
    big = "As your ID has at least two highest numbers of the same value, that means you are an administrator, it is with greatest honor to welcome you to the creature files.";
}

var totalMinTime = num1*num2;
var minTime = totalMinTime%60;
var hrTime = (totalMinTime-minTime)/60;
var time = totalMinTime + " minutes or " + hrTime + " hour(s) and " + minTime + " minutes";

var letter, name, desc; 

switch(num1){
    case 1: 
        letter = "A";
        named = "Anty by many locals";
        desc = "a gigantic shadow-like creature that roams around, helping with fieldwork, heavy lifting, and much more. One day, the villagers came up to the creature and offered a bowl of sugar, their local specialty. The creature loved it, and so it got its nickname, 'Anty'. On average, it takes " + time + " to make the sugar, so, occasionally, Anty would pop in from time to time to help with the sugar-making process.";
        break;
    case 2:
        letter = "B";
        named = "Banana";
        desc = "a yellow, one-eyed, capsule-shaped, humanoid creature wearing blue overalls that just can't keep singing 'banana, banana-na' over and over again. The staff around here are getting a bit annoyed, and so we plan to buy it an actual banana next tuesday. Hopefully it finally stops! It takes " + time + " for it to stop singing. But even then, after getting bored of doing nothing, it would just go back to singing again! Help us!";
        break;
    case 3:
        letter = "C";
        named = "Cupide";
        desc = "a gigantic, angel-white colored cat that has such big paws and such a cewt lil smile like awwwwww, everyone around here loves him. Hehe who's a good boy? You are! Who's a good boy? You are!! Ah- uhm. Ehem. On average it takes  " + time + " of playing for it to get tired for the day, so we have a special position that is assigned to a different employee per day wherein their job is to play wit- I mean, converse and interact with the cat until it gets tired. So cute!";
        break;
    case 4:
        letter = "D";
        named = "the living Dinosaur";
        desc = "a T-rex like creature that hatched from a mysterious egg found by a Norwegian couple in a forest near where they live. Contrary to popular belief instilled by movies and media, the dinosaur found by the couple has no scales, it has feathers! As it is still young, there is not much data and information to tell if it is dangerous to humans as, according to the couple, it 'hasn't showed any signs of agression. None at all'. An employee will be dispatched every day for " + time + " to check and monitor the T-Rex's actions. If necessary, we will have to intervene and place the Dinosaur into our facility. The couple may visit for one hour per day, and the use of lethal weapons if ever the Dinosaur breaks free has been denied by HQ.";
        break;
    case 5:
        letter = "E";
        named = "Erachette";
        desc = "a small, pink, puffy creature that can spin a special type of cheese known as 'Ero Cheese' it incredibly delicious and the head chef here uses it more than usual cheese. 10/10, would recoomend. On average it takes " + time + " to make one block of cheese, but it is so worth it!";
        break;
    case 6:
        letter = "F";
        named = "Fastpaw, or Mr. Fern by our employees";
        desc = "a dog type creature that stalks a certain forest and can jump a total of 5 meters if it so wished. It is quite big and so to counter its size, it has developed a way to camoflauge with the surroundings, thus making it incredibly hard to see him. 'Always blending with the ferns. I swear, one day I'll catch him!' says the chief employee assigned to him. Usually, it takes " + time + " for a task-force to give up and call it a day.";
        break;
    case 7:
        letter = "G";
        named = "GigaBrain";
        desc = "a normal human being who, one day, grew a brain so big, he could sit on it. It doesn't really faze him though, and he was recruited last year into our team. He is currently the co-head of the research department and is a bit addicted to coffee. The only problem is he likes it too much. He savours every single sip! Like, yesterday, it took him " + time + " to finish ONE cup of coffee! One!";
        break;
    case 8:
        letter = "H";
        named = "Helio";
        desc = "a bright bunny with a yellow star on its left ear and a black rose on its right that has allegedly appeared in many people's dreams. Though it appears in dreams, it is still in this set of creature files as multiple people, from all over the world, describe seeing this exact creature, with the same description. Nothing much is known about the creature, but there is one thing interesting. The dream where the rabbit appears, for every individual who has seen this rabbit, only lasts exactly " + time + ". Further study and research has to be done.";
        break;
    case 9:
        letter = "I";
        named = "the Moving Igloo";
        desc = "a humongous tortoise with an igloo colored and patterned shell that moves once for " + time + " every year. It is uncertain where it is going, or if it will stay passive towards humans, but for the time being, it is pictured as a great tourist spot for many, as they go to the tortoise's back, hoping that the day they go on it, would be the time it would start moving for the year.";
        break;
    case 10:
        letter = "J";
        named = "Juniper";
        desc = "a humanoid creature that is as large as pluto and is currently sleeping all curled up orbiting around the sun. No one has identified how it entered the solar system, just that it did. The scary thing is, once every " + time + " its eyes would blink. Meaning, there's a chance, that it is not asleep... Research is ongoing. ";
        break;
    case 11:
        letter = "K";
        named = "Knight";
        desc = "a soul that has been trapped inside an armorstand within an armored knight statue, and currently roams around its museum during the night. As no one has been hurt yet, and the guard there is bad at their job, it seems only we know of its existence. On average, it takes  " + time + " for it to go back to its pedestal every day.";
        break;
    case 12:
        letter = "L";
        named = "'Forbidden L'";
        desc = "a mist-type monster. Its real name is 'LiveLaughLove', as it can trick you into saying 'LiveLaughLove' multiple times if you think about it for even once. Fortunately, this can be countered by wearing a special type of headphone that was developed here in the facility. Usually, it takes " + time + " just for an employee to stop repeating the phrase 'LiveLaughLove'. It is utterly terrifying. ";
        break;
    case 13:
        letter = "M";
        named = "Margarette";
        desc = "a creature resembling a human except it has fairy wings. She has been found by a team of adventurers a few years ago, and ever since then, she has been a great asset to our team due to her physical prowess. Because of her wings, she requires " + time + " of what she calls 'flappy time' everyday.";
        break;
    case 14:
        letter = "N";
        named = "Niro";
        desc = "Is a boy that lives in Mexico who has the power to toppel foes despite being slender and timid-looking. He has too much of an abnormal strength for a 16 year old and is currently still trying to be recruited into the facility. It usually takes about " + time + " for him to decline our offers. I know, we have been declined so many times by him that we already know how long, on average, does it take for him to decline.";

        break;
    case 15:
        letter = "O";
        named = "OoO";
        desc = "a cute, red-colored squirrel that has a habit of shouting 'OoO' every time it eats a nut. Way too loud, but the staff here love its cuteness and energy. It takes " + time + " for it to calm down, which we find incredibly cute.";
        break;
    case 16:
        letter = "P";
        named = "Peanut";
        desc = "a talking Peanut. Need I say more? Like, a talking peanut. You know those peanuts you can buy from the grocery score? Yeah, those peanuts. Not joking. I don't know what to say! Like it took me " + time + " to think of what to say here! So I decided to come clean. I don't know what to tell you, it's a talking peanut.";
        break;
    case 17:
        letter = "Q";
        named = "Q-man";
        desc = "a man who has the same suit as the very popular comic superhero 'Superman', except with a letter 'Q'. Has the exact same powers as superhero, tho sometimes he bumps into the ceiling lights when he wants to show off his 'cool flying tactics'. It takes " + time + " to repair the ceilings. He's a good guy though, he means well. Just a bit of a klutz.";
        break;
    case 18:
        letter = "R";
        named = "Rhythm";
        desc = "a Rhythm.";
        break;
    case 19:
        letter = "S";
        named = "Sondog";
        desc = "a dog that has been reported to roam the city, slithering like a snake. Its body is said to be 10 meters long, and whenever you see the dog, you would be swallowed whole, then spat out. Accompanied with jewels and food. I know, it is actually helpful. Didn't expect that. It usually takes " + time + " for the police to enter the crime scene, only for the dog to spit the victim back out accompanied by a box of gold, and more.";
        break;
    case 20:
        letter = "T";
        named = "Treading Santa Claus";
        desc = "a red puffy creature that enters peoples room at night, and makes sure their blanket is covering them. Then, leaves. Not much is sure why it is so helpful, but it is known for its jingly sounding footsteps. People near its appearing area used to be scared of him, but now they prepare cookies and milk right beside their bed so that whenever he comes to put their blankets back on, he could have some food as a reward. It usually takes " + time + " for a newcomer to get used to the gentle, treading giant.";
        break;
    default:
        letter = "invalid number, also how did this number appear D: that shouldnt happen. Like at all, must've messed smth up, go back and fix it now, me! >:(";
        break;
}

document.getElementById("code").innerHTML = "ID NUMBER: " + "|" + num1 + "|" + num2 +"|" + num3 + "|<br>" + big + "<br><br>Case " + letter + ", also known as " + named + ", is " + desc;
