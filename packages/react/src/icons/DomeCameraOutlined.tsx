// This icon file is generated automatically.
import * as React from 'react';
import DomeCameraOutlinedSvg from '@sensoro-design/icons-svg/es/asn/DomeCameraOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DomeCameraOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DomeCameraOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DomeCameraOutlined);

RefIcon.displayName = 'DomeCameraOutlined';

export default RefIcon;
