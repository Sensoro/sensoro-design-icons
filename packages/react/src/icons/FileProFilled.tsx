// This icon file is generated automatically.
import * as React from 'react';
import FileProFilledSvg from '@sensoro-design/icons-svg/es/asn/FileProFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FileProFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FileProFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FileProFilled);

RefIcon.displayName = 'FileProFilled';

export default RefIcon;
