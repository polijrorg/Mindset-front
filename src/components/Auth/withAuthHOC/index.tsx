import React from 'react';
import Router from 'next/router';
import { NextComponentType, NextPageContext } from 'next';
import { parseCookies } from 'nookies';

const withAuth = (WrappedComponent: NextComponentType) => {
    const authenticatedRoutesHOC = () => <WrappedComponent />;

    authenticatedRoutesHOC.getInitialProps = async (
        context: NextPageContext
    ) => {
        const { '@Mindset:token': token } = parseCookies(context);

        if (!token) {
            // Handle server-side and client-side rendering.
            if (context.res) {
                context.res?.writeHead(302, {
                    Location: '/login'
                });
                context.res?.end();
            } else {
                Router.replace('/login');
            }
        }

        return {
            props: {}
        };
    };

    return authenticatedRoutesHOC;
};

export default withAuth;
