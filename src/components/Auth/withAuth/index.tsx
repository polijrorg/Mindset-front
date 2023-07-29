import React from 'react';
import { NextComponentType, NextPageContext } from 'next';
import { parseCookies } from 'nookies';

const withAuthToken = (WrappedComponent: NextComponentType) => {
    const authenticatedRoutesHOC = () => <WrappedComponent />;

    authenticatedRoutesHOC.getInitialProps = async (
        context: NextPageContext
    ) => {
        const { '@Mindset:token': token } = parseCookies(context);
        const { '@Mindset:userType': userType } = parseCookies(context);

        if (token && !userType) {
            // Handle server-side and client-side rendering.
            if (context.res) {
                context.res?.writeHead(302, {
                    Location: '/student/home'
                });
                context.res?.end();
            }
        } else if (token && userType) {
            // Handle server-side and client-side rendering.
            if (context.res) {
                context.res?.writeHead(302, {
                    Location: '/producer/home'
                });
                context.res?.end();
            }
        }

        return {
            props: {}
        };
    };

    return authenticatedRoutesHOC;
};

export default withAuthToken;
