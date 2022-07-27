function getBotResponse(input) {
    //WALL-E scissors
    if (input == "Talk to WALL-E" || input == "Talk to wall-e" || input == "Talk to WALLE" || input == "Talk to walle" || input == "talk to wall-e" || input == "talk To WALL-E" || input == 4) {
        return 'Hello I am WALL-E';
    } else if (input == "Hello" || input == "hello" || input == "hi" || input == "Hi" || input == "hi wall-e" || input == "hello-WALL-E") {
        return "How are you?";
    } else if (input == "Very good, and you" || input == "Very good, and you?" || input == "very good, and you" || input == "very good, and you?" || input == "good, and you" || input == "good" || input == "Good") {
        return "Good with a lot of work. Are you working?";
    }else if (input == "Yes" || input == "yes" || input == "if I'm working" || input == "if I work") {
        return "look how good. I'm about to take a tea, you like the te?";
    }else if (input == "Yes I like tea" || input == "Yes, I like tea" || input == "yes i like tea" || input == "Yes" || input == "yes" || input == "Yes I like" || input == "yes i like") {
        return "Well, if you like some day we can have a tea, time I have to go. that you have other calls to avoid. A pleasure to meet you.";
    }else if (input == "Not good" || input == "not good" || input == "Too bad" || input == "too bad" || input == "Not my best day" || input == "normal") {
        return "We all have bad days, but remember behind the clouds the sky is always blue, you like the te?";
    }else if (input == "No" || input == "no" || input == "not my favorite" || input == "No my favorite" || input == "No is my favorite") {
        return "Well if you want we can go have a drink that if we both like it. It would be good if we had a meeting. Maybe right now I have other flames to face. it was a pleasure to meet you.";
    }else if (input == "Bye" || input == "Good Bye" || input == "good bye" || input == "See you later" || input == "see you later" || input == "bye") {
        return input;
    }else if (input == "I'm not working" || input == "I don't work" || input == "i'm not working" || input == "i don't work") {
        return input;
    }

    // Simple responses
    if (input == "Personal information" || input == "personal information" || input == "personal Information" || input == 1) {
        return 'Hi, I am Nicolas Abreu, I hope you are having fun talking to my friend WALL-E. </br>I study systems engineering at the Uruguayan ORT University, if you want we can schedule a meeting to get to know each other better and for me to tell you more about myself.';
    } else if (input == "Areas of interest" || input == "areas of interest" || input == "Areas Of Interest" || input == "areas of Interest" || input == 2) {
        return 'My area of interest is the part of dasarrollo, whether it is mobile or web, I do not care. I have no problem working with the backend as I can also do it on the frontend. I like to develop with python and javascript, but I also like to learn new languages.';
    }else if (input == "That I am looking for" || input == "that i am looking for" || input == "that I am looking for" || input == "That I Am Looking For" || input == "that i am Looking for" || input == "that i Am looking for" || input == "that i am looking For" || input == 3) {
        return 'I am looking for a part time job as I studied at ORT from Monday to Thursday nights. My main objective is to be able to gain experience and make a career in the company. I want to face new challenges.';
    }else if (input == "Menu" || input == "menu" || input == 0) {
        return 'Choose one of the following options: </br>  1- Personal information.</br>  2- Areas of interest.</br>  3- That I am looking for.</br> 4- Talk to WALL-E.</br> 0- Menu';
    }else {
        return "Try asking something else!";
    }
}