// This icon file is generated automatically.
import * as React from 'react';
import FileSealFilledSvg from '@sensoro-design/icons-svg/es/asn/FileSealFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FileSealFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FileSealFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FileSealFilled);

RefIcon.displayName = 'FileSealFilled';

export default RefIcon;
