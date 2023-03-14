let id="";

//localStorage.clear();


//savedata
function saveData(){
    document.getElementById('msg').innerHTML = "" ;
       let name = document.getElementById('name').value;
       if(name == ''){
        document.getElementById('msg').innerHTML = 'please enter your name';
       }
       else{
        if(id == ''){
            let  arr = JSON.parse(localStorage.getItem('crud'));
            if( arr == null){
                let data= [name] ;
                localStorage.setItem('crud',JSON.stringify(data));
            }
            else{
                arr.push(name);
                
                localStorage.setItem('crud',JSON.stringify(data));
            }
            document.getElementById('name').value = '';
            document.getElementById('msg').innerHTML = 'data added';
        }
        else{

        }
        selectData();
       }

       document.getElementById('msg').innerHTML = "" ;
       let email = document.getElementById('name').value;
       if(email == ''){
        document.getElementById('msg').innerHTML = 'please enter your email';
       }
       else{
        if(id == ''){
            let  arr = JSON.parse(localStorage.getItem('crud'));
            if( arr == null){
                let data= [email] ;
                localStorage.setItem('crud',JSON.stringify(data));
            }
            else{
                arr.push(email);
                
                localStorage.setItem('crud',JSON.stringify(data));
            }
            document.getElementById('name').value = '';
            document.getElementById('msg').innerHTML = 'data added';
        }
        else{

        }
        selectData();
       }
      
}

//deletedata

function deleteData(){
   
}

//selectdata
function selectData(){
      arr = JSON.parse(localStorage.getItem('crud'));
    if(arr !==null){
        let html ='';
        let sno =1;
        for(let k in arr){
            
            html= html+`<tr><td>${sno}</td><td>${arr[k]}</td><td><a href="javascript:void(0)" onclick=" deleteData(${k})">Delete</a</td></tr>`; 
            sno++;
        }
        document.getElementById('root').innerHTML = html ;

    }

      arr = JSON.parse(localStorage.getItem('crud'));
    if(arr !==null){
        let html ='';
        let sno =1;
        for(let k in arr){
            
            html= html+`<tr><td>${sno}</td><td>${arr[k]}</td><td><a href="javascript:void(0)" onclick=" deleteData(${k})">Delete</a</td></tr>`; 
            sno++;
        }
        document.getElementById('root').innerHTML = html ;

    }



}

//editdata
function editData(){

}


 const name =document.getElementById('name');

 const email =document.getElementById('email');
 

 form.addEventListener('submit', e =>{
    e.preventDefault();

    ValidityState();
 });

 const  ValidityState =() =>{
    const namevalue = username.value.trim();

    const emailvalue = email.value.trim();

    if(username == ''){
        
    }

 };