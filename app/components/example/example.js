import template from './example.html';
import './_example.scss';

class ExampleCtrl {
  constructor(exampleService) {
    this.exampleService = exampleService;
  }
}

const name = 'example';
ExampleCtrl.$inject = ['exampleService'];

export default angular.module(name, [])
  .component(name, {
    template,
    controller: ExampleCtrl,
    controllerAs: name
  });
