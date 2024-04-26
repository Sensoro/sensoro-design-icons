// This icon file is generated automatically.
import * as React from 'react';
import DtOutlinedSvg from '@sensoro-design/icons-svg/es/asn/DtOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DtOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DtOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DtOutlined);

RefIcon.displayName = 'DtOutlined';

export default RefIcon;
