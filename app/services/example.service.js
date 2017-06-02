class ExampleService {
  constructor($http) {
    this.$http = $http;
  }
}

const name = 'exampleService';
ExampleService.$inject = ['$http'];

export default angular.module(name, [])
  .service(name, ExampleService);
