angular.module('app').service('GestionaleSrv',function($http){

  var getClienti= function(){
  return $http({
    method: 'GET',
    url: 'http://localhost/bluestyle/storico.php'
  })
  .then(function(res){
    return res.data;
  })
}

var deleteCliente = function(id){
  return $http({
    method: 'PUT',
    url: 'http://localhost/bluestyle/elimina_cliente.php?id='+id
  })
  .then(getClienti);
}


return{
  getClienti: getClienti,
  deleteCliente: deleteCliente
}
})
