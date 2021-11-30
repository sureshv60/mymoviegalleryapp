'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.version'
]).controller('appCtrl', function($scope) {
  $scope.page="homepage",
  $scope.model_page="login",
  $scope.loginsection_status=false,
  $scope.current_user='',
  $scope.current_user_type='',
  $scope.registered_users=[{username:'Suresh Vunnam',
                            useremail:'nsuresh062@gmail.com',
                            userpassword:'Password@1234',
                            user_type:'premium'}],
  $scope.loginemessage='',
  $scope.register_emessage='',
  $scope.loginpage_redirect=function(){
    $scope.loginemessage='';
    $scope.register_emessage='';
    $scope.model_page="login";
  },
  $scope.signup_redirect=function(){
    $scope.loginemessage='';
    console.log( $scope.loginemessage+'5');
    $scope.register_emessage='';
    $scope.model_page="signup";
  },
  $scope.toggle_loginsection=function(){
    $scope.loginsection_status=!$scope.loginsection_status;
    if( !$scope.loginsection_status){
      $scope.loginemessage='';
    $scope.register_emessage='';
    $scope.model_page="login";
    }
  },
  $scope.login_verify=function(){
    $scope.register_emessage='';
    let username =document.getElementById('lemail').value;
    let password =document.getElementById('lpassword').value;

    if(username == '' || password == ''){
      $scope.loginemessage='please enter the details';
    }
    else{
          let flag=true;
          for (var i = 0;i<$scope.registered_users.length;i++){
             if(username == $scope.registered_users[i].useremail && password == $scope.registered_users[i].userpassword ) 
             {
              $scope.current_user=$scope.registered_users[i].username;
              $scope.current_user_type=$scope.registered_users[i].user_type;
                console.log('success');
                $scope.page="firstpage";
                return;
             }
             if(username == $scope.registered_users[i].useremail){
              $scope.loginemessage= 'email or password mismatch'; 
              flag=false;
              console.log("reached")
              break;
             }
          }

          if(flag){
            $scope.loginemessage='user does not exist';       
          }
    }

  
  },
  $scope.register_verify=function(){
    $scope.login_emessage='';

    let rname = document.getElementById('rname').value;
    let remail = document.getElementById('remail').value;
    let rpwd = document.getElementById('rpassword').value;
    let repwd = document.getElementById('repassword').value;
    let type = document.getElementById('customer_type').value;
    console.log(type);
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(rname =='' || remail =='' || rpwd =='' || repwd == ''){
        $scope.register_emessage='please enter the details';
        return ;
    }
    if(remail.match(mailformat)){
        if(repwd!=rpwd){
          $scope.register_emessage='Passwords Doesnot match';
          return;
        }
        let flag=false;
        for(let i=0;i<$scope.registered_users.length;i++){
            if(remail == $scope.registered_users[i].useremail){
                $scope.register_emessage='User Already exists';
                flag= true;
                return;
               
            }
        }
        if(flag==false){
            let temp_register_user= {username:rname,
              useremail:remail,
              userpassword:rpwd,
              user_type:type}

            $scope.registered_users.push(temp_register_user);
            $scope.register_emessage='User registered successfully';
            document.getElementById('rname').value='';
            document.getElementById('remail').value='';
            document.getElementById('rpassword').value='';
            document.getElementById('repassword').value='';
            return;
        }
    

    }


},
$scope.movie_listitems=[{
  movie_name:'1917',
  movie_url:'lib/images/image1.jpg',
  movie_duration:'135 mins',
  movie_genre:'War,patriotic',
  movie_language:'English'
},
{
  movie_name:'Pacific Rim',
  movie_url:'lib/images/image2.jpg',
  movie_duration:'175 mins',
  movie_genre:'War,sci-fi',
  movie_language:'English'
},
{
  movie_name:'Terminator Salvation',
  movie_url:'lib/images/image3.jpg',
  movie_duration:'142 mins',
  movie_genre:'War,sci-fi',
  movie_language:'English'
},
{
  movie_name:'Joker',
  movie_url:'lib/images/image4.jpg',
  movie_duration:'142 mins',
  movie_genre:'War,sci-fi,Dc',
  movie_language:'English'
},
{
  movie_name:'Tangled',
  movie_url:'lib/images/image5.jpg',
  movie_duration:'102 mins',
  movie_genre:'Animated,Comedy,Disney',
  movie_language:'English'
},
{
  movie_name:'Incredidble 2',
  movie_url:'lib/images/image6.jpg',
  movie_duration:'106 mins',
  movie_genre:'Animated',
  movie_language:'English'

}

]
});
