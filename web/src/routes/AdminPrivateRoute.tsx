import { ComponentType } from 'react';
import { RouteProps, Route as ReactDOMRoute, Redirect } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

interface PrivateRouteProps extends RouteProps {
  isPrivate?: boolean;
  component: ComponentType;
}

export default function PrivateRoute(props: PrivateRouteProps) {
  const { isPrivate = false, component: Component, ...rest } = props;

  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return (
          <>
            {isPrivate === !!user && user.role === 'admin' && <Component />}
            {user.role !== 'admin' && (
              <Redirect
                to={{
                  pathname: isPrivate ? '/' : '/heroes',
                  state: { from: location },
                }}
              />
            )}
          </>
        );
      }}
    />
  );
}

PrivateRoute.defaultProps = {
  isPrivate: false,
};
