import { useState } from 'react';
import React from 'react';
import styles from "./FuelQuoteTable.module.css"
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });
function FuelQuoteTable(props){
    return(
            <table className={styles.allofit}>
                <thead className={styles.headings}>
                    <tr>
                        <th className={styles.titles}>Name</th>
                        <th className={styles.titles}>Address</th>
                        <th className={styles.titles}>Gallons</th>
                        <th className={styles.titles}>Date</th>
                        <th className={styles.titles}>Total</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <td className={styles.data}>{props.name}</td>
                    <td className={styles.data}>{props.address}</td>
                    <td className={styles.data}>{props.gallons}</td>
                    <td className={styles.data}>{props.deliveryDate}</td>
                    <td className={styles.data}>{props.total}</td>
                </tbody>
            </table>

    )
}
export default FuelQuoteTable;
