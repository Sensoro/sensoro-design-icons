// This icon file is generated automatically.
import * as React from 'react';
import UpCircleOutlinedSvg from '@sensoro-design/icons-svg/es/asn/UpCircleOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const UpCircleOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={UpCircleOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(UpCircleOutlined);

RefIcon.displayName = 'UpCircleOutlined';

export default RefIcon;
