// 12
const rashi = [
    "Mesha (Aries) ♈",
    "Vrishabha (Taurus) ♉",
    "Mithuna (Gemini) ♊",
    "Karka (Cancer) ♋",
    "Simha (Leo) ♌",
    "Kanya (Virgo) ♍",
    "Tula (Libra) ♎",
    "Vrishchika (Scorpio) ♏",
    "Dhanu (Sagittarius) ♐",
    "Makara (Capricorn) ♑",
    "Kumbha (Aquarius) ♒",
    "Meena (Pisces) ♓"
];

// 31
const compliments = [
    "You have a great sense of humor.",
    "Your smile can light up anyone’s day.",
    "You’re so creative and full of ideas.",
    "You make people feel comfortable around you.",
    "You have an amazing work ethic.",
    "You’re incredibly kind and thoughtful.",
    "Your confidence is inspiring.",
    "You always find the bright side in every situation.",
    "You’re such a good listener.",
    "You bring out the best in others.",
    "You have a heart of gold.",
    "You’re strong, inside and out.",
    "Your positivity is contagious.",
    "You have a beautiful way with words.",
    "You’re making a difference every day.",
    "You have an eye for detail.",
    "You’re more talented than you realize.",
    "You always know how to make people laugh.",
    "You have great taste and style.",
    "You’re brave for trying new things.",
    "You’re someone people can always count on.",
    "You radiate good energy.",
    "You’re a quick learner and problem solver.",
    "You bring peace wherever you go.",
    "You’re full of wisdom and insight.",
    "You make hard work look easy.",
    "You have a beautiful perspective on life.",
    "You’re genuinely one of a kind.",
    "You never give up, and that’s amazing.",
    "You make the world a better place.",
    "You’re exactly who someone needed today."
];

// 20
const victimCompliments = [
    "You didn’t deserve what happened to you, and it’s okay to still be healing.",
    "You’ve carried pain that no one truly saw, and you still managed to be kind.",
    "It’s not your fault — you were doing your best with what you knew then.",
    "You deserve the same compassion you give to others so easily.",
    "You’ve held yourself together when it would’ve been easier to fall apart.",
    "You’ve walked through things that changed you, yet your heart is still gentle.",
    "You’ve been strong for so long — it’s okay to let yourself rest now.",
    "You are not broken; you are healing, piece by piece, at your own pace.",
    "It’s okay that it still hurts — that just means you cared deeply.",
    "You’ve shown so much quiet strength in moments no one even noticed.",
    "You didn’t lose your softness, even after the world wasn’t kind — that’s beautiful.",
    "You’ve faced loneliness and still found the courage to hope again.",
    "It’s okay to not be okay — you don’t have to hide your pain to be loved.",
    "You’ve survived things you never should have had to face — that’s real courage.",
    "You’ve done enough, even if you feel like you haven’t.",
    "You’re allowed to cry, to break, to rebuild — healing isn’t linear.",
    "You’re still here, and that alone makes you extraordinary.",
    "You’ve shown more strength in your silence than some do in their victories.",
    "You’re worthy of love, even on days you feel unlovable.",
    "You are not your pain — you are the strength that carried you through it."
];

//30
const recommendations = [
    "Take breaks without feeling guilty — rest is part of progress.",
    "Surround yourself with people who make you feel seen, not just heard.",
    "Write your thoughts down; sometimes clarity hides behind words.",
    "Drink water — your body deserves care too.",
    "Don’t compare your healing to someone else’s timeline.",
    "Spend a few minutes each day doing something that makes you smile.",
    "Forgive yourself for what you didn’t know before you learned.",
    "Go outside and feel the air — it helps more than you think.",
    "Talk kindly to yourself; your mind believes what you repeat.",
    "Celebrate small wins — they matter just as much as big ones.",
    "Let go of people who make you question your worth.",
    "You don’t have to fix everything; some things only need peace.",
    "Create before you consume — even a doodle or a few words count.",
    "Keep learning; curiosity keeps the spirit alive.",
    "Be proud of how far you’ve come, even if you’re not where you want to be yet.",
    "Sometimes, the best progress is simply not giving up.",
    "Say no when you need to — your peace is not selfish.",
    "Listen to music that matches your mood, not hides it.",
    "Allow yourself to outgrow things that once felt right.",
    "Don’t rush healing; even flowers take time to bloom.",
    "Remind yourself that you are enough, even without doing anything.",
    "Read something inspiring every morning, even if it’s just a quote.",
    "Give yourself permission to rest, recharge, and restart.",
    "Be patient — your future self will thank you for it.",
    "Don’t chase validation; chase inner calm.",
    "Speak your truth, even if your voice shakes.",
    "Start again as many times as you need — there’s no limit.",
    "Let your heart soften again; the world needs your gentleness.",
    "Don’t forget to laugh, even when things feel heavy.",
    "Be proud of surviving days you thought you wouldn’t."
];

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

     document.querySelector('h2').textContent = `Hey ${name} ${surname}, Your Rashi(Zodiac Sign) is ${rashi[month - 1]} ${compliments[(day * name.length) % 31]} ${victimCompliments[(name.length * month) % 21]} ${recommendations[((year * surname.length + name.length) - day) % 31]}`;
     form.reset();
})