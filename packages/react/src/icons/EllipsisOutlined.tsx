// This icon file is generated automatically.
import * as React from 'react';
import EllipsisOutlinedSvg from '@sensoro-design/icons-svg/es/asn/EllipsisOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const EllipsisOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={EllipsisOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(EllipsisOutlined);

RefIcon.displayName = 'EllipsisOutlined';

export default RefIcon;
