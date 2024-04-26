// This icon file is generated automatically.
import * as React from 'react';
import DeploymentUnitOutlinedSvg from '@sensoro-design/icons-svg/es/asn/DeploymentUnitOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DeploymentUnitOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DeploymentUnitOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DeploymentUnitOutlined);

RefIcon.displayName = 'DeploymentUnitOutlined';

export default RefIcon;
