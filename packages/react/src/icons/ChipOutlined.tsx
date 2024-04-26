// This icon file is generated automatically.
import * as React from 'react';
import ChipOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ChipOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ChipOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ChipOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ChipOutlined);

RefIcon.displayName = 'ChipOutlined';

export default RefIcon;
