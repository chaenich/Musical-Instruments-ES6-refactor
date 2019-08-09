// const PubSub = require('../helpers/pub_sub.js');
import { PubSub } from '../helpers/pub_sub.js';

// const InstrumentFamilyView = function (container) {
//   this.container = container;
// };
class InstrumentFamilyView {
  constructor(container) {
    this.container = container;
  };

  // InstrumentFamilyView.prototype.bindEvents = function () {
  bindEvents() {
    PubSub.subscribe('InstrumentFamilies:selected-family-ready', (evt) => {
      const instrumentFamily = evt.detail;
      this.render(instrumentFamily);
    });
  };

  // InstrumentFamilyView.prototype.render = function (family) {
  render(family) {
    this.container.innerHTML = '';

    // family object destructuring
    let {name, description, instruments} = family;

    // const familyName = this.createElement('h2', family.name);
    const familyName = this.createElement('h2', name);
    this.container.appendChild(familyName);

    // const familyDescription = this.createElement('p', family.description);
    const familyDescription = this.createElement('p', description);
    this.container.appendChild(familyDescription);

    const instrumentListTitle = this.createElement('h3', 'Instruments include:');
    this.container.appendChild(instrumentListTitle);

    // const instrumentList = this.createInstrumentList(family.instruments);
    const instrumentList = this.createInstrumentList(instruments);
    this.container.appendChild(instrumentList);
  };

  // InstrumentFamilyView.prototype.createElement = function (elementType, text) {
  createElement(elementType, text) {
    const element = document.createElement(elementType);
    element.textContent = text;
    return element;
  };

  // InstrumentFamilyView.prototype.createInstrumentList = function (instruments) {
  createInstrumentList (instruments) {
    const list = document.createElement('ul');

    instruments.forEach((instrument) => {
      const listItem = document.createElement('li');
      listItem.textContent = instrument;
      list.appendChild(listItem);
    });
    return list;
  };
};

// module.exports = InstrumentFamilyView;
export { InstrumentFamilyView };
