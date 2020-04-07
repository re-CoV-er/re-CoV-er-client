import { createGlobalStyle } from 'styled-components';

import Viminalis from './Viminalis.woff';
import Viminalis2 from './Viminalis2.woff2';


export default createGlobalStyle`
    @font-face {
        font-family: 'Viminalis';
        src: local('Viminalis'), local('Viminalis'),
        url(${Viminalis2}) format('woff2'),
        url(${Viminalis}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;