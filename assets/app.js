function calculateAge() {
    
    let age = parseInt(document.getElementById('age').value);

    let resultIcon = document.getElementById('resultIcon');
    let resultTitle = document.getElementById('resultTitle');
    let resultActivity = document.getElementById('resultActivity');


    if (!isNaN(age)) {
        if (age >= 18) {
            resultIcon.src = "https://img.freepik.com/free-vector/man-shows-gesture-great-idea_10045-637.jpg";
            resultTitle.innerText = 'You are an adult';
            resultActivity.innerHTML = `
            <h4>7 Activities You Should Do as an Adult Every Day</h4>
<ul>
    <p>Exercise: Incorporate physical activity into your routine for health and well-being.</p>
    <p>Read: Take time to read and expand your knowledge on various subjects.</p>
    <p>Work on a Hobby: Engage in a hobby or activity that brings you joy and relaxation.</p>
    <p>Connect with Loved Ones: Spend quality time with family and friends.</p>
    <lpi>Learn Something New: Continue learning and growing in different areas of your life.</lpi>
    <p>Practice Mindfulness: Incorporate mindfulness or meditation for mental well-being.</p>
    <p>Reflect and Plan: Take a moment to reflect on your day and plan for the future.</p>
</ul>
`;
        } else {
            resultIcon.src = "https://img.freepik.com/premium-vector/child-who-does-want-listen-he-has-glasses-doesn-t-want-listen-what-they-say_7710-197.jpg";
            resultTitle.innerText = 'You are a child';
            resultActivity.innerHTML = `
            <h4>7 Activities You Should Do as a Child Every Day</h4>
<ul>
    <p>Play Outside: Enjoy outdoor activities and games for fresh air and exercise.</p>
    <p>Read a Story: Discover new worlds and spark imagination through books.</p>
    <p>Create Art: Express creativity through drawing, coloring, or crafting.</p>
    <p>Learn Something New: Explore and learn about different topics every day.</p>
    <p>Have Snack Time: Enjoy healthy snacks and a break during the day.</p>
    <p>Play with Friends: Socialize and have fun with other children.</p>
    <p>Bedtime Routine: Follow a calming bedtime routine for a good night's sleep.</p>
</ul>
`;
        }
    } else {
        resultIcon.src = "https://img.freepik.com/free-vector/curiosity-search-concept-illustration_114360-11031.jpg";
        resultTitle.innerText = 'Please enter a valid age';
        resultActivity.innerHTML = '';

    
    }
}


let form = document.getElementById('contactForm');
let name = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');

let errorMessage = document.getElementById('errors');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    errorMessage.classList.remove('show', 'alert-warning', 'alert-success'); 

    if (name.value === '' || email.value === '' || message.value === '') {
        errorMessage.innerHTML = 'Please fill in all fields';
        errorMessage.classList.add('show', 'alert-warning');
    } else if (email.value.indexOf('@') === -1 || email.value.indexOf('.') === -1) {
        errorMessage.innerHTML = 'Please enter a valid email';
        errorMessage.classList.add('show', 'alert-warning');
    } else {
        



        errorMessage.innerHTML = 'Message sent successfully!';
        errorMessage.classList.add('show', 'alert-success');
        form.reset();
    }
});

function goCal(){
    document.getElementById('ageInput').scrollIntoView({ behavior: 'smooth' });
}
