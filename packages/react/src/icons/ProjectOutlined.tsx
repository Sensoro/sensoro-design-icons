// This icon file is generated automatically.
import * as React from 'react';
import ProjectOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ProjectOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ProjectOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ProjectOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ProjectOutlined);

RefIcon.displayName = 'ProjectOutlined';

export default RefIcon;
