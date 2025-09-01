const allSuggestions = {
    bright: [
        "Go outside and let the sun kiss your cheeks ☀️",
        "Dance around to your favorite upbeat song 🎶",
        "Treat yourself to a fresh glass of lemonade 🍋",
        "Open all the curtains and fill your space with light ☀️",
        "Make a colorful smoothie with fresh fruits 🍓",
        "Smile at a stranger or say hello to a neighbor 👋",
        "Organize your desk to feel fresh and clear 🌿",
        "Listen to an inspiring podcast while you walk 🎧",
        "Wear something bright and cheerful today 💛",
        "Make a little plan for a fun weekend activity 🗓️"
    ],
    blue: [
        "Sip lavender tea and listen to soft piano music 🍵🎹",
        "It’s okay to rest and just breathe today 🕯️",
        "Wrap yourself in your coziest blanket 💙",
        "Sip the hottest cocoa you have ever made ☕",
        "Watch a comforting movie you’ve seen a hundred times 🎬",
        "Write down three things you’re thankful for 📝",
        "Make your bed extra cozy with extra pillows 🛏️",
        "Read a gentle poem aloud to yourself 📖",
        "Cuddle a stuffed animal or soft blanket 🧸",
        "Listen to rain sounds or a calming playlist 🌧️"
    ],
    hopeless: [
        "Even the smallest step counts—try brushing your hair or washing your face 💧",
        "Write down one tiny thing that made you smile before 📝",
        "Hold onto hope—it often hides in the quietest corners ✨",
        "Place your hand on your heart and breathe slowly 🤲",
        "Remember a time you overcame something hard 🌱", 
        "Drink a glass of water and eat a nourishing snack 🥣", 
        "Say to yourself: 'This feeling won’t last forever.' 💛", 
        "Make a list of the tiniest next steps you could take 📝", 
        "Text someone you trust, even if you just say hi 💬", 
        "Sit by a window and let yourself just be 🌤️"
    ],
    nostalgic: [
        "Play a song from your teenage years and close your eyes 🎧", 
        "Look through old journals or photo albums 📸", 
        "Write a letter to someone from your past 💌", 
        "Rewatch an old movie that brings back memories 🎥", 
        "Make a playlist of songs you loved years ago 🎶", 
        "Cook a meal you remember from childhood 🥘", 
        "Hold an object that has sentimental meaning 🪆", 
        "Write about a beautiful past moment in detail ✍️", 
        "Print out a photo you love and frame it 🖼️", 
        "Call someone you haven’t spoken to in a while 📞"
    ],    
    "soft-cozy": [
        "Bake something sweet and let the smell fill your space 🍪", 
        "Wrap yourself in a fluffy blanket and watch a comfort movie 🛏️", 
        "Light a candle with your favorite scent 🕯️", 
        "Wear the fluffiest socks you own 🧦", 
        "Make a warm drink and watch the steam rise ☕", 
        "Read under a blanket fort like when you were little 🏰", 
        "Take a slow bath with candles and soft music 🛁", 
        "Cuddle up and listen to a comforting audiobook 🎧", 
        "Snuggle your pet or a big pillow 🐱", 
        "Knit or crochet something simple 🧶"
    ],
    insecure: [
        "Remind yourself of one thing you like about who you are 💖",
        "Speak kindly to yourself as you would to a friend 🌸",
        "Wear something soft and comfortable today 👚",
        "List three qualities you admire about yourself 💖",
        "Write a short letter to yourself, acknowledging your strengths 💌",
        "Unfollow accounts that make you doubt yourself 🚫",
        "Look in the mirror and say one kind sentence 🌸",
        "Remember how far you’ve come already 🌿",
        "Practice saying 'I am enough' out loud 💬",
        "Spend time with someone who makes you feel safe 🫂"
    ],
    overwhelmed: [
        "Break your tasks into tiny pieces and tackle just one 📝", 
        "Take five slow, deep breaths to reset your mind 🌬️",
        "Pause and drink a cool glass of water 💧",
        "Turn off notifications for an hour 📵",
        "Close your eyes and breathe in for four counts 🌬️",
        "Declutter just one small area—a drawer or shelf 🧺",
        "Write out everything on your mind to release it 📝",
        "Say: 'I don’t have to do everything right now.' 🕊️",
        "Drink something cold and grounding 🧊",
        "Take a 5-minute stretch break 🧘‍♀️"
    ],
    dreamy: [
        "Lie back and imagine your perfect world 🌙",
        "Create a Pinterest board of dreamy photos ✨",
        "Listen to soft, ethereal music 🎧",
        "Sketch an imaginary place you’d love to visit 🖍️",
        "Lie down and imagine floating among the stars ✨",
        "Read a fantasy story or fairy tale 📚",
        "Write down your dreams from last night 🌙",
        "Make a vision board for your ideal life 🎨",
        "Light fairy lights around your room 🌟",
        "Listen to instrumental movie soundtracks 🎵"
    ],
    lonely: [
        "Write a letter you’ll never send to get your feelings out 💌",
        "Send a quick message to someone you miss 💬",
        "Hug a pillow and remind yourself you matter 🫂",
        "Write a letter to your future self 💌",
        "Listen to a podcast that feels like company 🎧",
        "Join an online community or forum you enjoy 🌐",
        "Watch a video of animals or cute things 🐶",
        "Send a message to someone you appreciate 💬",
        "Make a cup of tea and sit by the window ☕",
        "Remind yourself you are loved and needed 💗"
    ],
    romantic: [
        "Play your favorite love song and sway slowly 🎶",
        "Light candles and have a fancy solo dinner 🕯️",
        "Write a love note to yourself 💌",
        "Put on perfume or cologne just for yourself 🌸",
        "Watch a romantic movie and swoon ✨",
        "Write a love poem—even if it’s silly 📝",
        "Wear something that makes you feel special 💖",
        "Decorate your space with flowers 🌹",
        "Make a playlist of love songs 🎶",
        "Treat yourself to chocolate or a fancy dessert 🍫"
    ],
    bored: [
        "Try learning one new fun fact right now 🤓",
        "Start a doodle or small craft 🎨",
        "Rearrange a small part of your room 🪑",
        "Learn one word in a new language 🌍",
        "Try a 5-minute guided meditation 🧘‍♀️",
        "Organize your phone photos 📱",
        "Make a list of things you want to try someday ✍️",
        "Stretch your body for five minutes 🧘‍♂️",
        "Watch a documentary about something random 🎥",
        "Try drawing something you’ve never drawn 🎨"
    ],
    angry: [
        "Take a brisk walk to release the energy 🚶‍♀️",
        "Punch a pillow or scream into it if you need to 😤",
        "Journal exactly what’s making you mad 📝",
        "Write an uncensored rant and tear it up 📝",
        "Stomp your feet to release tension 👣",
        "Squeeze a stress ball or pillow ✊",
        "Run in place or do jumping jacks 🏃‍♀️",
        "Splash cold water on your face 🚿",
        "Listen to loud music to match your mood 🎧",
        "Take deep breaths and count to ten slowly 🔟"
    ],
    anxious: [
        "Breathe in and out slowly for a minute 😮‍💨",
        "Listen to calming sounds like rain or ocean waves 🌊",
        "Repeat to yourself: This feeling will pass 💚",
        "Hold an ice cube and focus on the sensation 🧊",
        "Trace shapes on your palm with your finger ✋",
        "Count backward from 100 by sevens 🔢",
        "Smell something calming like lavender 🌿",
        "Name 5 things you see around you 👀",
        "Repeat: 'I am safe right now' 💛",
        "Put your hand on your heart and breathe deeply 🤲"
    ],
    playful: [
        "Put on silly music and dance like nobody’s watching 💃",
        "Try making funny faces in the mirror 🤪",
        "Play a quick online game or puzzle 🕹️",
        "Blow bubbles outside like you’re a kid 🫧",
        "Try a silly TikTok dance challenge just for fun 💃",
        "Tell someone a joke that always makes you laugh 😂",
        "Color in a coloring book 🖍️",
        "Make up a funny song about your day 🎵",
        "Eat a snack you loved as a child 🍭",
        "Draw a comic strip about your mood ✏️"
    ],
    confident: [
        "Wear something bold and bright today 💛",
        "Stand tall and say one powerful thing you believe in 💪",
        "Celebrate something small you achieved recently 🎉",
        "Make a list of things you’re proud of 📝",
        "Upload a photo of yourself and write a positive caption 📸",
        "Strike a superhero pose for one minute 🦸‍♀️",
        "Try making a new friend today by saying hi to someone new 👋",
        "Write an introduction for yourself as if you were a celebrity 🌟",
        "Do something you were afraid to try 🙌",
        "Compliment yourself in the mirror 💬"
    ],
    irritated: [
        "Splash cold water on your face 🚿",
        "Step outside for five minutes of fresh air 🌬️",
        "Stretch your arms and roll your shoulders ✨",
        "Close your eyes and imagine your happy place 🌅",
        "Do a few jumping jacks to release energy 🤸‍♀️",
        "Stretch your neck and shoulders slowly 🧘‍♂️",
        "Sip cold water mindfully 💧",
        "Say: 'I can handle this' out loud 💛",
        "Put on calming instrumental music 🎵",
        "Take a quick walk around your home 🏡"
    ],
    vulnerable: [
        "Put your hands gently on your chest and breathe slowly 🤲",
        "Write out what you’re feeling, without judgment ✍️",
        "Wrap up in a blanket and let yourself cry if you need 💧",
        "Call a friend and share what’s on your mind 📞",
        "Listen to a gentle meditation 🧘‍♀️",
        "Write about what you need most right now ✍️",
        "Repeat: 'My feelings are valid' 💗",
        "Light a candle and watch the flame softly flicker 🕯️",
        "Take a warm bath or shower to soothe your body 🛁",
        "Speak to yourself as you would to a dear friend 🫂"
    ],
    energetic: [
        "Tackle that thing you’ve been putting off 🚀",
        "Go for a fast walk or run 🏃‍♀️",
        "Sing along loudly to an upbeat song 🎤",
        "Clean or organize something quickly 🧹",
        "Blast your favorite song and dance 💃",
        "Do 20 jumping jacks 🏃‍♀️",
        "Try a new workout or stretch 💪",
        "Make plans with a friend 📅",
        "Brainstorm new ideas for a hobby ✍️",
        "Throw a party for one—make a fun snack and play games 🎉"
    ],
    guilty: [
        "Remind yourself you are human and mistakes happen 💛",
        "Apologize if you need to—but gently 🕊️",
        "Do one small kind thing for yourself today ☕",
        "Remember you are learning and growing 🌱",
        "Do something small to make amends if you can 🕊️",
        "Treat yourself gently today 💛",
        "Write a forgiveness letter to yourself ✍️",
        "Talk about it with someone you trust 🫂",
        "List what you’ve learned from the past experience 📝",
        "Allow yourself to move forward 💫"
    ],
    inspired: [
        "Create a mind map of your ideas 🗺️",
        "Start a vision board online 🎨",
        "Set a timer and work on your project for an hour ⏰",
        "Share your enthusiasm with a friend 💬",
        "Draw or sketch what you’re imagining ✏️",
        "Listen to energizing music 🎵",
        "Say: 'I am capable of amazing things' 🌟",
        "Write down your fresh ideas before they slip away ✍️",
        "Start one tiny step on your dream project 🚀",
        "Pay a visit to a place that inspires you, even if it’s online 🌍"
    ],
    regretful: [
        "Forgive yourself for past decisions—you’ve grown 💜",
        "Talk it out with someone who understands 🫂",
        "Focus on what you can do differently next time 📝",
        "Remind yourself you did the best you could 💛",
        "Write down your feelings from the past experience ✍️",
        "Watch a movie or read a book about redemption 📚",
        "Look for the lesson from the past moment 🌱",
        "Take one tiny positive action now 🌤️",
        "Write a letter to your past self, offering compassion 💌",
        "Give yourself time to heal 🕊️"
    ],
    silly: [
        "Wear a funny hat or accessory 🎩",
        "Make up a ridiculous dance 💃",
        "Tell yourself a joke out loud 🤣",
        "Pretend to be a character from a cartoon 🤠",
        "Draw doodles all over a scrap paper ✏️",
        "Try recreating a funny meme or GIF 😂",
        "Play with a toy or squishy ball 🧸",
        "Make funny voices and record them for fun 🎤",
        "Send a goofy selfie to a friend 🤪",
        "Try saying tongue twisters out loud 👅"
    ],
    numb: [
        "Even if you feel nothing, drink some water and stretch 💧",
        "Try to name one color or shape you see around you 🔺",
        "Hold something warm in your hands, like a mug ☕",
        "Watch a calming video of nature 🌳",
        "Write down one thing you can feel right now, even if it’s just the chair under you ✍️",
        "Focus on your breathing for one minute 🌬️",
        "Move your body gently, even if you don’t feel like it 🧘‍♀️",
        "Take a warm shower 🚿",
        "Listen to a calm, neutral playlist 🎵",
        "Tell yourself: 'It’s okay to feel nothing right now' 💛"
    ],
    spiritual: [
        "Light incense and set an intention 🕯️",
        "Do a short meditation 🧘‍♂️",
        "Pull an oracle card for guidance 🔮",
        "Write about what your soul is craving ✍️",
        "Spend a few minutes in silence, just being 🌌",
        "Contemplate one question about your life and listen for answers 🧘‍♀️",
        "Spend time in nature if you can 🌿",
        "Sit quietly and listen to your breath 🧘‍♀️",
        "Read a spiritual quote that resonates with you 📖",
        "Write a gratitude list for the Universe ✨"
    ],
    frustrated: [
        "Scribble out your frustration on paper and throw it away ✍️",
        "Shake out your arms and legs like a dance break 🕺",
        "Say out loud: This is temporary—it will pass 🗣️",
        "Sing along to a loud song until you feel better 🎤",
        "Rant to a friend or write it down in a journal 📝",
        "Squeeze something squishy or soft 🧸",
        "Punch a pillow or mattress to release tension 🛏️",
        "Drink water and take a slow breath 💧",
        "Step outside and feel the air on your face 🌬️",
        "Give yourself permission to pause 🌿"
    ]
};

let currentMood = null;
let shownSuggestions = [];

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  currentMood = params.get("mood");

   document.getElementById("mood-title").innerText = `Mood: ${currentMood}`;

  showSuggestion();

  document.getElementById("more-idea-button").addEventListener("click", showSuggestion);
});

function showSuggestion() {
  const moodSuggestions = allSuggestions[currentMood];

  if (!moodSuggestions || moodSuggestions.length === 0) {
    document.getElementById("suggestion").innerText = "No suggestions available.";
    document.getElementById("more-idea-button").style.display = "none";
    return;
  }

  const available = moodSuggestions.filter((_, i) => !shownSuggestions.includes(i));
  if (available.length === 0) {
    document.getElementById("suggestion").innerText = "No more new ideas!";
    document.getElementById("more-idea-button").style.display = "none";
    return;
  }

  const randomIndex = Math.floor(Math.random() * available.length);
  const suggestion = available[randomIndex];
  shownSuggestions.push(moodSuggestions.indexOf(suggestion));

  document.getElementById("suggestion").innerHTML = suggestion;
}

