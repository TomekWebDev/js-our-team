// Objects data - team members

let team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
];

for(i = 0; i < team.length; i++){
    let thisObject = team[i]

    document.getElementById("team-members").innerHTML += 
    `   <div id="card" class="card mx-2 my-2" style="width: 18rem;">
            <img src="img/${thisObject.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${thisObject.name}</h5>
                <p class="card-text">${thisObject.role}</p>
            </div>
        </div>  ` //attenzione ai backtic!!
  
}

function registerNewMember(){

    let thisName = document.getElementById("name").value;
    let thisSurname = document.getElementById("surname").value;
    let thisRole = document.getElementById("role").value;
    let thisImage = document.getElementById("memberImage").value;

    let thisObject = {
        name: `${thisName + " " + thisSurname}`,
        role: `${thisRole}`,
        image: `${thisImage}`
    };

    team.push(thisObject);

    console.log(team);

    document.getElementById("team-members").innerHTML += 
    `   <div id="card" class="card mx-2 my-2" style="width: 18rem;">
            <img src="img/${thisObject.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${thisObject.name}</h5>
                <p class="card-text">${thisObject.role}</p>
            </div>
        </div>  ` //attenzione ai backtic!!

    

}