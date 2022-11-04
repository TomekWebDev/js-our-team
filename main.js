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

    `<div id="card" class="card" style="width: 18rem;">
    <img src="${thisObject.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${thisObject.name}</h5>
      <p class="card-text">${thisObject.role}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`
}