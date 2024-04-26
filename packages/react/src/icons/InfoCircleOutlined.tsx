// This icon file is generated automatically.
import * as React from 'react';
import InfoCircleOutlinedSvg from '@sensoro-design/icons-svg/es/asn/InfoCircleOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const InfoCircleOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={InfoCircleOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(InfoCircleOutlined);

RefIcon.displayName = 'InfoCircleOutlined';

export default RefIcon;
