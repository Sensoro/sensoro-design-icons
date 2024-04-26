// This icon file is generated automatically.
import * as React from 'react';
import CardReaderOutlinedSvg from '@sensoro-design/icons-svg/es/asn/CardReaderOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CardReaderOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CardReaderOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CardReaderOutlined);

RefIcon.displayName = 'CardReaderOutlined';

export default RefIcon;
