angular.module('app').controller('GestionaleCtrl', function(GestionaleSrv, $scope){

  $scope.clienti =[];


  disegnaClienti();

  $scope.elimina = function(id){
    console.log(id);
   GestionaleSrv.deleteCliente(id)
   .then(disegnaClienti());

   }

function disegnaClienti(){
  GestionaleSrv.getClienti().then(function(data){
    if(!data.error){
      $scope.clienti = data.data;
    }else{
      alert('nessuna notizia');
    }
  });
}


})
