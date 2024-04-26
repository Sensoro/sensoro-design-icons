// This icon file is generated automatically.
import * as React from 'react';
import PayCircleOutlinedSvg from '@sensoro-design/icons-svg/es/asn/PayCircleOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PayCircleOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PayCircleOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PayCircleOutlined);

RefIcon.displayName = 'PayCircleOutlined';

export default RefIcon;
