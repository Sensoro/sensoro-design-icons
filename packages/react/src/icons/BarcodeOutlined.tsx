// This icon file is generated automatically.
import * as React from 'react';
import BarcodeOutlinedSvg from '@sensoro-design/icons-svg/es/asn/BarcodeOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const BarcodeOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={BarcodeOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(BarcodeOutlined);

RefIcon.displayName = 'BarcodeOutlined';

export default RefIcon;
