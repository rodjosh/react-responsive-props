import * as React from 'react';
import { useMediaQuery } from 'react-responsive';

interface BreakpointsProps {
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

const defaultBreakpoints = {
  sm: 320,
  md: 481,
  lg: 769,
  xl: 1025,
};

interface ResponsiveProps<T extends React.FunctionComponent> {
  sm?: Partial<React.ComponentProps<T>>;
  md?: Partial<React.ComponentProps<T>>;
  lg?: Partial<React.ComponentProps<T>>;
  xl?: Partial<React.ComponentProps<T>>;
}

export const useResponsive = (
  breakpoints: BreakpointsProps = defaultBreakpoints
) => {
  const { sm, md, lg, xl } = breakpoints;

  const min = useMediaQuery({ maxWidth: sm - 1 });
  const small = useMediaQuery({ minWidth: sm, maxWidth: md - 1 });
  const medium = useMediaQuery({ minWidth: md, maxWidth: lg - 1 });
  const large = useMediaQuery({ minWidth: lg, maxWidth: xl - 1 });
  const extralarge = useMediaQuery({ minWidth: xl });

  return <T extends React.FunctionComponent>(
    Component: React.FunctionComponent,
    values: ResponsiveProps<T>
  ) => {
    const values_sm = values?.sm ?? {};
    const values_md = values?.md ?? values_sm;
    const values_lg = values?.lg ?? values_md;
    const values_xl = values?.xl ?? values_lg;

    return (rest: React.ComponentProps<T>) => (
      <>
        {min && <Component {...rest} />}
        {small && <Component {...rest} {...values_sm} />}
        {medium && <Component {...rest} {...values_md} />}
        {large && <Component {...rest} {...values_lg} />}
        {extralarge && <Component {...rest} {...values_xl} />}
      </>
    );
  };
};
