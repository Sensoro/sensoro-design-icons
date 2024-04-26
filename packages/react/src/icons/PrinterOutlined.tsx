// This icon file is generated automatically.
import * as React from 'react';
import PrinterOutlinedSvg from '@sensoro-design/icons-svg/es/asn/PrinterOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PrinterOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PrinterOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PrinterOutlined);

RefIcon.displayName = 'PrinterOutlined';

export default RefIcon;
