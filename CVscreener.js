
// array of objectts ehich cxontainsd info about the candidate
const data = [
    {
        image: 'https://randomuser.me/api/portraits/men/61.jpg',
        name: 'Rohan Das',
        age: 15,
        city: 'kolkota',
        language: 'python',
        framework: 'django',
    },
    {
        image: 'https://randomuser.me/api/portraits/men/62.jpg',
        name: 'bagga natuwarLal',
        age: 29,
        city: 'delhi',
        language: 'java',
        framework: 'gm',
    },
    {
        image: 'https://randomuser.me/api/portraits/men/63.jpg',
        name: 'Ansu',
        age: 19,
        city: 'berhampur',
        language: 'JS',
        framework: 'node.js',
    }
]

//Cv iterator
function CViterator(profiles) {
    let nextIndex=0
    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } : { done: true }
        }// : acts as a ternary operator in the above statement
    }//ternary operator:*if not this than this*;if-else alternative
}
const candidates = CViterator(data)
nextCV()//for showing 1st profile before clicking
//button listener for next button
const next = document.getElementById('next');
next.addEventListener('click',nextCV)


function nextCV() {
   
    const Ccandidate = candidates.next().value;
    let image = document.getElementById('image')
    let profile = document.getElementById('profile')
    if (Ccandidate != undefined) {
        image.innerHTML = `<img src='${Ccandidate.image}'>`
        profile.innerHTML = `<ul class="list-group list-group-flush">
    <li class="list-group-item">name:${Ccandidate.name}</li>
    <li class="list-group-item">age:${Ccandidate.age}</li>
    <li class="list-group-item">city:${Ccandidate.city}</li>
    <li class="list-group-item">language:${Ccandidate.language}</li>
    <li class="list-group-item">framework:${Ccandidate.framework}</li>
    </ul>` 
    } else {
        window.location.reload()
    }
    


}










