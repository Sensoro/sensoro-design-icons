// This icon file is generated automatically.
import * as React from 'react';
import ExhaleOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ExhaleOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ExhaleOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ExhaleOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ExhaleOutlined);

RefIcon.displayName = 'ExhaleOutlined';

export default RefIcon;
