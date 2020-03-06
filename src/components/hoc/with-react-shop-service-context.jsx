import React from 'react';
import { ReactShopServiceConsumer } from '../react-shop-service-context/react-shop-service-context';

const withReactShopServiceContext = () => (Wrapped) => {
    return (props) => {
        return (
            <ReactShopServiceConsumer>
                {
                    (reactShopService) => {
                        return (<Wrapped {...props}
                            reactShopService={reactShopService}/>);
                    }
                }
            </ReactShopServiceConsumer>
        );
    }
}

export {
    withReactShopServiceContext
};