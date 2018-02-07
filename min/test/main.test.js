'use strict';

import React, { Component } from 'react';
import { expect, should } from 'chai';
import assert from 'assert';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { spy } from 'sinon';
import { JSDOM } from 'jsdom';
import App from '../react/components/App.jsx';

configure({ adapter: new Adapter() });

const { document } = (new JSDOM('')).window;
global.document = document;

spy(App.prototype, 'componentDidMount');

describe('<App />', () => {
	it('calls componentDidMount', () => {
		const wrapper = mount(<App />);
		expect(App.prototype.componentDidMount.calledOnce).to.equal(true);
	})
})

describe('Array', () => {
	describe('#indexOf()', () => {
		it('should return -1 when the value is not present', () => {
			assert.equal(-1, [1,2,3].indexOf(4)); // 4 is not present in this array so indexOf returns -1
		})
	})
});