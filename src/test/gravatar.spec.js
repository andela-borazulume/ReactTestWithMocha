import React from "react";
import { shallow, mount} from "enzyme"
import {expect} from "chai"

import Gravatar from "../containers/Gravatar"
import Avatar from "../containers/Avatar"
import Email from "../containers/Email"

describe(<Gravatar/>, function() {
    it("contains an <Avatar/> component", function() {
        const wrapper = shallow(<Gravatar/>);
        expect(wrapper.find(Avatar)).to.have.length(1)
    })
    it("contains an <Email/> component", function() {
        const wrapper = shallow(<Email/>);
        expect(wrapper.find(Email)).to.have.length(1)
    })
    it("should have an initial state src", function() {
        const wrapper = mount(<Gravatar/>);
        expect(wrapper.state().src).to.equal("http://facebook/profile/me");
    })
    it("should update state when fetch button is clicked", function() {
        const wrapper = mount(<Gravatar/>)
        wrapper.setState({email: "blessing@gmail.com"});
        wrapper.find("button").simulate("click");
        expect(wrapper.state("email")).to.equal("blessing@gmail.com");
        expect(wrapper.state("src")).to.equal(`http://gravatar.com/avatar/${mD5(`orazulume@gmail.com`)}?s=200`)
    })
});