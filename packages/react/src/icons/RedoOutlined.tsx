// This icon file is generated automatically.
import * as React from 'react';
import RedoOutlinedSvg from '@sensoro-design/icons-svg/es/asn/RedoOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const RedoOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={RedoOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(RedoOutlined);

RefIcon.displayName = 'RedoOutlined';

export default RefIcon;
