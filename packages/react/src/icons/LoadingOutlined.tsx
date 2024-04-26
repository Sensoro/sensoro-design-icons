// This icon file is generated automatically.
import * as React from 'react';
import LoadingOutlinedSvg from '@sensoro-design/icons-svg/es/asn/LoadingOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LoadingOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LoadingOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LoadingOutlined);

RefIcon.displayName = 'LoadingOutlined';

export default RefIcon;
