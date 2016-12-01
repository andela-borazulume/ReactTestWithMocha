import React from "react";
import { shallow, mount} from "enzyme"
import {expect} from "chai"

import Email from "../containers/Email"

describe(<Email/>, function() {
    it("should have an input for the email", function() {
        const wrapper = shallow(<Email/>);
        expect(wrapper.find("input")).to.have.length(1)
    })
    it("should have a button for the email", function() {
        const wrapper = shallow(<Email/>);
        expect(wrapper.find("button")).to.have.length(1)
    })
    it("should have props handleImageChange and fetchGravatar", function() {
        const wrapper = shallow(<Email/>);
        expect(wrapper.props().handleImageChange).to.be.defined;
        expect(wrapper.props().fetchGravatar).to.be.defined;
    })
})