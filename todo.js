const form =document.querySelector('form');
const fruits=document.querySelector('.fruits');

//adding event listener for add button
form.addEventListener('submit',function(event)
 {       event.preventDefault();
  
  const fruitsToadd=document.getElementById('fruit-to-add');
  
  const newli=document.createElement('li');
  newli.innerHTML=fruitsToadd.value + '<button class="delete-btn">x</button>'
  +'<button class="edit-btn">Edit</button>';
  fruits.appendChild(newli);
});

fruits.addEventListener('click',function(event) {
  if(event.target.classList.contains('delete-btn'))
    {
      const fruitTodel=event.target.parentElement;
      fruits.removeChild(fruitTodel);
    }
});
