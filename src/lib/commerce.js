import Commerce from '@chec/commerce.js';


require('dotenv').config();


const REACT_APP_CHEC_PUBLIC_KEY='pk_test_21167b2bf84e19b97fc060fc554097cfcacb881ec243e';
// export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true);
export const commerce = new Commerce(REACT_APP_CHEC_PUBLIC_KEY, true);
