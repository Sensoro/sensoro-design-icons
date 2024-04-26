// This icon file is generated automatically.
import * as React from 'react';
import FilePngFilledSvg from '@sensoro-design/icons-svg/es/asn/FilePngFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FilePngFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FilePngFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FilePngFilled);

RefIcon.displayName = 'FilePngFilled';

export default RefIcon;
