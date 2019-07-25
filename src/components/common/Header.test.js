import React from "react";
import Header from "./Header";
import { shallow, mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";

//note how with the shallow render you search for the react component tag
it("contains 3 Navlinks via shallow",()=>{
    const numLinks = shallow(<Header />).find("NavLink").length;
    expect(numLinks).toBe(3);
});

//note how with the mount you search for the final rendered HTML since it generates the final DOM.
//We also need to pull in  React Router's MemoryRouter for testing since the Header expect to have React Router's props passed in.
it("it contains 3 anchors via mount",()=>{
    const numAnchors = mount(
        <MemoryRouter>
            <Header />
        </MemoryRouter>
    ).find("a").length;

    expect(numAnchors).toBe(3);
});