
//localstorage.setItem(key,value)
//localstorage.getItem(key)

const feedbackForm=document.querySelector('#feedback_form');
const feedBackContainer=document.querySelector('.feedback_container');

console.log(feedbackForm);

feedbackForm.addEventListener('submit',(e)=>{

    e.preventDefault();

    const name=document.getElementById('name').value
    const email=document.getElementById('email').value
    const message =document.getElementById('message').value
    const rating =document.getElementById('rating').value

    const feedBackObject={name,email,message,rating}

    saveToLocalStorage(feedBackObject);

})


function saveToLocalStorage(feedBackObject){
  const feedbacks=  JSON.parse(localStorage.getItem('feedbacks'))||[];
    console.log(feedbacks);
    feedbacks.push(feedBackObject);
    localStorage.setItem('feedbacks',JSON.stringify(feedbacks))
    console.log("feedback saved");
    feedbackForm.reset();
    console.log(feedbacks);
    
}


function loadFeedBacks(){
 const feedbacks=JSON.parse(localStorage.getItem('feedbacks'));
feedbacks.reverse();
 feedBackContainer.innerHTML='';

 feedbacks.forEach(ele => {
    // console.log(ele.name);
    // console.log(ele.email);
    // console.log(ele.message);
    // console.log(ele.rating);
    const feedItem=`
    <div class="  bg-gray-600 flex flex-col   w-full p-2  border text-white ">
                <div class="flex flex-row items-center  justify-between">
                    <h1>${ele.name}</h1>
                    <h1>${ele.email}</h1>
    
                </div>
                <div>
                    <h2>${ele.message}</h2>
                </div>
                <div class="flex flex-row items-center  justify-between ">
                    <h1>Rating:${ele.rating}</h1>
                    <button onclick="handleDeleteFeddback('${ele.email}')" class=" delete_feedback bg-red-600  p-2 rounded-lg ">Delete</button>
                </div>
            </div>
    `
   
    feedBackContainer.innerHTML+=feedItem;
    
 });

}

loadFeedBacks();




const deleteFeedBack=document.querySelector('.delete_feedback')

function handleDeleteFeddback(feedbackEmail){


    const feedbacks=JSON.parse(localStorage.getItem('feedbacks'));
    const newFeedbacks=feedbacks.filter((ele)=>{
     return ele.email!==feedbackEmail
    })
    localStorage.setItem('feedbacks',JSON.stringify(newFeedbacks));
    loadFeedBacks();


}
handleDeleteFeddback();

const submitButton=document.getElementById('submit_btn');
console.log(submitButton);

const clearButton=document.getElementById('clear_button');
console.log(clearButton);



const formHeading=document.querySelector('#form_heading');
formHeading.addEventListener('click',()=>{
    console.log(formHeading);

    formHeading.style.color="red";
    formHeading.style.color = 'blue'; // Set text color
    formHeading.style.fontSize = '24px'; // Set font size
    formHeading.style.backgroundColor = 'lightgray'; // Set background color
    formHeading.style.padding = '10px'; // Add padding
    formHeading.style.border = '2px solid red'; // Add a border


})


submitButton.addEventListener('click',(e)=>{


})