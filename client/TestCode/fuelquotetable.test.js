import React from 'react';
import { shallow, mount, render } from 'enzyme';
import FuelQuoteTable from 'c:/Users/cheta/OneDrive/Desktop/fuel quote/Clientv2/client/components/FuelQuoteTable/FuelQuoteTable';
it('renders in table rows based on provided columns', () => {
    const cols = [
       { headers: 'Name', data: 'name' },
       { headers: 'Address', data: 'address' },
       { headers: 'Gallons', data: 'gallons' },
       { headers: 'Date', data: 'date' },
       { headers: 'Total', data: 'total' }
    ];
    const data = [
       { name: 'Machevin', address: '1234 Cullen Blvd Houston, TX 77004', gallons: 0, date: 'Sun Mar 13 2022', total: 10 },
    ];
    // Shallow render Data Table
    const container = shallow(<FuelQuoteTable data={data} cols={cols} />);
    // There should be ONLY 1 table element
    const table = container.find('table');
    expect(table).toHaveLength(1);
    // The table should have ONLY 1 thead element
    const thead = table.find('thead');
    expect(thead).toHaveLength(1);
    // The number of th tags should be equal to number of columns
    const headers = thead.find('th');
    expect(headers).toHaveLength(cols.length);
    // Each th tag text should equal to column header
    headers.forEach((th, idx) => {
       expect(th.text()).toEqual(cols[idx].headers);
    });
    // The table should have ONLY 1 tbody tag
    const tbody = table.find('tbody');
    expect(tbody).toHaveLength(1);
    // tbody tag should have the same number of tr tags as data rows
    const rows = tbody.find('tr');
    expect(rows).toHaveLength(0);
    // Loop through each row and check the content
    rows.forEach((tr, rowIndex) => {
       const cells = tr.find('td');
       expect(cells).toHaveLength(cols.length);
       expect(cells.at(0).text()).toEqual(data[rowIndex].name);
       expect(cells.at(1).text()).toEqual(data[rowIndex].address);
       expect(cells.at(2).text()).toEqual(data[rowIndex].gallons);
       expect(cells.at(2).text()).toEqual(data[rowIndex].date);
       expect(cells.at(2).text()).toEqual(data[rowIndex].total);
    });
 });
// describe('test FuelQuoteTable', () => {
//     const wrapper = mount(<FuelQuoteTable />);
//     const table = wrapper.find('table');
//     const row = table.find('tr')
//     const node = table.find(Node)

//     it('table grid', () => {
//         expect(table).toHaveLength(1);
//         expect(row).toHaveLength(1);
//         expect(node).toHaveLength(5);
//     });
// });