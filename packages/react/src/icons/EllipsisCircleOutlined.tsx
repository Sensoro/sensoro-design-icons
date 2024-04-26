// This icon file is generated automatically.
import * as React from 'react';
import EllipsisCircleOutlinedSvg from '@sensoro-design/icons-svg/es/asn/EllipsisCircleOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const EllipsisCircleOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={EllipsisCircleOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(EllipsisCircleOutlined);

RefIcon.displayName = 'EllipsisCircleOutlined';

export default RefIcon;
