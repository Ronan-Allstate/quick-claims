import {render, screen} from '@testing-library/react'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../store/store';

import ClaimsTable from "./ClaimsTable"

jest.mock("../../data/DataFunctions",  () => {
    return {
        getCountries : () => {
            return Promise.resolve({status: 200, data : ["a","b","c"]});
        },
        addNewClaim : (newClaim)=> {},
        getAllClaimsForCountry : () => Promise.resolve({status: 200, data : []})
    }
});

test ("countries dropdown is displayed when the countries are loaded" , async () => {
    render(<BrowserRouter><Provider store={store}><ClaimsTable searchTerm="" /></Provider></BrowserRouter>)
    const countrySelector = await screen.findByRole("combobox",{},2000);
    expect(countrySelector).toBeInTheDocument();
})

//write a test - that checks the number of countries displayed in the dropdown matches the expected number
test ("countries dropdown contains the correct number of countries" , async () => {
    render(<BrowserRouter><Provider store={store}><ClaimsTable searchTerm="" /></Provider></BrowserRouter>)
    const arrayOfOptions = await screen.findAllByRole("option",{},2000);
    expect(arrayOfOptions).toHaveLength(1);
})