import angular from 'angular';
import $ from 'jquery';
import 'tether';
import 'bootstrap';

import template from './app.html';
import './styles/app.scss';

import example from './components/example/example';
import exampleService from './services/example.service';

class AppCtrl {}

const name = 'app';

export default angular.module('boilerplate', [
    example.name,
    exampleService.name
  ])
  .component(name, {
    template,
    controller: AppCtrl
  });
